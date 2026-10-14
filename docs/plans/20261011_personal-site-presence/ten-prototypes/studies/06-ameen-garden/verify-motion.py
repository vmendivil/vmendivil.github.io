# Browser Use snippet for additional real pointer/pixel evidence; execute after verify-browser.py.
import json,time
root='/home/trex/vhmc/projects/vmendivil.github.io/docs/plans/20261011_personal-site-presence/ten-prototypes/studies/06-ameen-garden'
cdp('Page.addScriptToEvaluateOnNewDocument',source="window.consoleErrors=[];const ce=console.error;console.error=(...a)=>{consoleErrors.push(a.map(String).join(' '));ce(...a)}")
cdp('Emulation.setEmulatedMedia',features=[{'name':'prefers-reduced-motion','value':'no-preference'}])
goto_url('http://127.0.0.1:8916/');wait_for_load();cdp('Page.bringToFront');time.sleep(2)
PIXELS="(()=>{let c=document.querySelector('canvas'),g=c.getContext('webgl2'),d=new Uint8Array(c.width*c.height*4),h=0;g.readPixels(0,0,c.width,c.height,g.RGBA,g.UNSIGNED_BYTE,d);for(let i=0;i<d.length;i+=4)h=(Math.imul(h,31)+d[i]+d[i+1]*3+d[i+2]*7)|0;return h})()"
def pointer():
    b=js("(()=>{let r=document.querySelector('#motion').getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2}})()")
    cdp('Input.dispatchMouseEvent',type='mouseMoved',x=b['x'],y=b['y'])
    for t in ['mousePressed','mouseReleased']:
        cdp('Input.dispatchMouseEvent',type=t,x=b['x'],y=b['y'],button='left',clickCount=1)
    time.sleep(3)
pointer();a=js(PIXELS);time.sleep(.4);b=js(PIXELS)
pauseLabel=js("document.querySelector('#motion').textContent")
pointer();cdp('Page.bringToFront');time.sleep(.4);c=js(PIXELS);time.sleep(.4);d=js(PIXELS)
resumeLabel=js("document.querySelector('#motion').textContent")
r={'pausedHashes':[a,b],'ambientHashes':[c,d],'pauseLabel':pauseLabel,'resumeLabel':resumeLabel,'foregroundSampling':True,'passed':a==b and c!=d and pauseLabel=='Resume the water' and resumeLabel=='Pause the water'}
assert r['passed']
results=json.load(open(root+'/results.json'));results['pointerMotion']=r;results['consoleErrors']=js('consoleErrors');assert results['consoleErrors']==[]
open(root+'/results.json','w').write(json.dumps(results,indent=2));print(r)
