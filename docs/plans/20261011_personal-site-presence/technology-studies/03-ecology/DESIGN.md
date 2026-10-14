---
name: Hardware close-up
description: Midnight photographic exploration with restrained icy typography
colors:
  midnight: "#061321"
  ice: "#edf6fc"
  muted: "#b0c8da"
  raised: "#122c42"
  line: "#668aa5"
  focus: "#c8e7ff"
typography:
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  marker: "50%"
spacing:
  desktop-edge: "56px"
  mobile-edge: "24px"
  note-padding: "18px 22px"
components:
  marker:
    backgroundColor: "{colors.midnight}"
    textColor: "{colors.ice}"
    size: "20px"
    rounded: "{rounded.marker}"
  label:
    backgroundColor: "{colors.midnight}"
    textColor: "{colors.ice}"
    padding: "5px 9px"
  label-selected:
    backgroundColor: "{colors.ice}"
    textColor: "{colors.midnight}"
---
# Design System: Hardware close-up
## Overview
**Creative North Star: "Look closer"**
A real photographed object owns a midnight field. Small, icy text and attached inspection markers let physical detail carry the presence. This replaces the abandoned ocean identity; the directory name is historical.
**Key Characteristics:**
- Real photographic detail, not decorative circuit paths.
- Modest typography above the object.
- Factual inspection, explicit photographic disclosure.
## Colors
Midnight is the page ground; ice carries primary words and selected annotations. Muted blue carries readable supporting text, and line blue bounds the single inspection note. Raised blue is the close-control hover state.
**The Contrast Ground Rule.** All annotation labels have an opaque midnight or ice backing, never unprotected copy over photograph detail.
## Typography
Self-hosted Manrope regular, an explicitly pinned face. Headline is 32px desktop and 26px mobile; identity 20px/19px; inspection title 18px/17px. Body is 16px in the desktop opening and 15px for mobile opening and factual notes. Captions are 12–13px; hotspot labels 14px desktop and 11px mobile. No oversized display.
## Layout
Desktop uses a single photographic object, capped at 820px, below the opening; the 300px inspection note sits lower left outside the board. At 700px and below, the complete photograph is centered with 40px image margins; note and provenance flow below. Text edges are 56px desktop and 24px mobile. Verified 1440×900 and 390×844. Mobile selected-Ethernet content ends at 825.625px; document is 846px due bottom padding, a measured 2px vertical excess, not a horizontal overflow. Other viewports and enlarged text are not verified.
## Elevation & Depth
Photographic light provides the depth. No UI shadows, glow, gradients, glass or decorative animation.
## Shapes
Only actual physical board contours are masked; no geometric substitute. Circular target markers, rectangular text labels and one thin rectangular inspection note.
## Components
Hotspots are native buttons with at least 44×44px hit areas. Selection inverts label and marker and updates a live factual explanation. Close and Escape dismiss and restore target focus. Enter and Space use native activation. Focus is a two-pixel icy outline offset five pixels. External reference links have explicit underlines; no forms or storage. The hardware remains still, including reduced motion.
## Do's and Don'ts
- Do disclose representative photography and attribution visibly.
- Do attach inspection points to physical components, using factual sources.
- Don't imply photographed hardware belongs to Victor.
- Don't substitute routing, alignment, semantic habitats or a slider for inspection.
