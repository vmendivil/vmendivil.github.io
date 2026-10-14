# Parent closure — 07-rohit-future

**READY for parent runtime assembly**, not assembled/LAN readiness or production/design-selection approval.

## Independent review and named repair
WebGL context loss now enters the existing text fallback, hides/disables motion, and prevents queued, scroll, preference and resize rendering until reload.

Reproduced before repair in `fidelity/parent-edge-inspection-results.json`; repaired only `scene.js`. Existing HTML, CSS, artwork, font/library assets, personal copy and navigation grammar unchanged. Confirmation: **93/93 assertions pass**, zero page/request errors in main checks and zero page errors in edge checks. No unresolved functional reproducer found within the executed scope.

- 1440×900 desktop, 390×844 trusted-touch phone emulation, 844×390 landscape; Chromium / SwiftShader, `LP_NUM_THREADS=2`.
- Main/open readings, contact and return, real Tab/Enter/Space/Escape, reduced motion, initial no-JS/WebGL failure, pause/resume and simulated hidden lifecycle. Native LinkedIn Tab/Enter opens the exact URL using an explicitly intercepted contact fixture, not a live external reachability claim.
- Real CDP touch swipe; repeated/interrupted opening/paging/return for gallery; injected real `WEBGL_lose_context` and subsequent preference/scroll changes for scenes; selective artwork-context failure and paging recovery for gallery.
- Source-frame recorded SHA256s verified against current files; preclosure shipping HTML/CSS/JS matched the earlier final hashes before these narrow fixes. No new live-original research claim.

## Evidence
- Fresh raw full-path: `fidelity/parent-confirmation-results.json`.
- Fresh repair reproducers/confirmation: `fidelity/parent-edge-inspection-results.json`, `fidelity/parent-edge-confirmation-results.json`.
- Current visual board: `fidelity/parent-confirmation-board.jpg`, independently inspected alongside source board in `fidelity/parent-inspection-board.jpg`.
- Current individual captures: `fidelity/parent-confirmation-<viewport>-<state>.png` (**35 PNGs**, including no-JS and initial WebGL failure).
- Machine readiness and exact current SHA256 inventory: `fidelity/parent-closure-results.json`, `fidelity/parent-shipping-sha256.json`.

## Runtime-only allowlist
Copy exactly these files; do not expose documentation, source research, test scripts, private JSON, or fidelity evidence:

- `index.html`
- `style.css`
- `scene.js`
- `assets/ChakraPetch-Medium.ttf`
- `assets/FONT-LICENSE.txt`
- `assets/THREE-LICENSE.txt`
- `assets/favicon.svg`
- `assets/three.module.js`

## Source fit / limits
The authored lens and cobalt editorial spreads preserve the accepted world. Scroll separates laminations and reverses camera distance; this is one original sculptural shot, not the source’s richer multi-scene figure/lab narrative. On phone, the later focal sample stops updating when the canvas goes offscreen, by design; reading continues.

Earlier six-size evidence is historical after the JS fix. Unchanged hash-matched HTML/CSS/assets and untouched successful behavior provide narrowly supporting reading evidence at 320/430/tablet; this is **not** a new six-size whole-experience pass. No physical-device, Safari, screen-reader or hardware/GPU smoothness certification. Hidden checks deliberately synthesize document visibility, not OS tab switching. Historical detector outputs are retained, not rerun.

For 07/08, current `focal-before/mid/after/reversal` frames and renderer coordinates prove real normal-motion scroll reversal; offscreen freezing is not a motion failure. For 09, existing `normal-motion-desktop.mp4` / `normal-motion-mobile.mp4` remain historical recordings of unchanged successful gallery motion; current state/angle captures and interrupted-flight assertions are fresh. The initial new 09 screencast capture timed out under software composition; retained `parent-inspection-fatal.json` is partial, not a pass. Recovery disables GPU compositing and simultaneous screencast, without changing runtime or reducing motion.

## Reproduce / assembly boundary
Serve this study with `python -m http.server 9607 --bind 127.0.0.1`; run:
```sh
LP_NUM_THREADS=2 VIEWPORTS='[[1440,900],[390,844],[844,390]]' node verify-parent-closure.cjs 7 another-review
LP_NUM_THREADS=2 node verify-parent-edge.cjs 7 another-edge-review
```
Worker servers are stopped before handoff. Parent owns assembly, public/source-comparison chrome, served-byte hash readback, source-link checks and actual LAN verification. Nothing in shared preview/root/manifests/scripts/ledgers/siblings changed; no Git/external writes, installs or host configuration changes.
