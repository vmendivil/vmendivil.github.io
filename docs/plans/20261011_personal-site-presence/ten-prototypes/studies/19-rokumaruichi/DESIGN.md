---
name: Afterlight Floors
description: A personal screening building with separate architectural reading spreads.
colors:
  graphite: "#17191a"
  straw: "#eee4b0"
  wall: "#d8d7cc"
  reading-ink: "#222627"
  rule: "#72756b"
  inactive: "#bcb895"
typography:
  display:
    fontFamily: "Michroma, sans-serif"
    fontSize: "clamp(32px, 4vw, 60px)"
    fontWeight: 400
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "20px"
    lineHeight: 1.75
  mobile-body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "17px"
    lineHeight: 1.75
spacing:
  phone-margin: "24px"
  desktop-margin: "3.5%"
  reading-margin: "6%"
components:
  reading-surface:
    backgroundColor: "{colors.wall}"
    textColor: "{colors.reading-ink}"
    padding: "32px 6% 45px"
---
# Design System: Afterlight Floors
## Overview
**Creative North Star: "Afterlight Floors"**
A graphite screening annex, not a house or a film studio identity. Extended pale-yellow lettering sits outside the projected artwork. Reading changes material to an illuminated concrete inscription spread, without a floating content card.
**Key Characteristics:**
- Three architectural bays per floor; four independently navigable floors.
- Original still imagery, grain, restrained projection light and floor reflection.
- Unboxed reading, clear return path, realistic personal facts.
## Colors
Straw marks information and active navigation on graphite. The reading wall carries dark ink. Original screen studies introduce mineral cyan, blue-violet and dusk ochre; those colors are imagery, not interface accents.
## Typography
Self-hosted Michroma is the extended architectural voice. System sans is deliberately used for substantial prose, not the display. Desktop body is 20px; mobile 17px. Captions are 11px minimum after the detector correction. Floor fraction is an information-bearing sequence, not a decorative statistic.
## Layout
Desktop room occupies 78svh with vertical right-side floor index, title and Enter reading below. Mobile at 800px and below uses a two-line identity/header plus four floor links, a 44svh front-on room and a real HTML introduction. Reading uses a two-column label/essay spread, collapsing to one column at 800px. Short landscape below 500px height uses a compact header and reduced scene height, keeping prose scrollable. Safe-area padding is applied to the body.
## Elevation & Depth
No interface box shadows. Scene depth is actual WebGL perspective: ceiling ribs, deep slabs, framed projections, concrete partitions and structural columns. Screen-texture floor reflections are an authored approximation, not a physically accurate reflection renderer. Rendering stops at rest; floor and screening camera changes animate, and optional screening playback runs only while eligible.
## Shapes
Rectilinear material planes, fine rules, no rounded containers. Interface geometry remains outside projections.
## Components
Floor links are real fragment anchors with aria-current. Enter reading opens a dedicated HTML spread. Return, Escape and browser history preserve selected floor; returned keyboard focus goes to Enter reading. Contact is a real LinkedIn link, not a delivery form. Reduced motion sets the rendered floor instantly. WebGL failure uses original SVG plus the same HTML chapters; disabled JavaScript provides a factual condensed reading fallback.
## Do's and Don'ts
- Do keep substantial text out of canvas and projections.
- Do keep four named floors reachable without gestures.
- Do preserve the horizontal multi-bay room and vertical navigation ritual.
- Don't borrow reference logos, copyrighted films, models or agency claims.
- Don't turn reading into floating rounded cards.

## Experience fidelity refinement
Floor selection now connects to a distinct #<floor>f/screen destination. The camera moves from the three-bay building to a front-on projection, including mobile, and reverses on return/Escape. An opt-in original luminous scan plays across the authored landscape; Play/Pause is functional, no audio. This is an original light study, not source film playback. Reading remains a separate #<floor>f/read HTML journey. Reduced motion instantly frames the screen and exposes a disabled Static light study control. Scene work stops at rest, reading, offscreen, context loss and document-hidden handler. Playback is capped at 24 render attempts/second, not a guarantee of device FPS; software Chromium measured only four actual renders in 1.1 seconds.

## Independent parent closure
Renderer initialization failure and context loss retain a truthful disabled static control; subsequent floor routes and reduced-motion preference changes cannot restart lost-context rendering. See PARENT_CLOSURE.md and fidelity/parent-shipping-inventory.json for exact tested shipping hashes. Current independent worker-source verdict is HOLD: one six-size interrupted-reversal timing assertion remains unconfirmed (166/167 passed; zero page errors). Earlier current-runtime claims are historical wherever scene.js hashes differ.

