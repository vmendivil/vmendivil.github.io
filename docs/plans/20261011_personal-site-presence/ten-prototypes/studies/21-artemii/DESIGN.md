---
name: Open Register
description: A relational visual inventory of practice and curiosity
colors:
  black: "#0c0e11"
  pale: "#eae9e2"
  secondary: "#b5bbc1"
  rule: "#444a51"
  paper-text: "#43464b"
typography:
  display:
    fontFamily: "Chivo, sans-serif"
    fontSize: "clamp(34px,4.3vw,62px)"
    fontWeight: 450
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Chivo, sans-serif"
    fontSize: "18px"
    lineHeight: 1.85
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace"
    fontSize: "13px"
    lineHeight: 1.5
spacing:
  outer: "24px"
  preview: "65px"
  reading-section: "46px"
  reading-mobile: "30px"
components:
  colophon:
    backgroundColor: "{colors.pale}"
    textColor: "{colors.black}"
    padding: "22px 22px 18px"
  active-topic:
    backgroundColor: "{colors.pale}"
    textColor: "{colors.black}"
    height: "48px"
---
# Design System: Open Register

## Overview
**Creative North Star: "Open Register"**
A cool-black image inventory with a bone-white identity colophon. Six independently drawn line plates make the register visual; the inventory is functional and its destination is a full note rather than an art-object modal.
**Key Characteristics:**
- Extreme scale contrast between colophon and artwork.
- Sparse mono labels, companion sans essays.
- A white correspondence sheet closes the path.

## Colors
The black ground and pale colophon are stable; each original plate has its own deliberate colour field. Secondary text is cool grey. The availability essay reverses to pale with dark text.
**The Plate Rule.** Image colour belongs to the artwork, not a compulsory shared site accent.

## Typography
Chivo is bundled with SIL OFL. Note titles have a 62px desktop ceiling, essays use 18px with 1.85 line-height and 17px narrow. Short labels use the native mono stack; metadata is at least 12px, scope disclosure is 14px. Never use the inventory label size for an essay.

## Layout
Desktop identity and topic index occupy the left 32% up to 440px; the preview stream begins at 40%. Each large image has its own caption and Open note action. At 950px the identity becomes a normal stacked colophon, the index a collapsible contents list, and previews a full-width stream. Short desktop heights unfix the aside so every index row remains scrollable. Reading surfaces preserve the identity while giving prose a 68ch ceiling. Mobile contact is a full-height scrolling correspondence sheet, not a squeezed dialog.

## Elevation & Depth
Flat alignment and page-scale contrast. The artwork supplies apparent optical depth through original linework; no glass, drop shadows or fake device frames.

## Shapes
Rectilinear colophon, plates and sheet. Inventory selection is an inverted row and a tiny dot, never rounded chips. The plates are SVG artwork, not copied client images or photographic substitutes.

## Components
Topic anchors select and scroll to their matching preview. Open note links change the hash and display the full article. The native contents disclosure supports Space; Tab/Enter activates note links; Escape returns to the selected preview. Back to register and browser Back preserve topic selection. Returning focuses the matching note action. All six notes follow the inventory when JavaScript is disabled. Normal-motion note transitions preserve the selected artwork; reduced-motion swaps are immediate.

## Do's and Don'ts
- Do let artwork dominate the preview region while prose remains readable.
- Do label the images as illustrative explorations and notes as non-client work.
- Don't fabricate chronology, portfolio clients, results or hardware metrics.
- Don't turn the register into a timeline, operating system or hover-only gallery.

## Experience fidelity refinement
The inventory now has All/Practice/Curiosity/Person/Availability filters, authored as a topic-navigation adaptation (not claimed observed source functionality). Real rows and previews are narrowed, with pressed-state feedback; no duplicate scenic cards. Intersection observers synchronize selection with the vertical preview stream. Opening a full note carries its plate through a same-document View Transition; Escape/back restores the exact prior scroll and category filter when returning to that note's origin. Reduced motion is instant and exposes the same content. No ongoing animation loop. Unsupported browsers retain instant state changes.

