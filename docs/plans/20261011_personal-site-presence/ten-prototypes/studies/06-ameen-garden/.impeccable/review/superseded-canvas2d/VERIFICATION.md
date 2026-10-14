# Real browser verification

Chromium rendering via Browser Use/CDP, loopback :8916, named session ten06. Final successful script and raw assertions: `verify-browser.py`, `results.json`.

- Desktop 1440×900: loaded painted canvas, both local fonts, document width 1425 (scrollbar), no horizontal overflow.
- Mobile 390×844: document width 390; all five sections retained; practice horizontal inset computed 27.2969px.
- Real Tab reached skip link, then name, then Meet Victor. Enter reached #about with section top 30px.
- Native Space paused the button; pixels remained identical between samples. Enter resumed; canvas fingerprints changed.
- Desktop coordinate clicks reached practice and contact; mobile CDP touchStart/touchEnd reached contact.
- Reduced motion was actually emulated; matchMedia true, scroll behavior auto, truthful disabled Still water control, stable canvas pixels.
- All five shipping asset requests returned HTTP 200. Captured page error/unhandled-rejection array empty. Initial missing favicon was repaired with local SVG before final verification.
- Exact LinkedIn URL retained, opens new tab, zero forms. External LinkedIn service not visited or delivery-tested.
- Escape not applicable: no modal, trap or dismissible overlay.
- `git diff --check` scoped to owned folder exited 0.

Final desktop/mobile viewport and full-page captures retained under `.impeccable/review/`. One initial visual inspection identified stretched mobile trees and thin foliage; one correction batch fixed proportions and density. Final captures show complete settled pages. No further visual polishing after final captures.

## Detector / limits
Single raw detector file retained, exit 2 warnings. Low contrast identified aria-hidden decorative watermark; darkened from initial #a8c4b4 to #668d79, still 2.85:1 and intentionally not meaningful text. Its duplicate readable heading/body are 4.5:1+; body pairs calculated 8.57:1 peach, 7.32:1 pink, 8.94:1 teal. Three padding findings are inconsistent with actual CSS (9% desktop, 7% mobile; observed 27.2969px) and are recorded as false positives, not erased. No detector rerun.

Two unsuccessful assertion runs preceded successful verification: raw Enter without carriage-return text did not activate the button, and the browser was initially hidden. Harness fixed with Page.bringToFront and Enter text carriage return. These were test-input failures, not browser passes. Final actual keys and pixel assertions succeeded.

Canvas-failure branch exists but forced failure was not browser-exercised. Actual low-end hardware performance not measured. Landscape is painterly 2D, with atmospheric/reflection depth rather than physically based 3D lighting; reference-level aesthetic acceptance is NOT established. Parent fresh comparative review remains required.
