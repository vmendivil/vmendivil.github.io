const {chromium}=require('playwright');
const fs=require('fs'),path=require('path'),crypto=require('crypto');
(async()=>{const browser=await chromium.launch({headless:true});const errors=[],captures=[];try{
for(const [width,height,name] of [[1440,900,'desktop'],[390,844,'mobile']]){
 const context=await browser.newContext({viewport:{width,height},hasTouch:name==='mobile'}),page=await context.newPage();
 page.on('pageerror',e=>errors.push(e.message));await page.goto('http://127.0.0.1:9111/');await page.locator('.scene svg').waitFor();await page.evaluate(()=>document.fonts.ready);
 if(name==='mobile')await page.locator('[data-channel=contact]').tap();else await page.locator('[data-channel=contact]').click();
 await page.evaluate(()=>window.scrollTo(0,document.querySelector('#program').getBoundingClientRect().top+scrollY-document.querySelector('.masthead').getBoundingClientRect().height));
 await page.waitForTimeout(150);
 const heading=await page.locator('#program-title').boundingBox(),header=await page.locator('.masthead').boundingBox();
 if(heading.y<header.height||!(await page.locator('#transcript').isVisible()))throw Error('Contact opening not visible '+name);
 const file=path.join(__dirname,'.impeccable/review/material-fix-final',`contact-opening-${name}.png`);await page.screenshot({path:file,animations:'disabled'});captures.push({name,file,headingVisible:true,transcriptVisible:true});await context.close();
}
if(errors.length)throw Error(JSON.stringify(errors));
fs.writeFileSync(path.join(__dirname,'material-fix-capture-checks.json'),JSON.stringify({pass:true,captures,errors,assetSha256:crypto.createHash('sha256').update(fs.readFileSync(path.join(__dirname,'assets/lounge.svg'))).digest('hex')},null,2));console.log(JSON.stringify({pass:true,captures,errors}));
}finally{await browser.close();}})();
