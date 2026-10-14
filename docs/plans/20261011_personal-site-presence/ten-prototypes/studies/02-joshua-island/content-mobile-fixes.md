# Atlas-margin refinement

- Replaced enclosed destination box with sea-ground editorial margin; peach Gloock lead, coral annotation rules and open paragraph rhythm. All professional/lab/human facts unchanged.
- Mobile: 350px scene detail → map index → continuous reading, rather than 545px absolute offsets and oversized empty gaps. Complete copy/contact scroll naturally. Desktop and landscape retain an independently scrolling margin and sticky return.
- Added next-shore continuation and focusable reading heading; map index matches DOM focus order. Whole archipelago/Escape retain focus return. Touch targets at least 44×44, paragraphs at least 16px, viewport-fit and safe-area/dynamic viewport CSS included.
- Preserved all scene geometry/materials and camera targets. No root, sibling, preview or production changes; no commit or detector rerun.
- Evidence: `.impeccable/review/content-mobile-test.cjs`, `content-mobile-results.json`, updated desktop/mobile main and content captures plus landscape.png. Six viewport suites passed. Chromium emulation/trusted touch is not physical iPhone/Safari evidence.
- Before captures retained as before-desktop.png / before-mobile.png. Fresh parent comparative review determines visual acceptance.
