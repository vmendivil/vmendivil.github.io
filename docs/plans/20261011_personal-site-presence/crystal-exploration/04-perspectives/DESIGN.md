---
name: Victor Mendivil — Perspectives
description: Dark portrait cabinet with clear professional content
colors:
  wall: "#141c1a"
  ink: "#f1ecdf"
  muted: "#b6bfb4"
  brass: "#dab584"
  floor: "#264b45"
  line: "#53645b"
typography:
  display:
    fontFamily: "Marcellus, serif"
    fontSize: "clamp(36px, 4.5vw, 68px)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Marcellus, serif"
    fontSize: "clamp(32px, 3.5vw, 50px)"
    fontWeight: 400
    lineHeight: 1.15
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.85
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "12px"
    fontWeight: 400
rounded:
  square: "0px"
components:
  button-primary:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.wall}"
    rounded: "{rounded.square}"
    padding: "20px 23px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
---
# Design System: Perspectives

## Overview
**Creative North Star: "The personal cabinet"**
A blackened green gallery wall holds warm faceted portrait art. The interface is reserved but not anonymous: brass identifies the current perspective and action, while a broad teal surface gives reading its own space.

**Key Characteristics:**
- Real portrait artwork, not geometric CSS substitutes.
- Uneven scale and open space rather than service-card grids.
- Serif display lettering with restrained sans-serif reading type.

## Colors
Brass is the selection and invitation color. Teal is a substantial reading surface, not a decorative accent. Ivory carries headings and main copy; muted green-gray carries supplementary text on the gallery wall.

**The Active Frame Rule.** Selection changes the frame, not just a tiny indicator.

## Typography
Marcellus is locally served for display headings and portrait captions. Manrope is locally served for reading and controls. Display text is upright; emphasis comes from brass, not an italic or gradient treatment. Reading content uses 13–15px with 1.8–1.85 line height; substantive delivery descriptions are 14px at every breakpoint (25.2px line height), while supplementary notes and labels remain 12px; section headings reduce to 34px on mobile. No visible functional text falls below 12px after the detector correction.

## Layout
The gallery uses 7% side margins, a 1130px portrait group and 1200px title group. Reading sections use 9% side margins. At 760px and below, sections stack; portrait navigation remains a compact triptych, using 6% page margins. Above 1600px, the main content stops expanding.

## Elevation & Depth
Portrait frames carry a soft downward shadow (`0 14px 28px #090e0b66`), reduced on mobile. The selected frame lifts 5px. All reading regions stay flat.

## Shapes
Square corners and thin borders. No geometric crop or polygon masks: the actual faceted art supplies the crystal language.

## Components
Portrait controls are native buttons with `aria-pressed`, visible focus, descriptive image alternatives and a shared live notebook. Captions lose arrows and descriptions on mobile to preserve room for labels, with a compact brass selection instruction directly below the triptych. Mobile delivery rows stack label above description with a 9px gap and 23px vertical padding. The large notebook question follows its separator without an eyebrow. The contact button uses brass fill, ivory hover and a toggleable honest local-demo explanation. Navigation is text-led with authored stroke SVGs. Selection and scrollbars carry the palette.

## Do's and Don'ts
- **Do** use art and varied scale to carry personal identity.
- **Do** keep professional copy connected to real user problems and employed experience.
- **Do** disable animated blur and lift transitions for reduced motion.
- **Don't** introduce claims, testimonials or case studies without evidence.
- **Don't** turn contact demonstration into implied delivery or collection.

Not canonized: original sub-12px labels were corrected. Detector notebook-padding warning is inconsistent with computed 65px/128px desktop and 35px/31px mobile insets; retained as original evidence, not a system rule. Independent final review is parent-owned.
