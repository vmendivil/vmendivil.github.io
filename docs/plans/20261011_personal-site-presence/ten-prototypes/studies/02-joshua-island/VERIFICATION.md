# Browser verification

## Current atlas-margin / mobile refinement
All previous results below are historical. Current evidence: `.impeccable/review/content-mobile-results.json` and reproducible `content-mobile-test.cjs` (run with `node .impeccable/review/content-mobile-test.cjs` against loopback port 9012). Playwright Chromium passed 320×740, 390×844, 430×932, 844×390, 768×1024 and 1440×900, each in overview plus all three notes. Real keyboard Tab/Enter/Space/Escape, trusted destination touch taps at five touch-enabled sizes, next-shore transition, return, pause/reduced-motion and forced renderer failure exercised. No horizontal document overflow, visible button bounds ≥44×44, story paragraphs ≥16px, no page errors or failed HTTP responses. Final paragraph/next control and LinkedIn were scrolled into view and return clicked.

Updated main captures: `desktop.png`, `mobile.png`; open reading: `content-desktop.png`, `content-mobile.png`; short landscape: `landscape.png`. All inspected as actual images. Scene construction, materials and camera goals were not modified. Detector was NOT rerun; `detector-raw.json` remains historical. No external LinkedIn navigation, real phone/Safari, browser-chrome safe-area or physical GPU certification. Parent comparative content-style review remains required.

Test-harness issues: an immediate reduced-motion disabled assertion raced the asynchronous media-change event; the test now waits for the actual disabled state. One 180-second combined run timed out; unchanged suite passed with a 600-second execution allowance.

Technical results, not aesthetic approval. Original build used isolated browser session `ten02` and loopback worker port `8912`. Original DOM results in `.impeccable/review/results.json` and HTTP/PNG checks in `artifacts.json` are historical build evidence, not a post-icon-fix rerun. The opening `desktop.png` / `mobile.png` now show the named icon-fix batch below; earlier region captures and detector output remain historical.

## Named fix batch: 02-authored-svg-contact-back
Replaced only the contact northeast and Whole archipelago left Unicode arrows with authored decorative SVGs: matching 16×16 viewBoxes, 1.5px current-color strokes, rounded caps/joins, `aria-hidden="true"`, `focusable="false"`. No world.js, scenery, camera, copy, fonts, color/spacing tokens, routing or sibling changes. DESIGN.md documents the icon convention; token sidecar is unchanged because no design tokens changed.

Fresh real-browser evidence: `.impeccable/review/icon-fix-results.json`, isolated session `ten02-icon-fix`, loopback port `18912`. Both 1440×900 and 390×844 passed real Tab → identity/contact/workshop marker, Enter → workshop, Tab → back, Enter → overview, Space → Pi harbour and Escape → overview. Both icons measured 16×16 while visible, with matching stroke/accessibility attributes; accessible text remains Say hello / Whole archipelago and exact LinkedIn href is unchanged. Self-hosted fonts loaded, WebGL fallback stayed hidden, no horizontal overflow; error/rejection listeners installed after initial load recorded no errors during the exercised interactions (not a startup-console certification).

Recaptured `.impeccable/review/desktop.png` and `mobile.png`; added `desktop-icon-back.png` and `mobile-icon-back.png` showing keyboard focus on the visible back icon. Inspected all four together once: icons visible and aligned, archipelago composition/material/type retained. Mobile back-state capture is a viewport, not the complete scrollable story. Detector was not rerun; the prior findings below remain historical. This is a resolved named icon correction, not fresh full-surface/comparative aesthetic approval. Contact destination was read back, not externally activated.

## Confirmed
- WebGL scene renders with visible authored islands and architecture; normal page does not show the failure message.
- Desktop 1440×900 and portrait 390×844 opening captures; portrait story full-page 390×1190. Region sample desktop 1440×900.
- Self-hosted Figtree/Gloock load; shipping HTML/CSS/JS/library/fonts/favicon return HTTP 200. No external runtime requests.
- Normal browser JS error/unhandled-rejection collections are empty. Forced WebGL failure emits expected library warning, shows readable fallback and supports selection of The lookout.
- All three regions were selected with actual pointer input and their titles, factual copy and camera positions read back.
- Actual Tab traversal reaches identity, contact, scene landmarks and native route navigation. Space selects workshop. Escape returns home. Enter selects workshop when CDP key events contain native carriage-return text; attempts without text did not activate and remain in raw results rather than being counted as passes.
- Actual CDP touch selection activates The lookout on mobile, changing the camera and opening its story.
- Mobile visual viewport 390, scroll width 390; corrected note bounds x23 / width344 / right367. Story body remains 16px; functional controls are at least 11px.
- Reduced motion: paused true, truthful disabled control, immediate workshop camera `[11.3,14,16]` after selection. Normal pause stops ambient sea/birds/boat movement; render rate capped at 20fps and pixel ratio capped at 1.7. Hidden tabs skip scene rendering and ambient work.
- Contact routes exactly to `https://www.linkedin.com/in/vmendivilaxdeveloper`; no invented email or fake form.

## Inspection/corrections and tool limits
Initial startup used materials before initialization: corrected before a valid scenic inspection. Browser harness screenshots initially timed out because the isolated tab was hidden; `Page.bringToFront` resolved that. Some helper navigations reset viewport emulation; final portrait captures explicitly apply device metrics after navigation and were checked by PNG dimensions.

Bounded visible corrections addressed portrait camera composition and scene overflow, then detector-triggered functional type minimums, neutral DOM shadows and the portrait note width/gap. No detector rerun. `detector-raw.json` is the preserved single raw run before these mechanical corrections; it flags colored shadows and small auxiliary/control text. The 11px legal/local-preview notice remains intentionally small; main personal explanations use 16px. There is no asserted independent visual quality verdict.

## Reproduce browser actions
Bring the tab to front. After navigation apply `Emulation.setDeviceMetricsOverride` for 1440/900 or 390/844 (deviceScaleFactor1). Read `window.__archipelago.active`, `.camera`, and `.paused`. Use actual pointer/touch on region controls. Traverse with `Input.dispatchKeyEvent` Tab down/up; Enter down must include key/code Enter, virtual key13 and `text:"\r"`, followed by keyUp. Space uses key Space and virtual key32; Escape virtual key27. Use `Emulation.setEmulatedMedia` prefers-reduced-motion reduce, select another region and compare the camera immediately. Force renderer failure with a new-document override returning null for canvas WebGL contexts, then select a story through native navigation.

## Remaining scope
Independent parent comparative critique/art acceptance, actual physical-device GPU/performance measurement and production accessibility certification are not performed. Small diorama landmarks are illustrative; no fabricated client/project claims. No commits, deployments or sibling modifications.
