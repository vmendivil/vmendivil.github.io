"""Real Chromium verification. Requires existing Playwright, no installation."""
import asyncio, base64, json, os, sys
from pathlib import Path
sys.path.insert(0, '/home/trex/.hermes/profiles/dev/cache/scratch/hardware-study-tools')
from playwright.async_api import async_playwright
ROOT=Path(__file__).resolve().parent
async def run():
    results={'url':'http://127.0.0.1:8920/','viewports':{},'console_errors':[],'request_failures':[],'checks':{}}
    async with async_playwright() as p:
        browser=await p.chromium.launch(headless=True,args=['--enable-unsafe-swiftshader'])
        desktop=await browser.new_page(viewport={'width':1440,'height':900},device_scale_factor=1)
        desktop.on('pageerror',lambda e:results['console_errors'].append(str(e)))
        desktop.on('requestfailed',lambda r:results['request_failures'].append(r.url))
        desktop.on('console',lambda m:results['console_errors'].append(m.text) if m.type=='error' else None)
        desktop.on('response',lambda r:results['request_failures'].append(f'{r.status} {r.url}') if r.status>=400 else None)
        await desktop.goto(results['url']); await desktop.wait_for_function('window.worldReady === true'); await desktop.evaluate('document.fonts.ready'); await desktop.wait_for_timeout(700)
        await desktop.screenshot(path=str(ROOT/'.impeccable/review/desktop.png'))
        await desktop.screenshot(path=str(ROOT/'.impeccable/review/desktop-full.png'),full_page=True)
        results['viewports']['desktop']=await desktop.evaluate("({width:innerWidth,documentWidth:document.documentElement.scrollWidth,fontLoaded:document.fonts.check('16px Manrope'),canvas:[document.querySelector('canvas').width,document.querySelector('canvas').height],title:document.querySelector('#scene-title').textContent})")
        for i in range(3):
            if i: await desktop.click('#next'); await desktop.wait_for_timeout(200)
            png=await desktop.evaluate("document.querySelector('canvas').toDataURL('image/png').split(',')[1]")
            (ROOT/f'assets/world-{i+1}.png').write_bytes(base64.b64decode(png))
            from PIL import Image, PngImagePlugin
            image=Image.open(ROOT/f'assets/world-{i+1}.png').convert('RGBA')
            bounds=image.getbbox()
            if bounds:
                x0,y0,x1,y1=bounds
                image=image.crop((max(0,x0-18),max(0,y0-18),min(image.width,x1+18),min(image.height,y1+18)))
            meta=PngImagePlugin.PngInfo()
            meta.add_text('Source', 'Original procedural 3D geometry authored in worlds.js, rendered with Three.js r170 in local Chromium. No reference pixels or borrowed models. Transparent canvas render, cropped to alpha bounds with 18px padding.')
            image.save(ROOT/f'assets/world-{i+1}.png',pnginfo=meta)
            if i: await desktop.screenshot(path=str(ROOT/f'.impeccable/review/scene-{i+1}.png'))
        await desktop.click('#next')
        # Traverse native controls using actual keyboard input, not synthetic JS clicks.
        await desktop.reload();await desktop.wait_for_function('window.worldReady === true')
        focused=[]
        for i in range(6):
            await desktop.keyboard.press('Tab')
            focused.append(await desktop.evaluate("({tag:document.activeElement.tagName,text:document.activeElement.textContent.trim(),id:document.activeElement.id,outline:getComputedStyle(document.activeElement).outlineStyle})"))
        assert await desktop.locator('#next').evaluate('(e)=>e===document.activeElement')
        await desktop.keyboard.press('Enter');assert await desktop.locator('#scene-title').inner_text()=='The everyday workshop'
        await desktop.keyboard.press('Space');assert await desktop.locator('#scene-title').inner_text()=='The curiosity observatory'
        await desktop.keyboard.press('Shift+Tab');await desktop.keyboard.press('Enter');assert await desktop.locator('#scene-title').inner_text()=='The everyday workshop'
        await desktop.keyboard.press('Escape');assert await desktop.locator('#scene-title').inner_text()=='The everyday workshop'
        results['checks']['keyboard']={'passed':True,'focus_sequence':focused,'enter':'next / previous','space':'next','escape':'no modal; does not change scene'}
        await desktop.locator('nav a').first.click();await desktop.wait_for_timeout(500)
        results['checks']['about_navigation']=await desktop.evaluate("location.hash === '#about' && document.querySelector('#about').getBoundingClientRect().top < 100")
        results['checks']['linkedin']=await desktop.locator('.contact-link').get_attribute('href')
        mobile=await browser.new_page(viewport={'width':390,'height':844},device_scale_factor=1,is_mobile=True,has_touch=True)
        mobile.on('pageerror',lambda e:results['console_errors'].append(str(e)))
        await mobile.goto(results['url']);await mobile.wait_for_function('window.worldReady === true');await mobile.evaluate('document.fonts.ready');await mobile.wait_for_timeout(700)
        await mobile.screenshot(path=str(ROOT/'.impeccable/review/mobile.png'))
        await mobile.screenshot(path=str(ROOT/'.impeccable/review/mobile-full.png'),full_page=True)
        results['viewports']['mobile']=await mobile.evaluate("({width:innerWidth,documentWidth:document.documentElement.scrollWidth,fontLoaded:document.fonts.check('16px Manrope'),canvas:[document.querySelector('canvas').width,document.querySelector('canvas').height]})")
        results['checks']['mobile_measures']=await mobile.evaluate("Object.fromEntries(['.identity span','.collection-intro p','.caption-number','.art-note','.about','.contact'].map(s=>{const c=getComputedStyle(document.querySelector(s));return[s,{fontSize:c.fontSize,paddingLeft:c.paddingLeft,paddingRight:c.paddingRight}]}))")
        await mobile.locator('#next').tap();assert await mobile.locator('#scene-title').inner_text()=='The everyday workshop'
        await mobile.locator('#previous').tap();assert await mobile.locator('#scene-title').inner_text()=='The homelab garden'
        results['checks']['touch_browsing']=True
        await mobile.emulate_media(reduced_motion='reduce')
        results['checks']['reduced_motion']=await mobile.evaluate("matchMedia('(prefers-reduced-motion: reduce)').matches && getComputedStyle(document.documentElement).scrollBehavior==='auto'")
        await mobile.locator('#next').tap();assert await mobile.locator('#scene-title').inner_text()=='The everyday workshop'
        # Genuine GPU-context loss switches to locally rendered authored still.
        await mobile.evaluate("document.querySelector('canvas').getContext('webgl2').getExtension('WEBGL_lose_context').loseContext()")
        await mobile.wait_for_function("window.worldReady === 'fallback'");await mobile.locator('#next').tap()
        await mobile.wait_for_function("document.querySelector('#fallback').complete && document.querySelector('#fallback').naturalWidth>0")
        results['checks']['webgl_fallback']=await mobile.locator('#fallback').get_attribute('src')=='assets/world-3.png'
        assert all(v['width']==v['documentWidth'] for v in results['viewports'].values())
        assert not results['console_errors'] and not results['request_failures']
        await browser.close()
    (ROOT/'results.json').write_text(json.dumps(results,indent=2))
    print(json.dumps(results,indent=2))
asyncio.run(run())
