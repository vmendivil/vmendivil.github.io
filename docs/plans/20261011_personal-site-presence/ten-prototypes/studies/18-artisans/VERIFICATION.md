# Verification — study 18

## Outcome
Working local prototype, ready for parent assembly and **fresh independent comparative review**, not independently approved for production. Source is wholly inside `studies/18-artisans/`. Three original WebGL landscape stages alternate with complete About, Approach, Curiosity and Contact reading. Exact supplied LinkedIn and factual availability retained. No client claims, source-agency copy, copied source models/images/shaders, message submission or remote runtime dependencies.

## Executed browser evidence
`node verify.cjs` passed: Chromium / SwiftShader, eight cases: six required viewports plus reduced-motion and unavailable-WebGL variants.

| Viewport | Reading / journey | Keyboard | Touch |
|---|---|---|---|
| 320×740 | all four reading sections, six onward links, final return, contact | Tab, Enter, Space, Escape | trusted browser taps |
| 390×844 | same | same | same |
| 430×932 | same | same | same |
| 844×390 | same; document scrolling rather than compressed scene | same | same |
| 768×1024 | same | same | same |
| 1440×900 | same | same | not applicable |

No page errors or HTTP asset failures in those six rendered cases. All three scenes initialized. Meaningful reading body is 16–18px, zero document-width overflow, anchor tops approximately 110px. Menu closed after navigation and Escape restored summary focus. Final LinkedIn action scrolled into view; external LinkedIn destination itself was not visited or tested.

`node verify-supplemental.cjs` passed: native wheel advanced document position and changed actual rendered scene pixels; live reduced-motion media change hid canvas and removed transition; all three portrait fallback stills loaded. JavaScript-disabled native menu, contact anchor and final contact action remained usable at 320px.

Pixel response initially used an invalid WebGL readback after framebuffer discard and falsely appeared unchanged. Corrected test re-renders synchronously before readback; no scene implementation change was made to satisfy it.

## Captures
Fresh final PNG captures in `.impeccable/review/`: main desktop/mobile/landscape, content desktop/mobile/landscape, full reading/contact chapters, all three scenes at desktop and three phone widths plus landscape, and affected ochre/cyan mobile under both reduced motion and unavailable WebGL. Existing evidence-board JPGs predate this correction; do not use them as final evidence. Main desktop, mobile, short landscape; menu; actual reading viewport; complete About / Approach / Curiosity / Contact sections; each of three scenes on desktop/mobile; reduced-motion and unavailable-WebGL.

Complete-section screenshots temporarily hide fixed header and skip link to avoid capture stitching artifacts; viewport shots retain navigation. Earlier malformed element capture was replaced, not accepted. Final captures were visually inspected in bounded batches. Header opacity and tiny identity/scene labels were corrected mechanically after the detector and recaptured. Scene renderer refinement replaced coarse flat shading with smoother detailed original relief/mineral bump, corrected moon/text collision and improved portrait thread framing. No unbounded polish.

## Single detector run
Raw result preserved at `.impeccable/review/detector-raw.json` (11 warning findings; exit 2). It predates final mechanical corrections and **was not rerun**:
- identity role / scene captions were 10px: final computed declarations are 12px;
- tiny scene-caption paragraphs: corrected to 12px;
- mint bottom-caption contrast: solid deep-green backing now separates the pale text from both water and luminous thread;
- three full-bleed scene-padding findings: apparent full-bleed canvas/picture false positives; actual text uses explicit 7–8vw insets. Not an excuse to ignore padding on future reading elements.
Do not represent this historical scanner output as a clean final pass.

## Material limits / review obligations
- Procedural mineral relief and fog planes are authored approximations. No ray-marched volumetric lighting, physically accurate planar reflections or bloom pipeline is claimed.
- Requested ochre/cyan utility fixes and portrait moon framing are visually resolved in fresh runtime/fallback captures; parent narrow fix-list verdict remains pending. Opaque grounds protect only the utility text; all long reading and mint labels remain unchanged. Cyan portrait raster was regenerated; provenance metadata/manifest refresh is blocked pending execution approval (terminal Python lacks Pillow). See FIX_REPORT.md.
- Independent finish-reviewer/documenter spawning is not available in this worker tool surface; built-world documentation is recorded inline. Parent's fresh comparative review remains pending. No self-certification of reference-level aesthetic equivalence.
- Physical iPhone/Safari and low-end GPU testing unperformed. Viewport emulation and trusted synthetic browser taps are not physical-device certification.
- Parent must verify copied runtime and actual LAN URLs after assembly. Worker changed no launcher, old study, sibling, production file, service configuration or commit.

## Reproducible artifacts
Runtime: `index.html`, `style.css`, `main.js`, `assets/`.
Checks: `verify.cjs`, `verify-supplemental.cjs`, `results.json`, `supplemental-results.json`, raw browser stdout.
Art: `render-stills.cjs`, `provenance.py`, `asset-provenance.json`, six shipping PNGs with embedded provenance.
Documentation: `PRODUCT.md`, `SURFACE.md`, `DESIGN.md`, `.impeccable/design.json`, `README.md`, this file.
