---
name: Signal from Elsewhere
description: A character-led alien technology expedition
colors:
  cobalt: "#254aaf"
  field-ink: "#18367b"
  cyan: "#4dd1df"
  pollen-pink: "#ff478f"
  mineral-paper: "#abeff1"
  cream: "#fff9eb"
typography:
  display:
    fontFamily: "Fredoka, sans-serif"
    fontSize: "clamp(44px,5.2vw,76px)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Nunito, sans-serif"
    fontSize: "17px"
    lineHeight: 1.65
rounded:
  control: "28px"
  guide: "48px"
spacing:
  control-x: "19px"
  guide-x: "46px"
components:
  primary-button:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.field-ink}"
    rounded: "{rounded.control}"
    padding: "12px 19px"
---

## User follow-up — prior residual repaired
Arrival labels/container are pointer-transparent; the actual Read / Return buttons retain pointer events. Exact ERP→AI trusted touch and hit testing now pass at320 and390.
Executed `LP_NUM_THREADS=2 node verify-followup.cjs`: **13/13** focused browser assertions, no page errors. Current normal recordings/captures and raw results are under `fidelity-evidence/user-followup/`. Previous failures/overlap screenshots below remain historical and are superseded for these exact cases, not erased. Shared preview assembly and served-version/LAN verification remain outside this worker's write boundary. Existing detector output remains historical; no detector rerun.

# Design System: Signal from Elsewhere
## Overview
**Creative North Star: "Signal from Elsewhere"**
A bright alien mineral garden with original seed-shaped explorer and sculptural bell plants. The world leads; the field guide provides a quiet, readable counterpart.
**Key Characteristics:**
- Cobalt geological perimeter and pale cyan basin.
- Glossy pink organisms with curling mint stems.
- Rounded lettering, mineral-cyan journal leaves and hand-drawn landmark specimens.
## Colors
Cobalt owns the field, cyan the geology, pink the flora. The journal uses opaque mineral cyan #abeff1 with #18367b ink; cream belongs to scene controls and the explorer, not a generic content card.
## Typography
Fredoka supplies rounded display lettering and specimen captions. Nunito body is 17px / 1.65; journal notes are 16px / 1.6. Entry headings reach 46px desktop, 34px portrait, 31px at 320px and 32px short landscape. The main mobile title remains 45px (42px at 320px).
## Layout
Full-viewport WebGL with projected landmark labels. Header inset 40px desktop / 20px phone, with safe areas. Reading is a protected-focus dialog: the scene becomes inert and its driving/navigation controls disappear while the journal is open. Desktop journal width is 650px with asymmetric 90px / 28px / 40px / 70px corners, 46px inner margin and a fixed header + contents row over an intrinsically scrollable body. At ≤900px portrait it becomes a full-width lower reading leaf with 150px of real scene context above (100px at ≤360px); the same canvas is translated upward 45svh, not duplicated. Height uses vh fallback and dvh. Short landscape (height ≤500px, width ≥651px) uses a 70%-width full-height right journal and translates the existing scene left 45vw so the explorer remains visible. Main short-landscape camera offset is (-100,0); normal desktop remains (-170,-130), zoom 0.88. The mobile scene still permits 680px minimum height; all substantial text remains scrollable rather than shrunk.
## Elevation & Depth
Real directional shadows, hemisphere fill and cyan rim light create the scene depth. Neutral UI elevation: labels 0 6px 18px #00000033; guide -12px 20px 60px #00000055. ACES tone mapping and capped 1.6 pixel ratio.
## Shapes
Pill scene controls and organic chapter selectors. The journal leaf has unequal sediment-like corners, a paired curving 1px mineral seam beside the text and a unique original line drawing for each chapter, corresponding to the actual seed explorer, observatory, lab and orbital landmark. No fake mission data or technical HUD. Preserve the actual domed organisms, sediment shelves and faceted stone.
## Components
Landmarks and Field guide open the same unchanged five entries. Back to world is outside the scrolling body and always reachable. Opening captures the original invoker, focuses Back to world and makes the entire scene inert; chapter changes retain button focus and reset body scroll; Tab/Shift-Tab wrap, Escape closes, closing restores the original invoker. Scene focus uses warm yellow; journal focus uses a contrasting 3px cobalt ring. All chapter, close and directional targets are ≥44px. Body locking is limited to the modal reading state. The footer is pointer-transparent except its actual arrow controls, so it cannot swallow landmark taps. Pause cancels the continuous requestAnimationFrame chain; guide navigation and resize request one stationary redraw. Hidden documents do not draw. Reduced motion remains stationary with disabled movement. Scene geometry, materials, lighting, landmarks and explorer are unchanged.
## Do's and Don'ts
- Do retain direct readable access to every chapter.
- Do distinguish illustrative scenery from professional facts.
- Don't invent client results, mission achievements or contact details.
- Don't treat the study as aesthetic acceptance or production authorization.


## Current all-21 fidelity pass — Scenic route
Landmarks now send the original companion along an original mineral-impression route to an approach point. The camera leans toward that landmark (bounded dolly/zoom). Arrival exposes Read this landmark; Return to overview reverses the excursion. Field guide remains immediate bypass; the cyan journal and factual entries are unchanged. Repeated landmark selection replaces the route, arrows interrupt it, pause freezes progress. Reduced motion places the explorer at the actual destination and exposes the reading invitation without a journey. Native tap/keyboard controls, no required game completion. Rendering capped ~30fps, DPR1.4 /1024px shadows; hidden/offscreen/reading loops stop. Full journal/contact available without JavaScript.
This supersedes earlier motion/renderer constraints in this document, not its accepted art direction or factual reading grammar. Verification/evidence is tracked in FIDELITY_REPORT.md and fidelity-evidence/. Earlier detector and results remain historical.


### Named repair closure
During a scenic route, projected landmark buttons hold their last on-screen coordinates so a second trusted tap cannot chase an animating target; they reproject when the explorer arrives. The selected cream landmark uses cobalt-blue caption text. Environment shadows cache at rest and refresh at arrival; moving companion shadows are approximate between stops. These are part of the named stability repair, not a new world.
