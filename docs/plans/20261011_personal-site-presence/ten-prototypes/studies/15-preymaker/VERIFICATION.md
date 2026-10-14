# Executed verification

## Result
`node tools/verify.cjs` returned passed=true, viewports=6, errors=[]; `node tools/interaction.cjs` returned passed=true, verifiedViewports=6, allChapters=true, return=true. Chromium Playwright, local plain HTTP only.

Six sizes: 320×740, 390×844, 430×932, 844×390, 768×1024, 1440×900. Captured opening/About/Approach/Curiosity/Contact/menu, readable approach prose, second image and contact ending at every size. All substantial paragraph sizes asserted >=16px; actual normal prose is 17–18px. All section widths asserted within viewport and all images loaded. Every main paragraph/link was scrolled into view and asserted rendered/reachable.

Actual inputs: Tab/Enter/Space opens/closes menu; Tab/Enter selects Approach. Escape closes and returns focus. Trusted Playwright touch taps all five chapter links, native close, contact-to-opening return at six sizes. Native dialog prevents background controls entering the tab path; browser-chrome focus is allowed by native behavior. Reduced-motion selection has animationName=none. JavaScript-disabled page retains poster, all document content and contact. Exact genuine LinkedIn href and visible fallback checked. Final provenanced asset GETs returned success.

## Bounded visual pass
Inspected actual archive/cinematic craft and original wide/portrait plates before implementation. First UI batch inspected main six-size/state contact sheet and actual desktop/mobile renders. One bounded correction raised small functional labels to 12px, relaxed lead leading to 1.3, and disabled mobile chapter masks. Final six-size captures inspected as `final-sheet.jpg` and `reading-sheet.jpg`, with full-resolution `content-mobile.png` and `contact-end-mobile.png`. No further visual polishing loop.

## Detector
Ran once after completed UI, kept raw `detector-raw.json`; exit 2 reports warnings, not execution failure. Findings: 10px mobile plate label (corrected 12px), 11px labels (raised 12px), tight lead/display leading (lead fixed 1.3; display is pinned bold-heading treatment), full-bleed hero/essay and contact-wrapper padding heuristics (text is actually gutter-inset). Detector not rerun; raw output predates this one correction and is not a post-fix clean claim.

## Provenance
`embed-prompt --scan assets` returned 4 rasters, 0 missing. Final JPEG byte hashes in ASSET_PROVENANCE.md. Runtime has no rendering dependencies or external CDN.

## Test-harness issues and limits
First capture runner attempted tap in a non-touch desktop context; fixed the test context, then final six-size run passed. Supplemental tab test initially treated native focus moving to browser chrome as a failure; corrected the assertion to allow body/chrome while still forbidding background controls. No runtime behavioral workaround was introduced. Pillow was unavailable for evidence sheets; used installed ffmpeg instead, no installation.

Physical iPhone/Safari and actual browser chrome dynamics on devices are unverified. No screen-reader certification. Reference-level cinematic photorealism and ensemble distinctness are not established by functional passes. Parent must perform fresh comparative review and LAN assembly/testing. No production authorization advanced.
