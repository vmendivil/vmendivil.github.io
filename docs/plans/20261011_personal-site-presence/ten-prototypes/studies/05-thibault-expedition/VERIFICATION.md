# Content/mobile verification — current expedition journal

## Real browser evidence
`content-mobile-checks.cjs` uses the existing devPilot Playwright dependency read-only. Latest execution: `SKIP_CAPTURE=1 node content-mobile-checks.cjs`, exit 0, raw `content-mobile-results.json`, status passed. No installs. Local loopback target: http://127.0.0.1:9015.

All five entries were opened and checked at 320×740, 390×844, 430×932, 844×390 landscape, 768×1024 and 1440×900: **30 entry/viewport states**. Real rendered checks cover document width, reading bounds, pinned close, inert scene, hidden driving controls, 17px paragraphs, ≥44px chapter/close targets, scroll-to-final disclosure, exact LinkedIn URL and test-only long-content stress. Main controls and landmarks were separately verified ≥44px and within the requested original viewport bounds. Reduced-height resizing while reading keeps Back to world within the viewport. Safe-area padding and dvh are implemented, but Chromium’s zero-inset emulation is not physical-notched-device certification.

Trusted Playwright touchscreen taps open, change every chapter, close and return to the original invoker. All three landmark invokers also restore focus after Escape. At 390px a trusted Chromium protocol swipe advances the journal body 279px; this is an emulated touch gesture, not a DOM-dispatched pointer event. Long-content scroll testing duplicates the existing first paragraph in the test DOM only; no extra facts ship.

Native Tab traverses identity → pause → Field guide. Space pauses and selects ERP; Enter opens and selects another chapter; Shift-Tab and Tab wrap within the reader; Escape returns to Field guide. Focus is captured only on opening, not rewritten by chapter selection.

Measured scheduling: paused idle **0** draws, paused chapter navigation **exactly 1** draw, reduced-motion idle **0** draws; resume and foreground rendering advance. On this software-WebGL host 600ms waits were unreliable, so redraw/resume checks wait for the measured draw counter before asserting; these are scheduling checks, not a framerate benchmark. Renderer geometry, materials, lights and assets are untouched; only short-landscape framing and reading-mode canvas positioning change.

Normal path page exceptions [], failed requests [], console errors []. Explicit test injection of WebGL failure retains fallback and contact reading. Expected renderer-failure console output is not counted as a normal-path error.

## Actual hidden lifecycle
Headless/WM-less Xvfb tab/minimize attempts retained `visibilityState=visible`, so `content-mobile-results.json` labels that attempt unavailable instead of claiming its visible-state samples were a hidden failure/pass. Separate `content-hidden-checks.py`, executed in isolated browser-use session `browsercontent05`, observes actual daemon `visibilityState=hidden`: **0 → 0 draws**, including programmatic chapter invalidation while hidden. Raw `content-hidden-results.json` is the fresh proof, with no mocked visibility properties/events. A real hidden→visible transition is still not independently certified in that daemon.

## Bounded visual inspection
Before editing, desktop and mobile opened screenshots of all five original entries were inspected in two contact sheets. One completed UI batch and one material correction batch were used. Current main/open desktop, mobile and landscape captures were opened and inspected, not inferred from selectors. Changes from the first capture: footer no longer steals landmark taps; short landscape now shows the world alongside reading instead of empty cobalt; main header controls no longer wrap their labels. No further scene-polish loop.

Current files under `.impeccable/review/`: `desktop.png`, `mobile.png`, `landscape.png`, `content-desktop.png`, `content-mobile.png`, `content-landscape.png`. They are real viewport captures of the final runtime; main captures deliberately pause the world for stable inspection. Ink-to-mineral-paper contrast: 8.82:1 body, 6.20:1 notes, 5.58:1 specimen captions.

## Limits and historical evidence
The five factual chapter strings and real LinkedIn destination are unchanged. Existing `results-native.json`, `results-hidden.json`, and the original values in `results.json` are historical; `results.json` now explicitly points to the fresh evidence. The single original `.impeccable/detector-raw.json` stays historical and was **not rerun**. No claims of a clean current detector, physical Safari/iPhone, aesthetic acceptance, production readiness or LAN verification. Parent comparative content/mobile review is pending. No preview/root/sibling edits, commits, publishing or installs.
