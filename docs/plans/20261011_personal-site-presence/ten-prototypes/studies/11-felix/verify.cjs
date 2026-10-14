const {chromium}=require('playwright');
const fs=require('fs');const path=require('path');
const URL=process.env.STUDY_URL||'http://127.0.0.1:9111/';
const round=process.env.ROUND||'initial';
const out=path.join(__dirname,'.impeccable/review',round==='material-fix-final'?round:'');fs.mkdirSync(out,{recursive:true});
const reports=[];const errors=[];const captures=[];
function assert(value,message){if(!value)throw Error(message);}
async function shot(page,name){const file=path.join(out,`${round==='initial'?'initial-':''}${name}.png`);await page.screenshot({path:file,fullPage:false,animations:'disabled'});captures.push(file);}
async function metrics(page){return await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,bodySize:parseFloat(getComputedStyle(document.querySelector('#summary')).fontSize),buttons:[...document.querySelectorAll('nav button')].map(b=>({width:b.getBoundingClientRect().width,height:b.getBoundingClientRect().height})),readVisible:!document.getElementById('transcript').hidden,paragraphSize:parseFloat(getComputedStyle(document.querySelector('#transcript p')).fontSize),heading:document.querySelector('h2').textContent,channel:document.querySelector('[aria-pressed="true"][data-channel]').dataset.channel,screen:[...document.querySelectorAll('[data-broadcast]')].filter(x=>getComputedStyle(x).display!=='none').map(x=>x.dataset.broadcast)}));}
(async()=>{const browser=await chromium.launch({headless:true});
try{
for(const [w,h,name] of [[320,740,'narrow'],[390,844,'mobile'],[430,932,'wide-mobile'],[844,390,'landscape'],[768,1024,'tablet'],[1440,900,'desktop']]){
 const context=await browser.newContext({viewport:{width:w,height:h},hasTouch:w<900});const page=await context.newPage();
 page.on('pageerror',e=>errors.push({viewport:name,message:e.message}));page.on('response',r=>{if(r.status()>=400)errors.push({viewport:name,url:r.url(),status:r.status()});});
 await page.goto(URL);await page.locator('.scene svg').waitFor();await page.evaluate(()=>document.fonts.ready);await shot(page,name);
 assert(await page.evaluate(()=>document.fonts.check('20px Archivo')), `${name}: local display font loaded`);
 let m=await metrics(page);assert(!m.overflow,`${name}: initial overflow`);assert(m.bodySize>=16,`${name}: initial body size`);assert(m.buttons.every(x=>x.width>=44&&x.height>=44),`${name}: target`);assert(m.screen[0]==='about',`${name}: initial illustrated screen`);
 // Actual keyboard traversal from the start, Tab then Enter.
 await page.keyboard.press('Tab');assert(await page.locator('.skip').evaluate(el=>el===document.activeElement),`${name}: skip first tab`);
 await page.keyboard.press('Tab');assert(await page.locator('[data-channel=about]').evaluate(el=>el===document.activeElement),`${name}: about tab`);
 await page.keyboard.press('Enter');await page.keyboard.press('Tab');await page.keyboard.press('Space');assert((await metrics(page)).channel==='practice',`${name}: Space activates Practice`);
 if(w<900)await page.locator('#read').tap();else await page.locator('#read').click();
 m=await metrics(page);assert(m.readVisible&&m.paragraphSize>=16&&!m.overflow,`${name}: readable transcript`);assert(m.screen[0]==='practice',`${name}: screen changed`);await shot(page,`content-${name}`);
 for(const key of ['about','curiosity','practice']){
  if(w<900)await page.locator(`[data-channel=${key}]`).tap();else await page.locator(`[data-channel=${key}]`).click();
  const v=await metrics(page);assert(v.channel===key&&v.screen[0]===key&&v.readVisible&&!v.overflow,`${name}: ${key} text + illustration`);
  if(name==='desktop'||name==='mobile'){
   await page.evaluate(()=>window.scrollTo(0,0));await shot(page,`${key}-screen-${name}`);
   await page.locator('#program').scrollIntoViewIfNeeded();await shot(page,`${key}-reading-${name}`);
  }
 }
 if(w<900)await page.locator('[data-channel=contact]').tap();else await page.locator('[data-channel=contact]').click();
 await page.locator('.signoff a').scrollIntoViewIfNeeded();
 const contact=await metrics(page);assert(contact.channel==='contact'&&contact.screen[0]==='contact'&&contact.readVisible&&!contact.overflow,`${name}: contact`);
 assert(await page.locator('.signoff a').getAttribute('href')==='https://www.linkedin.com/in/vmendivilaxdeveloper',`${name}: real route`);
 const linkbox=await page.locator('.signoff a').boundingBox();assert(linkbox.y>=0&&linkbox.y+linkbox.height<=h,`${name}: contact reachable`);
 await shot(page,`contact-end-${name}`);
 await page.locator('#program').scrollIntoViewIfNeeded();await shot(page,`contact-${name}`);
 if(name==='desktop'||name==='mobile'){await page.evaluate(()=>window.scrollTo(0,0));await shot(page,`contact-screen-${name}`);}
 await page.keyboard.press('Escape');assert(!(await metrics(page)).readVisible,`${name}: Escape closes`);assert(await page.locator('[data-channel=contact]').evaluate(el=>el===document.activeElement),`${name}: focus restoration`);
 // Trusted click/tap to reopen and use the explicit return path.
 if(w<900)await page.locator('#read').tap();else await page.locator('#read').click();
 await page.locator('#close').scrollIntoViewIfNeeded();if(w<900)await page.locator('#close').tap();else await page.locator('#close').click();assert(!(await metrics(page)).readVisible,`${name}: return path`);
 await page.keyboard.press('1');assert((await metrics(page)).screen[0]==='about',`${name}: shortcut 1`);
 await page.keyboard.press('4');assert((await metrics(page)).channel==='contact',`${name}: shortcut 4`);
 await page.locator('#ambience').click();assert(await page.locator('.rain').evaluate(e=>getComputedStyle(e).animationName)==='none', `${name}: pause rain`);
 await page.locator('#ambience').click();assert(await page.locator('.rain').evaluate(e=>getComputedStyle(e).animationName)==='rain', `${name}: resume rain`);
 await page.evaluate(()=>window.scrollTo(0,0));
 reports.push({viewport:{width:w,height:h,name},practiceReading:m,contact,tabEnterSpace:true,escapeRestore:true,explicitClose:true,allChannelIllustrations:true,contactReachable:true,input:w<900?'Playwright trusted emulated touch + keyboard':'Playwright pointer + keyboard'});await context.close();
}
const reduceContext=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'});const reduced=await reduceContext.newPage();await reduced.goto(URL);await reduced.locator('.scene svg').waitFor();assert(await reduced.evaluate(()=>matchMedia('(prefers-reduced-motion: reduce)').matches),'reduced matches');assert(await reduced.locator('.rain').evaluate(e=>getComputedStyle(e).animationName)==='none','rain stopped');assert(await reduced.locator('#ambience').isDisabled(),'motion label truthful');await reduced.locator('[data-channel=curiosity]').click();await reduced.locator('#read').click();assert((await metrics(reduced)).screen[0]==='curiosity','reduced illustration changed');await shot(reduced,'reduced-motion');reports.push({reducedMotion:true,nonMovingIllustrationSwap:true});await reduceContext.close();
const fallbackContext=await browser.newContext({viewport:{width:390,height:844}});const fallback=await fallbackContext.newPage();await fallback.route('**/assets/lounge.svg',r=>r.request().resourceType()==='fetch'?r.abort():r.continue());await fallback.goto(URL);await fallback.locator('#ambience').filter({hasText:'Still illustration'}).waitFor();await fallback.locator('[data-channel=contact]').click();assert((await metrics(fallback)).readVisible,'fallback contact text');reports.push({fetchFallback:true,stillImage:true,textNavigation:true});await fallbackContext.close();
const noJSContext=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});const nojs=await noJSContext.newPage();await nojs.goto(URL);assert(await nojs.locator('.no-script').isVisible(),'nojs fallback');assert(await nojs.locator('.no-script a').getAttribute('href')==='https://www.linkedin.com/in/vmendivilaxdeveloper','nojs real contact');reports.push({noJavaScript:true,essentialInformationAndContact:true});await noJSContext.close();
assert(errors.length===0,'Browser console/network errors: '+JSON.stringify(errors));
fs.writeFileSync(path.join(__dirname,round==='initial'?'initial-results.json':round==='material-fix-final'?'material-fix-results.json':'results.json'),JSON.stringify({session:'build11',url:URL,round,engine:'Chromium via existing Playwright',reports,captures,errors,pass:true,limits:['No physical iPhone/Safari testing','No independent ensemble visual approval','No external LinkedIn navigation/submission performed']},null,2));console.log(JSON.stringify({pass:true,viewportReports:reports.length,captures:captures.length,errors}));
}catch(e){fs.writeFileSync(path.join(__dirname,round==='initial'?'initial-results.json':round==='material-fix-final'?'material-fix-results.json':'results.json'),JSON.stringify({session:'build11',pass:false,reports,captures,errors,failure:e.stack},null,2));throw e;}finally{await browser.close();}})();
