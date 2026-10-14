// Uses the existing read-only Playwright installation. No environment changes.
const {chromium}=require('playwright');
const fs=require('fs'),assert=require('node:assert/strict');
const result={runner:'Playwright Chromium, native keyboard + trusted touchscreen/CDP touch',url:'http://127.0.0.1:9015',viewports:[],errors:[],requestsFailed:[],consoleErrors:[]};
const save=()=>fs.writeFileSync('content-mobile-results.json',JSON.stringify(result,null,2));
const tap=async(p,selector)=>{const r=await p.locator(selector).boundingBox();assert(r);await p.touchscreen.tap(r.x+r.width/2,r.y+r.height/2)};
const settle=async p=>{await p.waitForFunction(()=>window.__expedition?.drawCount>0);await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(500)};
const bounds=async p=>p.evaluate(()=>{
 const rect=s=>{const r=document.querySelector(s).getBoundingClientRect();return {x:r.x,y:r.y,w:r.width,h:r.height,bottom:r.bottom,right:r.right}};
 return {width:innerWidth,height:innerHeight,documentWidth:document.documentElement.scrollWidth,guide:rect('#guide'),close:rect('#guide-close'),header:rect('.guide-top'),scroll:rect('.journal-scroll'),scrollHeight:document.querySelector('.journal-scroll').scrollHeight,clientHeight:document.querySelector('.journal-scroll').clientHeight,inert:document.querySelector('#expedition').inert,bodyOverflow:getComputedStyle(document.body).overflow,controlsHidden:getComputedStyle(document.querySelector('.expedition-footer')).visibility,bodyType:parseFloat(getComputedStyle(document.querySelector('#entry p')).fontSize),targets:[...document.querySelectorAll('#guide button')].map(b=>({id:b.dataset.chapter||b.id,w:b.getBoundingClientRect().width,h:b.getBoundingClientRect().height})),fonts:document.fonts.status};
});
(async()=>{
 const browser=await chromium.launch({headless:!process.env.DISPLAY,args:['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 const watch=p=>{p.on('pageerror',e=>result.errors.push(e.message));p.on('requestfailed',r=>result.requestsFailed.push(r.url()));p.on('console',m=>{if(m.type()==='error')result.consoleErrors.push(m.text())})};
 try{
 for(const [w,h] of [[320,740],[390,844],[430,932],[844,390],[768,1024],[1440,900]]){
  const ctx=await browser.newContext({viewport:{width:w,height:h},hasTouch:true,isMobile:w<1000,reducedMotion:'no-preference',deviceScaleFactor:1});
  // Pause during setup before the first costly animated frames; the separate native keyboard test proves pause itself.
  await ctx.addInitScript(()=>document.addEventListener('DOMContentLoaded',()=>document.querySelector('#pause').click()));
  const p=await ctx.newPage();watch(p);await p.goto(result.url,{waitUntil:'domcontentloaded'});await settle(p);
  const row={viewport:[w,h],entries:[]};result.viewports.push(row);save();
  row.main=await p.evaluate(()=>({documentWidth:document.documentElement.scrollWidth,bodyHeight:document.body.scrollHeight,controls:[...document.querySelectorAll('header button, .arrows button, .landmark')].map(b=>{const r=b.getBoundingClientRect();return {id:b.id||b.dataset.place||b.dataset.move,x:r.x,y:r.y,w:r.width,h:r.height}})}));assert.equal(row.main.documentWidth,w);for(const c of row.main.controls){assert(c.w>=44&&c.h>=44);assert(c.x>=0&&c.y>=0&&c.x+c.w<=w+1&&c.y+c.h<=h+1)}
  if(!process.env.SKIP_CAPTURE&&(w===1440||w===390||w===844))await p.screenshot({path:'.impeccable/review/'+(w===1440?'desktop':w===390?'mobile':'landscape')+'.png'});
  await tap(p,'#guide-open');assert.equal(await p.evaluate(()=>document.activeElement.id),'guide-close');
  for(const id of ['about','erp','lab','ai','contact']){
   await tap(p,'[data-chapter='+id+']');assert.equal(await p.locator('[data-chapter='+id+']').getAttribute('aria-current'),'true');
   const geom=await bounds(p);row.entries.push({id,title:await p.locator('#entry h3').innerText(),geometry:geom});save();
   assert.equal(geom.documentWidth,w);assert(geom.guide.x>=0&&geom.guide.right<=w+1);assert(geom.guide.y>=0&&geom.guide.bottom<=h+1);assert(geom.close.y>=0&&geom.close.bottom<=h);assert(geom.inert);assert.equal(geom.controlsHidden,'hidden');assert(geom.bodyType>=16);assert(geom.targets.every(t=>t.w>=44&&t.h>=44));
   await p.locator('.journal-scroll').evaluate(el=>el.scrollTop=el.scrollHeight);const end=await p.locator('.disclosure').boundingBox();assert(end.y+end.height<=h+1);assert((await p.locator('#guide-close').boundingBox()).y>=0);
   if(id==='contact')assert.equal(await p.locator('#entry a').getAttribute('href'),'https://www.linkedin.com/in/vmendivilaxdeveloper');
  }
  // Long-content stress is a test-only DOM extension; no invented shipping copy.
  await p.locator('#entry').evaluate(el=>{for(let i=0;i<15;i++)el.append(el.querySelector('p').cloneNode(true));});
  if(w===390){await p.locator('.journal-scroll').evaluate(el=>el.scrollTop=0);const r=await p.locator('.journal-scroll').boundingBox(),cdp=await ctx.newCDPSession(p),x=r.x+r.width/2,y=r.y+r.height*.8;await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x,y}]});for(let i=1;i<=8;i++){await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x,y:y-i*25}]});await p.waitForTimeout(25)}await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await p.waitForTimeout(400);row.trustedTouchReadScroll=await p.locator('.journal-scroll').evaluate(el=>el.scrollTop);assert(row.trustedTouchReadScroll>0)}
  await p.locator('.journal-scroll').evaluate(el=>el.scrollTop=el.scrollHeight);
  row.longContent={scrollTop:await p.locator('.journal-scroll').evaluate(el=>el.scrollTop),close:await p.locator('#guide-close').boundingBox(),end:await p.locator('.disclosure').boundingBox()};assert(row.longContent.scrollTop>0);assert(row.longContent.end.y+row.longContent.end.height<=h+1);
  await tap(p,'[data-chapter=erp]');assert.equal(await p.locator('.journal-scroll').evaluate(el=>el.scrollTop),0);
  if(!process.env.SKIP_CAPTURE&&(w===1440||w===390||w===844))await p.screenshot({path:'.impeccable/review/content-'+(w===1440?'desktop':w===390?'mobile':'landscape')+'.png'});
  await tap(p,'#guide-close');assert(await p.locator('#guide').isHidden());assert.equal(await p.evaluate(()=>document.activeElement.id),'guide-open');row.touchOpenChangeReadClose=true;
  for(const id of ['erp','lab','ai']){await tap(p,'[data-place='+id+']');assert.equal(await p.locator('[data-chapter='+id+']').getAttribute('aria-current'),'true');await p.keyboard.press('Escape');assert.equal(await p.evaluate(()=>document.activeElement.dataset.place),id)}row.landmarkReturn=true;
  // Dynamic height / orientation while reading keeps close and scrolling reachable.
  await tap(p,'#guide-open');await ctx.pages()[0].setViewportSize({width:w,height:Math.max(340,h-120)});row.dynamicHeight=await bounds(p);assert(row.dynamicHeight.close.bottom<=row.dynamicHeight.height);await p.keyboard.press('Escape');
  save();await ctx.close();
 }
 const ctx=await browser.newContext({viewport:{width:1440,height:900}});const p=await ctx.newPage();watch(p);await p.goto(result.url);await settle(p);
 await p.keyboard.press('Tab');assert.equal(await p.evaluate(()=>document.activeElement.className),'identity');await p.keyboard.press('Tab');assert.equal(await p.evaluate(()=>document.activeElement.id),'pause');await p.keyboard.press('Space');await p.waitForTimeout(600);
 const count=()=>p.evaluate(()=>__expedition.drawCount);let n=await count();await p.waitForTimeout(600);result.pausedIdleDraws=await count()-n;assert.equal(result.pausedIdleDraws,0);
 await p.keyboard.press('Tab');assert.equal(await p.evaluate(()=>document.activeElement.id),'guide-open');await p.keyboard.press('Enter');assert.equal(await p.evaluate(()=>document.activeElement.id),'guide-close');
 await p.keyboard.press('Shift+Tab');assert.equal(await p.evaluate(()=>document.activeElement.dataset.chapter),'contact');await p.keyboard.press('Tab');assert.equal(await p.evaluate(()=>document.activeElement.id),'guide-close');
 await p.keyboard.press('Tab');await p.keyboard.press('Tab');assert.equal(await p.evaluate(()=>document.activeElement.dataset.chapter),'erp');await p.keyboard.press('Space');assert.equal(await p.locator('[data-chapter=erp]').getAttribute('aria-current'),'true');
 await p.waitForTimeout(600);n=await count();await p.keyboard.press('Tab');await p.keyboard.press('Enter');await p.waitForFunction(n=>__expedition.drawCount>n,n,{timeout:30000});await p.waitForTimeout(600);result.pausedNavigationDraws=await count()-n;assert.equal(result.pausedNavigationDraws,1);
 await p.keyboard.press('Escape');assert.equal(await p.evaluate(()=>document.activeElement.id),'guide-open');result.nativeTabEnterSpaceEscapeAndTrap=true;
 await p.locator('#pause').click();n=await count();await p.waitForFunction(n=>__expedition.drawCount>n,n,{timeout:30000});await p.waitForTimeout(600);result.resumedDraws=await count()-n;assert(result.resumedDraws>0);
 // Attempt actual tab lifecycle; separately verify actual hidden browser-use daemon.
 const cdp=await ctx.newCDPSession(p);const foreground=await ctx.newPage();await foreground.goto('about:blank');await foreground.bringToFront();await p.waitForTimeout(600);result.hiddenVisibility=await p.evaluate(()=>document.visibilityState);n=await count();await p.waitForTimeout(600);result.hiddenDraws=await count()-n;result.hiddenCheck=result.hiddenVisibility==='hidden'?(assert.equal(result.hiddenDraws,0),'passed'):'unavailable in this Chromium tab lifecycle; see content-hidden-results.json from the actual hidden browser-use daemon';await foreground.close();await p.bringToFront();n=await count();await p.waitForFunction(n=>__expedition.drawCount>n,n,{timeout:30000});await p.waitForTimeout(600);result.visibilityReturnDraws=await count()-n;assert(result.visibilityReturnDraws>0);
 await ctx.close();save();
 const rm=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'});const r=await rm.newPage();watch(r);await r.goto(result.url);await settle(r);n=await r.evaluate(()=>__expedition.drawCount);await r.waitForTimeout(600);result.reducedIdleDraws=await r.evaluate(()=>__expedition.drawCount)-n;assert.equal(result.reducedIdleDraws,0);assert(await r.locator('[data-move]').first().isDisabled());await r.locator('#guide-open').click();await r.locator('[data-chapter=contact]').click();assert(await r.locator('#entry a').isVisible());await r.keyboard.press('Escape');await rm.close();
 const fc=await browser.newContext({viewport:{width:390,height:844}});await fc.addInitScript(()=>{const get=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...args){return type.includes('webgl')?null:get.call(this,type,...args)}});const f=await fc.newPage();f.on('pageerror',e=>result.errors.push(e.message));await f.goto(result.url);await f.locator('#fallback').waitFor({state:'visible'});await f.locator('#guide-open').click();await f.locator('[data-chapter=contact]').click();result.fallbackReadable=await f.locator('#entry a').isVisible();assert(result.fallbackReadable);await fc.close();
 assert.equal(result.errors.length,0);assert.equal(result.requestsFailed.length,0);assert.equal(result.consoleErrors.length,0);result.status='passed';save();console.log(JSON.stringify({status:result.status,viewports:result.viewports.map(v=>v.viewport),entries:result.viewports.reduce((n,v)=>n+v.entries.length,0),pausedIdleDraws:result.pausedIdleDraws,pausedNavigationDraws:result.pausedNavigationDraws,hiddenVisibility:result.hiddenVisibility,hiddenDraws:result.hiddenDraws,nativeKeyboard:result.nativeTabEnterSpaceEscapeAndTrap,reducedIdleDraws:result.reducedIdleDraws,fallbackReadable:result.fallbackReadable,errors:result.errors,requestsFailed:result.requestsFailed,consoleErrors:result.consoleErrors},null,2));
 }catch(e){result.status='failed';result.failure=e.stack;save();throw e}finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
