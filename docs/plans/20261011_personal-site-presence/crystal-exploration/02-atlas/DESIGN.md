---
name: Victor Mendivil — Faceted Atlas
description: A connected, legible map of practical work problems.
colors:
  ground: "#111e24"
  surface: "#182a31"
  conversation: "#21373d"
  text: "#f2eee5"
  muted: "#b7c5c8"
  brass: "#e1b879"
  sea: "#97cbc0"
  line: "#385058"
typography:
  display:
    fontFamily: "Barlow, sans-serif"
    fontSize: "clamp(64px, 6.65vw, 96px)"
    fontWeight: 600
    lineHeight: 0.97
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Barlow, sans-serif"
    fontSize: "clamp(32px, 3vw, 44px)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Barlow, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  control: "0px"
components:
  button-primary:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.ground}"
    rounded: "{rounded.control}"
    padding: "17px 18px"
---

# Design System: Faceted Atlas

## Overview

**Creative North Star: "A way through"**

Dark blue-graphite fields and brass routes relate directly to the amber and charcoal faceted portrait. The page is an understandable working map rather than a starfield. Tonal planes carry structure; readable language names every destination.

**Key Characteristics:**
- Angular, connected routes instead of ornamental orbit icons.
- Warm brass selection, sea-green orientation, quiet blue structure.
- Self-hosted Barlow typography with a substantial headline scale.

## Colors

Brass identifies selected routes and useful actions. Sea marks origin and orientation. Text and muted text remain bright against each of the three dark grounds. Borders provide supporting structure, not content that must be read.

**The Route Rule.** Color reinforces the text label and pressed state; it never carries selection alone.

## Typography

Barlow regular and semibold are self-hosted. Large display lettering uses compact leading; route controls have a readable 1.3 line-height. Body text uses 1.5. At mobile widths, body becomes 17px and display uses `clamp(58px,13vw,80px)`. Metadata is at least 12px.

## Layout

A centered 1600px maximum frame uses 5% horizontal padding on desktop. The map and live guidance form an unequal two-column region. At 700px and below, the map becomes a vertical route selector; guidance remains directly underneath it. Approach and conversation regions use two columns on desktop, one on mobile. Spacing alternates a dense map with a quieter, generous approach section.

## Elevation & Depth

No raised panels or decorative glows. Depth comes from tonal blue planes and the portrait's own illumination. Thin route geometry is subordinate to labels. A selected destination has a brass inset diamond.

## Shapes

Controls and fields are square. Diamond markers echo the faceted portrait without clipping its subject into synthetic shapes. SVG paths make the connective map. The small origin marker is circular to distinguish it from destinations.

## Components

- **Route selector:** native buttons, `aria-pressed`, selected brass text and diamond, muted supporting sentence. Updates the connected SVG route and polite live detail region.
- **Route detail:** readable article with practical first step and conversation link. Live location status sits with the map selector, not above the article heading. Thin dividers replace a card shell.
- **Conversation composer:** native select and textarea, explicit labels, brass draft button, read-only output with live confirmation. It does not send or store information.
- **Navigation:** text links with authored arrow SVGs. Mobile retains the conversation action with a minimum 44px tap height; the primary pathway link remains in the opening.
- **Focus:** 2px brass outline with 5px offset. Selection, caret and scrollbar are palette-themed.

## Do's and Don'ts

- Do keep every route attached to a recognizable problem.
- Do preserve content and controls under reduced motion; only route tracing is removed.
- Do label generated portraits and demo boundaries honestly.
- Don't replace the connected diagram with a row of generic service cards.
- Don't use shadows, glows or glass to imply geometry the content does not need.
