/* Portable, self-closing assembled-preview smoke and hash verification. */
const { chromium } = require('playwright');
const { spawn } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const collection = path.join(root, 'docs/plans/20261011_personal-site-presence/ten-prototypes');
const port = Number(process.env.PREVIEW_TEST_PORT || 9878);
const base = `http://127.0.0.1:${port}`;
const out = path.join(root, 'verification', 'clone-readiness');
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
(async () => {
  fs.mkdirSync(out, { recursive: true });
  const rows = JSON.parse(fs.readFileSync(path.join(collection, 'preview/manifest.json')));
  assert.equal(rows.length, 22);
  assert.equal(new Set(rows.map(r => r.slug)).size, 22);
  assert(rows.every(r => r.ready));
  const server = spawn(process.env.PYTHON || 'python3', [path.join(collection, 'serve_preview.py'), '--bind', '127.0.0.1', '--port', String(port)], { stdio: ['ignore', 'pipe', 'pipe'] });
  let serverLog = '';
  server.stdout.on('data', data => { serverLog += data; });
  server.stderr.on('data', data => { serverLog += data; });
  let browser;
  const results = [];
  try {
    for (let n = 0; n < 80; n++) {
      if (server.exitCode !== null) throw Error(`Preview failed: ${serverLog}`);
      if (serverLog.includes('Preview URL:')) break;
      await wait(100);
    }
    assert(serverLog.includes('Preview URL:'), 'Preview readiness not observed');
    browser = await chromium.launch({ headless: true, args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
    for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
      const context = await browser.newContext({ viewport, hasTouch: true });
      let page = await context.newPage();
      page.setDefaultTimeout(90000);
      await page.goto(base);
      const galleryLinks = await page.locator('a[href]').evaluateAll(es => es.map(e => e.getAttribute('href')));
      for (const row of rows) assert(galleryLinks.some(h => h.includes(row.slug)), `Missing gallery link ${row.slug}`);
      await page.close();
      for (const row of rows) {
        page = await context.newPage();
        page.setDefaultTimeout(90000);
        const errors = [], failed = [];
        const onError = e => errors.push(e.message);
        const onResponse = r => { if (r.status() >= 400) failed.push(`${r.status()} ${r.url()}`); };
        page.on('pageerror', onError); page.on('response', onResponse);
        try {
          await page.goto(`${base}/${row.slug}/`, { waitUntil: 'load' });
          await page.evaluate(() => document.fonts.ready);
          await wait(500);
          const source = page.locator('#prototype-source-link');
          assert.equal(await source.getAttribute('href'), row.source_url);
          assert.equal(await source.getAttribute('target'), '_blank');
          const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
          const brokenImages = await page.locator('img').evaluateAll(es => es.filter(e => e.complete && !e.naturalWidth && e.loading !== 'lazy').map(e => e.src));
          assert(!overflow, `${row.slug} overflow`);
          assert.equal(errors.length, 0, JSON.stringify(errors));
          assert.equal(failed.length, 0, JSON.stringify(failed));
          assert.equal(brokenImages.length, 0, JSON.stringify(brokenImages));
          // Exact post-assembly runtime readback, plus native Contact activation.
          if ([10, 11, 12].includes(row.number)) {
            const inventory = JSON.parse(fs.readFileSync(path.join(collection, 'studies', row.slug, 'fidelity/pending-shipping.json')));
            for (const [relative, expected] of Object.entries(inventory.sha256)) {
              const response = await page.request.get(`${base}/${row.slug}/${relative}`);
              assert(response.ok(), relative);
              let body = await response.body();
              // HTML has verified preview-only comparison chrome injected by server.
              if (relative.endsWith('.html')) body = Buffer.from(body.toString('utf8').replace(/\n<!-- Preview-only source comparison; approved 1559174714826563705 -->\n[\s\S]*?<\/script>\n/, ''));
              assert.equal(hash(body), expected, `${row.slug}/${relative}`);
            }
            if (row.number === 11) await page.locator('[data-channel="contact"]').tap();
            else await page.locator('header a[href="#contact"]').tap();
            const contact = page.locator('a[href="https://www.linkedin.com/in/vmendivilaxdeveloper"]').first();
            await contact.scrollIntoViewIfNeeded();
            assert(await contact.isVisible());
            assert.equal(errors.length, 0);
          }
          results.push({ slug: row.slug, viewport, normalMotion: true, sourceLink: true, overflow, errors, failed, brokenImages, pass: true });
          fs.writeFileSync(path.join(out, 'results.json'), JSON.stringify({ engine: 'Chromium SwiftShader; viewport emulation, not physical Safari/GPU certification', scope: 'All22 initial/source-link smoke; 10–12 served runtime hash readback and native Contact', results }, null, 2));
          console.log(`${row.slug} ${viewport.width} PASS`);
        } finally { page.off('pageerror', onError); page.off('response', onResponse); await page.close(); }
      }
      await context.close();
    }
    assert.equal(results.length, 44);
    console.log('44/44 assembled preview checks passed');
  } finally {
    if (browser) await browser.close();
    server.kill('SIGTERM');
    await new Promise(resolve => { if (server.exitCode !== null) resolve(); else server.once('exit', resolve); });
    fs.writeFileSync(path.join(out, 'server.log'), serverLog);
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
