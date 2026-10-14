const {chromium}=require('playwright');
const fs=require('fs');
(async()=>{
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 const page=await browser.newPage({viewport:{width:780,height:900},deviceScaleFactor:1});
 await page.goto('http://127.0.0.1:9112/?capture=1');
 await page.waitForFunction(()=>window.captureLandscape);
 await page.addStyleTag({content:'header{visibility:hidden}'});
 await page.waitForTimeout(500);
 const views=[];
 for(const name of ['requirements','design','delivery','support']){
  const view=await page.evaluate(name=>window.captureLandscape(name),name);
  await page.locator('#landscape').screenshot({path:`assets/chapter-${name}.png`});
  views.push({...view,asset:`assets/chapter-${name}.png`,source:'scene.js original continuous modeled environment',method:'Chromium WebGL canvas capture, not a source-site image'});
 }
 fs.writeFileSync('verification/chapter-capture-raw.json',JSON.stringify({engine:'Chromium',views},null,2));
 console.log(JSON.stringify(views));await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
