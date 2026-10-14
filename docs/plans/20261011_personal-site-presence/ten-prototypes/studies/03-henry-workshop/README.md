# After Hours — study 03
An original illustrative evening workshop for Victor Mendivil. No camera navigation required: inspect the monitor, server, notebook and envelope, or use direct navigation. Selection updates both the actual WebGL monitor and readable notes. Mobile keeps notes in the normal page flow. Lamp and ambient-motion controls work; reduced motion starts paused; failed WebGL retains all information.

## Run
From this directory:
```sh
python3 -m http.server 8913 --bind 127.0.0.1
```
Open http://127.0.0.1:8913/ . Worker server has been stopped. Parent owns LAN hosting.

## Shipping files
Copy only `index.html`, `style.css`, `room.js`, and `assets/` into the parent's matching preview directory. All runtime paths are relative and plain-HTTP compatible. Keep PRODUCT, SURFACE, DESIGN, README, verification script/results and `.impeccable/` outside the shipping assembly.

## Current content/mobile checks
Serve on loopback port 9013, then run `node content-mobile-checks.cjs` from this directory. Uses the existing read-only devPilot Playwright dependency, no install. Raw current evidence is `content-mobile-results.json`; original results and detector are historical.

## Historical browser checks
Run in an isolated browser_exec session `ten03` after opening the local page:
```python
exec(open('/home/trex/vhmc/projects/vmendivil.github.io/docs/plans/20261011_personal-site-presence/ten-prototypes/studies/03-henry-workshop/browser-checks.py').read())
```
The script is a browser_exec helper script, not standalone Python. See VERIFICATION.md for supplemental fallback/error/raycast steps and exact limits.

## Provenance / licenses
Geometry, material arrangement, screen artwork, wood and denim texture canvases are original code-authored work in `room.js`; procedural textures are generated at runtime, not shipping rasters. No portrait or source-reference pixels used. The reference screenshot is inspiration only and is not shipped. Evidence PNGs are local browser captures of this prototype, not production artwork.
- Three.js 0.170.0: https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js ; MIT license in assets/THREE-LICENSE.txt.
- Vollkorn variable font: Google Fonts `ofl/vollkorn/Vollkorn[wght].ttf`; OFL in assets/VOLLKORN-OFL.txt.
- Alegreya Sans Regular: Google Fonts `ofl/alegreyasans/AlegreyaSans-Regular.ttf`; OFL in assets/ALEGREYA-OFL.txt.
All vendored locally. Public identity/contact facts follow approved BUILD_BRIEF.md; no invented client stories or claims.
