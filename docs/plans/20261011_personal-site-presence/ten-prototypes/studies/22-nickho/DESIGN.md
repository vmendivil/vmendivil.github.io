---
name: Optical Practice
description: Victor Mendivil, a depth-led personal editorial study
colors:
  coal: "#0a1012"
  paper: "#ffffff"
  yellow: "#ffdc00"
  ink: "#151916"
  amber-type: "#886500"
  collection: "#f5f5f3"
  collection-type: "#84877e"
typography:
  display:
    fontFamily: "Anton, sans-serif"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "18px"
    lineHeight: 1.55
  small:
    fontSize: "13px"
    lineHeight: 1.5
spacing:
  gutter: "clamp(24px,5.5vw,88px)"
  mobile-gutter: "24px"
components:
  square-button:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    width: "48px"
    height: "48px"
---
# Design System: Optical Practice
## Overview
**Creative North Star: "Optical Practice"**
An oversized personal image and an original amber fold inhabit a coal stage. A bright white editorial continuation carries Victor's practice, then a radial still-life collection gives his interests a tactile reading rhythm. The close is a saturated yellow contact plane.
**Key Characteristics:** condensed scale, human/artifact layering, ruled material, full-width editorial fields, perimeter navigation.
## Colors
Yellow owns the menu and contact planes; coal carries the opening, white the essay. Dark amber makes the emphasized editorial word readable. Collection grey is visible rather than merely pale decoration.
## Typography
Anton is the self-hosted display voice. Headlines remain emphatically condensed. Oversized VM and editorial headings are pinned reference-derived scale exceptions, not a reusable generic hero recipe. Body is the practical 18px workhorse sans; substantial phone reading is 17–18px, never caption scale. Small print is only supporting context.
## Layout
Seven thin vertical rails run through the opening and essay. Hero composition is layered rather than a split text/image marketing scaffold. White reading is asymmetric with a side artifact and centered headline; prose opens into a wide column. Practice is a sequence of full-width ruled rows, not cards. At 600px and below, the portrait and fold receive new crops, the prose stacks, and the collection becomes a smaller touch fan. Short landscape keeps a tall scrollable hero instead of compressing all reading into the screen.
## Elevation & Depth
WebGL displaces the approved portrait using an authored depth matte. Original fold ribs carry highlight and shadow; a lower dark veil keeps identity legible. The scene is demand-driven, not a perpetual particle loop. Fold shadow is directional `drop-shadow(-25px 35px 25px #0008)`; still-life shadows are authored within their SVG plates. Perimeter practice copy sits on solid coal for contrast.
## Shapes
Square buttons and unrounded image plates. The fan follows a circular arc, with thin radial spokes. There are no dashboard cards, score counters or fabricated metrics.
## Components
Navigation uses a yellow native dialog with explicit focus wrapping, Escape and trigger-focus return. Depth pause freezes the scene; viewpoint control provides keyboard/phone access without requiring a pointer. The fan supports drag, cyclic arrows, Home/End and left/right keys; selected imagery becomes colored and its actual note is visible. Under reduced motion, selection is immediate and depth stays flat. Without JS, image links reach the fully visible inline notes. Contact is a real LinkedIn anchor, not a submission form.
## Do's and Don'ts
- **Do** keep readable content independent of the renderer, motion and dragging.
- **Do** preserve the distinction between personal-interest illustration and professional proof.
- **Do** let the yellow plane carry navigation and contact at page scale.
- **Don't** copy motorsport facts, source assets or sponsor language.
- **Don't** turn the image collection into a portfolio of invented delivered projects.
