# Computation — named correction evidence

## Scope and verdict
Only route precision, readable text and the vertical mobile contract were corrected. Forest/moss/sulfur fields, the computational routing premise, synthetic disclosure and factual technology context are preserved. This is technical named-fix evidence, **not full comparative approval**.

- **Route precision: resolved technically.** Measured DOM row bounds determine every path’s start/end; SVG units match flow CSS pixels. Font readiness, resize and output mutation trigger recalculation. Ready and completed states at both target viewports report 0px endpoint error.
- **Text readability: resolved technically.** Functional labels ≥12px; status, row descriptions, gate explanation and context/disclaimers ≥14px. Mobile identifiers are 16px. No shrink-to-viewport requirement remains.
- **Mobile vertical contract: resolved technically.** Input rows precede the visible gate; gate precedes output rows. Single-column geometry and no horizontal overflow pass at 390×844. Vertical scrolling is deliberate.
- **Transformation/keyboard: preserved and verified.** Real CDP Tab traversal focused the native button with solid focus outline. Desktop Enter (carriage-return text included) and mobile Space activated running/disabled state, then completion. Actual normalized outputs: PO-041 → release order; PO-042 → request approval; PO-043 → release order. Status: “Complete. Two releases; one approval needed.”

## Evidence
`fixes.json` contains raw ready/complete geometry, computed text sizes, viewport/document dimensions, keyboard observations and all assertions. Both viewports pass all recorded named assertions. The source is served locally with `python -m http.server 8131` from this concept folder. Browser engine: Chromium using Browser Use/CDP; resized CSS viewports, not physical phones or Safari.

Fresh `desktop.png`: exact 1440×900 viewport capture. Fresh `mobile.png`: exact 390×844 viewport capture. `mobile-full.png`: 375×1428 untiled full-page capture from the mobile viewport (15px scrollbar excluded), exposing the complete vertical route. Desktop and complete-route mobile evidence were inspected once each as whole images, without tiling; no visual-edit loop followed. Desktop paths visibly meet record edges and pass the central function; mobile collects input on the right rail, passes the visible function explanation and distributes to output on the left. The desktop viewport nearly reaches the footer; readable content can extend below the fold. Settled document heights: desktop 933px, mobile 1428px (full-page screenshot capture can remove scrollbar width and reflow).

## Historical and pending evidence
`../detector-raw.json` is the unchanged single earlier detector run; its small-text warnings describe the pre-fix implementation. **No post-fix detector run was performed.** `browser-checks.json` also belongs to the earlier implementation; `fixes.json` supersedes it for these named fixes.

Harness issues were not counted as passes: Enter without character text failed to activate; corrected native Enter did. Immediate post-resize reads and wall-clock sleeps did not reliably settle renderer timers; browser-timed Promise waits were used for final passing reads. One desktop screenshot timed out; explicit viewport-clip retry succeeded. No further visual correction loop followed the fresh captures.

Parent fresh comparative review is still required; no production, root, sibling concept or commit changes were made.
