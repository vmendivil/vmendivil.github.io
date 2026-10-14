# Fidelity report — 08-joseph-depth

<!-- parent-functional-closure -->
Current functional closure: Context loss now permanently guards the renderer and animation scheduler for this page lifetime. Reduced-motion changes and scrolling cannot revive the unavailable scene or re-enable atmosphere. See `PARENT_CLOSURE.md` and `fidelity/parent-closure-results.json` for the current source hashes and verified local assembly boundary. Earlier test reports remain historical.


## Outcome
## Experience-fidelity camera (implemented)
The accepted teal colonnade, fluted piers, marble, original caustics/sediment and amber oculus remain. Five chapter-aligned waypoints replace a constant diagonal camera translation. Position progresses through the threshold, near arch, opposite pier line, terminal approach and oculus (z 19 / 3 / -12 / -27 / -42). Look targets are independently authored per bay, not pointer tracking. Smoothstep interpolates each leg; elapsed-time damping follows interrupted/reversed scroll rather than frame-rate-dependent easing. Mid-journey fog changes from 0.026 to a minimum 0.022, returning to 0.026 on arrival. This reveals existing spatial depth rather than adding a generic overlay. Section offsets remain the source of progress, so mobile text length cannot change which chapter owns a camera stop. Pause still stops water/beam/sediment animation while allowing direct scroll camera renders; reduced motion retains the stationary threshold. `window.__scene` includes cumulative actual draws, target progress and camera coordinates. No copied bridges, astronauts, landscape or beliefs are introduced.


## Exact files
Runtime changed: `app.js` (runtime only; accepted HTML/CSS unchanged in this pass).
Documentation changed: `DESIGN.md`, `SURFACE.md`, `.impeccable/design.json` (fidelity extension only; unrelated sidecar drift is not repaired).
Created: `FIDELITY_CONTRACT.md`, `FIDELITY_REPORT.md`, `verify-fidelity.cjs`, `verify-path-completion.cjs`, `verify-visibility.cjs`, and private `fidelity/` evidence (original-source frames/boards, baseline/final SHA256 hashes, source-observation log, raw detector, raw results, captures and summary). Existing historical results/captures outside `fidelity/` remain historical. No sibling/shared/public/production files changed by this worker; no commits, installations, publishing or host service changes.

## Reference and asset evidence
Exact source/reference URLs and research limits: `fidelity/source-observations.json` and the pre-edit contract. All three exact landing.love reference pages were revisited and their titles resolved. Live originals were not reliably inspectable across calls; Rohit returned a browser error, Joseph/Natalie initial titles loaded but follow-up browser state went blank. That is a probe limitation, **not** evidence that the sites are blank or motionless. The retained older archived Natalie recording is the pinned version. Four source frames per study are retained privately with SHA256; they prove sampled states, not source timings or mobile behavior.
Shipping artwork remains original procedural geometry/textures. Existing vendored Three.js and local licensed fonts remain the only library/font assets. Research images are never referenced by shipping HTML/CSS/JS. No protected source assets/code or invented professional proof added.

## Executed checks
Viewports: 1440×900, 320×740, 390×844, 430×932, 844×390, 768×1024. Engine: Chromium / SwiftShader software WebGL. Actual Playwright keyboard and trusted emulated touch; **not** physical iPhone/Safari/assistive-technology certification.
- Overview, complete readable sections, current contact and return, loaded fonts/images, document bounds, no forms.
- All four reading sections, ordinary anchors, reversible focal scrolling, pause/resume draw counts, reduced-motion disabled control with honest labels.
- Reduced motion and no-JavaScript/WebGL-failure personal reading/contact paths. Failure retains native document reading and contact.
- Six-viewport full-path body copy ≥16px and navigation target height ≥44px; actual Tab then Enter opens the exact supplied LinkedIn route in a new tab. External route was intercepted with an explicit fixture; this proves native activation and href/rel safety, not live LinkedIn availability.

Main suite: 152 assertions; 146 passed and six old hidden-state samples failed because the counter was sampled in a different browser call **before** the hidden event (one ordinary intervening draw). This is preserved, not rewritten into a green result. `verify-visibility.cjs` repeats the hidden transition atomically in all six viewports: all six passed, hidden delta zero and visible resumption >0. The main script now uses that same atomic sample; the entire long suite was intentionally not repeated after this test-only correction. `path-results.json`: all 33 additional body-type, target-size, real contact Tab/Enter and trusted phone touch-scroll checks passed. Main page/request errors: zero.

Reproduce from this study directory with existing runner/library and a loopback server on 9408:
```
python -m http.server 9408 --bind 127.0.0.1
node verify-fidelity.cjs 8 review
node verify-path-completion.cjs 8
node verify-visibility.cjs 8
```
Real executed commands used `completion` for the retained main results (earlier interrupted commands are explicitly saved as fatal/partial historical evidence). `git diff --check` scoped to the three assigned folders returned exit 0.

## Motion evidence
`fidelity/completion-1440x900-focal-before.png`, `focal-mid.png`, `focal-after.png`, `focal-reversal.png` and equivalent five other viewports; chronology/camera states in `completion-results.json`. Normal-motion media remained active. Ambient atmosphere was paused for settled captures to avoid software-GPU compositor starvation; actual scroll-camera/lamination states remained responsive. Active→paused→resumed renderer draws were measured separately. These are chronological frames, not a continuous recording or a smoothness certification.

Opened About/Approach confirmations for the gallery: `path-*-about-approach.png`. Current detector raw output: `fidelity/detector-raw.json`, run **once** in this pass; {'warning': 3, 'advisory': 56}. Remaining padding warnings for percentage/variable insets are static-parser findings against the existing reading system; real six-size captures, target heights and body measures are retained, not replaced by a clean-detector claim. Earlier detector output elsewhere is historical.

## Rendering and limits
No source-level scene/asset fidelity or physical GPU smoothness claim. Existing authored geometry is retained; the source has substantially richer authored scene changes. Software SwiftShader under concurrent worker load caused capture timeouts; early partial/fatal results remain historical. Disabling GPU compositing and pausing atmosphere for settled stills made complete real-browser verification possible without turning reduced motion on.
Existing architecture renders 17 draw calls / 209104 triangles in measured snapshots; actual paused draw deltas are zero and resume draws increase. CPU `renderMs` measures command submission, not GPU completion or physical-device frame rate.
One bounded visual inspection and one repair/confirmation were used; execution/capture retries addressed software-renderer and test-harness failures, not repeated aesthetic polishing. Local source verification does not establish assembled/LAN delivery. Parent must copy only runtime files/assets, preserve source-comparison chrome, review source fit independently and test the served LAN versions. These are reviewable local artifacts, not production or design-selection approval.
