// Run against the loopback-only study server on 9014. No installs.
const {chromium}=require('playwright');
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const out=path.join(__dirname,'.impeccable/review'),checks=[],errors=[];
const check=(name,pass,detail)=>{checks.push({name,passed:!!pass,detail});fs.writeFileSync(path.join(__dirname,'content-results.json'),JSON.stringify({checks,errors},null,2));};
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
(async()=>{
const browser=await chromium.launch({executablePath:'/home/trex/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome',args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
async function page(w,h,touch=false,reduced='no-preference'){
 const ctx=await browser.newContext({viewport:{width:w,height:h},hasTouch:touch,isMobile:touch,deviceScaleFactor:1,reducedMotion:reduced});const p=await ctx.newPage();
 p.on('pageerror',e=>errors.push(e.message));p.on('response',r=>{if(r.status()>=400)errors.push(`${r.status()} ${r.url()}`)});
 await p.goto('http://127.0.0.1:9014/',{waitUntil:'domcontentloaded',timeout:90000});await p.waitForFunction(()=>!!window.__theater,{},{timeout:90000});await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(600);return p;
}
for(const [w,h] of [[320,740],[390,844],[430,932],[844,390],[768,1024],[1440,900]]){
 const touch=w<=900,p=await page(w,h,touch);
 const measure=await p.evaluate(()=>{const r=s=>document.querySelector(s).getBoundingClientRect().toJSON();return {title:r('.title'),stage:r('#stage'),rail:r('.stage-rail'),header:r('header'),name:r('.name'),contact:r('.contact-top'),pause:r('.motion'),note:r('.stage-note'),program:r('.program'),fonts:[...document.querySelectorAll('.copy p')].map(e=>parseFloat(getComputedStyle(e).fontSize)),heading:document.querySelector('h1').innerText,intro:document.querySelector('.title p').innerText}});
 check(`${w}x${h} header targets separated`,measure.name.right<=measure.contact.left&&measure.name.height>=44&&measure.contact.height>=44,measure);
 check(`${w}x${h} pause target`,measure.pause.width>=44&&measure.pause.height>=44);
 check(`${w}x${h} body >=16px`,measure.fonts.every(n=>n>=16));
 if(touch){check(`${w}x${h} separate intro / canvas / control / program`,measure.title.bottom<=measure.stage.top+.1&&measure.stage.bottom<=measure.rail.top+.1&&measure.rail.bottom<=measure.program.top+.1);check(`${w}x${h} word boundaries`,measure.heading.includes('on a')&&measure.intro.includes('think, make'));}
 if(!process.env.NO_CAPTURE&&(w===1440||w===390)){await p.screenshot({path:path.join(out,w===1440?'desktop.png':'mobile.png')});}
 for(let i=0;i<4;i++){
  const b=p.locator(`.chapters [data-chapter="${i}"]`);touch?await b.tap():await b.click();await p.waitForTimeout(150);
  check(`${w}x${h} chapter ${i} rendered/current`,await p.evaluate(n=>window.__theater.chapter===n&&document.querySelector('[aria-current="step"]').dataset.chapter===String(n)&&document.querySelector('#count').textContent===['I','II','III','IV'][n],i));
  check(`${w}x${h} chapter ${i} no overflow`,await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  check(`${w}x${h} chapter ${i} chapter controls target`,await b.evaluate(e=>e.getBoundingClientRect().height>=44));
 }
 const link=p.locator('#chapter-link');await link.scrollIntoViewIfNeeded();check(`${w}x${h} contact reachable`,await link.isVisible()&&await link.getAttribute('href')==='https://www.linkedin.com/in/vmendivilaxdeveloper');
 if(!process.env.NO_CAPTURE&&(w===1440||w===390||w===844)){if(w===1440){await p.keyboard.press('Escape');await p.locator('.chapters [data-chapter="3"]').click();await p.waitForTimeout(400);}await p.locator('.program').evaluate(e=>e.scrollIntoView({behavior:'instant',block:'start'}));await p.waitForTimeout(200);await p.screenshot({path:path.join(out,w===1440?'content-desktop.png':w===390?'content-mobile.png':'content-landscape.png'),fullPage:w!==1440});if(w===1440)await p.locator('.motion').click();}
 // Long reading stress is ephemeral browser-only copy, not a published factual change.
 await p.locator('#chapter-detail').evaluate(e=>e.textContent=Array(8).fill(e.textContent).join(' '));await link.scrollIntoViewIfNeeded();check(`${w}x${h} extended leaf contact and next reachable`,await link.isVisible()&&await p.locator('#next').isVisible()&&await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 await p.locator('#next').scrollIntoViewIfNeeded();touch?await p.locator('#next').tap():await p.locator('#next').click();check(`${w}x${h} closing cue wraps`,await p.evaluate(()=>window.__theater.chapter===0));
 await p.locator('.see-scene').click();await p.waitForTimeout(600);await p.evaluate(()=>scrollTo({top:0,behavior:'instant'}));
 await p.locator('.motion').scrollIntoViewIfNeeded();touch?await p.locator('.motion').tap():await p.locator('.motion').click();check(`${w}x${h} native pause activation`,await p.evaluate(()=>window.__theater.paused));
 if(!process.env.NO_CAPTURE&&w===844){await p.evaluate(()=>scrollTo({top:0,behavior:'instant'}));await p.screenshot({path:path.join(out,'landscape.png'),fullPage:true});}
 await p.context().close();
}
const k=await page(1440,900);
await k.keyboard.press('Tab');check('Real Tab reaches identity link',await k.evaluate(()=>document.activeElement.classList.contains('name')));
await k.keyboard.press('Tab');await k.keyboard.press('Tab');check('Real Tab reaches program link',await k.evaluate(()=>document.activeElement.classList.contains('read-program')));
await k.keyboard.press('Enter');await k.waitForTimeout(600);check('Enter navigates to program',await k.evaluate(()=>location.hash==='#opening'));
async function tabTo(selector){for(let i=0;i<14;i++){if(await k.evaluate(s=>document.activeElement.matches(s),selector))return true;await k.keyboard.press('Tab')}return false;}
await tabTo('.chapters [data-chapter="0"]');check('Tab reaches chapter I',await k.evaluate(()=>document.activeElement.dataset.chapter==='0'));
await k.keyboard.press('Tab');await k.keyboard.press('Enter');check('Enter activates making',await k.evaluate(()=>window.__theater.chapter===1));
await k.keyboard.press('Tab');await k.keyboard.press('Space');check('Space activates curiosity',await k.evaluate(()=>window.__theater.chapter===2));
await k.keyboard.press('ArrowRight');check('ArrowRight conversation',await k.evaluate(()=>window.__theater.chapter===3));await k.keyboard.press('ArrowLeft');check('ArrowLeft curiosity',await k.evaluate(()=>window.__theater.chapter===2));await k.keyboard.press('Escape');check('Escape pauses ambient stage',await k.evaluate(()=>window.__theater.paused));
await k.evaluate(()=>{document.activeElement.blur();scrollTo({top:0,behavior:'instant'})});await k.waitForTimeout(600);await k.mouse.move(1050,320);await k.mouse.wheel(0,180);await k.waitForTimeout(400);check('Trusted desktop wheel changes chapter',await k.evaluate(()=>window.__theater.chapter===3),await k.evaluate(()=>({chapter:window.__theater.chapter,scrollY,hit:document.elementFromPoint(1050,320)?.outerHTML.slice(0,150),coarse:matchMedia('(pointer: coarse)').matches})));await k.context().close();
const m=await page(390,844,true);await m.mouse.move(200,420);await m.mouse.wheel(0,160);await m.waitForTimeout(400);check('Mobile wheel scrolls document without changing chapter',await m.evaluate(()=>scrollY>0&&window.__theater.chapter===0));await m.context().close();
const r=await page(1440,900,false,'reduce');check('Reduced media / still truthful disabled control',await r.evaluate(()=>matchMedia('(prefers-reduced-motion: reduce)').matches&&window.__theater.paused&&document.querySelector('.motion').disabled&&document.querySelector('.motion').textContent==='Stage is still'));
const a=await r.locator('#stage').screenshot();await r.locator('#next').click();await r.waitForTimeout(250);const b=await r.locator('#stage').screenshot();await r.waitForTimeout(500);const c=await r.locator('#stage').screenshot();check('Reduced chapter visibly changes canvas and stays still',!a.equals(b)&&b.equals(c),{before:hash(a),after:hash(b),stable:hash(c)});await r.context().close();
const f=await browser.newContext({viewport:{width:390,height:844}});await f.addInitScript(()=>HTMLCanvasElement.prototype.getContext=new Proxy(HTMLCanvasElement.prototype.getContext,{apply(t,o,a){if(String(a[0]).includes('webgl'))return null;return Reflect.apply(t,o,a)}}));const fp=await f.newPage();await fp.goto('http://127.0.0.1:9014/');await fp.locator('[data-chapter="3"]').click();check('WebGL failure leaves readable conversation and contact',await fp.locator('.fallback').isVisible()&&await fp.locator('#chapter-link').isVisible());await f.close();
check('No page errors or failed assets',errors.length===0,errors);
await browser.close();const result={engine:'Existing Playwright / Chromium 1243 / software WebGL',input:'Trusted touchscreen tap, mouse wheel and keyboard input',viewports:[[320,740],[390,844],[430,932],[844,390],[768,1024],[1440,900]],checks,passed:checks.filter(c=>c.passed).length,total:checks.length,limits:['Chromium emulation, not physical Safari / iPhone','Historical detector not rerun','Parent visual acceptance pending']};fs.writeFileSync(path.join(__dirname,'content-results.json'),JSON.stringify(result,null,2));console.log(JSON.stringify({passed:result.passed,total:result.total,failed:checks.filter(c=>!c.passed)},null,2));if(result.passed!==result.total)process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1)});
