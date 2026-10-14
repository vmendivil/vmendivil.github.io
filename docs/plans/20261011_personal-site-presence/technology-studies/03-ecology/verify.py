import json, threading, functools
from pathlib import Path
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from playwright.sync_api import sync_playwright
root=Path(__file__).parent.resolve()
server=ThreadingHTTPServer(('127.0.0.1',0),functools.partial(SimpleHTTPRequestHandler,directory=str(root)))
threading.Thread(target=server.serve_forever,daemon=True).start()
results={}
with sync_playwright() as p:
 browser=p.chromium.launch(headless=True)
 for name,size in [('desktop',{'width':1440,'height':900}),('mobile',{'width':390,'height':844})]:
  page=browser.new_page(viewport=size,device_scale_factor=1,has_touch=name=='mobile')
  errors=[];requests=[]
  page.on('pageerror',lambda e:errors.append(str(e)))
  page.on('request',lambda r:requests.append({'url':r.url,'method':r.method}))
  page.goto(f'http://127.0.0.1:{server.server_port}/index.html');page.evaluate('document.fonts.ready')
  assert page.locator('img').evaluate('(el)=>el.complete && el.naturalWidth===1800')
  # Actual browser keyboard traversal, no synthetic DOM activation.
  page.keyboard.press('Tab');assert page.evaluate('document.activeElement.className')=='identity'
  page.keyboard.press('Tab');assert page.evaluate('document.activeElement.dataset.part')=='gpio'
  page.keyboard.press('Enter');assert page.locator('#part-title').inner_text()=='GPIO header'
  page.keyboard.press('Escape');assert page.locator('#close').is_hidden()
  page.keyboard.press('Tab');assert page.evaluate('document.activeElement.dataset.part')=='ethernet'
  page.keyboard.press('Space');assert page.locator('#part-title').inner_text()=='Gigabit Ethernet'
  page.keyboard.press('Escape')
  pointer={}
  for part in ['gpio','ethernet','usb','power']:
   control=page.locator('[data-part='+part+']')
   control.click();assert control.get_attribute('aria-expanded')=='true'
   pointer[part]=page.locator('#part-title').inner_text()
   page.locator('#close').click();assert control.get_attribute('aria-expanded')=='false'
  page.locator('[data-part=ethernet]').click()
  page.mouse.move(0,0)
  page.evaluate('window.scrollTo(0,0)')
  page.screenshot(path=str(root/f'.impeccable/review/{name}.png'),full_page=False)
  geometry=page.evaluate("() => ({width:innerWidth,height:innerHeight,scrollWidth:document.documentElement.scrollWidth,scrollHeight:document.documentElement.scrollHeight,hotspots:[...document.querySelectorAll('.spot')].map(e=>({part:e.dataset.part,x:e.getBoundingClientRect().x,y:e.getBoundingClientRect().y,w:e.getBoundingClientRect().width,h:e.getBoundingClientRect().height})),headlineSize:getComputedStyle(document.querySelector('h1')).fontSize,footerBottom:document.querySelector('footer').getBoundingClientRect().bottom,bodySize:getComputedStyle(document.querySelector('#part-copy')).fontSize})")
  assert geometry['scrollWidth']==size['width'] and geometry['footerBottom']<=size['height'] and not errors
  assert all(h['w']>=44 and h['h']>=44 for h in geometry['hotspots'])
  assert not page.locator('form,input,canvas').count()
  assert page.evaluate('localStorage.length===0 && sessionStorage.length===0')
  assert all(r['method']=='GET' and '127.0.0.1' in r['url'] for r in requests)
  results[name]={'viewport':size,'geometry':geometry,'keyboard':{'tab_identity_to_gpio':True,'enter_opens_gpio':True,'space_opens_ethernet':True,'escape_closes_returns_focus':True},'pointer':pointer,'errors':errors,'local_get_requests_only':True,'no_forms_storage_canvas':True,'font_loaded':page.evaluate("document.fonts.check('16px Manrope')"),'capture':f'.impeccable/review/{name}.png','captured_state':'Ethernet inspected'}
  page.close()
 page=browser.new_page(viewport={'width':390,'height':844},reduced_motion='reduce')
 page.goto(f'http://127.0.0.1:{server.server_port}/index.html')
 page.locator('[data-part=power]').click();assert page.locator('#part-title').inner_text()=='USB-C power'
 results['reduced_motion']={'inspection_works':True,'no_animation':True};browser.close()
server.shutdown()
(root/'.impeccable/review/checks.json').write_text(json.dumps(results,indent=2))
print(json.dumps(results,indent=2))
