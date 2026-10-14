# Independent-review corrections — concept 04

## Corrections
- Delivery descriptions raised from 12px to 14px on desktop and mobile, retaining Manrope and 1.8 line height (computed 25.2px).
- Mobile delivery rows now stack the brass label above its description, with 9px separation and 23px row padding, instead of a cramped 100px/remaining-width split.
- Removed “A question I would start with” and its unused CSS rule; preserved separator and serif question.
- Added the compact brass instruction “Select a portrait to explore a perspective.” directly under the mobile triptych. Desktop caption descriptions/arrows remain unchanged.
- Preserved artwork, uneven triptych, Marcellus/Manrope voice, selected brass frame, all factual copy and unsent contact demonstration. Script and assets unchanged.

## Live verification
Served locally at http://127.0.0.1:8404/; HTTP 200 and `node --check script.js` passed. Chrome 145 rendering engine, no fixtures or simulated app responses.

Desktop 1440×1000 and mobile 390×844: real coordinate clicks selected People, Technology and Process; each produced exactly one pressed button, matching notebook label/title/question, and brass frame rgb(218, 181, 132). All three delivery descriptions computed to 14px/25.2px. Desktop document width 1425px initially (scrollbar); mobile width 390px. Additional 360px, 768px and 1440px checks all had document width equal to viewport: no horizontal overflow. Both local fonts and all three images loaded.

Mobile disclosure opened and closed with coordinate clicks. Expanded/hidden attributes matched rendered state; copy explicitly said nothing is sent or collected; localStorage and sessionStorage were empty. Reduced-motion emulation matched true, notebook animation computed to none, question remained rendered. No backend, submission, or storage code introduced.

## Fresh visual inspection
Visually inspected both final PNGs. Desktop retains the uneven gallery composition and readable two-column delivery list; notebook question has no eyebrow and retains its dividing rule. Mobile selection instruction sits directly below portraits, before the headline; the delivery descriptions now occupy the full reading width beneath their labels and no longer make a dense narrow column. No clipped headings, overlapping rows or horizontal clipping observed. Captures show the default Process selection and closed demo.

## Evidence and tooling caveats
- `.impeccable/review/desktop.png`: fresh full-page desktop capture.
- `.impeccable/review/mobile.png`: fresh 390px-wide full-page CSS rendering capture.
- `.impeccable/review/review-fix-checks.json`: computed metrics, selection results, demo state, reduced motion and additional width checks.
- Existing `browser-checks.json` and `detector.json` are retained as historical evidence. Detector was not rerun.
- CDP touch dispatch timed out; successful mobile selection uses real coordinate clicks in mobile emulation, not a verified native touch gesture.
- Screenshot calls initially timed out and recovered after `Page.enable`. Mobile captureBeyondViewport produced repeated tiles, so it was replaced with an inspected 390×2766 desktop-mode viewport screenshot of the identical mobile CSS breakpoint; behavior was checked separately at 390×844 in mobile emulation. No repeated-tile screenshot retained as final evidence.
- Parent owns independent re-review and aesthetic acceptance. No production/publication/commit changes.

## Local reusable check
For a narrow static-concept correction: preserve existing evidence; change only the reported source rules; click every gallery selection at both sizes; assert computed type and document widths; inspect fresh whole-page captures; if mobile full-page CDP capture tiles, use a full-height narrow viewport and disclose that capture mode rather than presenting corrupted output. Keep detector count unchanged when it already ran.
