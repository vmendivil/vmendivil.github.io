const {chromium}=require('playwright');
const fs=require('fs'), crypto=require('crypto'), assert=require('assert');
const sizes=[[320,740],[390,844],[430,932],[844,390],[768,1024],[1440,900]];
const hash=f=>crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
(async()=>{
 const runtime=['index.html','style.css','interface.js','scene.js',...fs.readdirSync('assets').filter(f=>/\.(jpg|js|ttf)$/.test(f)).map(f=>'assets/'+f)];
 const started=new Date().toISOString(), snapshot=Object.fromEntries(runtime.map(f=>[f,hash(f)]));
 const b=await chromium.launch({headless:true,args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 const results=[], captures=[];
 for(const [width,height] of sizes){
  const c=await b.newContext({viewport:{width,height},hasTouch:width<1050,reducedMotion:'reduce'}),p=await c.newPage();
  const errors=[],bad=[],responses=[];
  p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error')errors.push(m.text());});p.on('response',r=>{responses.push({url:r.url(),status:r.status()});if(r.status()>=400)bad.push(r.url());});
  await p.goto('http://127.0.0.1:9113/');await p.evaluate(()=>document.fonts.ready);
  if(width===1440)await p.waitForFunction(()=>window.thresholdScene);
  async function capture(state){await p.evaluate(async()=>{await Promise.all([...document.images].filter(i=>i.getBoundingClientRect().bottom>0&&i.getBoundingClientRect().top<innerHeight).map(i=>i.decode()));});await p.waitForTimeout(120);const file=`.impeccable/review/${width}-${state}.png`;await p.screenshot({path:file});captures.push({width,height,state,file,sha256:hash(file),capturedAt:new Date().toISOString()});assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));}
  await capture('main');const states=[];
  for(const id of ['practice','curiosity','contact']){
   await p.locator(`nav a[href="#${id}"]`).click();
   await p.locator(`#${id} .words`).evaluate(e=>scrollTo(0,e.getBoundingClientRect().top+scrollY-145));
   await capture(id);
   const chapterFile=`.impeccable/review/${width}-${id}-chapter.png`;await p.locator(`#${id}`).screenshot({path:chapterFile});captures.push({width,height,state:id+'-chapter',file:chapterFile,sha256:hash(chapterFile),capturedAt:new Date().toISOString(),framing:'Entire closed chapter, including its own artwork and all prose/actions'});
   const summary=p.locator(`#${id} summary`);await summary.scrollIntoViewIfNeeded();
   if(width<1050)await summary.tap();else await summary.click();
   assert(await p.locator(`#${id} details`).evaluate(e=>e.open));
   await p.locator(`#${id} .reading`).evaluate(e=>scrollTo(0,e.getBoundingClientRect().top+scrollY-145));
   await capture(id+'-reading');
   assert(await p.locator(`#${id} .reading p`).first().evaluate(e=>parseFloat(getComputedStyle(e).fontSize)>=16));
   await p.locator(`#${id} .reading a`).scrollIntoViewIfNeeded();assert(await p.locator(`#${id} .reading a`).isVisible());
   await summary.focus();await p.keyboard.press('Escape');assert(await p.locator(`#${id} details`).evaluate(e=>!e.open));assert(await summary.evaluate(e=>document.activeElement===e));
   await p.keyboard.press('Enter');assert(await p.locator(`#${id} details`).evaluate(e=>e.open));await p.keyboard.press('Space');assert(await p.locator(`#${id} details`).evaluate(e=>!e.open));
   states.push({id,nativePointer:true,enterOpen:true,spaceClose:true,escapeCloseAndFocus:true,finalLinkReachable:true});
  }
  assert(await p.locator('.linkedin').getAttribute('href')==='https://www.linkedin.com/in/vmendivilaxdeveloper');
  assert(await p.locator('.linkedin').getAttribute('target')==='_blank');await p.locator('.return').click();assert(await p.evaluate(()=>location.hash==='#start'));
  await p.locator('.name').focus();await p.keyboard.press('Tab');assert(await p.evaluate(()=>document.activeElement.getAttribute('href')==='#practice'));
  await p.evaluate(async()=>{await Promise.all([...document.images].map(i=>{i.loading='eager';return i.decode();}));});assert(await p.evaluate(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0)));
  assert.deepStrictEqual(errors,[]);assert.deepStrictEqual(bad,[]);
  results.push({width,height,states,errors,bad,loadedImages:true,tabToPractice:true,returnToStart:true,reducedMotion:await p.evaluate(()=>matchMedia('(prefers-reduced-motion: reduce)').matches),responses});await c.close();
 }
 const motion=await b.newPage({viewport:{width:1440,height:900}});await motion.goto('http://127.0.0.1:9113/');await motion.waitForFunction(()=>window.thresholdScene);await motion.locator('#motion').focus();await motion.keyboard.press('Space');assert(await motion.locator('#motion').getAttribute('aria-pressed')==='true');await motion.keyboard.press('Enter');assert(await motion.locator('#motion').getAttribute('aria-pressed')==='false');await motion.close();
 const fallback=await b.newPage({viewport:{width:1440,height:900},reducedMotion:'reduce'});await fallback.addInitScript(()=>{HTMLCanvasElement.prototype.getContext=function(){return null;};});await fallback.goto('http://127.0.0.1:9113/');await fallback.evaluate(()=>document.fonts.ready);assert(await fallback.locator('#world-still').evaluate(e=>e.complete&&e.naturalWidth>0));assert(await fallback.locator('body').evaluate(e=>!e.classList.contains('webgl')));await fallback.locator('#practice summary').click();assert(await fallback.locator('#practice details').evaluate(e=>e.open));await fallback.screenshot({path:'.impeccable/review/fallback.png'});await b.close();
 for(const [from,to] of [['1440-main','desktop'],['390-main','mobile'],['844-main','landscape'],['1440-practice-reading','content-desktop'],['390-practice-reading','content-mobile'],['1440-contact','contact-desktop'],['390-contact','contact-mobile']])fs.copyFileSync(`.impeccable/review/${from}.png`,`.impeccable/review/${to}.png`);
 for(const [f,h] of Object.entries(snapshot))assert(hash(f)===h,'Runtime changed during capture: '+f);
 fs.writeFileSync('fresh-results.json',JSON.stringify({started,finished:new Date().toISOString(),url:'http://127.0.0.1:9113/',engine:'Playwright Chromium / ANGLE SwiftShader; emulated viewports and trusted synthetic touch; not physical Safari',runtime:snapshot,viewports:results,captures,fallback:true,allRuntimeUnchanged:true},null,2));
 console.log(JSON.stringify({viewports:results.length,captures:captures.length,readingChecks:results.reduce((n,x)=>n+x.states.length,0),errors:results.flatMap(x=>x.errors),fallback:true,runtimeUnchanged:true}));
})().catch(e=>{console.error(e);process.exit(1);});
