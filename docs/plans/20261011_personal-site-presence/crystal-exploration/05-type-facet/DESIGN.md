---
name: Type Facet
description: A mineral-dark typographic identity for Victor Mendivil
colors:
  ground: "#242521"
  raised: "#30322b"
  ink: "#f1eee5"
  muted: "#bebfb1"
  copper: "#c49173"
  copper-ink: "#28221d"
  line: "#5b5e50"
  field: "#ce9f82"
  field-line: "#815a45"
  field-secondary: "#40332b"
typography:
  identity:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(9rem, 29.2vw, 26rem)"
    fontWeight: 700
    lineHeight: 0.78
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(2.5rem, 5.1vw, 5rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(1.9rem, 3vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.08
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  planar: "0px"
spacing:
  small: "16px"
  medium: "32px"
  large: "80px"
components:
  button-primary:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.copper-ink}"
    rounded: "{rounded.planar}"
    padding: "15px 20px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.copper-ink}"
  input:
    backgroundColor: "{colors.field}"
    textColor: "{colors.copper-ink}"
    rounded: "{rounded.planar}"
    padding: "14px 16px"
---

# Design System: Type Facet

## Overview

**Creative North Star: "The identity cut"**

A graphic personal identity built from strong lettering and mineral surfaces. The dark ground is suited to a focused evening read; generous chalk letterforms make the face and name recognizable before the detailed content begins. Copper carries a complete working region rather than decorative points of light.

**Key Characteristics:**
- Condensed identity lettering, open geometric body text.
- Planar sections rather than cards and floating surfaces.
- Mineral copper used as a content-bearing field.
- Portraits treated as authored illustrations, never presented as photography.

## Colors

Primary copper is the warm material of actions, the approach panel and the closing conversation region. Copper ink is its reading color. Field is a lighter copper used in editable controls, with field-line as a quiet structural stroke. Field-secondary is the high-contrast placeholder and dark-button hover color.

Ground and raised form the two dark reading planes; ink is primary text and muted is supporting prose. Line separates index rows and quiet footers. Selection reverses to copper and copper ink.

**The Field Rule.** A large copper region uses copper ink for every content-bearing element, not low-opacity white text.

## Typography

Self-hosted Barlow Condensed Bold supplies a compact, assertive silhouette. Self-hosted Manrope Regular and Bold supply body text, controls and the small positioning statement. No external font dependency is required at runtime.

The identity role is deliberately monumental lettering, not the reusable heading size: it exceeds the ordinary display ceiling because the pinned composition is a name-based graphic identity. Standard section headings remain at or below 5rem. Body content ranges from 14–17px; supporting copy has a 12px minimum. Paragraph measures range from 40–60ch within the two-column content grid; these are short explanatory passages rather than long-form reading.

**The Voice Rule.** The name and headings are condensed; explanations and functional controls stay in the open body face. No technical monospace costume.

## Layout

The shared wrapper caps at 1280px. Wide viewports use 56px minimum outer margins, reducing to 32px below 1000px and 20px below 650px. Open two-column sections use equal columns and an 80px gutter, reducing to 40px below 1000px. Sections stack below 650px with 24–40px local separation and 56–60px section padding.

The first identity row is a flex composition, with the portrait in the O-shaped counterform. The second word is an independent baseline; it is intentionally not stretched to fill the row. Below the opening, content alternates dense indexes with quiet explanatory passages. No fixed-position navigation or full-screen scroll locks.

## Elevation & Depth

No shadows. Depth is conveyed by the graphite-to-raised plane change, the chalk stroke of the portrait-letter and the copper field. A single short clip reveal accompanies approach selection; reduced motion removes it and disables smooth scrolling. Content is always visible by default.

## Shapes

Components have hard rectangular corners and fine single-pixel structural borders. The portrait's rounded O-shaped frame is a typographic counterform, not an attempted organic subject cutout. Its source image remains opaque. SVG arrows use a consistent 1.5px stroke; the small faceted panel mark uses a 1px construction stroke.

## Components

### Actions

Copper-filled primary actions use body bold text and directional arrows, changing to chalk on hover. The conversation form reverses this to a dark action on copper. Focus is a 2px offset copper ring on dark planes and copper-ink ring on copper planes. Native buttons retain keyboard semantics.

### Problem index

Open, full-width rows use heading type, thin separators and a directional mark. Selection is expressed in chalk lettering, copper arrow and `aria-pressed`; the related live region is updated without moving focus. No tab role or misleading arrow-key promise.

### Approach panel

A flat copper content plane with title, explanation, useful question, local starting-point link and demonstration disclosure. The link preselects the conversation topic.

### Inputs

A lighter copper field, square corners, solid border, visible label and dark caret. Focus uses a dark offset outline. Validation names the missing input, marks it invalid and returns focus. Prepared text uses text nodes, not HTML; the result is explicitly local and unsent.

### Navigation and disclosure

Plain body-text links with offset underlines on hover. Small navigation hides only the experience jump; the experience section remains in the document. The employed-experience detail uses a native disclosure, with a plus becoming a close mark when open.

## Do's and Don'ts

- **Do** use open rows and planar regions to organize connected content.
- **Do** preserve a 12px minimum for supporting and functional text.
- **Do** make copper a reading surface with dark ink.
- **Don't** introduce glow, decorative glass, generic icon cards or claim-based metrics.
- **Don't** extend the identity-letter size to ordinary prose headings.
- **Don't** imply that the local outline tool sends a message.
