# 04 — printed theater program + compact reading

- Preserved the approved miniature scene, geometry/materials, desktop framing and every supplied chapter paragraph/LinkedIn route.
- Replaced the generic information band with a printed masthead/contents/chapter-leaf/folio/colophon hierarchy. Paragraphs are unboxed; page-turn controls are ink and rules, not raised cards.
- Phone, tablet and landscape have separate intro, visible stage, control rail and naturally scrolling program. Compact chapter selection scrolls to the updated reading leaf; Read the program / See this scene anchors connect the two regions. Main copy/detail ≥16px; chapter buttons 52px; pause 100×44px; safe-area CSS and whitespace preserved.
- Reduced-motion control is truthfully still/disabled. Chapter changes remain visibly distinct and stable. Compact/coarse-pointer wheel does not hijack document scrolling.

## Evidence
`content-results.json`: **139/139** final checks. `verify-content.cjs` uses existing read-only Playwright and loopback 9014. All six requested viewports, all four chapters, trusted tap/keyboard/wheel, extended-prose reachability, reduced-motion canvas comparison and WebGL failure pass. Syntax checks passed. Final opening/open-program/landscape screenshots inspected. Detector was not rerun; retained raw detector is historical.

One named UI fix batch after inspection: paper-back the desktop program link crossing the deck, remove obsolete compact bottom padding and the former thread ornament. Test-only issues corrected rather than reported as UI failures: selector matched body, anchor focus did not follow a guessed Tab count, focused offscreen controls affected wheel setup, and software rendering needed longer startup. Desktop content capture uses a paused direct cut so it is not a moving in-between scene.

## Handoff
Runtime changed: `index.html`, `main.js`; new **`program.css` must be included in parent assembly**. Original `style.css` and assets unchanged. Docs: DESIGN.md, SURFACE.md, README.md, VERIFICATION.md, .impeccable/design.json, this report. Evidence: verify-content.cjs, content-results.json and current .impeccable/review captures. No preview/root/sibling/production edits, detector rerun, package installation, commit or remote write.

Not physical iPhone/Safari certification. Safe-area/dynamic browser chrome is not physically verified. Parent comparative content/mobile review remains the visual acceptance gate.
