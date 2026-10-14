# Entry 11 — bounded material/light correction

Status: implemented and browser-verified; fresh parent aesthetic verdict pending. One material-art batch, then final capture/testing; no topology, transcript, identity or broadcast-control replacement. `index.html`, `main.js` and `style.css` were not edited.

## Actual art changes
- Window: separate pane tint, soft distant pinlights, faint original lamp reflection and pane-edge doubles behind foreground rain; droplets have occluded edges and offset highlights. Skyline remains an independently authored vector city, not a sampled photograph.
- Lighting: broad warm pool moved behind opaque furniture, avoiding the earlier uniform light wash over object silhouettes. Cool screen spill and warm table reflections are local. CRT edges, ceramic, leaves, terracotta and lamp base respond individually.
- Mug/saucer: curved body, dark inner lip/liquid, layered handle occlusion, small reflected edge and foot/contact shadow.
- Plant: varied original curved leaf contours with lit ridges/veins, dimensional stems, rounded pot with rim/soil and ceramic-like terracotta response. Not repeated foliage stamps.
- Turntable: explicit plinth end/thickness, platter side/top, interrupted vinyl reflections and grooves, spindle, elevated tonearm and offset shadow, cartridge, transparent cover edges/hinges.
- Cabinet: recessed shelving reveals, lit lower edges, end-face, handle shadow/highlight, irregular walnut figure, local horizontal-board reflection. Sofa cushions and lamp foot also gained curved local shading.

These are authored SVG contours, occlusion and reflected-light cues. They are not ray tracing, photographic reconstruction or physically simulated materials; the result remains a vector illustration with less optical complexity than the reference. No Felix art, pixels, model or code was imported.

## Raw checks and current evidence
- Executed `python3 author-scene.py`: 1,318 emitted SVG fragments; XML parsed successfully.
- Executed `ROUND=material-fix-final node verify.cjs`: pass; six viewport flows plus reduced-motion, fetch-fallback and no-JavaScript reports; 39 screenshots; no console/network errors in the normal six flows.
- Viewports: 320×740, 390×844, 430×932, 844×390 landscape, 768×1024 tablet, 1440×900 desktop.
- All four channel illustrations/text, channel navigation, read/long-content/contact, explicit return, actual Tab/Enter/Space/Escape, optional number keys, trusted emulated touch/pointer, pause/resume, reduced-motion immediate still channel swap, still-image fetch fallback and essential no-JavaScript contact were exercised. Native browser events, not synthetic DOM activation. No separate menu exists: the original four-channel navigation remains the menu.
- Executed `node capture-contact-opening.cjs`: two supplementary top-of-contact desktop/mobile captures with heading/transcript visibility assertions; no page errors. Existing `contact-*` captures are continuation/end-of-program views, not opening views.
- Raw results: `material-fix-results.json`, `material-fix-capture-checks.json`.
- Current capture directory: `.impeccable/review/material-fix-final/`. All 41 unique capture paths were counted and checked for existence in code.
- Visually inspected final desktop/mobile opening, desktop/mobile content, landscape, desktop/mobile contact continuation and desktop/mobile contact opening. Warm rainy lounge and cream reading grammar are preserved; no new UI clipping observed in that bounded inspection.
- Final SVG SHA-256: `7060410a8e73b9f67a143cded14d97c6b3b4e79274bb1b0849e08d45a895aad7`; matches the complementary capture-check artifact. No subsequent asset edit.
- Original detector output `.impeccable/review/detector-raw.json` retained as historical pre-material-fix evidence. Detector was not rerun, per delegated scope. Earlier screenshots/results also remain unchanged.

## Documentation and boundary
Updated `DESIGN.md`, `SURFACE.md`, `.impeccable/design.json`, `ASSET_PROVENANCE.md`, and marked `FINISH_REVIEW.md` pending parent material verdict rather than reusing the older local ship disposition. Extended `verify.cjs` solely to write this round into separate evidence paths; added `capture-contact-opening.cjs`.

All writes stayed inside study 11. No old-ten/sibling, root gallery, LAN assembly, preview publication, production, git commit or host-install changes. Loopback preview for review: `http://127.0.0.1:9111/`.

Limits: Chromium desktop/mobile emulation only; physical-device Safari unverified. LinkedIn destination URL verified without navigating externally or submitting anything. Reference craft acceptance and sibling-comparison verdict belong to the parent. An optional montage attempt failed because the default Python lacks Pillow; individual browser captures were inspected directly instead, with no package install and no loss of verification evidence.
