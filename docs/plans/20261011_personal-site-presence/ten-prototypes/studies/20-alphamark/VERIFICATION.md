# Browser verification
## Executed evidence
`node verify.cjs` returned 31 passing recorded cases and zero normal-runtime console/page errors. `results.json` preserves actual per-route/per-viewport values. Viewports: 320×740, 390×844, 430×932, 844×390, 768×1024, 1440×900. All four pages were opened at every viewport; tests checked image/font loading, document width, body/prose minimum sizes, contact target height, final contact reachability and footer return to the collection.
Mobile/short-landscape menu checks exercised actual Enter, Tab, Escape, Space, link selection, restored focus and trusted synthetic touch taps. `verify-extra.cjs` additionally exercised all three collection-to-essay links using trusted touch, long-content return, forward/backward focus trap endpoints, the exact external LinkedIn href, and keyboard Enter on a prevented external link (no message sent or third-party site opened).
Reduced-motion browser emulation confirmed matchMedia, auto scrolling, a 0s image transition vs 0.7s normal and visible independent artwork/content. No-JavaScript 320px browsing confirmed visible inline navigation and contact. Aborting all asset requests left headings, essay captions and contact available; native image alt is supplied. Those deliberate aborts are separate from the zero-error normal-runtime assertion.
The local static server returned HTTP 200; no bundler/build or external CDN runtime needed. `node --check main.js` and `node --check verify.cjs` returned zero. `git diff --check` returned zero; it does not validate ignored/untracked prototype files by itself.

## Computed evidence and detector adjudication
Detector ran exactly once. Raw 33 warnings retained in `.impeccable/review/detector-raw.json`; stderr retained too. Categories: 21 low-contrast, 4 undersized text, 7 cramped padding, 1 tight-leading. The raw file predates the correction batch and was not rerun.
- 10px identity subtitles were real: corrected to 11px at the smallest breakpoint.
- 1.25 display-statement paragraph leading was real: corrected to 1.3.
- White-background contrast warnings are not the live rendering: actual body is rgb(16,17,16). Measured contrast is 8.89:1 muted-on-ink, 16.64:1 paper-on-ink, 15.12:1 ink-on-yellow and 7.37:1 pink-on-aubergine.
- Flush-padding warnings do not reflect computed CSS variable gutters: live mobile practice/contact each have 20px left/right padding, recorded in extra-results.json.
- Native dialog alone did not wrap focus directly from the last item back to the first in the Chromium test. Added explicit Tab/Shift+Tab endpoint trapping and reran successfully.

## Visual evidence
Main desktop/mobile; collection desktop/mobile/landscape; all three reading variants desktop/mobile/landscape; menu mobile/landscape; contact desktop/mobile/landscape; paired artwork and Approach/About desktop/mobile. Final captures live in `.impeccable/review/`. `capture-boards.json` maps each montage cell to its original capture; black unused montage cells are filler, not page captures.
One bounded initial inspection + one correction/confirmation batch. Portrait artwork was separately recomposed instead of clipping its words; decorative overlap removed. Final named desktop paired-framing correction received a targeted capture and verdict, not another whole-site polish pass: complete Small machine / Big questions message and both folios visible. `framing-results.json` records contained framing/load checks. Final boards regenerated after that correction.
`browser_exec` named session build20 also opened the actual loopback site; Playwright is the authoritative recorded suite.

## Limits and handoff
Chromium emulated viewports/trusted synthetic touch, not physical-device, iPhone, Safari or WebKit certification. Original vector illustrations are intentionally illustrative, not photographic or physically rendered product models. No contact delivery, live LinkedIn navigation, analytics or backend asserted. Independent comparative visual review and parent runtime-only LAN assembly/tests are still required; engineering passes do not grant aesthetic or production approval. Loopback test server stopped at handoff.
