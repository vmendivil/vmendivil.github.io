---
name: Below the Surface
description: Submerged architecture with quiet personal narrative
colors:
  water: "#073a3c"
  deep: "#032426"
  marble: "#edf1df"
  jade: "#b6d0bd"
  amber: "#efc485"
typography:
  display:
    fontFamily: "Tenor, serif"
    fontSize: "clamp(65px, 8vw, 96px)"
    fontWeight: 400
    lineHeight: 1.09
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Tenor, serif"
    fontSize: "clamp(42px, 4.6vw, 66px)"
    fontWeight: 400
    lineHeight: 1.09
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Karla, sans-serif"
    fontSize: "19px"
    lineHeight: 1.55
  label:
    fontFamily: "Karla, sans-serif"
    fontSize: "15px"
spacing:
  gutter: "clamp(24px, 5.5vw, 96px)"
  paragraph: "22px"
  chapter: "120px desktop / 76px mobile / 60px landscape"
rounded:
  square: "0"
components:
  scene-button:
    backgroundColor: "rgba(3,36,38,.85)"
    textColor: "{colors.marble}"
    rounded: "{rounded.square}"
    padding: "10px 15px"
  contact-link:
    textColor: "{colors.amber}"
    padding: "18px 0"
---
# Design System: Below the Surface

Current functional closure: Context loss now permanently guards the renderer and animation scheduler for this page lifetime. Reduced-motion changes and scrolling cannot revive the unavailable scene or re-enable atmosphere. See `PARENT_CLOSURE.md` for verified current runtime hashes and assembly limits.

## Overview
**Creative North Star: "Below the Surface"**
Submerged architectural depth carries the site. Fluted jade piers and segmented marble arches establish a physical scale; ordinary scrolling provides the journey, while HTML remains the readable layer. The water palette is committed at page scale, not confined to accents.

**Key Characteristics:**
- Monumental original stone geometry.
- Dark teal negative space and warm contact light.
- Quiet freestanding lettering, without cards.

## Colors
### Primary
Water owns the page background; deep water supports reading and control surfaces.
### Secondary
Jade carries supporting text and architectural patina.
### Tertiary
Amber marks navigation affordances, focus, contact, and metal inlays.
### Neutral
Marble carries headings and body copy.
**The Water Rule.** Readable dark water remains beneath text; scenery is not a license to erase contrast.

## Typography
Tenor Sans carries monumental headings and inscription-like method and curiosity headings; Karla carries readable prose. Desktop body is 19px, mobile 18px; substantial reading notes are at least 16px. Mobile chapter headings use clamp(35px,10.5vw,45px); opening display stays 65px (52px in shallow landscape). Chapter measures are 610px for personal narrative and 700px for contact. Method inscriptions are 30px desktop / 28px mobile with 19px / 18px prose.

## Layout
A fixed full-window WebGL world lies beneath five native-scroll sections. About and contact read as open shafts: a fine jade vertical line, inset text and short amber heading inlay, never a bordered panel. Approach forms three descending architectural columns, offset by 0/66/132px; on mobile these become a continuous vertical reading sequence. Curiosities pairs Tenor inscriptions with Karla explanations, stacked on mobile. Background water shades remain unchanged. Sections grow naturally to fit content; contact footer is in flow. Insets honor safe areas with a 24px minimum. Four native navigation links remain visible and have 44px targets. Header and pause belong to the opening threshold and scroll away instead of occluding reading. Shallow landscape uses a compact horizontal header and smaller opening title; body reading still scrolls normally. Camera progress is interpolated between chapter offsets (0/.25/.5/.75/1), not divided by total page height: different text lengths do not move a chapter to another camera bay.

## Elevation & Depth
Depth is literal perspective, fog, material texture, light shafts, caustics and repeated stone vaults. CSS shadows are limited to the inset vignette. No elevated card surfaces exist. The static stone meshes are batched into three material geometries; ambient shader and particle effects are independently paused.
**The Destination Rule.** The opening camera sits inside the pier line (desktop x −4.2, mobile x −2). Desktop looks toward y 5.7; mobile toward y −4.5, placing the terminal opening above the title. The oculus uses four warm emissive stone rims and an opaque amber radial interior with normal depth testing, not a screen overlay. Only these local materials bypass fog. Terminal light intensity is 110 with distance 18 at z −48; scene exposure, global lights, water fog and HTML reading shades are unchanged. Desktop and mobile capture evidence confirms the entire opening is visible before scrolling.

**The Stationary Rule.** Reduced motion preserves a rendered architecture at the starting camera, disables ambient motion and removes scroll-camera movement; all sections remain direct.

## Shapes
Architecture uses circular plinths, lathed capitals, fluted cylindrical shafts, extruded masonry wedges and curved rails. HTML controls are square-cornered and quiet. No borrowed reference assets or characters appear.

## Components
### Navigation
Karla, 15px desktop and 14px mobile. Four direct anchors with amber hover and a two-pixel offset amber keyboard focus outline. Selection is amber with dark water text.
### Atmosphere button
Square translucent-dark control, one-pixel jade border, 10px by 15px inset and 44px minimum height. Positioned at the opening threshold only; no fixed reading overlay. Native Space toggles ambient animation. Camera navigation still responds to scroll while paused. Reduced-motion mode disables the control with truthful "Motion reduced" labeling.
### Contact link
Amber text and underlined full-width rule, 27px desktop and 22px mobile, original stroked arrow. Opens the supplied LinkedIn URL in a new tab with an accessible announcement. No form.

## Experience-fidelity camera (implemented)
The accepted teal colonnade, fluted piers, marble, original caustics/sediment and amber oculus remain. Five chapter-aligned waypoints replace a constant diagonal camera translation. Position progresses through the threshold, near arch, opposite pier line, terminal approach and oculus (z 19 / 3 / -12 / -27 / -42). Look targets are independently authored per bay, not pointer tracking. Smoothstep interpolates each leg; elapsed-time damping follows interrupted/reversed scroll rather than frame-rate-dependent easing. Mid-journey fog changes from 0.026 to a minimum 0.022, returning to 0.026 on arrival. This reveals existing spatial depth rather than adding a generic overlay. Section offsets remain the source of progress, so mobile text length cannot change which chapter owns a camera stop. Pause still stops water/beam/sediment animation while allowing direct scroll camera renders; reduced motion retains the stationary threshold. `window.__scene` includes cumulative actual draws, target progress and camera coordinates. No copied bridges, astronauts, landscape or beliefs are introduced.

## Do's and Don'ts
### Do:
- **Do** keep professional content in the HTML reading layer.
- **Do** carry architectural depth through actual geometry and lighting.
- **Do** use direct native anchors and visible focus treatment.
### Don't:
- **Don't** require scene exploration to reach contact.
- **Don't** convert this into a dashboard, card grid or game.
- **Don't** imply the architectural fiction is a client project or outcome.

Not canonized: detector padding warnings are static-parser false positives against CSS variable insets, verified at 24px on mobile. Independent aesthetic approval remains pending.
