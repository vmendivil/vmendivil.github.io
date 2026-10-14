# Threshold — study 13
Complete isolated local prototype for Victor Mendivil, inspired by the **current** Arthur Engel record and `https://aengel.io`, not the older space portfolio.

## Run
From this directory:
```sh
python -m http.server 9113 --bind 127.0.0.1
```
Open `http://127.0.0.1:9113/`. The builder stopped its verification server at handoff; the parent owns LAN assembly. Plain HTTP, self-hosted assets and Three.js, no runtime CDN or WebGPU requirement.

## Runtime allowlist
`index.html`, `style.css`, `interface.js`, `scene.js`, `assets/` (JPG art, font, Three.js and licenses). Never publish private PRODUCT/SURFACE/DESIGN, tests, result files or `.impeccable` evidence. Parent should copy runtime only into its own isolated build13/preview route; this worker has not touched shared preview or production.

## What works
Ordinary scroll reveals different layers through lateral camera framing. Direct Practice / Curiosity / Contact anchors remain available. Each substantial reading continuation is a native disclosure in the document, not a modal/HUD. Escape closes and restores summary focus. LinkedIn is the verified external route, not a form. The desktop motion control pauses ambient light; reduced motion starts paused and disables smooth scrolling. WebGL failure uses the rendered still. Phones/tablets use authored portrait renders and readable prose without creating WebGL.

## Reproduce evidence
Existing read-only Playwright runner is `/home/trex/vhmc/projects/devPilot/node_modules/playwright`.
```sh
node render-assets.cjs    # only when changing the artwork; do this BEFORE every final capture
node stamp-provenance.cjs # immediately after regeneration; embeds exact origin and renderer/source hashes
node fresh-verify.cjs     # six viewports, 60 current state/chapter captures, native inputs and fallback
node verify-optics.cjs
node capture-board.cjs    # 42 viewport-frame index; full chapter captures indexed by fresh-results.json
```
`fresh-verify.cjs` creates six-size main, three closed chapter viewport frames, three expanded reading variants, and entire closed chapter captures containing the correct art/prose/contact. `fresh-results.json` pins exact runtime and capture SHA-256, timestamps and actual assertions; `optical-results.json` records the current optical checks. Old `verify.cjs`, `recapture-contact.cjs` and `results.json` are retained historical helpers/evidence, not the final freshness authority. No package installation required. Detector was already run once and was NOT rerun for this correction; preserve historical `detector-raw.json`. Freeze runtime and JPEGs before capture; any later runtime/asset change invalidates the entire matrix.

## Provenance & licensing
All eight art JPGs are original scene.js procedural renders, not source-gallery images or generative-image output. Their JPEG comments carry origin details; `raster-provenance.json` records SHA-256 and `artwork-origin.txt` records the authoring description. Three.js 0.170.0 is MIT; Barlow Condensed Semibold is SIL OFL. License files are in assets. No Arthur source assets, shader, arch, flower or geometry reused.

## Limits
Chromium emulation plus trusted synthetic touch, not physical phone or Safari certification. Parent fresh comparative visual review and assembled LAN tests remain outstanding. The artwork is a deliberate suspended mineral-layer study, not a recreation of Arthur’s dense environmental vegetation. No fictional project proof is offered.
