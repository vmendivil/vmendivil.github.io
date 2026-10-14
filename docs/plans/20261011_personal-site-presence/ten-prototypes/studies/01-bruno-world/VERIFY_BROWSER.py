# Reproduce Circuit Coast browser checks
# Run this file with browser_exec in isolated session ten01 after starting
# the loopback server in README. Browser helpers are injected by that tool.
import time, json
new_tab('http://127.0.0.1:8911/')
wait_for_load()
cdp('Emulation.setDeviceMetricsOverride',width=1440,height=900,deviceScaleFactor=1,mobile=False)
cdp('Page.bringToFront')
def key(name, code, vk, text=None):
    args=dict(type='keyDown',key=name,code=code,windowsVirtualKeyCode=vk)
    if text is not None: args.update(text=text,unmodifiedText=text)
    cdp('Input.dispatchKeyEvent',**args)
    cdp('Input.dispatchKeyEvent',type='keyUp',key=name,code=code,windowsVirtualKeyCode=vk)
    time.sleep(.25)
def click(selector):
    q=js('(()=>{const r=document.querySelector('+json.dumps(selector)+').getBoundingClientRect();return{x:r.x+r.width/2,y:r.y+r.height/2}})()')
    click_at_xy(q['x'],q['y']);time.sleep(.25)
assert js('coastDebug().webgl')
assert js('document.fonts.status')=='loaded'
assert js('document.documentElement.scrollWidth===innerWidth')
# Real native keyboard events. Enter needs a complete native key packet,
# including virtual key 13 and carriage return. Incomplete packets failed.
for _ in range(20):
    key('Tab','Tab',9)
    if js('document.activeElement.matches("#destinations button")'):break
assert js('document.activeElement.matches("#destinations button")')
key('Enter','Enter',13,'\r')
assert js('coastDebug().active')=='welcome'
key('Escape','Escape',27)
assert js('document.activeElement.tagName')=='CANVAS'
click('#home');click('canvas')
before=js('coastDebug().rover.x')
cdp('Input.dispatchKeyEvent',type='keyDown',key='w',code='KeyW',windowsVirtualKeyCode=87,text='w')
time.sleep(1.5)
cdp('Input.dispatchKeyEvent',type='keyUp',key='w',code='KeyW',windowsVirtualKeyCode=87)
assert js('coastDebug().rover.x')!=before
for destination in ['welcome','craft','homelab','curiosity','contact']:
    click('#destinations [data-place="'+destination+'"]')
    assert js('coastDebug().active')==destination
    assert js('document.querySelector("#panel-copy").innerText.length')>100
    key('Escape','Escape',27)
click('#pause');assert js('coastDebug().paused')
key(' ','Space',32,' ');assert not js('coastDebug().paused')
cdp('Emulation.setDeviceMetricsOverride',width=390,height=844,deviceScaleFactor=1,mobile=True)
assert js('document.documentElement.scrollWidth===innerWidth')
click('#home')
q=js('(()=>{const r=document.querySelector("[data-drive=ArrowUp]").getBoundingClientRect();return{x:r.x+r.width/2,y:r.y+r.height/2}})()')
before=js('coastDebug().rover.x')
cdp('Input.dispatchTouchEvent',type='touchStart',touchPoints=[q]);time.sleep(1.3)
cdp('Input.dispatchTouchEvent',type='touchEnd',touchPoints=[])
assert js('coastDebug().rover.x')!=before
click('#guide');click('#destinations [data-place=contact]')
assert js('document.querySelector(".contact-link").href')=='https://www.linkedin.com/in/vmendivilaxdeveloper'
assert js('getComputedStyle(document.querySelector("#panel p")).fontSize')=='17px'
cdp('Emulation.setEmulatedMedia',features=[{'name':'prefers-reduced-motion','value':'reduce'}])
goto_url('http://127.0.0.1:8911/');wait_for_load()
assert js('coastDebug().reduced && coastDebug().paused')
assert js('getComputedStyle(document.querySelector(".touch")).display')=='none'
click('#destinations [data-place=homelab]');assert js('coastDebug().active')=='homelab'
print('Browser assertions completed. See results.json for the recorded original observations and screenshots for visual evidence.')
