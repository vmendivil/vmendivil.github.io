# Run inside browser_exec with session='ten04'. Requires Browser Use helpers.
import json, time, base64, os, hashlib
root='/home/trex/vhmc/projects/vmendivil.github.io/docs/plans/20261011_personal-site-presence/ten-prototypes/studies/04-bilal-theater'
p=root+'/.impeccable/review'
os.makedirs(p,exist_ok=True)
results={'checks':[], 'capture_round':2}
def check(name, ok, detail=None):
    results['checks'].append({'name':name,'pass':bool(ok),'detail':detail})
    open(root+'/results.json','w').write(json.dumps(results,indent=2))
def key(name, code):
    cdp('Input.dispatchKeyEvent',type='rawKeyDown',key=name,code=('Space' if name==' ' else name),windowsVirtualKeyCode=code)
    if name=='Enter':
        cdp('Input.dispatchKeyEvent',type='char',key='Enter',code='Enter',text='\r',unmodifiedText='\r',windowsVirtualKeyCode=13)
    cdp('Input.dispatchKeyEvent',type='keyUp',key=name,code=('Space' if name==' ' else name),windowsVirtualKeyCode=code)
def tap(selector,touch=False):
    point=js('(() => {let e=document.querySelector('+json.dumps(selector)+');e.scrollIntoView({block:"center",behavior:"instant"});let r=e.getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2}})()')
    if touch:
        js('document.querySelector('+json.dumps(selector)+').click()') # native touch transport unavailable
    else:
        click_at_xy(point['x'],point['y'])
def screenshot(name,full=False):
    args={'format':'png','fromSurface':False}
    if full:
        d=js('({width:innerWidth,height:document.documentElement.scrollHeight})')
        args['clip']={'x':0,'y':0,**d,'scale':1}
    open(p+'/'+name,'wb').write(base64.b64decode(cdp('Page.captureScreenshot',_response_timeout=60,**args)['data']))
new_tab('http://127.0.0.1:8914')
cdp('Page.addScriptToEvaluateOnNewDocument',source='window.__errors=[];window.__warnings=[];addEventListener("error",e=>__errors.push(e.message||e.target.src||e.target.href),true);addEventListener("unhandledrejection",e=>__errors.push(String(e.reason)));const old=console.error;console.error=(...x)=>{__errors.push(x.join(" "));old(...x)};const warn=console.warn;console.warn=(...x)=>{__warnings.push(x.join(" "));warn(...x)};')
cdp('Emulation.setDeviceMetricsOverride',width=1440,height=900,deviceScaleFactor=1,mobile=False)
goto_url('http://127.0.0.1:8914');wait_for_load();time.sleep(2)
check('WebGL initialized',js('!!window.__theater'))
check('Local fonts loaded',js('document.fonts.check("17px Figtree") && document.fonts.check("30px Young")'))
check('Opening contact link hidden',js('getComputedStyle(document.querySelector("#chapter-link")).display==="none"'))
focus=[]
for _ in range(4):
    key('Tab',9);focus.append(js('document.activeElement.id || document.activeElement.className'))
check('Real Tab traversal reaches next cue',focus[-1]=='next',focus)
key('Enter',13);time.sleep(1.8)
check('Enter advances to making',js('window.__theater.chapter===1'))
key(' ',32);time.sleep(1.8)
check('Space advances to curiosity',js('window.__theater.chapter===2'))
key('Escape',27)
check('Escape pauses ambient motion',js('window.__theater.paused && document.querySelector(".motion").getAttribute("aria-pressed")==="true"'))
key('ArrowRight',39);time.sleep(.3)
check('ArrowRight advances to conversation',js('window.__theater.chapter===3'))
check('Conversation real LinkedIn route',js('!document.querySelector("#chapter-link").hidden && document.querySelector("#chapter-link").href==="https://www.linkedin.com/in/vmendivilaxdeveloper"'))
key('ArrowLeft',37);time.sleep(.3)
check('ArrowLeft returns to curiosity',js('window.__theater.chapter===2'))
for i in range(4):
    tap('button[data-chapter="'+str(i)+'"]');time.sleep(.3)
    check('Pointer direct chapter '+str(i),js('window.__theater.chapter')==i)
    check('Desktop no overflow chapter '+str(i),js('document.documentElement.scrollWidth<=innerWidth'))
    if i>0:
        pass # chapter captures already retained; not needed for behavioral assertions
tap('button[data-chapter="0"]');js('scrollTo({top:0,behavior:"instant"})');time.sleep(.4)
# Final desktop/mobile captures are made in a separate settled capture batch
results['limits']=['CDP wheel dispatch timed out; wheel behavior not independently verified.','Surface screenshot transport timed out; settled captures retried separately.']
cdp('Emulation.setDeviceMetricsOverride',width=390,height=844,deviceScaleFactor=1,mobile=True)
cdp('Emulation.setTouchEmulationEnabled',enabled=True)
tap('button[data-chapter="0"]');js('scrollTo({top:0,behavior:"instant"})');time.sleep(.5)
tap('#next',True);time.sleep(.3)
check('Mobile next via DOM activation (native touch unverified)',js('window.__theater.chapter===1'))
for i in range(4):
    tap('button[data-chapter="'+str(i)+'"]',True);time.sleep(.2)
    check('Mobile direct chapter via DOM activation '+str(i),js('window.__theater.chapter')==i)
    check('Mobile no horizontal overflow '+str(i),js('document.documentElement.scrollWidth<=innerWidth'))
check('No browser errors',js('window.__errors.length===0'),js('window.__errors'))
results['warnings']=js('window.__warnings')
results['resources']=js('performance.getEntriesByType("resource").map(r=>({name:r.name,status:r.responseStatus,bytes:r.transferSize}))')
cdp('Emulation.setEmulatedMedia',features=[{'name':'prefers-reduced-motion','value':'reduce'}])
goto_url('http://127.0.0.1:8914');wait_for_load();time.sleep(1)
check('Reduced motion starts still',js('window.__theater.reduced && window.__theater.paused'))
a=js('document.querySelector("#stage").getAttribute("aria-label")')
tap('#next',True);time.sleep(.3)
b=js('document.querySelector("#stage").getAttribute("aria-label")')
check('Reduced motion changes chapter semantics; visible static cut requires screenshot review',a!=b and js('window.__theater.chapter===1'),{'before':a,'after':b})
js('document.querySelector("canvas").getContext("webgl2").getExtension("WEBGL_lose_context").loseContext()');time.sleep(.2)
check('Context loss shows readable fallback',js('!document.querySelector(".fallback").hidden'))
tap('button[data-chapter="3"]',True);time.sleep(.2)
check('Fallback content and contact still reachable',js('window.__theater.chapter===3 && !document.querySelector("#chapter-link").hidden'))
cdp('Emulation.setEmulatedMedia',features=[])
results['passed']=sum(c['pass'] for c in results['checks']);results['total']=len(results['checks'])
open(root+'/results.json','w').write(json.dumps(results,indent=2))
print(json.dumps(results,indent=2))
goto_url('http://127.0.0.1:8914');wait_for_load()
print(p+'/desktop.png');print(p+'/mobile.png')
