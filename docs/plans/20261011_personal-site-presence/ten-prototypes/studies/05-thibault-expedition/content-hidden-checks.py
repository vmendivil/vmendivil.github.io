# pyright: reportUndefinedVariable=false
# Helpers are supplied by browser_exec, not imported in ordinary Python.
# Run this file with browser_exec in isolated session browsercontent05.
# Actual daemon visibility, never a mocked property/event.
import time, json
from pathlib import Path
new_tab('http://127.0.0.1:9015')
wait_for_load()
def state():
    return js('({visibility:document.visibilityState,draws:window.__expedition?.drawCount,guide:!document.querySelector("#guide").hidden}) /* '+str(time.time_ns())+' */')
before=state()
time.sleep(2)
after=state()
# Programmatic chapter activation intentionally tests invalidation, not trusted input.
js('document.querySelector("#guide-open").click(); document.querySelector("[data-chapter=erp]").click()')
time.sleep(2)
reading=state()
assert before['visibility']==after['visibility']==reading['visibility']=='hidden'
assert before['draws']==after['draws']==reading['draws']==0
result={'runner':'browser-use daemon actual hidden lifecycle, no mocked visibility','url':'http://127.0.0.1:9015','before':before,'after':after,'hiddenNavigation':reading,'navigationInput':'programmatic invalidation only; trusted input tested separately','status':'passed'}
Path('/home/trex/vhmc/projects/vmendivil.github.io/docs/plans/20261011_personal-site-presence/ten-prototypes/studies/05-thibault-expedition/content-hidden-results.json').write_text(json.dumps(result,indent=2)+'\n')
print(json.dumps(result,indent=2))
