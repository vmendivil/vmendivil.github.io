# Verification — prototype 08

## Content and mobile refinement — current evidence

Accepted submerged geometry, lighting, fog, oculus, fonts, factual copy and LinkedIn route are preserved. Reading now uses open architectural shafts, short amber heading inlays and three descending Tenor-inscribed method columns; mobile follows one continuous shaft instead of compressed desktop rows. Header and atmosphere control scroll away at the threshold, eliminating the observed method-copy occlusion. Contact footer is in normal flow.

`content-mobile-results.json` is raw Playwright Chromium execution for all five chapters at 320×740, 390×844, 430×932, 844×390, 768×1024 and 1440×900. Assertions passed: no horizontal overflow, all text bounds inside viewport, substantial reading text ≥16px, primary targets ≥44px, pause outside every reading chapter, no normal-path page errors. Actual Tab → About → Enter reached #about; ten Tabs reached atmosphere and Space paused it; wheel scrolling while paused advanced camera. Escape leaves the non-modal page unchanged. Playwright touch tap reached Approach; CDP native touch gesture scrolled reading from 1688 to 2073. Forced Chromium --disable-webgl retained a hit-testable real LinkedIn CTA and truthful disabled atmosphere.

`content-stability-results.json` independently confirms CTA bounds and hit testing in all six viewports, both self-hosted fonts loaded, identical reduced-motion canvas pixels before/after scrolling, and Approach camera progress exactly 0.5 in portrait and landscape. Camera now follows chapter offsets rather than total page-height ratio, preserving consistent chapter framing across reading lengths. Original scene path and starting camera remain unchanged.

Current screenshots: `.impeccable/review/desktop.png`, `mobile.png`, `content-desktop.png`, `content-mobile.png`, `landscape.png`, `content-landscape.png`; chapter-specific about/curiosities/contact shots also exist for these three classes. `before-contact-sheet.png` documents actual pre-edit all-chapter inspection. `final-all-chapters.png` is the bounded final comparative contact sheet. Captures were visually inspected; no new scene rebuild or further aesthetic polish. Screenshots are evidence only, not shipping assets. Content naturally continues below short viewports, reachable by native scrolling.

Reproduce: start `python -m http.server 9018 --bind 127.0.0.1` here, then `node verify-content.cjs` and `node verify-content-stability.cjs`. They use the existing read-only Playwright package at `/home/trex/vhmc/projects/devPilot/node_modules/playwright`; no installation. Allow up to 600 seconds for software WebGL. First bounded run caught a 42px desktop/tablet descend target; the sole fix increased it to 44px. A subsequent 180-second run timed out at tablet during software rendering; the same suite passed with 600 seconds. The optional first montage shell command lacked Pillow; the available tool interpreter generated the montage instead, without installing anything.

Scope/limits: Chromium viewport and touch emulation, not physical iPhone/Safari certification. No exhaustive per-pixel contrast, screen-reader or device-performance certification. Existing detector is historical and was not rerun. Parent content/mobile comparison is pending; engineering pass is not aesthetic approval. No preview/production/sibling writes, commits, installs or LAN changes. Loopback server stopped after checks.

## Earlier amber correction and build — historical evidence

The following descriptions/results predate the content/mobile reading refinement above. Old assertions about captures being paused or camera progress by whole-page ratio are not current behavior.

## Amber-destination correction — historical evidence

The single material defect is locally resolved: the oculus is unobstructed to the right of desktop text and above mobile text. Starting the camera inside the pier line removes the occlusion; fog-free terminal materials and an 18-unit-reach point light reveal the opening. Global scene exposure, lights, water fog and reading overlays are unchanged. Submerged arches, fluting, rails, caustics and dark text-bearing water remain.

Current `.impeccable/review/desktop.png` (1440×900) and `mobile.png` (390×844) are actual Chromium WebGL opening captures, paused at progress 0. Desktop/mobile were inspected together. One mobile aim correction separated the opening from the title; the final mobile capture was visually confirmed. A screenshot timeout was recovered with bring-to-front and pause. A hash-restored contact screenshot was invalid opening evidence and replaced by a verified hash-free, scroll-zero shot.

`amber-fix-results.json` contains actual Browser Use/CDP results from isolated `fix08amber` on loopback port 18918:
- WebGL ready, fonts loaded, no normal-path runtime/rejection/shader errors. No horizontal overflow (desktop document 1425 within 1440; mobile 390 within 390).
- Opening rendering now has 17 calls and 209104 triangles; historical 13-call evidence below predates the local rims.
- Real Tab focused identity, Space resumed and paused, Enter activated About, pointer Contact reached camera progress approximately 0.997 while paused.
- Mobile test initially reloaded at the contact hash; `mobileOpening` is the corrected zero-progress opening evidence, not the contact-frame sample.
- Reduced motion rendered stationary architecture, kept progress 0 after scroll and disabled the truthful `Motion reduced` control.
- Forced startup WebGL failure retained all five sections and disabled atmosphere. Recorded `THREE.WebGLRenderer: Error creating WebGL context.` is expected solely for deliberately unavailable WebGL.

Existing detector output is historical and was NOT rerun, per this correction's instructions. SURFACE, DESIGN and design sidecar describe the actual final camera/materials. Local review considers the material fix resolved; parent independent verdict remains required, not reference-level aesthetic approval. No production/preview changes or commits. Loopback server stopped after checks.

## Original build evidence — historical
The following records the original build; current correction evidence above supersedes its oculus defect, capture description and draw-call total.


## Real browser execution
Browser session `browserten08`, loopback `127.0.0.1:8918`, Chromium via Browser Use / CDP. Final viewport files inspected at 1440×900 and 390×844. One build inspection, one batched UI correction (mirrored architectural camera composition; batched fixed stonework; strengthened distant oculus), then final captures. Later work was behavior testing and metadata only, not further UI polishing.

Observed evidence lives in `results.json`:
- Live WebGL scene ready; final stonework batching reduced calls from 838 to 13 at the opening. Approximately 209k visible triangles. This is a draw-call result, not a device FPS claim.
- Both self-hosted fonts loaded; CSS, app, Three.js and fonts returned HTTP 200. Runtime exception and unhandled-rejection recorder returned no errors during normal WebGL use.
- 390px page and all four content sections have no horizontal overflow. Body text computes to 18px, horizontal insets to 24px.
- Real Tab from the skip link focused Victor's identity anchor; real Enter on the skip link reached `#about`. Real Space toggled atmosphere `aria-pressed` false and true. Escape has no modal/menu task on this site.
- Direct Contact anchor reached the lower page; camera progress reached 0.9975 while paused. The supplied LinkedIn href was verified exactly. A genuine native touch event activated the contact anchor on mobile.
- Reduced-motion media emulation followed by reload yielded `reduced:true`, rendered WebGL, progress 0 before and after scroll, and a disabled truthful `Motion reduced` button. All sections remained readable.
- Startup with WebGL contexts deliberately unavailable (canvas getContext override, forced reload) yielded `ready:false,fallback:true`, fallback class, disabled atmosphere button, and all five sections still present.
- The normal-path palette contrast over base water is marble 10.87:1, jade 7.59:1, amber 7.68:1, calculated using WCAG relative luminance. Text-bearing scene areas are darkened with real overlays; no exhaustive per-pixel contrast or screen-reader audit is claimed.

## Reproduce the browser checks
Start the README server. In Browser Use, open `http://127.0.0.1:8918/`, emulate each viewport, wait for fonts and `window.__scene.ready`, and inspect `window.__scene`, document width, and resource status. Focus `.skip`, dispatch Tab; focus `.skip`, dispatch Enter; focus `#pause`, dispatch Space twice. Click chapter anchors and verify location hash, scroll position and scene progress. Emulate `prefers-reduced-motion:reduce`, reload, compare `window.__scene` before/after scrolling. For fallback, inject a new-document override that returns null from canvas `getContext` for WebGL types and force `Page.reload`; inspect the fallback class and visible sections. Remove the injection after testing.

## Single raw detector run
`.impeccable/detect.raw.json` preserves exact output of:

```sh
/home/trex/.hermes/profiles/dev/skills/impeccable/scripts/impeccable detect --json index.html style.css app.js
```

Three cramped-padding warnings refer to `.chapter` backgrounds. They are parser false positives: source uses `var(--gutter)` inside the padding shorthand; actual mobile computed padding is 24px on both sides for every chapter, verified and recorded. No detector rerun or suppression was performed.

## Local visual review
This worker has no fresh subagent spawning tool; documenter and local inspection were performed in-thread. Parent must supply the independent comparative finish review. Local review is **ready for parent review**, not reference-level aesthetic approval.

1. **Evidence validity:** desktop and mobile opening files are settled, readable, correct dimensions and show real original geometry. Contact-mobile is readable with stationary reduced-motion architecture.
2. **Contract fit:** full-window atmospheric architecture and simple scroll path delivered; factual personal content, original shapes, real contact, no gameplay. First-view amber oculus remains subtle/partly obscured by depth, rather than being the main hero focal point.
3. **Craft:** distinctive stone detail, repeated arches, fog, light volumes and floor inlay; plain HTML reading layer. Mobile retains scene and readable copy. Header links can overlap the upper architectural arch, intentionally darkened for legibility.
4. **Behavior:** WebGL, pause, direct anchors, key activation, touch contact, reduced motion and failure fallback exercised. No physical-device FPS or cross-browser acceptance measured.
5. **Residuals:** cinematic ambition is demonstrated, not established as matching Joseph's craft level. Parent comparative critique remains pending. The imagery is architectural fiction, not a case-study claim.

## Tool issues
CDP screenshots initially timed out after LinkedIn navigation opened a background/foreground tab mismatch; `Page.bringToFront` restored reliable captures. Invalid attempts were not used as screenshots. Initial keyboard/reduced-motion samples affected by that mismatch were replaced with focused, verified samples in `results.json`. Browser-added horse title marker is harness decoration, not shipping HTML.

## Scope
All writes stayed in `studies/08-joseph-depth/`. No production changes, commits, remote writes, LAN service changes or environment installs. Loopback server stopped after checks.
