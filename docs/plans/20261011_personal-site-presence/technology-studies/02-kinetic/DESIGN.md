---
name: Kinetic coordination
description: Technology as readable, responsive typographic material
colors:
  aubergine: "#35134e"
  violet: "#542783"
  lilac: "#c5abff"
  coral: "#ff8b86"
  peach: "#ffe4d1"
typography:
  display:
    fontFamily: "Anybody, sans-serif"
    fontSize: "clamp(100px, 11.4vw, 195px)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.45
  practice:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  flat: "0px"
spacing:
  mobile-inset: "22px"
  desktop-top: "32px"
components:
  type-action:
    backgroundColor: "transparent"
    textColor: "{colors.peach}"
    rounded: "{rounded.flat}"
    height: "48px"
  type-action-hover:
    backgroundColor: "transparent"
    textColor: "{colors.coral}"
---
# Design System: Kinetic coordination

## Overview
**Creative North Star: "The phase-alignment type specimen"**
The words are the material: a drenched two-tone violet field gives readable technological ideas almost architectural scale. One controlled typographic movement makes coordination tangible without a tool console, diagram or invented work sample.

**Key Characteristics:**
- Asymmetric letterforms, not boxes.
- Literal software, process and people language.
- A single user-controlled kinetic moment.

## Colors
Aubergine owns the main ground. Violet occupies a full-height right-hand field, not a glow. Lilac is both the software word and supporting text; coral gives the process and sync words heat. Peach makes the people word and primary reading voice stand forward. All six foreground/background combinations exceed 4.5:1 in recorded calculations.

## Typography
Anybody is self-hosted variable display lettering; its width axis participates in the software line's movement. Manrope is the self-hosted reading voice. The user-pinned near-full-screen lettering explicitly overrides the craft floor's ordinary 6rem display ceiling.

Display uses different width registers for SOFTWARE, PROCESS, PEOPLE and IN SYNC. Desktop body is 20px; mobile body is 18px. Technology scope stays at 16px on both target viewports, with mobile line-height 1.65. Header is 16px desktop, 14px mobile. Small interaction hints are 12px desktop and 11px mobile, not substantive explanations.

**The Readable Motion Rule.** Every word remains complete at both scrubber extremes; the slider changes composition, never the factual words.

## Layout
A single first-screen poster. Desktop inset is 4.2vw, top inset 32px. The violet field begins at 58% desktop width. Word registers begin at 0%, 25%, 8% and 40%; the last word is 75% of main type size. The bottom scrubber and text action are one horizontal composition, with support copy above. A flex-column poster keeps the controls in document flow with auto top margin and 32px minimum padding above the heading; copy cannot collide with an absolutely pinned footer. Desktop display scale is 11.4vw, preserving the poster while making room for the supporting practice copy.

At 600px and below, side insets become 22px, violet begins at 72%, and a vertical typographic bill replaces the desktop offsets. Display is 19.1vw with independently scaled lines. Explanation and interaction stack, with a full-width native range input. Target captures are 1440×900 and 390×844. Minimum poster heights (900px desktop, 850px intermediate, 780px phone) may require scrolling on shorter windows; this is a study limitation, not a future system requirement.

## Elevation & Depth
Flat fields and overlapping reading registers, no shadows or glow. Letterform scale provides depth without illustrated objects.

## Shapes
No cards or decorative frames. Action is a plain typographic line with a coral underline. Native range thumb is a coral circle with an aubergine border; it denotes a real position, not decoration.

## Components
### Kinetic scrubber
Native range from 0 to 100; one shared numerical state drives translation, rotation and the software width axis. Semantic value text reports percentage and state. Range receives the first Tab stop; Arrow keys modify it. Native button receives the second Tab stop and toggles aligned/scattered states using Enter or Space.

Reduced motion forces shift to zero and all transforms to none. The native range and button are disabled and skipped by Tab, with honest labels: “Still composition”, “Movement off”, and “Movement disabled”. The help explains that reduced motion disables word movement controls. No changing alignment is announced for a still poster. A live preference change updates the enabled state without reloading, restoring the stored slider value when movement is allowed again. No automatic looping animation or entrance hiding.

### Typographic action
Transparent background, bottom underline, peach normal text, coral hover and lilac active state; minimum height 48px desktop and 44px mobile. Focus outline is peach, 3px with a 6px offset. Selection uses coral over aubergine. No form submission, storage, contact route or external navigation.

## Do's and Don'ts
- Do let meaningful words own the surface.
- Do retain legibility at every input value.
- Do keep factual scope separate from commercial proof.
- Don't add portrait, cards, diagram or console chrome to this study.
- Don't carry this composition into sibling concepts as a template.
