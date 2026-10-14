# Verification — prototype 04

## Current content/mobile refinement
`NO_CAPTURE=1 node verify-content.cjs` exited 0: **139/139 checks pass**. Current raw results: `content-results.json`; existing Playwright/Chromium 1243 software WebGL, no installation. Viewports: 320×740, 390×844, 430×932, 844×390 landscape, 768×1024 and 1440×900. All four chapters use actual touchscreen tap or pointer activation, computed bounds/fonts and document overflow assertions. Real Tab/Enter/Space/arrows/Escape, desktop mouse wheel, compact document scrolling, contact reachability after extended-prose stress, reduced-motion changed/stable canvas, truthful disabled still control and forced WebGL failure pass. `node --check main.js` and `node --check verify-content.cjs` exit 0.

Current inspected captures replace the old opening captures: `.impeccable/review/desktop.png`, `mobile.png`, `content-desktop.png`, `content-mobile.png`, `content-landscape.png`, `landscape.png`. Desktop content is a paused direct cut to conversation, because software-rendered interpolation outlasts wall-clock waits; the corrected evidence is not a scenic redesign. Build/fix/confirm inspection only, no detector rerun. Test harness corrections: scope chapter selectors to navigation (body shares data-chapter), follow actual anchor focus traversal, blur a previously focused offscreen control before moving the wheel pointer back to the stage, and permit slow software-renderer startup. Earlier partial runs are not claimed as passes.

Physical Safari/iPhone and dynamic browser-chrome safe areas are untested. Parent comparative visual acceptance remains pending. The following sections are historical original/fix evidence, not the current layout or open-limit list.

## Reviewer-fix addendum (supersedes the open named limits below)
See `FIX_REPORT.md`, `fix-results.json`, and `verify-fixes.py`: mobile intro/control fixes completed; native Playwright synthesized touchscreen taps and mouse wheel verified; reduced-motion visible static cut captured and inspected. **20/20 reviewer-fix checks pass.** Original report below is historical, including its pre-fix limits. Detector not rerun. Current opening captures replace original opening paths. Parent final review remains pending.


## Scope and executed results
Final `verify-browser.py` recipe executed successfully in isolated Browser Use session `ten04` against http://127.0.0.1:8914. `results.json` records 32/32 passing checks: real WebGL initialization; self-hosted Young Serif/Figtree loaded; hidden opening contact CTA; real Tab traversal; native Enter/Space activation; ArrowRight/ArrowLeft; Escape pause; desktop pointer direct chapters; correct genuine LinkedIn route; desktop and mobile document-width checks across all chapters; mobile chapter activation/layout via DOM; no page/console errors; reduced-motion initialization/semantic chapter updates; actual forced WebGL context loss and reachable fallback/contact. All six final runtime resources returned HTTP 200. No browser warnings before the intentional context-loss test.

Native Enter testing includes a CDP char event (text carriage return), not just keyDown/keyUp. The earlier incomplete key sequence was a harness test defect and was corrected. Mobile DOM activation is not claimed as real touch. Native touch and wheel commands timed out and remain unverified. Screenshot transport also timed out repeatedly; separate settled calls produced valid final captures. Invalid empty capture attempts are removed.

`node --check main.js` returned exit 0. No installation, package mutation, production edit, commit, push, deployment, or LAN service change performed.

## Captures, inspected in bounded passes
- `.impeccable/review/desktop.png`: final opening, 1440×900; read/inspected as actual file.
- `.impeccable/review/mobile.png`: final opening under reduced motion, 390×844; read/inspected as actual file.
- `.impeccable/review/chapter-1.png`: making at 1440×900, settled; visually inspected.
- `.impeccable/review/chapter-2.png`: captured curiosity at 1440×900; extra evidence, not full visual acceptance.

Initial desktop/mobile inspected together. One material fix batch: enforce hidden CTA styling; revise mobile camera framing; strengthen prop lettering; scope active-state selection to chapter buttons (body data attribute previously polluted selection); hide offstage scene props and move lighting with the stage. Final target captures inspected, no further polishing afterward. After-cut reduced-motion screenshot transport failed; do not claim the visible cut from the semantic assertion alone. Additional parent scene/path review remains needed.

## Single detector run
Raw output preserved verbatim in `.impeccable/review/detector-raw.json`; stderr in `detector-stderr.txt`. Detector exit 2, five warnings; not rerun.
- Two undersized-functional-text warnings: 10px mobile stage caption and pause button. Genuine remaining legibility improvements for parent review.
- Tiny 11px text warning: footer/supporting note scale. Core mobile content is 16px/14px, not 11px.
- Cream palette: intentional pinned warm paper/wood theater; this is a documented brief exemption, not a mechanical failure.
- Thick border accent: scanner misclassification of the straight stage-floor edge; the theater has no rounded card corners.

## Finish review / verdict
Disposition: **fix**, at local self-review scope, not independent aesthetic acceptance. The original warm theatrical scene and professional path are present and functioning. Open named fixes/limits: tiny mobile pause/caption, slightly overlapping mobile intro/pelmet, unverified native touch/wheel and visual reduced-motion cut. Parent must perform independent comparative review; no subagent spawning capability was available to this focused worker. DESIGN.md and machine-readable sidecar describe built state, including these limits. No claim of reference-level aesthetic equivalence.
