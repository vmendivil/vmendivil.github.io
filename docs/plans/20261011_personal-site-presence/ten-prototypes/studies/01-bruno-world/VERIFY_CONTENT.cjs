const {chromium}=require('playwright');
const fs=require('node:fs');
const assert=require('node:assert/strict');
(async()=>{
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const results={engine:'Playwright Chromium',url:'http://127.0.0.1:9011/',states:[],errors:[],limits:'Emulated viewports and trusted browser touch; not physical iPhone/Safari certification.'};
for(const [width,height] of [[1440,900],[320,740],[390,844],[430,932],[844,390],[768,1024]]){
 console.log('viewport',width,height);const context=await browser.newContext({viewport:{width,height},hasTouch:width<1000});const p=await context.newPage();p.on('pageerror',e=>results.errors.push(e.message));p.on('response',r=>{if(r.status()>=400)results.errors.push(r.url()+':'+r.status())});
 await p.goto(results.url);await p.waitForFunction(()=>window.coastDebug?.().webgl);await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(400);await p.locator('#pause').click();
 assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth),width);
 const shot=width===1440?'desktop':width===390?'mobile':width===844?'landscape':null;
 if(shot)await p.screenshot({path:`.impeccable/review/${shot}.png`});
 for(const id of ['welcome','craft','homelab','curiosity','contact']){
  const nav=p.locator(`#destinations [data-place=${id}]`);if(!await nav.isVisible())await p.locator('#guide').click();await nav.click();
  assert.equal(await p.evaluate(()=>coastDebug().active),id);assert.equal(await p.locator('#close').evaluate(e=>e===document.activeElement),true);
  const geom=await p.evaluate(()=>{const panel=document.querySelector('#panel'),r=panel.getBoundingClientRect(),c=document.querySelector('#close').getBoundingClientRect();return {panel:{x:r.x,y:r.y,width:r.width,height:r.height,bottom:r.bottom,right:r.right},close:{width:c.width,height:c.height},font:getComputedStyle(document.querySelector('#panel p')).fontSize,scrollHeight:panel.scrollHeight,clientHeight:panel.clientHeight,copy:document.querySelector('#panel-copy').innerText}});
  assert(geom.panel.x>=0&&geom.panel.y>=0&&geom.panel.right<=width&&geom.panel.bottom<=height+1);assert(geom.close.width>=44&&geom.close.height>=44);assert(parseFloat(geom.font)>=16);
  assert.equal(await p.locator('.touch').isVisible(),false);
  if(id==='contact'){
   if(shot)await p.screenshot({path:`.impeccable/review/content-${shot}.png`});
   await p.locator('.contact-link').scrollIntoViewIfNeeded();assert.equal(await p.locator('.contact-link').getAttribute('href'),'https://www.linkedin.com/in/vmendivilaxdeveloper');
   await p.locator('#back').scrollIntoViewIfNeeded();await p.locator('#back').click();assert.equal(await p.evaluate(()=>coastDebug().active),null);
   if(!await nav.isVisible())await p.locator('#guide').click();await nav.click();await p.locator('#next').scrollIntoViewIfNeeded();await p.locator('#next').click();assert.equal(await p.evaluate(()=>coastDebug().active),'welcome');
  }
  await p.keyboard.press('Escape');assert.equal(await p.locator('canvas').evaluate(e=>e===document.activeElement),true);results.states.push({viewport:{width,height},id,...geom});
 }
 // Trusted touch on driving controls, not a dispatched DOM event.
 if(width===390){await p.locator('#pause').click();await p.locator('#home').click();const before=await p.evaluate(()=>coastDebug().rover);const b=await p.locator('[data-drive=ArrowUp]').boundingBox();const cdp=await context.newCDPSession(p);await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:b.x+b.width/2,y:b.y+b.height/2}]});await p.waitForTimeout(600);await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});assert.notDeepEqual(await p.evaluate(()=>coastDebug().rover),before);results.touchDriving=true;}
 await context.close();
}
const p=await browser.newPage({viewport:{width:1440,height:900}});await p.goto(results.url);await p.waitForFunction(()=>window.coastDebug);
await p.keyboard.press('Tab');for(let i=0;i<20&&!await p.locator('#destinations button').first().evaluate(e=>e===document.activeElement);i++)await p.keyboard.press('Tab');assert.equal(await p.locator('#destinations button').first().evaluate(e=>e===document.activeElement),true);await p.keyboard.press('Enter');assert.equal(await p.evaluate(()=>coastDebug().active),'welcome');await p.keyboard.press('Space');assert.equal(await p.locator('#panel').isVisible(),false);await p.locator('#pause').focus();await p.keyboard.press('Space');assert.equal(await p.evaluate(()=>coastDebug().paused),true);results.keyboard='Tab / Enter / Space / Escape passed';
await p.emulateMedia({reducedMotion:'reduce'});await p.reload();await p.waitForFunction(()=>window.coastDebug);assert.equal(await p.evaluate(()=>coastDebug().reduced&&coastDebug().paused),true);await p.locator('[data-place=contact]').first().click();assert.equal(await p.locator('#panel').isVisible(),true);results.reducedMotion=true;
assert.deepEqual(results.errors,[]);fs.writeFileSync('content-results.json',JSON.stringify(results,null,2));await browser.close();console.log(JSON.stringify({states:results.states.length,errors:results.errors,keyboard:results.keyboard,touch:results.touchDriving,reducedMotion:results.reducedMotion}));
})().catch(e=>{console.error(e);process.exit(1)});
