---
name: Victor Mendivil — Fieldnotes
description: A loose-leaf technology notebook in desaturated slate.
colors:
  paper: "#344650"
  ink: "#e2edf3"
  soft: "#bdd0dc"
  mark: "#e8b57f"
  deep: "#2b3b45"
typography:
  display:
    fontFamily: "Literata, serif"
    fontSize: "clamp(42px, 4.2vw, 64px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Literata, serif"
    fontSize: "21px"
    fontWeight: 400
    lineHeight: 1.7
  title:
    fontFamily: "Karla, sans-serif"
    fontSize: "21px"
    fontWeight: 500
    lineHeight: 1.4
  annotation:
    fontFamily: "Karla, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
spacing:
  prose-gap: "21px"
  desktop-edge: "7.2%"
  mobile-reading-edge: "34px"
components:
  annotation:
    textColor: "{colors.mark}"
    typography: "{typography.annotation}"
    padding: "5px 0"
---
# Design System: Fieldnotes

## Overview
**Creative North Star: "The loose-leaf commonplace notebook"**
Desaturated slate gives the page the quiet material presence of a notebook under evening light. Writing does the work; margins carry a second, quieter voice. This is a reading surface, not an archive claiming already-published material.
**Key Characteristics:**
- Continuous prose, not cards.
- Asymmetric margin voices.
- Apricot marks used sparingly.

## Colors
Paper owns the whole ground. Ink is the main reading voice; soft blue handles supporting prose and draft disclosure. Apricot marks the topic, emphasis underline, and annotation action. Deep slate supports selected text.

## Typography
Literata is a sturdy reading serif, not a high-contrast fashion face. Karla provides the open, personal masthead and clear headings. All fonts are self-hosted. Display scales fluidly to 64px; mobile display is 39px. Body is 21px desktop, 19px at intermediate widths, 18px mobile at 1.72 line-height. Paragraphs maintain word boundaries where desktop line breaks disappear.

## Layout
Desktop uses a 22.4% margin / 51% reading / remaining context split, with a 1600px container ceiling. Title aligns with the prose. The left topic aligns near the article opening; the right personal context starts 122px lower. At 1100px the article grid adjusts. At 700px the surface becomes a continuous column with a horizontal topic mark and factual context below the opening. The mobile reading edge is 34px left and 28px right.

## Elevation & Depth
No shadows, simulated book, gradients, or decorative texture. Material is expressed through the slate field, typography, and small freehand-shaped marker.

## Shapes
No rectangular cards. One asymmetric 34×9px apricot marker, rotated -8 degrees. SVG arrow is a consistent 1.5px stroke.

## Components
Native details/summary annotation. Minimum 44px action height. Apricot underline, ink hover, 2px apricot focus outline with 7px offset. Opening rotates the arrow 90 degrees over .22s ease-out. Reduced motion disables the transition. Selection and scrollbar colors follow the palette. No invented disabled/loading/form states: the static surface has no asynchronous behavior or form.

## Do's and Don'ts
- Do keep factual framing distinct from illustrative prose.
- Do keep paragraphs continuous and readable.
- Don't introduce saturated plum, neon, cards, diagrams, or a poster-like scale.
- Don't invent published dates or proof.
