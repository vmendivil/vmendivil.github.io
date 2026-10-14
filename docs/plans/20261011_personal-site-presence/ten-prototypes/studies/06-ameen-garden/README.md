# Current all-21 fidelity pass

This section supersedes the older behavior/verification statements below. See FIDELITY_CONTRACT.md and FIDELITY_REPORT.md for actual implementation, executed evidence and limits. Preserve all previous results as historical.

From this owned directory, `node verify-fidelity.cjs` starts/stops its own loopback server on9406, using the existing read-only Playwright install. It writes private six-size evidence under fidelity-evidence/ (confirmation/ for05/06). `node capture-final.cjs` produces current normal-motion recording/closure evidence. Do not run these concurrently on the same study port or overwrite retained evidence during independent review.

Shipping runtime includes **fidelity.css** along with index.html, existing style.css, landscape.js and existing assets/. Never ship fidelity-evidence, docs, runners or .impeccable. Parent owns actualLAN assembly/source-comparison injection, not these worker servers. No build or install required.

# Quiet Current — accepted garden / botanical reading

Current scope and evidence: content-mobile-fixes.md, content-results.json and the Current content/mobile checks below. Scenic-rebuild instructions/results below are historical; the accepted renderer remains untouched.

```sh
python3 -m http.server 8916 --bind 127.0.0.1
```
Open http://127.0.0.1:8916/. Parent owns LAN assembly. No production or preview files were changed.

Shipping: `index.html`, `style.css`, `landscape.js`, `assets/` (local Three.js r170 library/MIT license, fonts/OFL licenses and SVG favicon). Plain HTTP / native WebGL2, not WebGPU. No install, build step, cross-study runtime dependency or external network request. Only library and license files were copied from a sibling; the scene, geometry, shaders and styles were not. The abandoned `garden.js` renderer was deleted. Original content, layout, typography and ordinary anchor scroll remain.

The scene is an original flowering creek bank: curved tapered bark tubes, folded instanced botanical geometry, textured eroded shoreline and stones, directional shadow maps, atmospheric background and mirrored-camera water reflection with normal distortion, specular sunlight, Fresnel and depth tint. Stylized dimensional rendering is not a claim of photorealism or Ameen-level aesthetic approval. Accessible content survives WebGL construction failure; expensive ambient rendering can be paused and is suppressed offscreen, hidden and under reduced motion.

Reproduce: start loopback server, open named Browser Use session `ten06rebuild` with `new_tab`, execute `verify-browser.py` through browser_exec. Browser helpers are injected by that runtime; this is not a standalone Python script. `results.json` preserves real assertions; `VERIFICATION.md` records capture workarounds and limits.

Final viewport/full-page evidence uses the original paths under `.impeccable/review/`. Superseded Canvas2D screenshots and results are labeled in `superseded-canvas2d/`. `detector-raw.json` is the unchanged historical single run; no detector was rerun for the rebuild. `PROVENANCE.md` records exact procedural raster methods. `REVIEW.md` requests a NEW FULL parent review of this rebuilt scene, not a prior fix-list verdict.

## Current content/mobile checks
Start `python3 -m http.server 9016 --bind 127.0.0.1`, then run `node verify-content.cjs`. Uses the existing read-only devPilot Playwright install, no package install/build required. `content-results.json` is current evidence. New `assets/essay-stem.svg` is original vector linework. The accepted `landscape.js` is unchanged. Older full-page captures are historical; current viewport captures and content/mobile fix notes are in `.impeccable/review/` and `content-mobile-fixes.md`.
