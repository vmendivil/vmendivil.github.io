---
name: Victor Mendivil — Engineering assembly
description: Oxblood workbench and pale machined-metal explanatory geometry
colors:
  ground: "#251719"
  oxblood: "#4b2228"
  metal: "#e1e0d6"
  muted: "#c0aaa8"
  vermilion: "#f65d46"
  line: "#765057"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(58px, 5.6vw, 81px)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Barlow, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.45
  annotation:
    fontFamily: "Barlow, sans-serif"
    fontSize: "23px"
    fontWeight: 500
    lineHeight: 1.15
rounded:
  control: "3px"
  lever: "20px"
spacing:
  small: "12px"
  medium: "24px"
  large: "48px"
components:
  button-primary:
    backgroundColor: "#42252a"
    textColor: "{colors.metal}"
    rounded: "{rounded.control}"
    padding: "13px 20px 13px 12px"
  button-primary-hover:
    backgroundColor: "#5b3036"
    textColor: "{colors.metal}"
---

# Design System: Engineering assembly

## Overview
**Creative North Star: "The assembly bench"**
A single spatial system stands for connected technical problem solving. Oxblood is the work surface, pale machined material carries the explanatory layers, and vermilion identifies their common axis. The dark scene comes from a focused indoor workbench under task lighting, not a generic technology-dark theme.

**Key Characteristics:**
- One projected, open-section mechanism rather than decorative gears.
- Industrial condensed headline with clean, non-monospace explanation.
- Meaningful leader lines; actual runtime separation of geometric parts.
- Material palette covers the ground and object, not just the control.

## Colors
Oxblood-charcoal owns the full field. Metal carries the reading contrast and plates. Vermilion is the connectivity spine, action indicator, and annotation endpoint. Muted rose-metal remains legible against the field.

**The Continuity Rule.** Red marks connection or action, never an invented success metric.

## Typography
Self-hosted Barlow Condensed is the display voice; Barlow carries name, domain labels, and explanation. The condensed face references workshop lettering without resorting to stencil caricature or system display fonts. Phone display is 47px; phone introduction is 15px and domain titles are 18px. Explanatory annotation lines are 15px on phone and 16px on desktop. The disclosure and brief live status are 12px on phone; explanations are not reduced to caption size. Redundant pre-heading role labels are absent.

## Layout
Desktop is a full-width engineering field with a 54px outer margin, an 88px nameplate, upper-left headline, upper-right explanation, and a central lower mechanism annotated around its perimeter. This is not a two-column split hero: the figure occupies the connected field beneath both opening text regions. The control occupies a lower-left bench station; homelab interest closes the lower-right edge.

At 600px and below, margin is 22px; headline and introduction precede a flow-positioned 245px figure. Four tightly related technical rows pair domain headings with their concrete handoffs, not cards. The 51px-high control is visible at 390×844. The desktop diagram uses perimeter leaders; phone explanation uses sequential text rows to retain readability. The phone document is 930px tall: the homelab line and secondary footer require a short scroll; the exploded live status ends at 837px and remains visible. This is a deliberate readability tradeoff, not a claim that all content fits the first phone viewport.

## Elevation & Depth
Canvas meshes use real projected dimensions and different face tones for the open section. Material gradients represent directional metal shading, not interface decoration. The control has an offset soft shadow (`0 6px 18px #110c0d60`). A diffuse projected ground shadow anchors the assembly; no glowing edges.

## Shapes
Rectangular plates with open center slots, four shared guide rails, socket bolts, and a vermilion central connector form one coherent object. Control corners are minimally rounded. The lever is a compact capsule with a single round handle. No card grid or circuit traces.

## Components
### Assembly control
Native button with `aria-pressed`, visible state-dependent action name, and live status. Exploded status invites following the requirement through the sections; assembled status explains that changing the rule requires new tests before release. The interaction illustrates a handoff dependency: it does not run invoice validation or release software. Assemble changes runtime world-space z positions over 1000ms with quintic ease-out; explode reverses the same geometry. Reduced-motion sets the final geometry immediately and removes lever transition. Keyboard Tab, Space, and Enter are verified in Chromium. Focus uses a pale-metal 3px outline offset 6px. Hover deepens oxblood and brings vermilion to the border.

### Technical annotations
Domain title and concrete illustrative explanation, with no pre-heading role label. The four sections now represent requirement → posting rule → two-case test → release gate. The invoice example starts with holding an invoice until approval, translates that into a no-posting-before-approval rule, tests both blocked and allowed paths, and makes both passes prerequisites for release. The guide rails represent that dependency, not Dynamics internals. A fourth leader identifies the base release section; right-hand leaders stop before the text. Phone groups use single bottom hairlines and two text columns.

### Nameplate and bench edge
Actual identity and concise technology positioning. The lower edge carries a short process sequence, not a navigation menu for unbuilt pages.

## Do's and Don'ts
- Do keep the illustrative disclosure visible and independent of interaction.
- Do make every drawn part belong to the same model and connectivity axis.
- Do preserve readable HTML content outside the canvas.
- Don't invent case studies, results, availability, contact channels, or sending behavior.
- Don't use the mechanical analogy as a claim about real Dynamics architecture.
- Don't introduce copper, card grids, portraits, neon circuits, or off-family scenery.

Named correction batch: **Invoice handoff / direct domain labels**. Builder fix-list verdict: explanatory substance resolved; redundant labels resolved; dimensional industrial identity preserved. The final desktop and phone captures were visually inspected. This is not a fresh independent full-surface or comparative approval.

Execution evidence: `.impeccable/review/browser-checks.json`, inspected `desktop.png` and `mobile.png`, and one preserved `.impeccable/detector-raw.json` run. **Historical detector finding:** that original run warned about 11px copy before the earlier 12px fix; it predates this correction batch and was not rerun. No post-fix detector pass is claimed. Independent comparative review remains the parent agent's responsibility. No raster assets ship; review captures are evidence only. Font provenance and license are in `assets/`.
