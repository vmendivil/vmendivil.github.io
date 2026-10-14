const {chromium}=require('playwright');
const fs=require('fs'),path=require('path');
(async()=>{
 const root=__dirname,base='http://192.168.30.25:8788/',out=path.join(root,'lan-content-verification');fs.mkdirSync(out,{recursive:true});
 const rows=JSON.parse(fs.readFileSync(path.join(root,'preview/manifest.json'),'utf8'));
 const cases=[{name:'desktop',width:1440,height:900},{name:'mobile',width:390,height:844},{name:'landscape',width:844,height:390}];
 const browser=await chromium.launch({headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader']});const results=[];
 for(const row of rows){for(const viewport of cases){
  const page=await browser.newPage({viewport,reducedMotion:'reduce',hasTouch:viewport.name!=='desktop'});const errors=[],failed=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)failed.push({url:r.url(),status:r.status()});});
  await page.goto(base+row.slug+'/',{waitUntil:'networkidle',timeout:45000});await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(800);
  let target;
  switch(row.number){
   case 1:await page.locator('#guide').click();await page.locator('#destinations [data-place="craft"]').click();target='#panel';break;
   case 2:await page.locator('.island-nav [data-region="work"]').click();target='#note';break;
   case 3:await page.locator('nav [data-section="about"]').click();target='#notes';break;
   case 4:await page.locator('.chapters [data-chapter="1"]').click();target='.program';break;
   case 5:await page.locator('#guide-open').click();await page.locator('#guide [data-chapter="erp"]').click();target='#guide';break;
   case 6:await page.locator('header a[href="#practice"]').click();target='#practice';break;
   case 7:await page.locator('header a[href="#about"]').click();target='#about';break;
   case 8:await page.locator('header a[href="#about"]').click();target='#about';break;
   case 9:await page.locator('[data-study="0"]').click();target='dialog';break;
   case 10:await page.locator('header a[href="#about"]').click();target='#about';break;
  }
  await page.waitForTimeout(500);await page.locator(target).scrollIntoViewIfNeeded();await page.waitForTimeout(200);
  const content=await page.locator(target).evaluate(el=>{const r=el.getBoundingClientRect();return{text:el.innerText.length,visible:r.width>0&&r.height>0&&r.bottom>0&&r.top<innerHeight,width:r.width,scrollWidth:el.scrollWidth,clientWidth:el.clientWidth,height:r.height,top:r.top};});
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
  await page.screenshot({path:path.join(out,row.slug+'-'+viewport.name+'.png')});
  const result={slug:row.slug,viewport:viewport.name,content,overflow,errors,failed};results.push(result);console.log(JSON.stringify(result));
  await page.close();
 }}
 await browser.close();fs.writeFileSync(path.join(out,'results.json'),JSON.stringify(results,null,2));
 if(results.length!==30||results.some(r=>!r.content.visible||r.content.text<40||r.overflow||r.content.scrollWidth>r.content.clientWidth+2||r.errors.length||r.failed.length))throw Error('Opened-state LAN checks have failures');
 console.log('ALL 30 OPENED-READING LAN STATES PASSED');
})().catch(e=>{console.error(e);process.exit(1)});
