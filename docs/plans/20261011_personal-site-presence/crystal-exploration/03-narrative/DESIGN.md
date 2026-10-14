---
name: Victor Mendivil — Crystal narrative
description: A mineral-dark personal identity with human-scale cinematic imagery.
colors:
  carbon: "#21201d"
  ink: "#171c1b"
  mineral: "#263f3c"
  paper: "#ece9dd"
  muted: "#c0c3b6"
  copper: "#dfac83"
  mint: "#c2d0c0"
  line: "#77867c"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(68px, 6.65vw, 96px)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(44px, 4.7vw, 68px)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Public Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  lead:
    fontFamily: "Public Sans, sans-serif"
    fontSize: "21px"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  square: "0px"
spacing:
  gutter: "clamp(24px, 5.5vw, 88px)"
components:
  button-primary:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.square}"
    padding: "13px 19px"
  button-primary-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.carbon}"
---

# Design System: Crystal narrative

## Overview

**Creative North Star: "A change of perspective"**

A dark mineral world drawn from the approved faceted illustrations. Portraits are substantial content, not avatars. Broad color fields and a measured sans-serif pairing let a person and their way of thinking lead the experience. The physical use scene is a quiet, low-light viewing session with time to read a personal story; the dark ground preserves the portraits’ own charcoal environment.

**Key Characteristics:**
- Warm carbon and mineral-green fields.
- Large portrait illustration and restrained copper emphasis.
- Flat square controls with clear, human labels.

## Colors

Copper picks out meaningful words and primary action. Mineral green carries whole regions, while carbon and darker ink provide rest. Limestone paper is the main reading color; mint is secondary text on green, muted is secondary text on carbon. Contrast samples are recorded in VERIFY.md.

**The Material Rule.** Keep the image’s copper, carbon and mineral tones connected to the surrounding field; do not recolor a portrait into an unrelated theme.

## Typography

Archivo is the display voice, Public Sans the reading voice; both are self-hosted variable fonts. Medium-weight display text is large but not heavy, with a tight negative tracking floor. Body measure is limited to 68ch. Leads are 21px desktop and 19px mobile. The mobile display uses a 52–62px fluid range; smaller headlines use 41–43px. Navigation is 12px desktop and 11px mobile.

## Layout

Fluid page gutters expand from 24px to 88px. Large image scenes, staggered text rows and quiet two-column reading passages share a vertical rhythm but do not share a card wrapper. At 1000px, columns and display sizing tighten; at 650px, sections become single column, images are deliberately cropped, and facet rows keep their stepped indentation. The opening remains visible without scripts.

## Elevation & Depth

Depth comes from illustration and tonal fields, not component shadows. A soft dark text shadow supports the opening headline. On mobile, a dark vertical dissolve protects text contrast without replacing the authored portrait. There are no glass surfaces or glowing controls.

## Shapes

Controls and inputs are square with one-pixel boundaries. The crystal geometry is inside the portrait illustrations; it is not simulated with decorative CSS polygons. Icons are small single-stroke SVG arrows and a plus.

## Components

- **Chapter navigation:** sticky flat carbon bar, underlined copper current location, native anchors; JavaScript updates aria-current, but links work without it.
- **Text action:** underline and an arrow, copper hover, visible copper focus outline.
- **Draft disclosure:** native details/summary with plus rotating into a close mark. It opens inline, not as a modal.
- **Inputs:** square dark textareas, explicit labels, copper caret and focus outline. Empty preparation focuses and marks the missing field; feedback is announced through a status region.
- **Primary button:** copper fill, carbon lettering, paper hover. Draft creation is local and never submits.
- **Browser surfaces:** copper selection, mineral scrollbar, copper focus rings. Reduced motion switches anchor scrolling to auto; there are no hidden entrances.

## Do's and Don'ts

- Do keep body copy readable against the field it inhabits.
- Do identify stylized portrait imagery as illustration.
- Do preserve native controls and no-script reading access.
- Don't turn the portrait geometry into a decorative component costume.
- Don't imply contact delivery or invent commercial evidence.
