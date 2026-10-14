# Execute with browser_exec session ten03fix (helpers pre-imported).
import json,time,base64
from pathlib import Path
root='/home/trex/vhmc/projects/vmendivil.github.io/docs/plans/20261011_personal-site-presence/ten-prototypes/studies/03-henry-workshop'
new_tab('http://127.0.0.1:8913');wait_for_load()
exec(Path(root+'/browser-checks.py').read_text().replace("root+'/results.json'","root+'/fixes.json'"))
cdp('Emulation.setDeviceMetricsOverride',width=1440,height=900,deviceScaleFactor=1,mobile=False)
goto_url('http://127.0.0.1:8913');wait_for_load();time.sleep(1)
r=json.loads(Path(root+'/fixes.json').read_text())
for section in ['contact','about']:
 point=next(x for x in js('window.workshop.inspection().targets') if x['key']==section)
 before=js('window.workshop.inspection().screenVersion')
 click_at_xy(point['x'],point['y'])
 ok=js('document.querySelector("nav [aria-pressed=true]").dataset.section')==section and js('window.workshop.inspection().screenVersion')>before
 r['assertions'].append({'name':'actual canvas raycast '+section+' updates monitor','passed':ok});assert ok
 key('Escape')
ok=js('!document.querySelector("#object-name")')
r['assertions'].append({'name':'reading eyebrow removed','passed':ok});assert ok
goto_url('http://127.0.0.1:8913');wait_for_load();time.sleep(.6)
for name,w,h,mobile in [('desktop',1440,900,False),('mobile',390,844,True)]:
 cdp('Emulation.setDeviceMetricsOverride',width=w,height=h,deviceScaleFactor=1,mobile=mobile);time.sleep(.4)
 shot=cdp('Page.captureScreenshot',format='png',captureBeyondViewport=False)
 Path(root+'/.impeccable/review/'+name+'.png').write_bytes(base64.b64decode(shot['data']))
r['captures']=['.impeccable/review/desktop.png','.impeccable/review/mobile.png']
r['detector']='Original raw historical; not rerun for bounded fixes.'
Path(root+'/fixes.json').write_text(json.dumps(r,indent=2))
print(json.dumps(r,indent=2))
