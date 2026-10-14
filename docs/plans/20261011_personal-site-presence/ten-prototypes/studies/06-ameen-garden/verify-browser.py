# Run through browser_exec in session ten06 after starting README server.
import os,json,time,shutil,base64
root='/home/trex/vhmc/projects/vmendivil.github.io/docs/plans/20261011_personal-site-presence/ten-prototypes/studies/06-ameen-garden'
review=root+'/.impeccable/review'
os.makedirs(review,exist_ok=True)
cdp('Page.addScriptToEvaluateOnNewDocument',source="window.testErrors=[];addEventListener('error',e=>testErrors.push(e.message));addEventListener('unhandledrejection',e=>testErrors.push(String(e.reason)));")
cdp('Emulation.setEmulatedMedia',features=[{'name':'prefers-reduced-motion','value':'no-preference'}])
cdp('Emulation.setDeviceMetricsOverride',width=1440,height=900,deviceScaleFactor=1,mobile=False)
goto_url('http://127.0.0.1:8916/');wait_for_load();time.sleep(2)
cdp('Page.bringToFront')
results={}
PIXELS="(()=>{let c=document.querySelector('canvas'),g=c.getContext('webgl2'),d=new Uint8Array(c.width*c.height*4),h=0;g.readPixels(0,0,c.width,c.height,g.RGBA,g.UNSIGNED_BYTE,d);for(let i=0;i<d.length;i+=4)h=(Math.imul(h,31)+d[i]+d[i+1]*3+d[i+2]*7)|0;return h})()"
def key(k,code,v):
    cdp('Input.dispatchKeyEvent',type='keyDown',key=k,code=code,windowsVirtualKeyCode=v,**({'text':'\r'} if k=='Enter' else {}))
    cdp('Input.dispatchKeyEvent',type='keyUp',key=k,code=code,windowsVirtualKeyCode=v)
def click(sel):
    box=js("(()=>{let r=document.querySelector("+json.dumps(sel)+").getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2}})()")
    cdp('Input.dispatchMouseEvent',type='mousePressed',x=box['x'],y=box['y'],button='left',clickCount=1)
    cdp('Input.dispatchMouseEvent',type='mouseReleased',x=box['x'],y=box['y'],button='left',clickCount=1)
def shot(name,full=False):
    w,h=js('[innerWidth,innerHeight]')
    if full:
        # Chrome surface capture timed out; use a whole-page compositor viewport.
        # Pin the scenic svh section to its original size before extending viewport.
        js("document.querySelector('.garden').style.height='"+str(h)+"px'")
        height=js('document.documentElement.scrollHeight')
        cdp('Emulation.setDeviceMetricsOverride',width=w,height=height,deviceScaleFactor=1,mobile=w<700)
        time.sleep(.5)
    data=cdp('Page.captureScreenshot',format='png',fromSurface=False)['data']
    path=review+'/'+name;open(path,'wb').write(base64.b64decode(data))
    if full:
        cdp('Emulation.setDeviceMetricsOverride',width=w,height=h,deviceScaleFactor=1,mobile=w<700)
        js("document.querySelector('.garden').style.height=''");time.sleep(.5)
    print(path)
results['desktop']=js("({width:innerWidth,documentWidth:document.documentElement.scrollWidth,ready:document.querySelector('canvas').dataset.ready,fonts:document.fonts.check('20px Bellefair')&&document.fonts.check('20px Karla')})")
assert results['desktop']['ready']=='true' and results['desktop']['fonts'] and results['desktop']['documentWidth']<=1440
# Real Tab and Enter navigation.
key('Tab','Tab',9);results['firstTab']=js('document.activeElement.className');assert results['firstTab']=='skip'
key('Tab','Tab',9);key('Tab','Tab',9);assert js('document.activeElement.textContent')=='Meet Victor'
key('Enter','Enter',13);time.sleep(1);results['keyboardNavigation']=js("({hash:location.hash,top:document.querySelector('#about').getBoundingClientRect().top})");assert results['keyboardNavigation']['hash']=='#about'
js('window.scrollTo({top:0,behavior:"instant"})');time.sleep(.2)
# Native Space on focused pause button, then Enter to resume.
js("document.querySelector('#motion').focus()");key(' ','Space',32);time.sleep(.2)
a=js(PIXELS);time.sleep(.3);b=js(PIXELS)
results['pausedPixelsStable']=a==b;assert a==b
results['pauseLabel']=js("document.querySelector('#motion').textContent");assert results['pauseLabel']=='Resume the water'
key('Enter','Enter',13);time.sleep(.2);a=js(PIXELS);time.sleep(.3);b=js(PIXELS);results['ambientPixelsChange']=a!=b;assert a!=b
js("document.activeElement.blur();window.scrollTo({top:0,behavior:'instant'})");time.sleep(.2);shot('desktop.png');shot('desktop-full.png',True)
js("document.querySelector('#motion').focus()");key(' ','Space',32);time.sleep(.5)
for section,sel in [('practice','nav a[href="#practice"]'),('contact','nav a[href="#contact"]')]:
    js('document.activeElement.blur();window.scrollTo({top:0,behavior:"instant"})');time.sleep(1);click(sel);time.sleep(3)
    assert js('location.hash')=='#'+section
results['pointerNavigation']=True
results['contact']=js("({href:document.querySelector('.linkedin').href,target:document.querySelector('.linkedin').target,forms:document.forms.length})")
assert results['contact']['href']=='https://www.linkedin.com/in/vmendivilaxdeveloper' and results['contact']['forms']==0
cdp('Emulation.setDeviceMetricsOverride',width=390,height=844,deviceScaleFactor=1,mobile=True)
js('window.scrollTo({top:0,behavior:"instant"})');time.sleep(1)
results['mobile']=js("({width:innerWidth,documentWidth:document.documentElement.scrollWidth,sections:[...document.querySelectorAll('main>section')].map(s=>s.id),padding:getComputedStyle(document.querySelector('#practice')).paddingLeft})")
assert results['mobile']['documentWidth']==390
shot('mobile.png');shot('mobile-full.png',True)
box=js("(()=>{let r=document.querySelector('nav a[href=\"#contact\"]').getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2}})()")
cdp('Input.dispatchTouchEvent',type='touchStart',touchPoints=[{'x':box['x'],'y':box['y']}]);cdp('Input.dispatchTouchEvent',type='touchEnd',touchPoints=[]);time.sleep(1)
assert js('location.hash')=='#contact';results['touchNavigation']=True
cdp('Emulation.setEmulatedMedia',features=[{'name':'prefers-reduced-motion','value':'reduce'}]);js('window.scrollTo({top:0,behavior:"instant"})');time.sleep(.4)
results['reducedMotion']=js("({matches:matchMedia('(prefers-reduced-motion: reduce)').matches,label:document.querySelector('#motion').textContent,disabled:document.querySelector('#motion').disabled,motion:document.querySelector('canvas').dataset.motion,scroll:getComputedStyle(document.documentElement).scrollBehavior})")
a=js(PIXELS);time.sleep(.3);b=js(PIXELS);results['reducedMotion']['pixelsStable']=a==b
assert a==b and results['reducedMotion']['disabled'] and results['reducedMotion']['scroll']=='auto'
results['renderer']=js("document.querySelector('canvas').dataset.renderer");results['errors']=js('testErrors');assert results['errors']==[]
results['assets']=js("Promise.all(['style.css','landscape.js','assets/three.module.js','assets/three-LICENSE.txt','assets/karla.ttf','assets/bellefair.ttf','assets/leaf.svg'].map(async u=>{let r=await fetch(u);return {url:u,status:r.status}}))")
assert all(a['status']==200 for a in results['assets'])
results['escape']='No modal, trap, or dismissible overlay exists; Escape is not applicable.'
# Test real construction failure by denying only WebGL contexts on the next page.
script=cdp('Page.addScriptToEvaluateOnNewDocument',source="const oldContext=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...args){if(type==='webgl'||type==='webgl2')return null;return oldContext.call(this,type,...args)}")['identifier']
goto_url('http://127.0.0.1:8916/');wait_for_load();time.sleep(.5)
results['webglFailure']=js("({canvasHidden:document.querySelector('canvas').hidden,buttonHidden:document.querySelector('#motion').hidden,content:document.querySelector('#about').innerText.length>100,links:document.querySelectorAll('nav a').length})")
assert results['webglFailure']['canvasHidden'] and results['webglFailure']['buttonHidden'] and results['webglFailure']['content']
cdp('Page.removeScriptToEvaluateOnNewDocument',identifier=script)
# Repair native-window clipping using the exact first viewport of the full capture.
import subprocess,struct
subprocess.run(['ffmpeg','-loglevel','error','-y','-i',review+'/desktop-full.png','-vf','crop=1440:900:0:0','-frames:v','1',review+'/desktop.png'],check=True)
results['captureSizes']={name:list(struct.unpack('>II',open(review+'/'+name,'rb').read(24)[16:24])) for name in ['desktop.png','desktop-full.png','mobile.png','mobile-full.png']}
assert results['captureSizes']['desktop.png']==[1440,900] and results['captureSizes']['mobile.png']==[390,844]
results['status']='passed';open(root+'/results.json','w').write(json.dumps(results,indent=2));print(json.dumps(results,indent=2))
