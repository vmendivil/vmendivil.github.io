---
name: Monumental crystal
description: Portrait-led personal presence
colors:
  ground: "#21201e"
  ink: "#f2eee6"
  muted: "#c3bdb2"
  copper: "#bf8968"
  deep: "#211e1b"
  rule: "#686158"
typography:
  display:
    fontFamily: "Antonio, sans-serif"
    fontSize: "clamp(58px, 7.5vw, 96px)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Antonio, sans-serif"
    fontSize: "clamp(44px, 5vw, 70px)"
    fontWeight: 500
    lineHeight: 1.08
  body:
    fontFamily: "Segoe UI, Arial, sans-serif"
    fontSize: "17px"
    lineHeight: 1.65
rounded:
  flat: "0px"
spacing:
  inset: "clamp(24px, 5vw, 80px)"
  action: "16px 20px"
components:
  action:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.deep}"
    padding: "{spacing.action}"
    rounded: "{rounded.flat}"
  action-hover:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.deep}"
---

# Design System: Monumental crystal

## Overview
**Creative North Star: "The portrait installation"**
Dark gallery space gives a faceted portrait room to act as a sculpture. Warm stone lettering and clay-copper fields extend its material without adding synthetic crystal decorations. The palette matches an evening viewing scene rather than a generic technology aesthetic.

**Key Characteristics:**
- Portrait material supplies the identity.
- Condensed display lettering carries scale; body text stays conversational.
- Flat action plaques and disclosure seams, not capability cards.

## Colors
Copper carries an entire problem-solving region, not a scattering of decorative accents. Ink and muted lettering are warm-tinted for the charcoal ground. Deep lettering is used on copper and pale actions. The rule color separates dark passages.

## Typography
Antonio is self-hosted with its OFL license. Display tops out at 96px; headlines range from 44px to 70px, with larger thesis/contact text. Body is 17px on desktop, 16px on narrow screens. Paragraph measures cap at 68ch. Condensed headings use close leading; paragraph text uses 1.65.

## Layout
Fluid horizontal insets run from 24px to 80px. Wide content often uses two unequal reading areas, but the portrait opening is a central installation with marginal text. Narrow layouts stack at 640px; an intermediate 900px breakpoint reduces gaps. Section spacing varies from 65–115px to pace dense and quiet material.

## Elevation & Depth
No shadows. Depth comes from portrait shading, dark tonal fields and scale. The opaque raster’s border-connected neutral ground is edge-matched to #21201e; its sculptural bust remains intact. No blending, geometric mask or alpha cutout is used.

## Shapes
Square, flat controls. One-pixel seams and numbered circular markers only where the process sequence is meaningful. No decorative polygon scaffolding.

## Components
Actions: pale rectangles, deep text, 16px by 20px padding, copper hover field, minimum 54px height. Keyboard focus is a 3px copper outline offset 6px; copper-region focus uses deep ink.

Disclosures: full-width native details/summary, Antonio title, a stroked square plus that rotates when open. Content stays readable with JavaScript disabled.

Text field: dark square textarea with rule-colored border, warm text, copper caret. Required input and explicit local-only submission status; no send endpoint.

Navigation: text links with 44px targets. The first secondary link is omitted at narrow widths; its destination remains in the document. Reduced motion disables smooth scroll and disclosure rotation transition. Selection and scrollbar colors inherit the palette.

## Do's and Don'ts
- Do let the existing illustration carry the faceted material.
- Do alternate large material fields with readable quiet passages.
- Don't add generic capability-card rows or invented social proof.
- Don't treat the locally prepared conversation brief as contact delivery.
