# Study 18 — bounded utility / portrait correction

## Implemented and verified
- Ochre onward link and caption use #292619 opaque text-sized grounds; cyan uses #123139. Paper text contrast is 13.46:1 / 12.23:1. The luminous strand stays exposed everywhere outside the short utility grounds. No boxes were added to reading chapters. Mint protected labels are untouched.
- Portrait cyan moon moved from world x=20 to x=4, retaining y=18 / z=-145, original camera, terrain and materials. Wide moon remains x=20. Fresh 320px runtime capture shows the entire silhouette below the heading, inside the right edge. Runtime/poster breakpoint agrees at 600px.
- `node render-stills.cjs cyan-portrait` regenerated only the affected cyan portrait still. Ochre scene pixels did not change; its utility corrections are HTML/CSS and work identically over the existing fallback.
- `node verify.cjs` passed six specified viewports plus reduced-motion and unavailable-WebGL cases. Native Tab/Space/Enter/Escape, trusted touch taps, chapter anchors, all onward links/return, reachable exact LinkedIn action, readable body, no width overflow, three live renderers, zero page errors / HTTP failures. Supplemental wheel/pixel response, live reduced-motion and no-JavaScript menu/contact passed.
- All 42 PNG captures are freshly generated after the final raster: main/content desktop, phone and landscape; complete reading/contact; scenes on desktop, three phone widths and landscape; ochre/cyan phone reduced-motion and WebGL-disabled fallback. Visually inspected affected narrow cyan/runtime, ochre/runtime, cyan/reduced fallback, ochre/WebGL-disabled fallback and content phone/landscape together. Historical evidence-board JPGs are NOT final evidence.
- All factual text, the three worlds and ordinary guided journey remain unchanged. No detector rerun: existing raw result remains historical. No old-study, shared preview, production or commit changes.

## Remaining blocker — provenance refresh
Terminal Python lacks Pillow. The prepared provenance script now supports selecting only `cyan-portrait` for metadata embedding while retaining unchanged raster files. An attempt to run it with the tool interpreter (where Pillow imports) via `runpy` triggered an approval card; that execution is pending and was not retried or bypassed.

Consequently the regenerated cyan PNG currently lacks the previous embedded provenance, and `asset-provenance.json` still contains its old hash. Do not claim metadata completion. Current unembedded raster SHA256: `b1faca6848e87ea6b8f777fb0d5a97a8baf4f98d16c7ae93e7623c552ba83700`.

After approving the pending execution, `provenance.py cyan-portrait` embeds original-author/render composition metadata, rebuilds the full asset hash manifest and refreshes evidence boards. No pixel changes or browser recapture are required for a metadata-only PNG rewrite. Parent must confirm the new manifest hash and embedded Source/Creation/Composition values.

## Parent verdict requested
Score separately: (1) ochre utilities, (2) cyan utilities, (3) whole portrait moon clear of heading, (4) preserved journey/mint/strand. Fresh primary evidence: `.impeccable/review/scene-0-mobile.png`, `scene-1-narrow.png`, `scene-1-mobile.png`, `scene-1-wide-phone.png`, `scene-0-mobile-webgl-disabled.png`, `scene-1-mobile-reduce.png`, `mobile.png`, `landscape.png`, `content-mobile.png`, `content-landscape.png`; actual test assertions in `results.json` and `supplemental-results.json`.

Local runtime http://127.0.0.1:9118/ is running from this study only (process proc_8a60ae7cd97d). Parent owns assembly/LAN verification and final acceptance. Physical iPhone/Safari remains untested. PRODUCT schema drift was reported by context; `impeccable init` is offered separately, not performed in this narrow fix.
