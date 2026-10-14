# Fidelity report — 09-natalie-organic

<!-- parent-functional-closure -->
Current functional closure: Perspective availability is recalculated on every study update: paging into a failed artwork disables the control; paging to a successfully rendered sculpture restores it. See `PARENT_CLOSURE.md` and `fidelity/parent-closure-results.json` for the current source hashes and verified local assembly boundary. Earlier test reports remain historical.


## Outcome
## Experience-fidelity gallery (implemented)
The four original sculptures, unequal organic apertures, pearl/plum/emerald palette and transparent curatorial room remain. Native selection carries a shared artwork image from the triggering aperture into the focused room in 620ms, with changing organic contour; Escape/Return reverses to the corresponding current-study aperture, restoring its button focus. Interrupted flights cancel and remove their image, so repetition cannot leave a duplicate or steal pointer input. Flights live inside the native dialog top layer when opening, and in the document on return. Previous/next moves the room content by 32px with a 380ms decelerating transition, while text, collection position, contour and image change together. Another perspective selects among three real rendered angles of each original sculpture (0 / +0.42 / -0.38 radians about y); this is not a CSS tilt pretending to change lighting/refraction. Three images are rendered once at 640×640 per sculpture, then geometry/materials/contexts are disposed. This trades former 780px/DPR1.5 snapshot resolution for a bounded 12-view material inspection budget. No ambient GPU loop. Keyboard and touch use the same perspective and paging controls. Reduced motion removes flight/paging movement but still gives a visibly different rendered angle. Renderer failure disables perspective while retaining labels. Native modal focus handling includes the perspective button, boundary wraps and opener restoration.


## Exact files
Runtime changed: `index.html`, `style.css`, `gallery.js`.
Documentation changed: `DESIGN.md`, `SURFACE.md`, `.impeccable/design.json` (fidelity extension only; unrelated sidecar drift is not repaired).
Created: `FIDELITY_CONTRACT.md`, `FIDELITY_REPORT.md`, `verify-fidelity.cjs`, `verify-path-completion.cjs`, and private `fidelity/` evidence (original-source frames/boards, baseline/final SHA256 hashes, source-observation log, raw detector, raw results, captures and summary, timestamped CDP film frames/MP4s). Existing historical results/captures outside `fidelity/` remain historical. No sibling/shared/public/production files changed by this worker; no commits, installations, publishing or host service changes.

## Reference and asset evidence
Exact source/reference URLs and research limits: `fidelity/source-observations.json` and the pre-edit contract. All three exact landing.love reference pages were revisited and their titles resolved. Live originals were not reliably inspectable across calls; Rohit returned a browser error, Joseph/Natalie initial titles loaded but follow-up browser state went blank. That is a probe limitation, **not** evidence that the sites are blank or motionless. The retained older archived Natalie recording is the pinned version. Four source frames per study are retained privately with SHA256; they prove sampled states, not source timings or mobile behavior.
Shipping artwork remains original procedural geometry/textures. Existing vendored Three.js and local licensed fonts remain the only library/font assets. Research images are never referenced by shipping HTML/CSS/JS. No protected source assets/code or invented professional proof added.

## Executed checks
Viewports: 1440×900, 320×740, 390×844, 430×932, 844×390, 768×1024. Engine: Chromium / SwiftShader software WebGL. Actual Playwright keyboard and trusted emulated touch; **not** physical iPhone/Safari/assistive-technology certification.
- Overview, complete readable sections, current contact and return, loaded fonts/images, document bounds, no forms.
- All four details, alternate-angle selection behavior via Another perspective, paging/wrap/repetition, final curatorial disclosure, real Enter/Space/Escape, both modal Tab boundaries and focus restoration.
- Reduced motion and no-JavaScript/WebGL-failure personal reading/contact paths. Failure disables perspective while labels remain usable.
- Six-viewport full-path body copy ≥16px and navigation target height ≥44px; actual Tab then Enter opens the exact supplied LinkedIn route in a new tab. External route was intercepted with an explicit fixture; this proves native activation and href/rel safety, not live LinkedIn availability.

All 178 main assertions passed with zero page/request errors. Additional 36 full-path assertions passed. No material layout defect found in the bounded inspection.

Reproduce from this study directory with existing runner/library and a loopback server on 9409:
```
python -m http.server 9409 --bind 127.0.0.1
node verify-fidelity.cjs 9 review
node verify-path-completion.cjs 9

```
Real executed commands used `inspection` for the retained main results (earlier interrupted commands are explicitly saved as fatal/partial historical evidence). `git diff --check` scoped to the three assigned folders returned exit 0.

## Motion evidence
`fidelity/normal-motion-desktop.mp4` and `normal-motion-mobile.mp4` (44 / 51 actual CDP screencast frames, preserving browser timestamps), corresponding film JSON/JPEGs and boards. `inspection-*-study-*-angle-2.png` proves actual alternate geometry/material angles, not CSS tilt.

Opened About/Approach confirmations for the gallery: `path-*-about-approach.png`. Current detector raw output: `fidelity/detector-raw.json`, run **once** in this pass; {'advisory': 48}. Remaining padding warnings for percentage/variable insets are static-parser findings against the existing reading system; real six-size captures, target heights and body measures are retained, not replaced by a clean-detector claim. Earlier detector output elsewhere is historical.

## Rendering and limits
The gallery uses finite 640px snapshots rather than a continuously live refractive sculpture; three meaningful real views are available, not free orbit. The 620ms continuity flight/paging is an original interpretation of the older source, not copied source code/assets.
No ongoing animation loop; all 12 sculpture-view snapshots are finite renders followed by disposal. This does not prove a physical-device GPU memory budget.
One bounded visual inspection and one repair/confirmation were used; execution/capture retries addressed software-renderer and test-harness failures, not repeated aesthetic polishing. Local source verification does not establish assembled/LAN delivery. Parent must copy only runtime files/assets, preserve source-comparison chrome, review source fit independently and test the served LAN versions. These are reviewable local artifacts, not production or design-selection approval.
