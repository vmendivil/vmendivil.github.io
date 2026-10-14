# Run in browser_exec session ten03 (browser helpers pre-imported).
import json,time,os
root='/home/trex/vhmc/projects/vmendivil.github.io/docs/plans/20261011_personal-site-presence/ten-prototypes/studies/03-henry-workshop'
results=[]
def check(name,value):
 results.append({'name':name,'passed':bool(value)})
 assert value,name

def click(sel):
 r=js(f'(()=>{{let r=document.querySelector({json.dumps(sel)}).getBoundingClientRect();return {{x:r.x+r.width/2,y:r.y+r.height/2}}}})()')
 click_at_xy(r['x'],r['y'])
def key(k,code=None):
 n={'Tab':9,'Enter':13,' ':32,'Escape':27}[k]
 cdp('Input.dispatchKeyEvent',type='rawKeyDown',key=k,code=code or k,windowsVirtualKeyCode=n,nativeVirtualKeyCode=n)
 if k in ['Enter',' ']:cdp('Input.dispatchKeyEvent',type='char',text='\r' if k=='Enter' else ' ',key=k,code=code or k,windowsVirtualKeyCode=n)
 cdp('Input.dispatchKeyEvent',type='keyUp',key=k,code=code or k,windowsVirtualKeyCode=n,nativeVirtualKeyCode=n)
cdp('Emulation.setEmulatedMedia',features=[])
cdp('Emulation.setDeviceMetricsOverride',width=1440,height=900,deviceScaleFactor=1,mobile=False)
goto_url('http://127.0.0.1:8913');wait_for_load();time.sleep(1)
for section,title in [('about','Hello, I’m Victor.'),('lab','Curiosity stays switched on.'),('approach','Understand it. Then build it.'),('contact','Let’s start with the problem.')]:
 click('nav [data-section="'+section+'"]')
 check('pointer navigation '+section,js('document.querySelector("#note-title").textContent')==title)
check('real LinkedIn contact',js('document.querySelector("#note-body a").href')=='https://www.linkedin.com/in/vmendivilaxdeveloper')
key('Escape');check('Escape closes desktop notes',js('!document.body.classList.contains("reading")'))
key('Tab');check('Tab traverses to server hotspot',js('document.activeElement.dataset.section')=='lab')
key('Enter');check('Enter activates server hotspot',js('document.querySelector("#note-title").textContent')=='Curiosity stays switched on.')
key('Tab');key(' ','Space');check('Space activates notebook hotspot',js('document.querySelector("#note-title").textContent')=='Understand it. Then build it.')
key('Escape');click('.hotspot[data-section="contact"]');check('in-world envelope click',js('document.querySelector("#note-title").textContent')=='Let’s start with the problem.')
click('#light');check('lamp dim state',js('document.querySelector("#light").textContent')=='Brighten the task lamp');click('#light')
click('#pause');check('motion paused',js('window.workshop.paused()'))
cdp('Emulation.setEmulatedMedia',features=[{'name':'prefers-reduced-motion','value':'reduce'}]);goto_url('http://127.0.0.1:8913');wait_for_load();time.sleep(.5)
check('reduced motion recognized',js('matchMedia("(prefers-reduced-motion: reduce)").matches'))
check('reduced motion starts paused',js('window.workshop.paused()'))
cdp('Emulation.setDeviceMetricsOverride',width=390,height=844,deviceScaleFactor=1,mobile=True)
click('nav [data-section="lab"]');check('mobile inspect selection',js('document.querySelector("#note-title").textContent')=='Curiosity stays switched on.')
check('mobile notes visible',js('getComputedStyle(document.querySelector("#notes")).display')=='block')
check('mobile no horizontal overflow',js('document.documentElement.scrollWidth<=innerWidth'))
check('fonts loaded',js('document.fonts.status')=='loaded')
check('316 authored scene objects',js('window.workshop.objects')==316)
resources=js('performance.getEntriesByType("resource").map(r=>({url:r.name,status:r.responseStatus}))')
check('runtime assets same-origin',all(r['url'].startswith('http://127.0.0.1:8913') for r in resources))
check('runtime assets loaded',all(r['status']==200 for r in resources))
open(root+'/results.json','w').write(json.dumps({'browser':'ten03 / Chromium CDP','baseURL':'http://127.0.0.1:8913','assertions':results,'resources':resources,'keyboardHarnessNote':'rawKeyDown + char + keyUp; initial keyDown-only probe did not activate, not counted as a pass'},indent=2))
print(json.dumps(results,indent=2))
cdp('Emulation.setEmulatedMedia',features=[])
