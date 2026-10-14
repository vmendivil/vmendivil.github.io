---
name: A Thread Through Night
description: Open terrain, a luminous route, and quiet personal reading.
colors:
  ink: "#111512"
  paper: "#edf3ed"
  mint: "#cef0dd"
  warm: "#eddaaa"
  olive-reading: "#25291e"
  cyan-reading: "#163b42"
  cyan-text: "#d7f1ee"
  contact-paper: "#dcebe0"
  contact-ink: "#17372b"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(48px,6.5vw,96px)"
    fontWeight: 300
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.85
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "23px"
    fontWeight: 500
    lineHeight: 1.4
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "12px"
    fontWeight: 400
spacing:
  paragraph: "26px"
  chapter-heading: "66px"
  chapter-edge: "8vw"
components:
  chapter-menu:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "16px 22px"
    width: "230px"
  contact-link:
    textColor: "{colors.contact-ink}"
    padding: "20px 0"
    height: "60px"
---
# Design System: A Thread Through Night

## Experience fidelity — implemented; raster gate unchanged
`experience.css` and revised `main.js` add independent local illumination, native range camera travel and a visible-only water loop capped at 24fps. Ochre follows a 24-unit channel advance, cyan an 18-unit shallows advance with a bounded lateral arc, mint a 28-unit rising shoreline advance. Scroll and the optional range take the greater route progress; no scroll lock or interaction gate. Lighting changes filament/echo opacity, directional intensity and exposure rather than adding a generic particle layer. Pause/Resume stops autonomous draws; offscreen and hidden scenes do not loop. Reduced motion shows current public stills with a perceptible brightness response to illumination, no camera scrubbing, and a truthful disabled Still landscape action. A fine light-colored margin connects unboxed reading fields. Mirrored terrain is clipped below the actual water plane to prevent its reflected riverbed occluding the luminous route; lit cores remain opaque and bright. Wide forward travel shifts 3 units toward the thread instead of losing it behind the near ridge. Mobile mint utility positions are separated (controls bottom172px, onward bottom106px) without changing their copy, ground or protected raster assets.
Controls use #17231de8 terrain-tinted ground, #94b8a6 structure, 44px input/button targets, 14px desktop/12px mobile utility text. Factual body prose remains 16–18px.
IMPORTANT: private cyan portrait remains blocked. No shipping PNG or provenance file was changed. Verification server maps all PNG requests read-only to preview/18-artisans/assets. Parent must overlay only index.html, main.js and experience.css onto current served raster assets and retain style.css/font/library. The public cyan fallback can have historical framing different from live geometry. Do not stage the private PNG or treat prior FIX_REPORT instructions as consent to run provenance.py.


## Overview
**Creative North Star: "A Thread Through Night"**
An authored open-water landscape gives way to plain, spacious reading. The surface alternates physical depth and typographic quiet, instead of asking visitors to read substantial text on scenery. Original terrain is illustrative, not a claim about real places or projects.

**Key Characteristics:**
- Three continuous terrain/water compositions with palette shifts.
- Lightweight, open sans display and ordinary readable body copy.
- Native anchors and a disclosure menu; no content gates or scroll hijack.

## Colors
Primary: mint light and pale paper. Secondary: ochre/olive fields for approach. Tertiary: blue-green fields for curiosity. Neutral: deep green-black supports long reading; pale green contact paper supports the close.
**The Chapter Field Rule.** Color occupies whole chapters, not identical accent cards.

## Typography
Locally hosted Manrope is used throughout. Light display weights contrast with regular body and medium process titles. Desktop display stops at 96px. Mobile scenes use 44–67px display and reading uses 36–57px display. Meaningful body is 16–18px; utility labels are 12px, with a few 11px non-body reading labels. Body columns are approximately 600–680px on desktop; no fixed line breaks inside paragraphs.
**The Plain Reading Rule.** Long factual text remains HTML on a quiet color field.

## Layout
Scene sections use 100svh with 720px desktop / 650px portrait minimum height; short landscape uses 660px and scrolls rather than shrinking the scene. Reading uses 8vw margins and 110/130px vertical edges; portrait switches at 700px to 7vw and 88/95px. Desktop prose is offset right; portrait prose becomes one column. Curiosity uses an asymmetrical notebook arrangement, not cards. Header respects safe-area insets and has a solid dark ground to keep navigation independent of content beneath it. Anchor targets use 110px scroll padding.

## Elevation & Depth
Original multi-frequency terrain geometry, mineral bump data, mirror land/strand geometry, translucent ripple water, directional light and seven fog planes supply scenic depth. Fog is an approximation, not ray-marched volumetrics. There is no postprocessing bloom. Only the menu has a UI shadow (0 12px 30px #0005).

## Shapes
Reading surfaces are unboxed. The chapter menu is a square-cornered plain sheet. Contact uses one ruled text link. Terrain silhouette and spline curves are authored independently from all other studies.

## Components
Navigation is native details/summary and ordinary anchors. Menu links are 48px high; summary and primary controls are at least 44px. Space/Enter opens it, Escape closes and focuses summary. Reading links are underlined on hover and always visibly underlined when they carry the onward path. Focus rings use currentColor, 2px width and 5px offset. Contact opens the supplied LinkedIn route in a new tab, with no form.

The scenic component now renders on scroll/resize/input plus a visible-only, explicitly pausable water loop capped at 24fps. Pixel ratio caps at 1.5. Reduced motion and unavailable WebGL show locally pre-rendered originals, including separate portrait cameras. All text and navigation remain available without WebGL or JavaScript.

## Do's and Don'ts
- Do preserve whole-field color and uninterrupted readable text.
- Do keep visitor movement native and direct access immediate.
- Do retain original asset provenance and local font/library licenses.
- Don't introduce fabricated work or copied reference assets.
- Don't turn paragraphs into interchangeable card grids.
- Don't present technical test success as reference-level visual acceptance.

Ochre/cyan scenic onward links and captions use restrained opaque text-sized grounds (#292619 and #123139); no reading chapter is boxed. The strand stays visible outside those utilities. Mint protected labels are unchanged. Portrait cyan places the moon at world x=4 (wide remains x=20), preserving its full silhouette below and clear of the heading. The pending private cyan portrait was historically regenerated from that composition, but is NOT authorized for publication; this pass verifies the old currently served cyan raster unchanged. Scanner's full-bleed scene padding warnings remain historical, not a future spacing rule. Parent fix-list verdict is pending.
