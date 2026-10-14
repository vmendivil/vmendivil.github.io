const {chromium}=require('playwright');
const fs=require('fs'),path=require('path');
(async()=>{
 const root=__dirname, output=path.join(root,'lan-verification');fs.mkdirSync(output,{recursive:true});
 const base='http://192.168.30.25:8788/';
 const rows=JSON.parse(fs.readFileSync(path.join(root,'preview/manifest.json'),'utf8'));
 const expectedCount=10+JSON.parse(fs.readFileSync(path.join(root,'expansion-registry.json'),'utf8')).length;
 if(rows.length!==expectedCount||new Set(rows.map(r=>r.slug)).size!==expectedCount||!rows.every(r=>r.ready))throw Error('Expected complete unique prototype registry');
 const browser=await chromium.launch({headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader']});
 const report={base,prototypes:[],launcher:{}};
 for(const row of rows){
  const page=await browser.newPage({viewport:{width:1440,height:900}});const errors=[],failed=[],external=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('response',r=>{if(r.status()>=400)failed.push({url:r.url(),status:r.status()});});
  page.on('requestfailed',r=>failed.push({url:r.url(),error:r.failure()?.errorText}));
  page.on('request',r=>{if(!r.url().startsWith(base)&&!r.url().startsWith('data:')&&!r.url().startsWith('blob:'))external.push(r.url());});
  const response=await page.goto(base+row.slug+'/',{waitUntil:'networkidle',timeout:45000});
  await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(1500);
  const desktop=await page.evaluate(()=>({title:document.title,overflow:document.documentElement.scrollWidth>innerWidth,bodyText:document.body.innerText.length,canvases:document.querySelectorAll('canvas').length,fonts:document.fonts.status,images:[...document.images].filter(i=>(i.complete&&i.naturalWidth===0)||(!i.complete&&i.loading!=='lazy')).map(i=>i.getAttribute('src')),deferredImages:[...document.images].filter(i=>!i.complete&&i.loading==='lazy').map(i=>i.src)}));
  await page.screenshot({path:path.join(output,row.slug+'-desktop.png')});
  await page.setViewportSize({width:390,height:844});await page.waitForTimeout(1000);
  const mobile=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,bodyText:document.body.innerText.length}));
  await page.keyboard.press('Tab');const focused=await page.evaluate(()=>({tag:document.activeElement.tagName,label:document.activeElement.textContent.trim().slice(0,100)}));
  const lazyAssetChecks=[];for(const url of desktop.deferredImages){const asset=await page.request.get(url);lazyAssetChecks.push({url,status:asset.status()});}
  report.prototypes.push({slug:row.slug,status:response.status(),desktop,mobile,focused,errors,failed,external,lazyAssetChecks});
  console.log(row.slug,JSON.stringify(report.prototypes.at(-1)));await page.close();
 }
 const page=await browser.newPage({viewport:{width:1440,height:900}});await page.goto(base,{waitUntil:'networkidle'});
 report.launcher.all=await page.locator('.world').count();report.launcher.links=await page.locator('.open').count();
 await page.getByRole('button',{name:'Scenery & simple browsing'}).click();report.launcher.browse=await page.locator('.world').count();
 await page.getByRole('button',{name:'Explore & play'}).click();report.launcher.explore=await page.locator('.world').count();
 await page.getByRole('button',{name:'New references'}).click();report.launcher.new=await page.locator('.world').count();
 await page.getByRole('button',{name:'All prototypes'}).click();
 await page.screenshot({path:path.join(output,'launcher-desktop.png'),fullPage:true});
 await page.setViewportSize({width:390,height:844});report.launcher.mobileOverflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);await page.screenshot({path:path.join(output,'launcher-mobile.png'),fullPage:true});
 const expected=await page.locator('.open').first().getAttribute('href');await page.locator('.open').first().click();report.launcher.opened=page.url()===base+expected;await page.goBack();report.launcher.back=page.url()===base;
 await browser.close();
 fs.writeFileSync(path.join(output,'results.json'),JSON.stringify(report,null,2));
 const issues=report.prototypes.filter(r=>r.status!==200||r.desktop.overflow||r.mobile.overflow||r.errors.length||r.failed.filter(x=>!x.url.endsWith('favicon.ico')).length||r.external.length||r.desktop.images.length||r.lazyAssetChecks.some(a=>a.status!==200));
 if(report.launcher.all!==expectedCount||report.launcher.links!==expectedCount||report.launcher.browse!==5||report.launcher.explore!==5||report.launcher.new!==expectedCount-10||report.launcher.mobileOverflow||!report.launcher.opened||!report.launcher.back)throw Error('Launcher check failed');
 if(issues.length)throw Error('LAN smoke issues: '+issues.map(r=>r.slug).join(', '));
 console.log('ALL '+expectedCount+' LAN SMOKES AND LAUNCHER CHECKS PASSED');
})().catch(e=>{console.error(e);process.exit(1)});
