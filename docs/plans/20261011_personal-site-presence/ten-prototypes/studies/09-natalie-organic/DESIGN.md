---
name: Living Index
description: Organic sculptural personal gallery
colors:
  pearl-ground: "#eef2e9"
  forest-ink: "#34463d"
  plum-glass: "#e4dce9"
  leaf-surface: "#e0e9e2"
  emerald: "#26775e"
  violet: "#b49cd2"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(40px,4.3vw,64px)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  action: "30px"
  dialog: "0px"
spacing:
  label: "22px 30px"
  mobile-page: "28px"
components:
  explore:
    backgroundColor: "#faf8facf"
    textColor: "{colors.forest-ink}"
    rounded: "{rounded.action}"
    padding: "8px 17px"
---
# Design System: Living Index

Current functional closure: Perspective availability is recalculated on every study update: paging into a failed artwork disables the control; paging to a successfully rendered sculpture restores it. See `PARENT_CLOSURE.md` for verified current runtime hashes and assembly limits.
## Overview
**Creative North Star: "Living Index"**
A pearl-lit collection of organic sculptural studies. Quiet navigation and floating museum labels leave room for the objects. This is an independently authored interpretation of the pinned reference, not a copy of its artwork.
**Key Characteristics:**
- Unequal organic windows and generous negative space.
- Transmissive emerald membranes and violet ribbons alongside opaque pearl loops and emerald beads.
- Open museum-label reading beyond the gallery; hairline divisions, offset headings and generous paragraph spacing instead of filled cards.
## Colors
Pearl ground carries the entire page; forest ink supplies readable text. Emerald and violet belong to the rendered objects, not badge decorations. About and Contact stay on the pearl page ground, with forest-tinted hairline divisions.
## Typography
Manrope is self-hosted. Display is open and light, body is 17px, specimen labels 19px, supporting labels 12–13px. Mobile identity subtitle is 11px. Explanations never shrink to captions.
## Layout
At desktop, four unequal specimens follow a staggered composition in a 1680px gallery, capped at 1600px wide. At 700px and below the composition becomes a vertically scrolling collection with differing widths. About uses two columns on desktop and one on mobile. Contact ends the page with one real outbound route.
## Elevation & Depth
Material lighting comes from original procedural 3D surfaces, three point lights, a hemisphere light, and an authored environment texture. Selected dielectric surfaces use transmission 1, metalness 0, roughness 0.075, IOR 1.38, thickness 0.24 (emerald) / 0.18 (violet), and attenuation distance 2.8. Opaque pearl and metallic emerald elements are retained. A canvas-authored curved band backdrop on a plane at z=-2.5 makes background displacement and seen-through forms visible rather than relying on reflection alone. Windows use inset light plus a directional diffused shadow. The focused gallery room has a pale pearl-green translucent backdrop and no enclosing card; no perpetual animation.
## Shapes
Organic asymmetric elliptical border radii frame complete conceptual sculptures, not photographic subject cutouts. Each specimen has a different contour. Only browse affordances are pills; information is not packaged into cards.
## Components
All direction and close icons are authored 24px-viewBox SVG with 18px dimensions, 1.4px rounded currentColor strokes matching the specimen-button arrows. Gallery windows are native buttons with explicit accessible names. Detail is a native dialog with close, previous/next, Escape and restored focus. A fixed safe-area-aware header and bottom browse rail surround an independently keyboard-scrollable artwork/label region. Desktop presents an irregular sculpture aperture opposite its curatorial label; portrait stacks a 220–270px artwork over 17px reading; landscape retains a small artwork beside the scrolling label. Collection position announces pagination; each artwork retains its own contour. Explicit Tab/Shift+Tab boundary wrapping keeps focus within the dialog. Gallery images are generated once in WebGL, then snapshotted in memory and contexts released. WebGL failure leaves text browsing available. Native details exposes approach text. Nav uses normal anchor links; focus rings are 3px forest green with 7px offset.
## Experience-fidelity gallery (implemented)
The four original sculptures, unequal organic apertures, pearl/plum/emerald palette and transparent curatorial room remain. Native selection carries a shared artwork image from the triggering aperture into the focused room in 620ms, with changing organic contour; Escape/Return reverses to the corresponding current-study aperture, restoring its button focus. Interrupted flights cancel and remove their image, so repetition cannot leave a duplicate or steal pointer input. Flights live inside the native dialog top layer when opening, and in the document on return. Previous/next moves the room content by 32px with a 380ms decelerating transition, while text, collection position, contour and image change together. Another perspective selects among three real rendered angles of each original sculpture (0 / +0.42 / -0.38 radians about y); this is not a CSS tilt pretending to change lighting/refraction. Three images are rendered once at 640×640 per sculpture, then geometry/materials/contexts are disposed. This trades former 780px/DPR1.5 snapshot resolution for a bounded 12-view material inspection budget. No ambient GPU loop. Keyboard and touch use the same perspective and paging controls. Reduced motion removes flight/paging movement but still gives a visibly different rendered angle. Renderer failure disables perspective while retaining labels. Native modal focus handling includes the perspective button, boundary wraps and opener restoration.

## Do's and Don'ts
- Do let illustrative art lead while preserving readable factual information.
- Do keep assets and fonts local and disable smooth scroll under reduced motion.
- Don't imply these are client commissions or proof of professional 3D work.
- Don't replace the organic collection with a uniform square card grid.
