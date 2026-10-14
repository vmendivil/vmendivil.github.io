---
name: Curiosity Archipelago
description: An illustrated personal world for Victor Mendivil
colors:
  sea: "#292663"
  ink: "#fff3e8"
  peach: "#ffcfb7"
  mint: "#a5e6d5"
  land: "#69cbbb"
  coral: "#fa8c84"
  rock: "#785caa"
typography:
  display:
    fontFamily: "Gloock, serif"
    fontSize: "clamp(42px, 4.2vw, 61px)"
    fontWeight: 400
    lineHeight: 1.09
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Figtree, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  navigation:
    fontFamily: "Figtree, sans-serif"
    fontSize: "14px"
    fontWeight: 400
rounded:
  marker: "5px 5px 0 0"
  motion: "30px"
spacing:
  desktop-edge: "44px"
  mobile-edge: "24px"
  note-padding: "0 22px 20px 0"
components:
  landmark:
    backgroundColor: "#292663ec"
    textColor: "{colors.ink}"
    padding: "10px 15px"
    rounded: "{rounded.marker}"
---
## Overview
**Creative North Star: "Curiosity Archipelago"**
A scene-led personal visit, not a list of project tiles. Original illustrated islands connect a professional workshop, experimental harbour and human lookout. These are authored metaphors, not representations of Victor's actual property or hobbies. Joshua's World is the pinned experiential reference; no reference pixels or models ship.
## Colors
Full palette: indigo sea, turquoise land, coral architecture and shoreline, creamy words. Purple atmospheric depth and peach directional light belong to the scene. A dark indigo overlay protects page edges and navigation from the illuminated ocean.
## Typography
Gloock supplies sculptural serif headlines; self-hosted Figtree supplies clear body/navigation. Intro is 17px desktop/16px mobile. Region body is 16px with a 24px peach Gloock opening sentence. Functional controls are at least 11px, with 14px desktop route navigation. The 39px mobile display remains readable instead of shrinking to fit the world.
## Layout
Desktop: full-viewport scene with a 400px atlas reading margin at x44, no card background, border enclosure or shadow. A directional sea wash protects the text. Coral horizontal rules divide editorial annotations. The margin scrolls independently with a sticky Whole archipelago control. At 700px the unchanged portrait camera sits above a 350px-tall selected map detail; a four-column map index precedes the reading in normal document flow. A 390px viewport gives 342px text width with 24px margins. The page scrolls through the complete story, next shore and contact. Landscape 844×390 keeps the scene visible alongside a short independently scrollable margin. Main uses dvh with vh fallback; portrait uses svh and safe-area padding. Labels remain clipped within the scene.
## Elevation & Depth
Three-dimensional landscape carries depth: triangulated terrain, faceted cliffs, soft directional shadows, translucent greenhouse, detailed architectural forms. DOM shadows use neutral black at positive offsets, not chromatic halos. Static shadow maps are cached after first render.
## Shapes
Irregular organic coastlines, rounded faceted tree canopies, narrow plank bridges, pitched-roof workshop and circular lookout. UI is minimal: small landmark plaques, horizontal route rules, open atlas margin. No card grid, paper sheet, passport or program.
## Components
Landmarks and route controls select the same region and retain truthful pressed states. Whole archipelago and Escape return to overview. Contact is direct LinkedIn, not a form. Contact and Whole archipelago use authored 16×16 SVG arrows with matching 1.5px current-color strokes and rounded caps/joins; decorative icons are hidden from assistive technology and never receive focus. These replace font-dependent Unicode arrows without changing the scenic world or design tokens. Pause sea stops ambient movement and unnecessary renders once the camera settles. Reduced motion disables the movement-only pause control with a truthful label, snaps to newly chosen camera positions, and preserves reading/navigation. Renderer failure leaves the stories usable.
## Do's and Don'ts
Do keep world, navigation and facts in the same authored visit. Do distinguish scenic metaphor from professional proof. Do keep every story reachable without manipulating 3D. Don't assert that browser passes establish originality or aesthetic acceptance. Don't add fake cases, hobbies, email addresses or forms.


## Experience-fidelity refinement (current)
Visitors can drag the diorama horizontally, swipe with trusted touch, turn through keyboard arrows or use West/East buttons. The bounded orbit changes how the islands overlap and reveals shore depth. Island geometry is raycast-selectable; existing region approaches, atlas margins, next-shore and contact reading remain. Phone shore controls moved into open water after the inspection found title overlap. Offscreen atlas stops rendering.
Reduced motion immediately sets a visible inspected/framed state rather than spatial travel. Complete original factual prose and LinkedIn also ship in a no-JS article. Core destination/region/shelf navigation remains independent of renderer success. See FIDELITY_REPORT.md for executed evidence, residual test findings and material limits; earlier results/detectors are historical.
