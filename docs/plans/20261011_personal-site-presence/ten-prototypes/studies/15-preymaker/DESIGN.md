---
name: Wideframe
description: Personal technology image essay
colors:
  paper: "#e8ecee"
  ink: "#151c20"
  rule: "#8c979e"
  muted: "#44545e"
  film-ground: "#17252e"
  film-text: "#f0f5f7"
  contact-paper: "#f7f8f8"
  focus: "#227299"
typography:
  display:
    fontFamily: "Archivo, Helvetica, sans-serif"
    fontSize: "clamp(72px, 13vw, 200px)"
    fontWeight: 720
    lineHeight: 0.79
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo, Helvetica, sans-serif"
    fontSize: "clamp(42px, 7vw, 104px)"
    fontWeight: 650
    lineHeight: 0.99
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Archivo, Helvetica, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, Helvetica, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.6
spacing:
  gutter: "clamp(20px, 4.2vw, 72px)"
  section: "clamp(60px, 8vw, 120px)"
  paragraph: "1.3em"
components:
  header:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "64px"
  menu-button:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    height: "44px"
  film-caption:
    backgroundColor: "{colors.film-ground}"
    textColor: "{colors.film-text}"
    padding: "14px clamp(20px, 4.2vw, 72px)"
---

# Design System: Wideframe

## Overview
**Creative North Star: "Wideframe"**
A personal image essay carried by authored technology still-lifes. The interface recedes around large material-rich images, then becomes a spacious silver-white reading surface. Source inspiration is cinematic image scale and sparse contact-sheet structure, not agency identity or a project catalogue.

**Key Characteristics:**
- Full-width original cool-lit frames.
- Large grotesk type and restrained readable navigation.
- Ordinary document reading, no scenic operation required.
- Silver-white editorial pacing and ruled contact rows.

## Colors
The blue-gray scene light carries the image chapters; silver paper and dark ink carry the reading.

### Primary
Focus blue marks keyboard position, not decorative accents.

### Neutral
Paper is the main editorial ground. Contact paper separates the final information sheet. Ink carries all light-surface text. Muted ink supports disclosures. Rule marks contact rows and editorial separators. Film ground and film text carry the dark essay intervals.

**The Image Owns Color Rule.** Rendered objects supply green circuitry and brushed silver. Do not repeat those colors as badges, buttons or box fills.

## Typography
Archivo is self-hosted under OFL; Helvetica is a resilience fallback, not the display art direction. Variable width gently compresses the name and section headings. The opening's architectural scale is explicitly pinned by the brief, so it exceeds the general craft-floor display cap.

The body is 17px on phones and 18px in substantial desktop essay/about prose, with 1.6 leading. The lead is 24–40px with 1.3 leading. Functional labels are 12px after the bounded legibility correction. Disclosures/fallbacks are 14px. Paragraph measures are capped at 68ch (60ch in essay prose).

**The Two Distances Rule.** Display is seen across the frame; prose is read at arm's length. Never shrink prose to preserve a one-screen composition.

## Layout
Fixed 64px header (60px narrow), fluid gutters, rectangular full-bleed frames. About and curiosity use asymmetrical/two-column editorial spreads; approach alternates large frames with two-column short essays. Contact is a ruled two-column sheet.

At 700px and below, reading stacks into one column, the hero uses a separately rendered portrait camera, and shot controls use deliberate portrait/detail crops. Landscape keeps ordinary vertical scrolling rather than squeezing all content into 390px height. Dialog has its own bounded scrolling at `100dvh - 40px`; no dragging or swipe ritual. Safe-area side padding applies to mobile header and bottom padding to footer.

## Elevation & Depth
Interface surfaces are flat: no card shadows or decorative glass. Depth lives in the original modeled objects, directional light, material reflections and mapped scene shadows. The native modal backdrop simply separates navigation from reading.

## Shapes
Rectangular images and square ruled rows. One inset rectangle expands into a full film frame on chapter selection. No blob masks, rounded cards or diorama catalogues.

## Components
### Navigation
Persistent tiny-but-readable header with 44px link/button targets. Native `<dialog>` contents menu presents five actual document destinations. Close, Escape and focus restoration are implemented; native modal behavior makes background controls inert. Explicit first/last Tab wrapping keeps the contents focus cycle inside the dialog.

### Film frame
Wide image, paired caption line, next readable essay. The image-essay aperture lasts0.8seconds with exponential ease-out. Opening shots have750ms shutter selection and4200ms camera travel on desktop and phones. Reduced motion selects instantly; images remain visible by default and no WebGL/video dependency is required.

### Contact sheet
Ruled freelance/career/contact rows. LinkedIn opens a new tab with explicit accessible labeling. Visible handle fallback and truthful no-message-delivery disclosure; no form, invented email or office data.

### Browser surfaces
Blue focus outline and tinted selection, themed scrollbar, underline offset and authored single-stroke SVG arrows.

## Do's and Don'ts
### Do:
- **Do** keep substantive paragraphs at 17–18px in normal document scroll.
- **Do** preserve image detail, clear captions and light/dark pacing.
- **Do** label original synthetic scenes honestly.
### Don't:
- **Don't** invent projects, clients, outcomes or equipment ownership.
- **Don't** use source films, logos, office addresses or VFX claims.
- **Don't** turn the reading into a grid of equal cards.

Not canonized: raw detector's 10px mobile label finding was corrected to 12px. Full-bleed wrapper padding findings do not describe the rendered text, which is gutter-inset; tight display leading follows the pinned oversized-heading world rather than body typography. Independent reference-level visual acceptance remains parent-owned.

## Experience-fidelity refinement (current)
The opening now offers an opt-in three-shot sequence: establish the scene, inspect circuitry, leave good notes. Original posters—not source footage—are recomposed with a750ms rectangular shutter and4200ms shot-specific camera travel. Caption, Previous/Next, play/pause and interruptible reversal operate on phones as well as desktop. Playback never starts automatically and has no audio. It pauses offscreen/hidden; reduced motion disables playback while manual selection changes image/caption immediately. Separate portrait opening remains, detailed/notes shots have deliberate phone crops.
Film plates sit in an isolated stacking context beneath the authored contrast shade; light and dark editorial/contact identity remains unchanged. The first image-essay arrival has one800ms aperture sequence rather than a repeated global reveal. Every section is readable by default. The contents dialog now explicitly wraps Tab and Shift+Tab at both boundaries; Escape restores the trigger. The JS-only menu button is hidden without scripts, ordinary document reading/contact remains.
Current raw82-pass confirmation,38 captures and chronological establishing/shutter/detail/notes/reversal frames: `fidelity-evidence/confirmation/`. This is a moving composition of synthetic stills, not the source's live-action/VFX showreel; parent source-fit and served-page checks remain required.

## Independent closure superseding readiness — READY_SOURCE — parent assembly/LAN checks pending
See `PARENT_CLOSURE.md` and `PARENT_SHIPPING_SHA256.json` for current runtime hashes, exact changes, executed evidence and limitations. Current scoped confirmation passed; prior six-size evidence reuse is explicitly hash-qualified. Parent assembly/LAN/source-link verification remains outside worker completion.


