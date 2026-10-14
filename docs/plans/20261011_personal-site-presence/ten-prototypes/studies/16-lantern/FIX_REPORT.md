# Study 16 — localized illustration correction

## Scope and result
One bounded artwork fix batch, authored in `build_scene.py` and regenerated into `assets/pavilion.svg`. No changes to HTML, CSS, main.js, factual copy, room hit regions, text index, reading sequence, focus/history behavior or mobile wall bleed. No WebGL dependency, source-copying, production changes, commits or preview assembly changes.

## Named fixes
- **Foreground versus distance — resolved locally:** low-contrast background ridges now sit behind substantial near-bank waterlines, overlapping root rocks, terrace paving, light spill and shaded step risers.
- **Material / eave occlusion — resolved locally:** side timber joints, graduated side plane, roof seams and fine edge highlights; local roof-underhang and upper-recess shadows instead of indiscriminate darkening.
- **Uniform light / glazing — resolved locally:** four distinct light fields, visible task/study lamps, interior planes, selective cool reflected panes and fine glass glints. Interior furniture remains legible.
- **Repeated foliage — resolved locally:** independently drawn upright split-fan left tree and low swept right tree, branch-specific connected crown volumes and sparse small foliage. Neither tree is a mirrored copy.
- **Missing evidence — resolved:** final About and Curiosity desktop/mobile captures added; main, Practice, Contact and landscape captures refreshed after final SVG generation. All eleven PNGs inspected.

These are builder closure findings, not an independent aesthetic verdict. Original vector illustration deliberately remains illustrative rather than matching the reference’s rendered 3D fidelity.

## Executed verification
`python build_scene.py`; loopback HTTP health check; `node verify.cjs` returned **PASS six viewports, four rooms each, native keys, touch, reduced motion, no-JS and fetch-failure fallback**. Six viewport records in results.json cover all four rooms, return/focus, accessible text size, final docket reachability and no document overflow. Normal paths report zero page/console/asset errors. Direct bay clicks, Back link, deep link/reload and history Back also pass. Trusted synthetic touch / Chromium emulation are not physical Safari certification.

## Evidence and handoff
Current captures: `.impeccable/review/{desktop,mobile,about-desktop,about-mobile,content-desktop,content-mobile,curiosity-desktop,curiosity-mobile,contact-desktop,contact-mobile,landscape}.png`. `evidence-manifest.json` pins capture/source/runtime hashes. `DESIGN.md`, sidecar and provenance are synchronized. Existing detector raw remains historical and untouched; no rerun. The parent-reported LAN wall-margin -24px bleed is intentional and was not "fixed" as overflow.

Parent must refresh **runtime-only** assembly (especially pavilion.svg) and obtain the independent fix-list verdict / current assembled-LAN review. No old study, root gallery, preview or production file was edited.

## Incidental tooling
Optional contact-sheet creation failed because PIL is absent; no packages installed. All eleven original PNGs were opened directly instead. No implementation blocker remains.
