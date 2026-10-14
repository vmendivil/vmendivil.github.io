# Prototype 07 — Future Archive
Independent Rohit-inspired cinematic scroll presence for Victor Mendivil. Runtime: `index.html`, `style.css`, `scene.js`, and `assets/` only. Copy only these files into the parent's preview route; PRODUCT, DESIGN, SURFACE and evidence are private development documentation.

## Local run
From this directory: `python -m http.server 9017 --bind 127.0.0.1`
Open http://127.0.0.1:9017 . Stop the server after checking. Parent owns LAN hosting. No CDN, build step, Node installation, credentials or secure context needed.

## Interaction
Ordinary scroll and anchor navigation. Pause/resume ambient lens motion. Reduced motion provides a composed still and disables the motion-only button. Context remains accessible if WebGL fails. Contact opens the provided LinkedIn URL; no form or message delivery exists.

## Provenance
All sculptural geometry and the studio reflection texture are authored procedurally in `scene.js`; no screenshot pixels, character models, portrait rasters or source designer assets ship. Authored favicon and decorative thread are vector work. Three.js 0.170.0 is self-hosted under MIT (`assets/THREE-LICENSE.txt`), retrieved from jsDelivr. Chakra Petch Medium was retrieved from google/fonts and ships under SIL OFL (`assets/FONT-LICENSE.txt`). Body Arial is a local system font, not a network request. There are no shipping raster images; evidence screenshots are browser captures, not site assets.

## Verification
Current content/mobile evidence is `.impeccable/review/content-results.json`; before/final captures and historical original build evidence stay alongside it. See `VERIFICATION.md` and `content-mobile-fixes.md`.

With the loopback server running, use the existing read-only devPilot Playwright installation (no installs):
```
node verify-content.cjs
node verify-content.cjs --checks-only
```
The default run writes desktop/mobile/landscape main, readable context and full-page captures plus approach/interests/contact section captures. Allow a generous execution budget (360 seconds). `--checks-only` repeats trusted interaction/geometry tests without another visual capture cycle. The runner launches its own isolated Chromium process, closes it and writes raw JSON. It checks all six required viewport classes, visible 44px targets, readable type, native touch anchors, keyboard traversal, pause pixel stability and reduced motion. This is Chromium emulation, not physical iPhone/Safari certification or visual acceptance. Historical original-build browser sessions used port 8917 and remain documented in VERIFICATION.
