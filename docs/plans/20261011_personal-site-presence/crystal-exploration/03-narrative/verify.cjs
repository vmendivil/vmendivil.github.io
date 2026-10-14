const { chromium } = require('/home/trex/.npm/_npx/e41f203b7505f1fb/node_modules/playwright');
const fs = require('fs');
(async () => {
 const browser = await chromium.launch({headless:true});
 const results=[];
 for (const [name,width,height] of [['desktop',1440,1000],['mobile',390,844]]) {
  const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:1});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const responses=[];page.on('response',r=>responses.push({url:r.url(),status:r.status()}));
  await page.goto('http://127.0.0.1:8133/',{waitUntil:'networkidle'});
  await page.evaluate(()=>document.fonts.ready);
  await page.screenshot({path:`.impeccable/review/${name}.png`,fullPage:true});
  await page.screenshot({path:`.impeccable/review/${name}-opening.png`});
  const layout=await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,fonts:document.fonts.status,images:[...document.images].map(i=>({loaded:i.complete&&i.naturalWidth>0,width:i.naturalWidth})),sections:[...document.querySelectorAll('main section')].map(s=>({id:s.id,height:s.offsetHeight})),headingFont:getComputedStyle(document.querySelector('h1')).fontFamily}));
  await page.locator('.chapters a[href="#connections"]').click();
  await page.waitForTimeout(700);
  const chapter=await page.locator('.chapters [aria-current]').getAttribute('href');
  await page.locator('.contact-link').click();
  await page.waitForTimeout(700);
  await page.locator('summary').click();
  await page.locator('#build-draft').click();
  const empty=await page.locator('#problem').getAttribute('aria-invalid');
  await page.locator('#problem').fill('I repeat a manual handoff.');
  await page.locator('#change').fill('A clear, simpler workflow.');
  await page.locator('#build-draft').click();
  const draft=await page.locator('#draft').inputValue();
  await page.locator('#select-draft').click();
  const selection=await page.locator('#draft').evaluate(e=>e.selectionEnd-e.selectionStart);
  await page.screenshot({path:`.impeccable/review/${name}-draft.png`});
  await page.emulateMedia({reducedMotion:'reduce'});
  const reduced=await page.evaluate(()=>({matches:matchMedia('(prefers-reduced-motion: reduce)').matches,scrollBehavior:getComputedStyle(document.documentElement).scrollBehavior,contentVisible:getComputedStyle(document.querySelector('h1')).opacity}));
  results.push({name,layout,chapter,empty,draft,selection,reduced,errors,responses});
  await page.close();
 }
 const page=await browser.newPage({viewport:{width:320,height:800},javaScriptEnabled:false});
 await page.goto('http://127.0.0.1:8133/',{waitUntil:'networkidle'});
 results.push({name:'320-no-js',layout:await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,headings:[...document.querySelectorAll('h1,h2')].map(h=>h.textContent),visible:[...document.querySelectorAll('main section')].every(s=>getComputedStyle(s).visibility==='visible')}))});
 const extra=await browser.newPage({viewport:{width:768,height:1000}});
 await extra.goto('http://127.0.0.1:8133/',{waitUntil:'networkidle'});
 await extra.keyboard.press('Tab');
 const keyboard=await extra.evaluate(()=>({focused:document.activeElement.className,outline:getComputedStyle(document.activeElement).outlineStyle}));
 const tablet=await extra.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth}));
 results.push({name:'768-keyboard',layout:tablet,keyboard});
 await extra.close();
 for(const r of results){
  if(r.layout.width!==r.layout.scrollWidth)throw new Error(`Overflow at ${r.name}`);
  if(r.errors?.length)throw new Error(`Browser errors at ${r.name}`);
  if(r.responses?.some(x=>x.status!==200))throw new Error(`Asset HTTP error at ${r.name}`);
  if(r.chapter&&r.chapter!=='#connections')throw new Error('Chapter state did not update');
  if(r.draft&&!r.draft.includes('I repeat a manual handoff.'))throw new Error('Draft lost input');
  if(r.selection&&r.selection!==r.draft.length)throw new Error('Draft selection failed');
  if(r.reduced&&(!r.reduced.matches||r.reduced.scrollBehavior!=='auto'||r.reduced.contentVisible!=='1'))throw new Error('Reduced motion failed');
 }
 fs.writeFileSync('.impeccable/review/checks.json',JSON.stringify(results,null,2));
 console.log(JSON.stringify(results,null,2));
 await browser.close();
})();
