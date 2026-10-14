const {chromium}=require('playwright');
const fs=require('fs');
(async()=>{const b=await chromium.launch({headless:true});for(const [name,w,h] of [['desktop',1440,900],['mobile',390,844]]){const p=await b.newPage({viewport:{width:w,height:h}});await p.goto('http://127.0.0.1:9018');await p.waitForFunction(()=>window.__scene?.ready);for(const id of ['top','about','approach','curiosities','contact']){await p.locator('#'+id).scrollIntoViewIfNeeded();await p.waitForTimeout(650);await p.screenshot({path:`.impeccable/review/before-${name}-${id}.png`});}await p.close();}await b.close();})();
