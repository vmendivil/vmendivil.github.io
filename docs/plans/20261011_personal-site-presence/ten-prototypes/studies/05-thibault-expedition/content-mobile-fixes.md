# Expedition journal / mobile refinement

- Replaced the generic warm cream aside with a mineral-cyan personal field journal: asymmetric sediment-like contour, rounded contents selectors, original hand-drawn chapter specimens, paired curved seam margin, unboxed first-person prose and italic exploration caveats. No mission metrics, HUD costume or roadside-passport structure.
- Preserved all five factual entries, LinkedIn route, accepted world geometry, character, plants, lighting and material palette. Desktop scene framing remains unchanged; short-landscape camera offset is responsive-only.
- Portrait is a readable lower layer below a real scene/explorer context band. Short landscape shows the same scene beside the journal. No duplicate canvas or scene asset, no driving/navigation controls under the reader.
- Back to world and contents remain outside intrinsic body scroll. dvh fallback, safe-area padding, 17px body and ≥44px controls cover narrow screens, dynamic-height changes and long entries. Reading is now a correctly labelled protected-focus dialog with scene inertness, opening-only focus capture, Tab wrapping, Escape, and exact invoker restoration.
- First real inspection caught short-landscape empty-context framing and a transparent footer hit area swallowing landmark taps; fixed together in the sole material correction batch. Labels were made non-wrapping and landscape landmark sizes tuned without scene rebuilding.

## Evidence and issues
`node content-mobile-checks.cjs` is reproducible; latest behavior-only execution `SKIP_CAPTURE=1 node content-mobile-checks.cjs` exits 0. Raw 30 entry/viewport states and trusted input measurements: `content-mobile-results.json`. Fresh genuine hidden observation: `content-hidden-results.json`. Native Tab/Enter/Space/Escape, trusted tap/open/change/close and 279px touch swipe pass. Paused idle 0, paused navigation 1, reduced idle 0, actual hidden idle/navigation 0. No normal runtime errors, failed requests or horizontal overflow.

The initial long animated Xvfb run timed out; geometry setup now pauses immediately and still separately verifies native pause. Short fixed waits also undercounted costly software-WebGL redraws; tests now wait on the real draw counter. Xvfb/minimize did not create a genuine hidden document, so actual hidden checks run in the browser-use daemon and distinguish native visibility from programmatic navigation input.

Current inspected captures: `.impeccable/review/{desktop,mobile,landscape,content-desktop,content-mobile,content-landscape}.png`. Prior all-entry opened inspections remain as `before-*` evidence. Historical detector was not rerun. DESIGN, SURFACE and token sidecar describe the current UI. Parent content/mobile comparison remains the aesthetic gate. No physical Safari/iPhone certification, hidden→visible daemon certification, preview assembly, production changes or commits.

## Reusable verification lesson
For software-WebGL interfaces, wait for a measured render counter after invalidation instead of equating a short timeout with no draw. Separate intrinsic reading-body scroll from pinned controls, preserve the original invoker only once, and measure actual native visibility before calling any background draw result a hidden-page test.
