---
name: Signal Lounge
description: Rainy listening-room warmth, with readable personal broadcast transcripts.
colors:
  night: "#312a24"
  ink: "#352c25"
  cream: "#ede3c9"
  honey: "#dfbd77"
  muted: "#d0c0a1"
  blue: "#254c53"
  line: "#b6a589"
  rust: "#874b32"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(28px, 3.2vw, 46px)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  reading-title:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(32px, 4.5vw, 58px)"
    fontWeight: 400
    lineHeight: 1.15
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "18px"
    lineHeight: 1.7
  label:
    fontFamily: "ui-monospace, monospace"
    fontSize: "12px"
    lineHeight: 1.5
rounded:
  control: "4px"
  ambience: "25px"
spacing:
  compact: "8px"
  control: "16px"
  reading-mobile: "22px"
  section: "28px"
  column: "40px"
components:
  read-button:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.cream}"
    rounded: "{rounded.control}"
    padding: "16px 20px"
  selected-channel:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "10px 16px"
---
# Design System: Signal Lounge
## Overview
**Creative North Star: "Signal Lounge"**
Original illustrated listening-room warmth surrounds a personal broadcast. Rain-blue city glass and ochre curtains contrast with honey lamplight and a walnut low media cabinet. The scenery is not a copied workstation: records, cloth speaker, sofa and turntable anchor a stable seated view.
**Key Characteristics:**
- Broad broadcast lettering and direct channel controls.
- Authored material detail with directional light and overlapping depth.
- Ordinary full-size transcripts, not CRT-bound prose or modal cards.
## Colors
The palette separates cool outdoor depth, warm domestic light and legible cream reading material. Night carries the header/footer; ink carries reading prose; cream is the continuous transcript ground. Blue locates the read action and contact link. Honey marks identity, focus and lamplight. Muted supports footer copy. Line separates program segments without containers. Rust is the return-control hover accent.
## Typography
Archivo Black is self-hosted as Archivo for broad, compact personality; the font's intrinsic black drawing is used at normal weight. The personal masthead is 20–32px; first-view program headings 28–46px and opened headings 32–58px. Body uses the neutral platform sans at 17px mobile and 18px desktop; introduction is 18–19px in reading state. Labels use monospace only as broadcast-control metadata, at 12px or larger. Substantial text is never scaled into the screen.
## Layout
Sticky identity/channel band, a stable full-width scenic window, then one continuous reading region. Desktop room height is capped at 580px, leaving the read action visible at 1440×900. Phones use a 290–330px composed scene strip, four 44px controls, then a single-column transcript. The header's measured height drives scroll alignment through ResizeObserver. Reading segments are label/prose columns (1:3 with a 40px gutter) on desktop, stacked on phones. Standard document scroll remains unlocked. Landscape uses a 275px room and compact header; tablet retains a 510px scene.
## Elevation & Depth
Room depth comes from city layers, reflective and rain-streaked glazing, individual curtain folds, directional lamp pool, acoustic cloth, cabinet grain, CRT glass, scanlines and foreground furniture. SVG object shadows use an offset (8px/17px) and a 12px blur. UI depth is restrained: selected channels use `0 3px 9px #161d1e40`; the read action uses `0 5px 12px #3c302326`. This is original vector illustration, not photographic rendering or a WebGL simulation.
### Final material/light refinement
Material refinement preserves framing and all broadcast UI. Glazing now separates layered skyline, distant light bloom, a faint original lamp reflection, pane-edge doubles and foreground droplet lenses. Illumination is drawn behind opaque solids instead of washing over them; cool CRT and warm lamp reflections remain on the cabinet top and individual edges. Mug and saucer use a rounded ceramic body, inner lip, dark liquid, occluded handle and foot reflection; the plant uses individually shaped veined leaves and a rounded terracotta pot with rim/soil depth. The turntable has a thickness-bearing plinth and platter, vinyl grooves/specular interruption, elevated tonearm with shadow, spindle and translucent dust-cover edges. Cabinet recess reveals, irregular walnut figure, end-face and handle occlusion add physical depth. Sofa cushions and lamp foot gain local curved response. These are authored SVG optical cues, not ray-traced, photographic or physically simulated materials.
## Shapes
Small control corners distinguish navigation from the strongly rounded physical television. Reading paragraphs are unboxed. The ambient-motion control is a rounded physical-style pill, not a repeated card family.
## Components
### Navigation
Four native buttons with explicit aria-pressed state: About, Practice, Curiosity, Contact. Selected channel has cream fill and ink text; hover uses a warm dark tint. Focus has a 3px honey outline offset by 4px. Number keys 1–4 are optional equivalents, not required knowledge.
### Broadcast and transcript
Changing the channel changes the original visible illustration and heading/prose together. A read action reveals normal document content and focuses its heading. The final program boundary offers explicit return and next-channel controls; Escape returns focus to the selected channel. Contact opens its transcript directly and ends with the supplied LinkedIn link. No delivered form exists.
### Motion and recovery
A 480ms interrupted phosphor brightness/opacity sequence acknowledges tuning, the station dial turns to the selected channel, and channel-colored cabinet spill changes. This is a deliberately illustrated broadcast, not real reception. Native Receiver / Whole room changes the original scene's optical framing with a bounded 650ms zoom. Dim the lamp / Warm lamp changes SVG illumination; it is a 2D optical treatment, not a physically relit room. Read screen and the keyboard-focusable television surface both reveal the full-size transcript. The 4s rain and 7s wet-glass tracks pause offscreen, hidden, under user pause and reduced motion. Reduced motion still changes the illustration/transcript and light visibly. SVG high-frequency turbulence was replaced by a small authored grain pattern to avoid repeatedly rasterizing a full-scene filter during motion. Failed SVG fetch retains the img element and all channel/text routes; a complete outage of the shared SVG URL can also remove that decorative image. No-JS essentials and real contact remain. No audio plays.

## Functional closure
Pause, reduced motion, offscreen and hidden states cancel in-flight phosphor tuning as well as stopping rain. Lamp/receiver/rain controls disable while SVG is unavailable; ordinary channel transcripts remain functional.
Current exact hashes, repair confirmations and limitations are in PARENT_CLOSURE.md and fidelity/pending-shipping.json. Prior detector output remains historical; no repeat detector.

## Do's and Don'ts
- **Do** keep directional warmth, rainy contrast, cloth/wood/glass details and the stable room framing together.
- **Do** keep primary prose at 16px or more and normal document scroll.
- **Do** render every channel's illustration and full transcript, including an honest end-of-program contact route.
- **Don't** introduce fake BASIC, OS booting, copied source objects or invented professional proof.
- **Don't** box paragraphs into a generic card grid or require interaction with scenery to reach information.
