const { chromium } = require('/home/trex/.npm/_npx/e41f203b7505f1fb/node_modules/playwright');
const fs = require('fs');
const assert = require('assert/strict');
(async () => {
 const browser = await chromium.launch({headless:true,executablePath:'/home/trex/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome'});
 const results = {engine:await browser.version(), method:'Playwright Chromium; real keyboard; CDP Input.dispatchTouchEvent on touchscreen-emulated context', layouts:[], keyboard:[], touch:[], errors:[]};
 const sample = p => p.evaluate(() => {
  const rect=s=>{const r=document.querySelector(s).getBoundingClientRect(); return {x:r.x,y:r.y,left:r.left,right:r.right,top:r.top,bottom:r.bottom,width:r.width,height:r.height}};
  const practice=rect('.practice'), control=rect('.scrub-heading');
  const intersectionArea=Math.max(0,Math.min(practice.right,control.right)-Math.max(practice.left,control.left))*Math.max(0,Math.min(practice.bottom,control.bottom)-Math.max(practice.top,control.top));
  return {value:document.querySelector('input').value,state:document.querySelector('#state').textContent,label:document.querySelector('label').textContent,help:document.querySelector('#scrub-help').textContent,disabled:[document.querySelector('input').disabled,document.querySelector('button').disabled],active:document.activeElement.id,practice,control,intersectionArea,gap:control.top-practice.bottom,overflow:document.documentElement.scrollWidth>innerWidth,documentHeight:document.documentElement.scrollHeight,words:[...document.querySelectorAll('.word')].map(w=>({text:w.textContent,rect:(()=>{const r=w.getBoundingClientRect();return {left:r.left,right:r.right,top:r.top,bottom:r.bottom,width:r.width}})(),transform:getComputedStyle(w).transform}))};
 });
 for(const [name,viewport] of [['desktop',{width:1440,height:900}],['mobile',{width:390,height:844}]]) {
  const context=await browser.newContext({viewport,hasTouch:name==='mobile',isMobile:name==='mobile',deviceScaleFactor:1});
  const page=await context.newPage();page.on('pageerror',e=>results.errors.push(e.message));
  for(const reduced of [false,true]) {
   await page.emulateMedia({reducedMotion:reduced?'reduce':'no-preference'});
   await page.goto('http://127.0.0.1:8122/'); await page.evaluate(()=>document.fonts.ready);
   for(const value of [0,50,100]) {
    // Layout sampling only: keyboard/touch tests below use browser input.
    await page.locator('input').evaluate((r,v)=>{r.value=v;r.dispatchEvent(new Event('input',{bubbles:true}))},String(value));
    const s=await sample(page); results.layouts.push({name,reduced,...s});
    assert.equal(s.intersectionArea,0);assert(s.gap>=32-0.1);assert.equal(s.overflow,false);
    for(const w of s.words){assert(w.rect.left>=0);assert(w.rect.right<=viewport.width);}
    if(reduced){assert.deepEqual(s.disabled,[true,true]);assert.equal(s.state,'Movement off');assert(s.words.every(w=>w.transform==='none'));}
   }
   await page.goto('http://127.0.0.1:8122/'); await page.evaluate(()=>document.fonts.ready);
   await page.keyboard.press('Tab'); const tab1=await sample(page);
   await page.keyboard.press('ArrowRight'); const right=await sample(page);
   await page.keyboard.press('Tab'); const tab2=await sample(page);
   await page.keyboard.press('Enter'); const enter=await sample(page);
   await page.keyboard.press('Space'); const space=await sample(page);
   results.keyboard.push({name,reduced,tab1:tab1.active,arrowRight:right.value,tab2:tab2.active,enter:enter.value,space:space.value,state:space.state});
   if(!reduced){assert.equal(tab1.active,'alignment');assert.equal(right.value,'66');assert.equal(tab2.active,'align');assert.equal(enter.value,'100');assert.equal(space.value,'15');}
   else {assert.equal(tab1.active,'');assert.equal(tab2.active,'');assert.equal(space.value,'65');assert.equal(space.state,'Movement off');
    await page.screenshot({path:__dirname+'/'+name+'-reduced.png'});
   }
  }
  // Preference changes are handled immediately, without reloading the document.
  await page.emulateMedia({reducedMotion:'no-preference'});
  await page.waitForFunction(()=>!document.querySelector('input').disabled);
  assert.deepEqual((await sample(page)).disabled,[false,false]);
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.waitForFunction(()=>document.querySelector('input').disabled);
  assert.deepEqual((await sample(page)).disabled,[true,true]);
  assert.equal((await sample(page)).state,'Movement off');
  await page.emulateMedia({reducedMotion:'no-preference'});
  await page.waitForFunction(()=>!document.querySelector('input').disabled);
  assert.deepEqual((await sample(page)).disabled,[false,false]);
  results.keyboard.push({name,livePreferenceChange:'normal → reduce → normal; controls and labels updated without reload'});
  await page.goto('http://127.0.0.1:8122/'); await page.evaluate(()=>document.fonts.ready);
  if(name==='mobile') {
   const cdp=await context.newCDPSession(page);
   const b=await page.locator('input').boundingBox();const y=b.y+b.height/2;const x0=b.x+12+(b.width-24)*.65;const x1=b.x+12+(b.width-24)*.20;
   for(const [type,x] of [['touchStart',x0],['touchMove',x0+(x1-x0)/2],['touchMove',x1],['touchEnd',x1]]) {
    await cdp.send('Input.dispatchTouchEvent',{type,touchPoints:type==='touchEnd'?[]:[{x,y,id:1,radiusX:2,radiusY:2,force:1}]});
   }
   await page.waitForTimeout(100); const drag=await sample(page);results.touch.push({gesture:'CDP native range drag 65% to 20%',value:drag.value,state:drag.state});assert(Number(drag.value)>=18&&Number(drag.value)<=22);
   await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:b.x+12+(b.width-24)*.8,y,id:2}]});
   await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await page.waitForTimeout(100);
   const tap=await sample(page);results.touch.push({gesture:'CDP native range tap at 80%',value:tap.value,state:tap.state});assert(Number(tap.value)>=78&&Number(tap.value)<=82);
  }
  // Fresh document: prevent gesture/focus state contaminating the default capture.
  await page.goto('http://127.0.0.1:8122/'); await page.evaluate(()=>document.fonts.ready);
  assert.equal((await sample(page)).value,'65');
  await page.screenshot({path:__dirname+'/'+name+'.png'});
  await context.close();
 }
 assert.deepEqual(results.errors,[]);
 fs.writeFileSync(__dirname+'/revision-checks.json',JSON.stringify(results,null,2));
 console.log(JSON.stringify({layouts:results.layouts.map(({name,reduced,value,gap,intersectionArea,documentHeight})=>({name,reduced,value,gap,intersectionArea,documentHeight})),keyboard:results.keyboard,touch:results.touch,errors:results.errors},null,2));
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
