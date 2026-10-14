const {chromium}=require('playwright');
const fs=require('fs'),assert=require('assert');
const root='http://127.0.0.1:9112/';
(async()=>{
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});const results=[];
for(const [width,height] of [[320,740],[390,844],[430,932],[844,390],[768,1024],[1440,900]]){
 const context=await browser.newContext({viewport:{width,height},hasTouch:width<1000,isMobile:width<650});const page=await context.newPage();const errors=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)errors.push(`${r.status()} ${r.url()}`)});page.on('requestfailed',r=>errors.push(r.url()));
 await page.goto(root);await page.waitForFunction(()=>document.querySelector('.scene').dataset.renderer==='webgl');await page.waitForTimeout(700);await page.evaluate(()=>document.fonts.ready);
 const label=width===1440?'desktop':width===390?'mobile':width===844?'landscape':null;
 const initial=await page.evaluate(()=>({viewport:[innerWidth,innerHeight],overflow:document.documentElement.scrollWidth>innerWidth,body:getComputedStyle(document.querySelector('.chapter p')).fontSize,renderer:document.querySelector('.scene').dataset.renderer}));assert(!initial.overflow);assert(parseFloat(initial.body)>=18);const touchTargets=await page.locator('nav a,.chapter-index a,summary,.contact-link').evaluateAll(es=>es.map(e=>({text:e.innerText,width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height})));assert(touchTargets.every(e=>e.width>=44&&e.height>=44));
 if(label)await page.screenshot({path:`.impeccable/review/${label}.png`});
 const chapters=[];
 for(const id of ['requirements','design','delivery','support']){
  const link=page.locator(`.chapter-index a[href="#${id}"]`);if(width<1000)await link.tap();else await link.click();await page.waitForTimeout(1000);
  assert.equal(await page.evaluate(()=>location.hash),'#'+id);assert.equal(await link.getAttribute('aria-current'),'true');
  const image=page.locator(`#${id} .chapter-still img`);const visible=await image.isVisible();assert.equal(visible,width<=650);
  if(visible){await image.scrollIntoViewIfNeeded();await image.evaluate(el=>el.decode());}
  const state=await image.evaluate(el=>({src:el.getAttribute('src'),loaded:el.complete&&el.naturalWidth===780&&el.naturalHeight===900,box:el.getBoundingClientRect().toJSON(),alt:el.alt}));
  if(visible)assert(state.loaded);
  if(label){if(width<=650)await page.locator('#'+id).screenshot({path:`.impeccable/review/chapter-${id}-${label}.png`});else{await page.locator('#'+id).evaluate(el=>el.scrollIntoView({behavior:'instant',block:'start'}));await page.waitForTimeout(600);await page.screenshot({path:`.impeccable/review/chapter-${id}-${label}.png`});}}
  await link.focus();await page.keyboard.press('Enter');await page.waitForTimeout(600);assert.equal(await page.evaluate(()=>location.hash),'#'+id);
  chapters.push({id,hash:'#'+id,anchorTouchOrMouse:true,anchorEnter:true,visible,image:state});
 }
 for(const id of ['about','curiosity']){await page.locator('#'+id).evaluate(el=>el.scrollIntoView({behavior:'instant',block:'start'}));await page.locator('#'+id+' p').last().scrollIntoViewIfNeeded();assert(await page.locator('#'+id+' p').last().isVisible());if(label)await page.locator('#'+id).screenshot({path:`.impeccable/review/${id}-${label}.png`});}
 const faq=[];for(let i=0;i<await page.locator('summary').count();i++){
  const s=page.locator('summary').nth(i),d=page.locator('details').nth(i);await s.focus();await page.keyboard.press('Enter');assert(await d.evaluate(e=>e.open));await page.keyboard.press('Space');assert(!await d.evaluate(e=>e.open));if(width<1000)await s.tap();else await s.click();assert(await d.evaluate(e=>e.open));await d.locator('p').scrollIntoViewIfNeeded();assert(await d.locator('p').isVisible());faq.push({index:i,enter:true,space:true,pointer:true,answerVisible:true});
 }
 await page.locator('summary').first().focus();await page.keyboard.press('Tab');assert.equal(await page.evaluate(()=>document.activeElement.tagName),'SUMMARY');await page.keyboard.press('Escape');assert.equal(await page.locator('dialog[open]').count(),0);
 await page.locator('#questions').evaluate(el=>el.scrollIntoView({behavior:'instant',block:'start'}));if(label)await page.screenshot({path:`.impeccable/review/content-${label}.png`});
 await page.locator('#contact').evaluate(el=>el.scrollIntoView({behavior:'instant',block:'start'}));const contact=page.locator('.contact-link');assert.equal(await contact.getAttribute('href'),'https://www.linkedin.com/in/vmendivilaxdeveloper');assert.equal(await contact.getAttribute('target'),'_blank');if(label)await page.screenshot({path:`.impeccable/review/contact-${label}.png`});
 // Load every shipping raster, including hidden lazy desktop chapters, before checking network cleanliness.
 const images=await page.evaluate(async()=>{const all=[...document.images];for(const el of all){el.loading='eager';await el.decode();}return all.map(el=>({src:el.getAttribute('src'),width:el.naturalWidth,height:el.naturalHeight,loaded:el.complete}));});assert(images.every(el=>el.loaded&&el.width>0));assert.equal(errors.length,0);
 const requests=[];await context.route('https://www.linkedin.com/**',route=>{requests.push(route.request().url());route.abort();});await contact.focus();const popupWait=page.waitForEvent('popup');await page.keyboard.press('Enter');const popup=await popupWait;await popup.waitForTimeout(250);assert.equal(requests[0],'https://www.linkedin.com/in/vmendivilaxdeveloper');await popup.close();
 await page.locator('footer a').click();await page.waitForTimeout(2200);assert(await page.evaluate(()=>location.hash==='#top'&&scrollY<200));
 results.push({viewport:{width,height},initial,touchTargets,chapters,faq,tab:true,escapeNoTrap:true,contact:{href:requests[0],enterPopup:true,externalRequestAborted:true},images,returnTop:true,networkErrorsBeforeIntentionalExternalAbort:errors.filter(e=>!e.startsWith('https://www.linkedin.com/'))});await context.close();
}
for(const variant of ['reduced','fallback','no-js']){
const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:variant==='reduced'?'reduce':'no-preference',javaScriptEnabled:variant!=='no-js'});const page=await context.newPage();await page.goto(root+(variant==='fallback'?'?fallback=1':''));
const chapterImages=[];for(const id of ['requirements','design','delivery','support']){const el=page.locator(`#${id} .chapter-still img`);await el.scrollIntoViewIfNeeded();await el.evaluate(el=>el.decode());assert(await el.isVisible());chapterImages.push(await el.evaluate(el=>({src:el.getAttribute('src'),loaded:el.complete&&el.naturalWidth===780})));}
await page.locator('summary').first().click();assert(await page.locator('details').first().evaluate(e=>e.open));const state={variant,chapterImages,faqWorks:true,fallbackLoaded:await page.locator('.fallback').evaluate(e=>e.complete&&e.naturalWidth>0),renderer:await page.locator('.scene').getAttribute('data-renderer'),scrollBehavior:await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior),reducedMotion:await page.evaluate(()=>matchMedia('(prefers-reduced-motion: reduce)').matches),overflow:await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)};assert(!state.overflow);assert(state.fallbackLoaded);if(variant==='reduced'){assert(state.reducedMotion);assert.equal(state.scrollBehavior,'auto');}results.push(state);await context.close();
}
fs.writeFileSync('verification/fix-results.json',JSON.stringify({engine:'Chromium / Playwright',physicalSafari:false,results},null,2));console.log(JSON.stringify({viewports:results.filter(r=>r.viewport).length,chapters:results.filter(r=>r.viewport).flatMap(r=>r.chapters).length,faqChecks:results.filter(r=>r.viewport).flatMap(r=>r.faq).length,variants:results.filter(r=>r.variant).map(r=>r.variant),passed:true}));await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
