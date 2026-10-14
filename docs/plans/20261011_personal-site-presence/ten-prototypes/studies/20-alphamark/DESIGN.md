---
name: Field Editions
description: Image-led personal editorial collection
colors:
  primary: "#e9ee46"
  ink: "#101110"
  paper: "#f0f1e9"
  muted: "#afb3ac"
  coral: "#de6138"
  aubergine: "#583a59"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(78px, 12.5vw, 180px)"
    fontWeight: 500
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  mobile-body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  pill: "40px"
spacing:
  gutter: "clamp(20px, 4.4vw, 72px)"
  paragraph: "24px"
  large-gap: "80px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
    height: "56px"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
---
# Design System: Field Editions
## Overview
**Creative North Star: "The personal visual edition"**
A black editorial collection in which original artwork carries visual authority. Yellow is a full-page color field as well as an action color. Typography moves between exceptionally large, light display lettering and a readable restrained prose voice.
**Key Characteristics:**
- Oversized original plates and open captions.
- Contrasting black and yellow page-scale fields.
- Native vertical reading with separate complete essay destinations.
## Colors
Primary yellow carries practice and contact fields. Carbon ink and soft paper carry the collection and essays; muted text belongs on ink, never on white. Coral and aubergine belong to the authored plates and curiosity reflection.
## Typography
Manrope is locally hosted under SIL OFL. Display emphasis comes from scale and weights 300/500, not a borrowed wordmark. Main display exceeds the generic floor because oversized contemporary type is brief-pinned. Essay headings use a 48–100px fluid scale; prose is 18px desktop and 16px narrow. Metadata is 13–15px; identity subtitle is never smaller than 11px. Artwork lettering is printed illustrative material, not interactive UI.
## Layout
Fluid gutters carry open image/caption spreads. The collection leads with a panoramic plate, then an asymmetric 1.15:1 pair with a 100px offset. Below 700px the masthead and collection become single columns; a separately authored portrait folio replaces the panoramic cover. Other plates preserve the complete composition with contained framing rather than clipped printed messages. Practice and essays use generous two-column text spreads; mobile stacks heading and prose and allows ordinary vertical scrolling. At 844×390 the menu uses two columns to keep navigation usable in short landscape.
## Elevation & Depth
The interface has no card shadows or ornamental glass. Layered printed sheets and hardware depth live in the original SVG artworks, with directional offset soft shadows. All meaningful text remains independent from image loading.
## Shapes
Square image fields and unboxed text dominate. Pill links provide primary actions. There is no content-dialog gallery: only the navigation menu uses a native dialog.
## Components
### Buttons and links
Yellow primary and black contact pill links have 54–56px minimum heights. Hover changes the background; coral focus outlines are 3px with 6px offset. Text links have visible underlines and 44px minimum targets. Locally drawn SVG arrows and close/menu icons share one stroke vocabulary.
### Navigation
Desktop has plain links. Mobile and short landscape have a 44px Menu button, an opaque full-height scrollable native dialog, explicit Close, Tab wrapping, Escape dismissal and toggle focus restoration. No-script users receive the same links inline, without a dead menu control.
### Edition plates
Full-area image/caption links open local HTML essay routes. The first plate gains a subtle 0.7s scale on hover; reduced motion removes this transition and smooth scrolling. No content is hidden pending an animation.
## Do's and Don'ts
- Do preserve complete artwork lettering and independent textual captions.
- Do make reading and final contact reachable through native scroll and links.
- Do label representative illustrations and thought experiments honestly.
- Don't import client logos, ratings, commercial claims or agency identity.
- Don't turn essays into repeated boxed modal cards.

## Experience fidelity refinement
Native edition links now preserve selected-plate continuity with same-origin cross-document View Transitions. The collection and essay images share an edition-plate name, only for the selected item. Native pagereveal/pageswap restore the edition origin and keyboard focus on return. Mobile navigation opens as a clipped editorial cover with a brief sequential type reveal; Escape and both focus endpoints remain native/functionally verified. Carbon/ivory/electric-yellow fields remain unchanged. Unsupported browsers keep native full-page navigation; reduced motion removes the shared-element and cover motion. No persistent rendering loop or global scroll reveal.

