"""Bounded reviewer-fix verification; uses existing Playwright, no installs."""
import functools, hashlib, http.server, json, threading
from pathlib import Path
from playwright.sync_api import sync_playwright
root = Path(__file__).resolve().parent
out = root / '.impeccable/review'
checks = []
def check(name, passed, detail=None):
    checks.append(dict(name=name, passed=bool(passed), detail=detail))
    (root / 'fix-checks-partial.json').write_text(json.dumps(checks, indent=2))
server = http.server.ThreadingHTTPServer(('127.0.0.1', 8914), functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(root)))
threading.Thread(target=server.serve_forever, daemon=True).start()
url = 'http://127.0.0.1:8914/'
errors = []
try:
    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path='/home/trex/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome', args=['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
        def page(context):
            pg = context.new_page()
            pg.on('pageerror', lambda e: errors.append(str(e)))
            pg.goto(url, timeout=90000)
            pg.wait_for_function('!!window.__theater')
            pg.evaluate('document.fonts.ready')
            pg.wait_for_timeout(800)
            return pg
        desktop = page(browser.new_context(viewport={'width':1440,'height':900}))
        desktop.screenshot(path=str(out / 'desktop.png'))
        desktop.mouse.move(950, 330)
        desktop.mouse.wheel(0, 180)
        desktop.wait_for_function('window.__theater.chapter === 1')
        desktop.wait_for_timeout(2100)
        check('Native Playwright mouse wheel advances chapter', desktop.evaluate('window.__theater.chapter') == 1)
        desktop.screenshot(path=str(out / 'wheel-after.png'))
        desktop.context.close()
        mobile = page(browser.new_context(viewport={'width':390,'height':844}, is_mobile=True, has_touch=True, device_scale_factor=1, reduced_motion='reduce'))
        mobile.screenshot(path=str(out / 'mobile.png'))
        metrics = mobile.evaluate('''() => {let r=s=>document.querySelector(s).getBoundingClientRect(), f=s=>parseFloat(getComputedStyle(document.querySelector(s)).fontSize);return {introBottom:r('.title').bottom, stageTop:r('#stage').top, paragraphSize:f('.title p'),captionSize:f('.stage-note'),pauseSize:f('.motion'),pauseHeight:r('.motion').height,pauseWidth:r('.motion').width,captionRight:r('.stage-note').right,pauseLeft:r('.motion').left}}''')
        check('Mobile intro band ends above canvas', metrics['introBottom'] <= metrics['stageTop'], metrics)
        check('Mobile intro remains readable 16px', metrics['paragraphSize'] >= 16)
        check('Mobile caption 14px / pause 12px / target 44px', metrics['captionSize'] >= 14 and metrics['pauseSize'] >= 12 and metrics['pauseHeight'] >= 44 and metrics['pauseWidth'] >= 44)
        check('Mobile caption and pause do not overlap', metrics['captionRight'] <= metrics['pauseLeft'])
        mobile.locator('#next').tap()
        mobile.wait_for_function('window.__theater.chapter === 1')
        mobile.locator('.theater').scroll_into_view_if_needed()
        mobile.evaluate('scrollTo({top:0,behavior:"instant"})')
        mobile.wait_for_timeout(200)
        mobile.screenshot(path=str(out / 'mobile-touch-after.png'))
        check('Native Playwright touchscreen next tap', mobile.evaluate('window.__theater.chapter') == 1)
        for i in range(4):
            mobile.locator(f'.chapters [data-chapter="{i}"]').tap()
            check(f'Native touchscreen direct chapter {i}', mobile.evaluate('window.__theater.chapter') == i)
            check(f'Mobile chapter {i} no horizontal overflow', mobile.evaluate('document.documentElement.scrollWidth <= innerWidth'))
        mobile.locator('.motion').tap()
        check('Native touchscreen pause toggle', mobile.evaluate('!window.__theater.paused'))
        mobile.context.close()
        reduced = page(browser.new_context(viewport={'width':1440,'height':900}, reduced_motion='reduce'))
        check('Reduced motion starts paused', reduced.evaluate('window.__theater.reduced && window.__theater.paused'))
        before = reduced.locator('#stage').screenshot()
        reduced.screenshot(path=str(out / 'reduced-before.png'))
        reduced.locator('#next').click()
        reduced.wait_for_timeout(200)
        after = reduced.locator('#stage').screenshot()
        reduced.screenshot(path=str(out / 'reduced-after.png'))
        reduced.wait_for_timeout(450)
        stable = reduced.locator('#stage').screenshot()
        check('Reduced motion visible changed canvas', before != after, {'before_sha256':hashlib.sha256(before).hexdigest(),'after_sha256':hashlib.sha256(after).hexdigest()})
        check('Reduced motion post-cut canvas remains still', after == stable)
        check('Reduced motion chapter changed to making', reduced.evaluate('window.__theater.chapter === 1'))
        check('No browser page errors', not errors, errors)
        browser.close()
finally:
    server.shutdown()
    server.server_close()
result = {'checks':checks,'passed':sum(c['passed'] for c in checks),'total':len(checks),'engine':'Playwright Chromium 1243, software WebGL','input':'Playwright touchscreen .tap() and mouse.wheel(), not DOM click dispatch','capture_round':'Single reviewer-fix recapture batch','limits':['Physical phone and Safari not available.','Detector already run once; retained historical raw evidence, not rerun.']}
(root / 'fix-results.json').write_text(json.dumps(result, indent=2))
print(json.dumps(result, indent=2))
assert all(c['passed'] for c in checks)
