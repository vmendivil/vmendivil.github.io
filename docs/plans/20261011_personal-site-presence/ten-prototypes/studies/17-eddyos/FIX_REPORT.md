# Study 17 — reading state / semantic fallback fix report

## Narrow closure verdict
- **Resolved — per-document reading state:** separate session offsets for each file; pane scroll on desktop, page scroll in single-document mobile/landscape. Save before minimize, Home/Escape, switch and Back; restore on activation. Close discards only the closed file. Task identity is asserted alongside restored offsets. Real About and Approach copy is long enough to test nonzero offsets; no filler was injected.
- **Resolved — semantic no-JavaScript fallback:** complete identical About, Approach, Curiosity and Contact bodies, an anchor-linked index and return links, honest availability and genuine LinkedIn. Inert OS buttons are hidden only when script is disabled. Actual JavaScript-disabled browser contexts exercise reading, touch links and keyboard/contact navigation.
- **Resolved — full prose-size coverage:** every visible paragraph and its supporting span, each endnote and definition answer measured; minimum 16px across six viewports and no-JavaScript contexts. The previous 13px sidebar explanatory paragraph and responsive identity supporting prose are now 16px. File/path/status/link-destination metadata keeps its small utility scale.
- **Resolved — texture visual proof:** decode home screenshots and count changed pixels, then prove exact pixel restoration on toggling off. All six sizes, with reduced-motion emulation, show a visible texture change. Texture remains absent from the document reading surface.
- **Preserved — OS identity:** original bitmap name, flat amber/brown-black palette, four-file desktop, divided native window chrome, desktop tasks and mobile app strip. No new scene, device material, imported OS assets or topology replacement.

## Real execution
Final `node verify.cjs`: 6 JavaScript viewports, 24 document flows, 6 JavaScript-disabled viewports, no failures. Programmatic aggregation: 54 offset+identity assertions, all recorded contexts passed, zero page errors, prose minimum 16px in both modes. Pixel changes by viewport: 320×740 43,680; 390×844 63,350; 430×932 79,170; 844×390 54,672; 768×1024 161,674; 1440×900 262,152. Each crop reverses exactly.

Keyboard evidence: native Tab from skip to Home to Texture to About; Enter/Space opening; Escape returning to original launcher; article focus on activation; Space minimizing; Enter restoring desktop task; Tab/Shift+Tab between minimize/close; Enter closing and expected launcher/Home return focus. Trusted touch exercises all documents, switch, minimize, Home, Back and Close at each size. No-JavaScript native Enter activates About and the LinkedIn anchor; contact navigation is locally intercepted, not an external request or message.

First browser batch identified a real mobile Back issue: reaching the nonsticky Back control scrolled to the top before the event saved the departing document’s position. The single correction batch made Back sticky beneath the already-sticky titlebar. The confirmation batch then caught an overstrict harness focus expectation; mobile Close correctly returns to its surviving launcher, not necessarily Home. Only the test expectation was corrected for the final execution. Both preceding raw results remain saved; no subsequent UI polish or detector rerun.

## Evidence
- `verification-results.json` — final complete per-viewport facts, paragraph measurements, position expected/actual pairs, focus checks, texture counts, safe-area/motion values, errors and no-JavaScript checks.
- `verification-initial-results.json` — initial failures before sticky Back.
- `verification-confirmation-results.json` — confirmation before harness-only focus expectation correction.
- `detector-fix-raw.json` — one detector execution for this fix; warnings/advisories retained, not a clean-detector claim. Chrome padding and native Arial are intentional; optional home-only texture is pinned; incidental palette and type ramp are documented in DESIGN.md. Detector predates sticky Back and final docs.
- `.impeccable/review/final-home-*`, `final-{about,approach,curiosity,contact}-*` — fresh home/all-document/contact captures for desktop, portrait and landscape.
- `.impeccable/review/final-reading-*` — actual scrolled viewport proof at 390×844, 844×390 and 1440×900. Visually inspected along with desktop/mobile home and contact. Sticky chrome remains reachable; flat shell identity remains intact.
- `.impeccable/review/final-nojs-*` — complete semantic fallback desktop/mobile captures. Full-page mobile OS captures have sticky-nav compositing at the initial viewport boundary; actual reading captures avoid that ambiguity.

## Modified / created within this study only
Modified runtime `main.js`, `index.html`, `style.css`; test `verify.cjs`; documents `PRODUCT.md`, `SURFACE.md`, `DESIGN.md`, `.impeccable/design.json`, `README.md`; refreshed final `verification-results.json` and final captures. Created this report, `detector-fix-raw.json`, initial/confirmation raw result archives and final-named captures. No production, root preview, sibling studies or commits touched.

## Remaining boundaries
Chromium viewport/touch emulation is not physical iPhone/Safari proof. Safe-area CSS and viewport configuration are checked; no actual notched-device inset is simulated. Session offsets do not persist across reload or promise cross-breakpoint migration. Independent parent comparative review and assembled LAN-runtime verification remain outstanding; this is a narrow builder closure report, not independent visual approval.

## Reusable testing lesson
For page-scrolled window shells, exercise long-copy minimize/switch/Back through trusted controls and compare both active task identity and exact offset. An automation click that scrolls a nonsticky action into view can expose a real mobile usability bug before the application saves state. Match focus expectations to the actual surviving opener: Close may restore a launcher, while task-origin activation falls back to Home. Preserve failed raw batches and distinguish harness corrections from UI corrections.
