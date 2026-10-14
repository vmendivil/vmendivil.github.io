const { chromium } = require('playwright');
const fs = require('fs'), path = require('path'), assert = require('assert');
const base='http://192.168.30.25:8788/', root=__dirname;
const rows=JSON.parse(fs.readFileSync(path.join(root,'preview/manifest.json'),'utf8'));
const output=path.join(root,'source-links-verification'); fs.mkdirSync(output,{recursive:true});
(async()=>{
 const browser=await chromium.launch({headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader']});
 const start=Number(process.env.SOURCE_FROM||1);
 const results=start===1?[]:JSON.parse(fs.readFileSync(path.join(output,'results.json'),'utf8')).filter(r=>rows.find(row=>row.slug===r.slug).number<start);
 for(const row of rows.filter(row=>row.number>=start)){
  const context=await browser.newContext({viewport:{width:1440,height:900},hasTouch:true,reducedMotion:row.number>=18?'reduce':'no-preference'});
  // Exercise real new-tab behavior without fetching or claiming availability of third-party sites.
  await context.route('**/*',route=>route.request().url().startsWith(base) ? route.continue() : route.fulfill({status:200,contentType:'text/html',body:'<title>Navigation test fixture</title><p>External navigation intercepted for this local test.</p>'}));
  const page=await context.newPage(), errors=[]; page.on('pageerror',e=>errors.push(e.message));
  const response=await page.goto(base+row.slug+'/',{waitUntil:'networkidle'}); assert.equal(response.status(),200);
  await page.waitForTimeout(1000);
  const cases=[];
  for(const [label,width,height] of [['desktop',1440,900],['mobile',390,844],['landscape',844,390]]){
   await page.setViewportSize({width,height}); await page.mouse.move(0,0); await page.evaluate(()=>document.activeElement?.blur()); await page.waitForTimeout(350);
   const link=page.locator('#prototype-source-link'); assert.equal(await link.count(),1); await link.waitFor({state:'visible'});
   assert.equal(await link.getAttribute('href'),row.source_url); assert.equal(await link.getAttribute('target'),'_blank');
   const rel=await link.getAttribute('rel'); assert(rel.includes('noopener')&&rel.includes('noreferrer'));
   const geometry=await link.evaluate(el=>{const r=el.getBoundingClientRect(),s=getComputedStyle(el);return {x:r.x,y:r.y,width:r.width,height:r.height,font:s.fontSize,controlOverlap:Number(el.dataset.controlOverlap),textOverlap:Number(el.dataset.textOverlap),hit:document.elementFromPoint(r.x+r.width/2,r.y+r.height/2)?.closest('#prototype-source-link')===el,overflow:document.documentElement.scrollWidth>innerWidth};});
   assert(geometry.width>=44&&geometry.height>=44&&geometry.x>=0&&geometry.y>=0&&geometry.x+geometry.width<=width&&geometry.y+geometry.height<=height,JSON.stringify({slug:row.slug,label,geometry}));
   assert(geometry.hit&&!geometry.overflow,JSON.stringify({slug:row.slug,label,geometry}));
   assert.equal(geometry.controlOverlap,0,JSON.stringify({slug:row.slug,label,geometry}));
   const original=page.url();
   const popupPromise=page.waitForEvent('popup');
   if(label==='desktop'){
    await link.focus();
    await page.keyboard.press('Enter');
   } else if(label==='mobile') await link.tap(); else await link.click();
   const popup=await popupPromise; await popup.waitForLoadState('domcontentloaded');
   assert.equal(popup.url(),new URL(row.source_url).href); assert.equal(await popup.evaluate(()=>window.opener===null),true);
   assert.equal(page.url(),original); await popup.close();
   await page.screenshot({path:path.join(output,row.slug+'-'+label+'.png')});
   cases.push({label,geometry,activation:label==='desktop'?'native Enter':label==='mobile'?'trusted emulated touch':'native click',href:row.source_url,newTab:true,originalPagePreserved:true});
  }
  assert.deepEqual(errors,[]); results.push({slug:row.slug,cases,errors});
  fs.writeFileSync(path.join(output,'results.json'),JSON.stringify(results,null,2));
  console.log(row.slug,'desktop/mobile/landscape links passed'); await context.close();
 }
 const page=await browser.newPage(); await page.goto(base,{waitUntil:'networkidle'});
 const gallery=await page.locator('.reference-links .reference:first-child').evaluateAll(links=>links.map(a=>({href:a.getAttribute('href'),target:a.target,rel:a.rel})));
 assert.equal(gallery.length,21); for(let i=0;i<rows.length;i++){assert.equal(gallery[i].href,rows[i].source_url);assert.equal(gallery[i].target,'_blank');}
 await page.screenshot({path:path.join(output,'gallery-desktop.png'),fullPage:true});
 await page.setViewportSize({width:390,height:844}); assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
 await page.screenshot({path:path.join(output,'gallery-mobile.png'),fullPage:true});
 const nojs=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});
 for(const row of rows){const p=await nojs.newPage();await p.goto(base+row.slug+'/');const a=p.locator('#prototype-source-link');assert.equal(await a.getAttribute('href'),row.source_url);await a.waitFor({state:'visible'});await p.close();}
 await nojs.close();
 for(const url of ['../BUILD_BRIEF.md','%2e%2e/BUILD_BRIEF.md','.git/config','studies/','serve_preview.py']){const response=await page.request.get(base+url);assert.equal(response.status(),404,url);}
 await browser.close();
 fs.writeFileSync(path.join(output,'summary.json'),JSON.stringify({prototypes:results.length,viewportCases:results.reduce((n,r)=>n+r.cases.length,0),galleryLinks:gallery.length,noJSLinks:rows.length,privacyChecks:5,externalNavigation:'intercepted fixture; no source-site availability claim',engine:'Chromium emulation; not physical Safari'},null,2));
 console.log('PASS: 21 prototypes / 63 viewport activation checks / 21 gallery links / 21 no-JS links / privacy guards');
})().catch(e=>{console.error(e);process.exit(1)});
