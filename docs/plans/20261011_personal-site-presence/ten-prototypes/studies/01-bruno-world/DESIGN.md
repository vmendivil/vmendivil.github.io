---
name: Circuit Coast
description: A miniature technology coastline in late golden light
colors:
  coast-ink: "#163e43"
  paper: "#fff2d9"
  lettering: "#fff4da"
  enamel: "#d76b32"
  patina: "#44766b"
  sandstone: "#c39a62"
  focus: "#ffbe58"
typography:
  display:
    fontFamily: "Coast, sans-serif"
    fontSize: "clamp(54px, 7.3vw, 104px)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Coast, sans-serif"
    fontSize: "46px"
    fontWeight: 600
    lineHeight: 1.02
  body:
    fontFamily: "Barlow, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Barlow, sans-serif"
    fontSize: "14px"
rounded:
  sign: "2px"
  control: "3px"
spacing:
  compact: "10px"
  medium: "20px"
  generous: "30px"
components:
  destination-sign:
    backgroundColor: "#123a3edb"
    textColor: "{colors.lettering}"
    rounded: "{rounded.sign}"
    padding: "7px 11px"
  contact-link:
    backgroundColor: "#efb668"
    textColor: "{colors.coast-ink}"
    padding: "13px 16px"
---
# Design System: Circuit Coast

## Overview
**Creative North Star: "Circuit Coast"**
A materially lit miniature industrial coastline, not a 3D chart. Architecture has roof seams, glazing, pipes, loading awnings, visible server racks, cables and pier planks. Visitors explore with an original six-wheel utility rover; the surrounding page is a restrained field guide.

**Key Characteristics:**
- Golden sandstone and orange enamel against a deep coastal ground.
- Detailed original procedural geometry, physical cast shadows and quiet signage.
- Information remains independent of game skill.

This documents the built study, not a parent-reviewed or production-approved design system.

## Colors
The full material palette carries the world rather than coloring isolated UI accents. Coast ink carries the solid enamel destination board; amber lettering and contact actions connect it to the service vehicles. A lighter petrol route bar carries the actual destination name and close control; no decorative crest or passport data. Enamel and patina remain physical scene materials. ACES tone mapping and golden directional light shift the rendered sea toward muted green-petrol; it is not an exact reproduction of the base material hex.

## Typography
Self-hosted Barlow Condensed (aliased Coast) lends tall, straightforward industrial lettering. Barlow carries reading and navigation. Desktop display caps at 104px; mobile uses 64px. Destination headlines use 46px desktop / 40px portrait / 36px short landscape; route names use 24px Coast. Reading remains 17px at both sizes. Sign labels shrink to 11px on mobile and are not the sole path to content.

## Layout
The world is a full-screen orthographic composition, with desktop identity at top left and direct navigation at top right. Projected destination signs are actual buttons. A 410px solid roadside reading board sits to the right on desktop. Its sticky route bar separates location/44px close from uninterrupted prose. Portrait uses an edge-to-edge independently scrolling board below a 45dvh scenic band; the existing canvas is translated upward 25dvh only while reading, exposing the accepted coast without rebuilding geometry or changing its camera. Driving controls, title and projected signs yield to reading. Short landscape uses a 390px right-side board below the header. Tablet navigation folds into the existing menu. Main uses 100dvh with vh fallback; panel edges respect safe areas. No modal body lock. Reduced motion exposes navigation while exploring; its menu remains usable while reading.

## Elevation & Depth
Three.js standard materials, hemispheric light and a directional sun produce modeled depth and cast shadows. The scene uses WebGL, ACES tone mapping and capped pixel ratio (1.5). UI signs have an offset shadow, and the reading sheet casts a larger offset shadow. Five mechanical detector warnings concern those dark tinted UI shadows; they were retained as physical elevation, not zero-offset luminous halos. They remain review findings rather than an aesthetic pass.

## Shapes
Enamel shells, pitched factory roofs, transparent greenhouse ribs, cylindrical observatory and narrow pier differ visibly in silhouette. UI corners are lightly softened, not pill-shaped. Icons are original stroked SVG. No borrowed world models, reference pixels or raster artwork ship.

## Components
**Destination signs:** projected positions, keyboard focus, hover color inversion, actual click navigation.
**Direct navigation:** native buttons, selected location marked with aria-current; mobile expandable with aria-expanded.
**Destination board:** nonmodal aside, 17px prose and 16px disclosure, sticky route/close strip, 48px next/back actions, Escape closes and returns focus to the world. No game completion gates content.
**Rover controls:** WASD/arrows steer and accelerate, R resets, Enter visits nearby destinations. Touch uses pointer capture. There is bounded keep-out handling rather than a physics engine.
**Pause:** stops driving, ambient turbine movement and repeated expensive rendering. Reduced motion starts paused and uses immediate destination changes.
**Contact:** a real LinkedIn link, not a fake form.

## Do's and Don'ts
- Do retain direct access to all professional information.
- Do keep the original world coherent in architecture, material and light.
- Don't treat illustrative scenery as evidence of actual client projects or infrastructure.
- Don't substitute abstract primitive diagrams for the detailed landscape.
- Don't imply mechanical browser passes establish reference-level visual acceptance.


## Experience-fidelity refinement (current)
Inertial driving now turns all wheel/hub geometry and banks/pitches the service rover. A bounded pursuit camera follows its physical position and eases into a slightly closer view at speed. Destination selection frames the landmark instead of relocating the rover; closing reverses to its real position. Rendering is capped at 30fps and sun shadow texture at 1024px. The enamel route log remains unchanged.
Reduced motion immediately sets a visible inspected/framed state rather than spatial travel. Complete original factual prose and LinkedIn also ship in a no-JS article. Core destination/region/shelf navigation remains independent of renderer success. See FIDELITY_REPORT.md for executed evidence, residual test findings and material limits; earlier results/detectors are historical.


## Source closure: native return states
Resolved: reduced-motion close now restores the visible overview camera (previously it remained at the last landmark); all destination aria-current values clear on return; WebGL-failure return reopens the destination menu and restores focus to a visible native control; amber next-destination hover contrast repaired with a four-channel-step darker coast-native background. See PARENT_CLOSURE.md and parent-closure/runtime-sha256.json for current exact-byte evidence. Earlier FIDELITY_REPORT limitations are retained historical; this narrow closure supersedes the repaired findings only.
