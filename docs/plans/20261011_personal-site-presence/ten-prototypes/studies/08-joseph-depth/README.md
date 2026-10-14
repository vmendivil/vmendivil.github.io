# Below the Surface — local prototype 08

A complete static personal-site study for Victor Mendivil, interpreted from the user-pinned Joseph atmospheric-depth reference. Original underwater stone passage with WebGL arches, fluted piers, patinated stone, marble veins, caustics, sediment, light volumes, a distant amber oculus, and scroll-linked camera depth. No reference image, astronaut, belief, or other designer asset is shipped.

## Run
From this directory:

```sh
python -m http.server 9018 --bind 127.0.0.1
```
Open `http://127.0.0.1:9018/`. No build, package install, CDN, secure context or WebGPU requirement. Worker test server has been stopped after verification. Parent owns LAN serving.

## Shipping subset
Copy `index.html`, `style.css`, `app.js`, and `assets/` only into the parent's `preview/08-joseph-depth/`. Do not publish PRODUCT, SURFACE, DESIGN, README, verification files, results, or `.impeccable/` metadata. All runtime links are relative. Keep asset license notices with the fonts and rendering library.

## Visitor path
Scroll the architectural passage or use direct About / Approach / Curiosities / Contact anchors. Ordinary page scrolling, no game or pointer camera. Pause stops ambient effects but leaves scroll-camera navigation working. Reduced motion keeps an actually visible stationary scene and native content. WebGL failure leaves the HTML journey readable. LinkedIn is the only contact route; no invented email or fake form.

## Evidence
- `verify-content.cjs` / `verify-content-stability.cjs` — reproducible current Chromium checks (run against port 9018).
- `content-mobile-results.json` / `content-stability-results.json` — current raw results.
- `.impeccable/review/content-desktop.png`, `content-mobile.png`, `content-landscape.png` — current Approach reading at desktop, portrait and landscape.
- `content-mobile-fixes.md` — scope and refinement handoff.
- `.impeccable/review/desktop.png` — 1440 × 900, settled final starting scene.
- `.impeccable/review/mobile.png` — 390 × 844, settled final starting scene.
- `.impeccable/review/contact-mobile.png` — reduced-motion contact section.
- `results.json` — observed real browser checks.
- `.impeccable/detect.raw.json` — the single unchanged raw detector output.
- `VERIFICATION.md` — checks, detector interpretation, review limits.

Current content/mobile captures show the live scene after a bounded settling wait; they do not imply the site starts paused. No independent aesthetic acceptance is claimed; parent comparative review is pending.

## Provenance / licensing
- All scene geometry, shader effects, procedural marble canvas texture and favicon were authored for this study in `app.js` / `assets/favicon.svg`. No shipping raster image exists; screenshots are browser evidence only.
- `assets/three.module.js`: Three.js 0.160.1 retrieved from `https://cdn.jsdelivr.net/npm/three@0.160.1/build/three.module.js`. MIT notice: `assets/three-LICENSE.txt`.
- `assets/tenor-sans.ttf`: Google Fonts Tenor Sans, retrieved from `https://raw.githubusercontent.com/google/fonts/main/ofl/tenorsans/TenorSans-Regular.ttf`; SIL OFL in `assets/tenor-OFL.txt`.
- `assets/karla.ttf`: Google Fonts Karla variable, retrieved from `https://raw.githubusercontent.com/google/fonts/main/ofl/karla/Karla%5Bwght%5D.ttf`; SIL OFL in `assets/karla-OFL.txt`.
- The Joseph reference was viewed only as a craft reference; its screenshot is not copied into this directory or runtime.
