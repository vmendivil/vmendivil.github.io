const {chromium}=require('playwright');
const fs=require('fs');
(async()=>{const browser=await chromium.launch({headless:true,args:['--enable-webgl','--ignore-gpu-blocklist','--use-angle=swiftshader']});
const selection=process.argv[2];
for(const [variant,width,height] of [['wide',1440,900],['portrait',430,932]]){if(selection&&!selection.endsWith(variant))continue;const page=await browser.newPage({viewport:{width,height}});await page.goto('http://127.0.0.1:9118/?render');await page.waitForFunction(()=>window.study18?.ready);await page.evaluate(()=>document.fonts.ready);await page.addStyleTag({content:':root{scroll-behavior:auto!important}.scene-title,.continue,.scene-caption,header{visibility:hidden!important}.poster{display:none}.scene canvas{opacity:1!important;transition:none!important}'});
for(const [index,name] of ['ochre','cyan','mint'].entries()){if(selection&&selection!==`${name}-${variant}`)continue;const target=page.locator(`canvas[data-scene="${index}"]`);await target.scrollIntoViewIfNeeded();await page.evaluate(()=>window.study18.renderAll());await target.screenshot({path:`assets/${name}-${variant}.png`});}
await page.close();}await browser.close();console.log(selection?`Rendered original ${selection} still.`:'Rendered six original landscape stills.');})();
