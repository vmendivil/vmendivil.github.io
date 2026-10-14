// Run with the existing devPilot Playwright; local port 9017 only.
const {chromium}=require('playwright');
const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const out=path.join(__dirname,'.impeccable/review');
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
(async()=>{
 const browser=await chromium.launch({headless:true});
 const results={engine:'Playwright Chromium, emulated viewports and trusted keyboard/touch input; not physical Safari certification',url:'http://127.0.0.1:9017',viewports:[],interactions:{},errors:[]};
 for(const [width,height] of [[320,740],[390,844],[430,932],[844,390],[768,1024],[1440,900]]){
  const context=await browser.newContext({viewport:{width,height},hasTouch:true,deviceScaleFactor:1});
  const p=await context.newPage();p.on('pageerror',e=>results.errors.push(e.message));p.on('console',m=>{if(m.type()==='error')results.errors.push(m.text())});
  await p.goto(results.url);await p.waitForFunction(()=>document.documentElement.dataset.webgl==='ready');await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(300);
  const geometry=await p.evaluate(()=>{
   const rect=e=>{const r=e.getBoundingClientRect();return{x:r.x,y:r.y,width:r.width,height:r.height,right:r.right,bottom:r.bottom}};
   return{width:innerWidth,documentWidth:document.documentElement.scrollWidth,webgl:document.documentElement.dataset.webgl,font:document.fonts.check('500 20px Chakra'),sections:[...document.querySelectorAll('section')].map(e=>({id:e.id,rect:rect(e)})),controls:[...document.querySelectorAll('a:not(.skip),button')].filter(e=>getComputedStyle(e).display!=='none').map(e=>({text:e.textContent.trim(),rect:rect(e)})),paragraphs:[...document.querySelectorAll('p')].map(e=>({text:e.textContent,size:parseFloat(getComputedStyle(e).fontSize),rect:rect(e)})),opening:[...document.querySelectorAll('.scene-title,.stage,.opening-note,.scene-caption')].map(e=>({class:e.className,rect:rect(e)}))};
  });
  geometry.viewport={width,height};geometry.checks={noHorizontalOverflow:geometry.documentWidth===width,bodyAtLeast16:geometry.paragraphs.every(x=>x.size>=16),targets44:geometry.controls.every(x=>x.rect.width>=44&&x.rect.height>=44),contentInBounds:geometry.paragraphs.every(x=>x.rect.x>=-1&&x.rect.right<=width+1)};
  // Trusted touch anchors and pause, not DOM .click().
  await p.locator('#motion').tap();geometry.pause=await p.locator('#motion').getAttribute('aria-pressed');
  await p.locator('nav a[href="#about"]').tap();await p.waitForTimeout(800);geometry.contextAnchor={hash:await p.evaluate(()=>location.hash),top:await p.locator('#about').evaluate(e=>e.getBoundingClientRect().top)};
  await p.locator('.context-footer a').tap();await p.waitForTimeout(800);geometry.approachAnchor={hash:await p.evaluate(()=>location.hash),top:await p.locator('#approach').evaluate(e=>e.getBoundingClientRect().top)};
  geometry.checks.anchors=geometry.contextAnchor.hash==='#about'&&geometry.approachAnchor.hash==='#approach'&&Math.abs(geometry.contextAnchor.top-24)<=2&&Math.abs(geometry.approachAnchor.top-24)<=2;
  await p.locator('nav a[href="#contact"]').tap();await p.waitForTimeout(800);geometry.contactAnchor={hash:await p.evaluate(()=>location.hash),headingTop:await p.locator('#contact h2').evaluate(e=>e.getBoundingClientRect().top)};
  await p.locator('.contact-link').scrollIntoViewIfNeeded();geometry.contactReachable=await p.locator('.contact-link').isVisible();
  await p.locator('footer a').tap();await p.waitForFunction(()=>scrollY===0,{},{timeout:8000});geometry.homeAnchor={hash:await p.evaluate(()=>location.hash),scrollY:await p.evaluate(()=>scrollY)};
  geometry.renderedHeadings=await p.locator('h2').allInnerTexts();geometry.checks.wordBoundaries=geometry.renderedHeadings.every(t=>!t.includes('Beyondthe')&&!t.includes('youworking'));
  geometry.checks.contactAndReturn=geometry.contactAnchor.hash==='#contact'&&geometry.contactReachable&&geometry.homeAnchor.hash==='#home'&&geometry.homeAnchor.scrollY===0;
  if(!process.argv.includes('--checks-only')&&(width===390||width===1440||width===844)){
   const label=width===390?'mobile':width===1440?'desktop':'landscape';
   await p.evaluate(()=>scrollTo({top:0,behavior:'instant'}));await p.waitForTimeout(150);await p.screenshot({path:path.join(out,label+'.png')});await p.screenshot({path:path.join(out,label+'-full.png'),fullPage:true});
   await p.locator('#about').evaluate(e=>scrollTo({top:e.offsetTop,behavior:'instant'}));await p.waitForTimeout(150);await p.screenshot({path:path.join(out,'content-'+label+'.png')});
   if(width===1440||width===390)for(const id of ['approach','interests','contact'])await p.locator('#'+id).screenshot({path:path.join(out,label+'-'+id+'.png')});
  }
  results.viewports.push(geometry);await context.close();
 }
 const k=await browser.newPage({viewport:{width:1440,height:900}});await k.goto(results.url);await k.waitForFunction(()=>document.documentElement.dataset.webgl==='ready');
 const tabs=[];await k.keyboard.press('Tab');tabs.push(await k.evaluate(()=>document.activeElement.textContent.trim()));await k.keyboard.press('Enter');await k.waitForTimeout(800);results.interactions.skip={tabs,hash:await k.evaluate(()=>location.hash)};
 // Reload resets active element, then traverse to motion control with Tab.
 await k.goto(results.url);await k.waitForFunction(()=>document.documentElement.dataset.webgl==='ready');
 for(let i=0;i<12;i++){await k.keyboard.press('Tab');const active=await k.evaluate(()=>({id:document.activeElement.id,text:document.activeElement.textContent.trim()}));tabs.push(active.text);if(active.id==='motion')break;}
 results.interactions.motionFocus=await k.evaluate(()=>document.activeElement.id);
 await k.keyboard.press('Space');await k.waitForTimeout(180);results.interactions.spacePaused=await k.locator('#motion').getAttribute('aria-pressed');
 const a=hash(await k.locator('#world').screenshot());await k.waitForTimeout(180);const b=hash(await k.locator('#world').screenshot());results.interactions.pausePixelStable=a===b;
 await k.keyboard.press('Enter');results.interactions.enterResumed=await k.locator('#motion').getAttribute('aria-pressed');await k.keyboard.press('Escape');results.interactions.escapeNoTrap=await k.evaluate(()=>document.activeElement.id==='motion');await k.keyboard.press('Tab');results.interactions.afterMotionTab=await k.evaluate(()=>document.activeElement.textContent.trim());
 await k.emulateMedia({reducedMotion:'reduce'});await k.waitForTimeout(180);results.interactions.reduced={matches:await k.evaluate(()=>matchMedia('(prefers-reduced-motion: reduce)').matches),label:await k.locator('#motion').textContent(),disabled:await k.locator('#motion').isDisabled(),webgl:await k.evaluate(()=>document.documentElement.dataset.webgl)};
 results.interactions.linkedin=await k.locator('.contact-link').getAttribute('href');
 results.pass=results.errors.length===0&&results.viewports.every(v=>Object.values(v.checks).every(Boolean)&&v.pause==='true')&&results.interactions.skip.hash==='#about'&&results.interactions.motionFocus==='motion'&&results.interactions.spacePaused==='true'&&results.interactions.enterResumed==='false'&&results.interactions.pausePixelStable&&results.interactions.reduced.disabled;
 fs.writeFileSync(path.join(out,'content-results.json'),JSON.stringify(results,null,2));await browser.close();console.log(JSON.stringify({pass:results.pass,viewports:results.viewports.map(v=>({viewport:v.viewport,checks:v.checks})),interactions:results.interactions,errors:results.errors},null,2));if(!results.pass)process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1});
