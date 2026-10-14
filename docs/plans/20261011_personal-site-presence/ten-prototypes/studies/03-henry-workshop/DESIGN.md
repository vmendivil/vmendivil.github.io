---
name: After Hours
description: An intimate illustrative workshop for Victor Mendivil
colors:
  denim: "#172c40"
  shelf: "#12283b"
  warm-ink: "#f8e9ce"
  monitor: "#142b31"
  monitor-ink: "#f8e9ce"
  letter: "#eedfc5"
  paper: "#f1dfb9"
  paper-ink: "#26313a"
  paper-label: "#625238"
  moon-caption: "#b9cbd4"
  focus-yellow: "#ffe185"
  oak: "#9b6132"
  brass: "#bf9653"
typography:
  display:
    fontFamily: "Vollkorn, serif"
    fontSize: "46px"
    fontWeight: 500
    lineHeight: 1
  body:
    fontFamily: "Alegreya, sans-serif"
    fontSize: "18px"
    lineHeight: 1.5
  heading:
    fontFamily: "Vollkorn, serif"
    fontSize: "34px"
    fontWeight: 500
    lineHeight: 1.12
rounded:
  note: "2px"
  hotspot: "20px"
spacing:
  small: "12px"
  reading: "30px"
  outer: "4vw"
components:
  note:
    backgroundColor: "{colors.monitor}"
    textColor: "{colors.monitor-ink}"
    rounded: "{rounded.note}"
    padding: "30px"
  hotspot:
    backgroundColor: "#182b3eeb"
    textColor: "#fff0ce"
    rounded: "{rounded.hotspot}"
    padding: "5px 11px"
---
# Design System: After Hours
## Overview
**Creative North Star: After Hours.**
A small evening workshop carries the site. Denim walls absorb light; oak and brass collect the task lamp's warmth. The room is an illustrative authored scene, not a reconstruction of Victor's home.
**Key Characteristics:** material depth; familiar objects; direct reading; restrained ambient motion.
## Colors
The denim field owns the viewport. Amber illumination and wood provide the warm counterpart; the monitor uses muted mint rather than neon. Paper notes are strongly contrasted and deliberately plain.
## Typography
Self-hosted Vollkorn provides the literary display voice; Alegreya Sans provides humanist controls. Reading is 19px/1.5 desktop and 18px/1.5 mobile; headings are 34px desktop and 30px mobile, with a 32px mobile site title.
## Layout
Desktop room height is viewport minus 150px, minimum 580px. Navigation is a continuous shelf. Reading opens in a 400px expanded monitor on the right, bounded by dynamic viewport height with independent scroll and sticky return control. At <=1000px or <=600px height, the header, room, shelf and optional reader form a document-flow composition. Mobile room height clamps 43svh to 320–400px; the shelf is two columns. Mobile duplicate object labels are omitted so they cannot collide over the room; all four destinations remain directly available on the shelf. Selection brings the reader into view; Back to room hides it and returns to the room. Fixed desk-focused camera; desktop 34° at (5.3, 5.5, 8), mobile 62° at (1.8, 6, 8.8), both looking at (0, 2.9, -0.35). No mandatory exploration movement. Reading headings have no eyebrow.
## Elevation & Depth
Real WebGL geometry, procedural oak/denim texture, metallic brass, warm non-shadow-casting task light, cool directional moonlight, hemispheric bounce (3.2) and warm directional fill (2.2); harsh tool/shelf shadow silhouettes removed. UI notes shadow: 0 16px 48px #06111c80. Hotspots: 0 5px 16px #08152170. Pixel ratio capped at 1.7.
## Shapes
Object geometries are crisp and tactile: keys, vents, board pins, screws, notebook rings, shelf spines, articulated lamp, pegboard tools, cables. Notes are nearly square; compact hotspot pills distinguish action overlays from room geometry.
## Components
Object hotspots and direct shelf buttons share selection state. Monitor texture changes to reflect selection. Notes are not a modal: no focus trap and no interrupted workflow. Escape and Back to room close at all sizes; focus returns to the initiating control. Lamp control visibly changes the actual scene light. Ambient server LED pulse is bounded to approximately 14fps, pausable, initially paused under reduced motion. Canvas failure exposes truthful recovery and direct content.
## Do's and Don'ts
- Do keep all professional information reachable without camera movement.
- Do label the room as imagined and the server as illustrative.
- Do preserve 3px yellow visible focus and warm paper reading contrast.
- Don't invent clients, deployments, metrics or contact delivery.
- Don't replace the scene with boxes posing as project proof.
- Don't claim technical test success establishes reference-level craft acceptance.


## Experience-fidelity refinement (current)
Selecting screen, server, notebook or envelope approaches its location with the real camera. The notebook page tilts up and envelope lifts out of the desk plane, then returns when leaving. All four physical object geometries are raycast targets and were actually clicked. Existing monitor, working-notebook and correspondence reading materials stay distinct. Phones keep the room visible on selection, with readable notes immediately below the shelf rather than jumping away before the inspection can be seen. Ambient/inspection rendering stops when the room is fully offscreen.
Reduced motion immediately sets a visible inspected/framed state rather than spatial travel. Complete original factual prose and LinkedIn also ship in a no-JS article. Core destination/region/shelf navigation remains independent of renderer success. See FIDELITY_REPORT.md for executed evidence, residual test findings and material limits; earlier results/detectors are historical.


## Source closure: native return states
Resolved: all object/shelf aria-pressed values clear when returning to the room, rather than falsely retaining a selection; original inline lamp SVG favicon prevents the inherited browser-chrome missing-icon request. Actual object geometry selection and lamp control reconfirmed. See PARENT_CLOSURE.md and parent-closure/runtime-sha256.json for current exact-byte evidence. Earlier FIDELITY_REPORT limitations are retained historical; this narrow closure supersedes the repaired findings only.
