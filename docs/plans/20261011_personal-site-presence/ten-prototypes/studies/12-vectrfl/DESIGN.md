---
name: Work in Motion
description: A porcelain development landscape and candid personal editorial
colors:
  landscape-blue: "#d8e8f3"
  ink: "#142a3b"
  secondary-ink: "#405b70"
  ground-rule: "#afc6d7"
  editorial-white: "#ffffff"
  cool-reading: "#f4f8fa"
  transfer-cyan: "#18aac4"
typography:
  display:
    fontFamily: "Barlow, sans-serif"
    fontSize: "clamp(64px, 7vw, 96px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Barlow, sans-serif"
    fontSize: "clamp(38px, 4.3vw, 62px)"
    fontWeight: 800
    lineHeight: 1
  body:
    fontFamily: "Barlow, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
spacing:
  page-margin: "clamp(22px, 5vw, 80px)"
  editorial-section: "100px"
  mobile-section: "65px"
components:
  contact-link:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    height: "68px"
  faq-summary:
    textColor: "{colors.ink}"
    height: "76px"
---
# Design System: Work in Motion

## Overview
**Creative North Star: "Work in Motion"**
A continuous original porcelain works gives ordinary software responsibilities a spatial rhythm. Powder-blue space and soft miniature architecture lead; uncluttered white prose takes over when the visitor wants to read. No invented company proof or installation claims belong to the visual language.

**Key Characteristics:**
- One continuous modeled ground, four responsibility views.
- Dense Barlow display forms and generous reading measures.
- Ruled inline questions, not repeated boxed content.

## Colors
Landscape blue owns the scenic opening, chapter margin and closing conversation. White distinguishes the editorial reading. Ink and secondary ink maintain contrast; cyan transfer routes and coral reels live in the illustrative world, not as UI status claims. The final rendered ground is cool blue and distinct from warm ivory porcelain. Hemisphere fill is restrained (1.05), warm key light is 3.2 and exposure is 0.94. Blue architectural edges and rails separate roof ribs, service loops and walkways from ceramic surfaces; cast shade gives depth rather than a dark UI palette.

## Typography
Barlow is self-hosted at regular and extra-bold weights. Display spans 64–96px on larger screens; mobile uses 70px, then 62px below 360px. Body is 18px; main introduction 20–21px, editorial lead 23–25px. Substantial content is never miniature scene text. Paragraphs remain in real HTML. Headings use actual line breaks that preserve rendered word boundaries.

## Layout
Desktop: full-height sticky scenery underneath a scrolling document. Left chapter margins reserve readable blue space; camera frames four parts of one environment. Chapter index sticks only within the works, not across the white reading. Two broad editorial columns become one below 650px. Mobile places introduction first and one 300–340px scenic band below it; all responsibility chapters are normal vertical reading, without pinned WebGL or squeezed text. Each chapter has a native Inspect control that rehomes the single live WebGL canvas into that chapter’s 380px scene margin with a dedicated close camera; activating it again restores the opening. Each chapter also retains a distinct 780×900 original canvas still, rendered at up to 410px tall in a full-bleed unboxed scenic margin after the prose: intake, sawtooth workshop, delivery bays and service loop. Neighbouring architecture and the shared route remain visible to preserve environmental continuity. Navigation wraps into an ordinary row below the identity. Margins reduce to 22px. Landscape orientation permits document scrolling instead of forcing the entire introduction into a short viewport.

## Elevation & Depth
No CSS card shadows. Real directional light, hemisphere fill and PCF soft cast shadows provide depth to the modeled world. Ceramic structures use roof ribs, window recesses, rails, service pipes and loading details. A fresh pure-renderer overview (`landscape-fidelity.png`) provides the static fallback without baked-in page text; four portrait-framed renderer captures provide the phone chapter scenes. All five PNGs embed origin, renderer method and exact scene hash in their tEXt provenance. Camera motion is demand-driven, continuously follows scroll distance and stops after settling. A cyan transfer marker traces the shared route as the visitor scrolls; this is illustrative sequence, not a quantitative simulation. Static geometry is batched by material and the 2048px shadow map is cached. Porcelain gains clearcoat and beveled cuboid edges; glazing is alpha-transparent with cool physical-material response. Pause/reduced motion immediately selects meaningful framing. Hidden and offscreen cancel scheduled frames.

## Shapes
Architectural mass varies: arched intake hall, sawtooth workshop, raised loading roof and paired support vessels. Shared ground joints, return pipes and overhead walkways prevent isolated collectible scenes. UI uses unrounded open columns, thin rules and authored line SVG arrows / plus signs.

## Components
**Navigation:** real anchors with at least 44×44px touch size. Underline on hover, 3px visible focus ring. A skip link bypasses scenery.

**Chapter index:** chronological native links with the current chapter bolded; explanatory captions follow the prose. Sequence labels are specific to this user-pinned four-step story, not a reusable eyebrow convention.

**FAQ:** native details/summary; 76px default row, opened answer remains in document flow. Enter/Space, pointer and trusted touch work without custom ARIA reimplementation. No modal, no Escape trap.

**Contact:** a ruled text action to the exact real LinkedIn profile, with full-time / contained freelance boundaries in readable prose. New-tab disclosure and no-form-delivery truth remain visible.

**Fallback:** original PNG renderer output, all HTML remains independent of JavaScript and WebGL. `?fallback=1` exercises the static path.

## Functional closure
A real WebGL context loss cancels scheduled draws permanently for this page, restores the scene host to the opening, restores all chapter stills, disables renderer-only controls and leaves all ordinary reading/contact/return routes usable. Widening from a live phone inspection also clears the live-margin class so its still reappears on return to portrait.
Current exact hashes, repair confirmations and limitations are in PARENT_CLOSURE.md and fidelity/pending-shipping.json. Prior detector output remains historical; no repeat detector.

## Do's and Don'ts
- Do preserve the separate scenic and white-reading rhythms.
- Do preserve complete mobile paragraphs, normal scrolling and real contact.
- Do label scenery illustrative wherever it could imply real installations.
- Don't reuse source models, code, screenshots or business claims.
- Don't turn independent software responsibilities into an agency-scale guarantee.
- Don't canonize generic eyebrow/kicker styling from the sequence-specific labels.
