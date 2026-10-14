---
name: Small Worlds
description: A ceramic miniature collection and exhibition catalogue for Victor Mendivil
colors:
  lavender: "#d9d2ee"
  ink: "#25354e"
  mint: "#c5decf"
  peach: "#f3c0a7"
  divider: "#25354e40"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(32px, 3.2vw, 48px)"
    fontWeight: 500
    lineHeight: 1.13
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(34px, 4.3vw, 62px)"
    fontWeight: 500
    lineHeight: 1.13
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(23px, 2vw, 28px)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  circle: "50%"
spacing:
  control-gap: "12px"
  caption-gap: "24px"
  paragraph-gap: "24px"
components:
  collection-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    width: "52px"
    height: "52px"
  collection-button-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.lavender}"
---
# Design System: Small Worlds
## Overview
**Creative North Star: The ceramic collector's shelf, continued as an exhibition catalogue.**
The accepted original architectural miniatures remain the lead. Lavender is the exhibition ground, mint the personal catalogue spread, peach the closing correspondence page. Reading is unboxed and inline: no gallery-detail modal, anonymous panel or repeated About-card grid.

## Typography
Self-hosted Manrope is retained throughout. Substantial introduction, scene captions, identity caption, background, working approach and contact prose are 16px minimum. Secondary labels and disclosures are 13px. Mobile collection title is clamp(32px,8.4vw,38px); section headings are clamp(34px,8.7vw,39px). Caption titles are 25px mobile. The lead paragraph is 24px mobile and clamp(23px,2.1vw,30px) desktop. About/contact headings use continuous text with balanced wrapping; no hidden desktop line breaks.

## Collection
The unchanged orthographic artwork occupies 590px desktop height; at narrow widths it takes clamp(300px,86vw,370px). In landscape at heights below 500px it takes 390px, not a fixed screen enclosure. Caption count, text and circular browsing controls form a horizontal exhibition label on desktop. At phone widths, count and controls form a rail followed by the readable title/prose/disclosure. The first phone viewport can scroll: no text is shrunk to fit.

## Catalogue spread
About has a full-width heading above three unequal columns: an existing original rendered miniature with identity caption; the essay; and a narrow working-approach marginal note. Desktop columns are 1fr / 1.65fr / .75fr with clamp(28px,4vw,64px) gutters. Between 601px and 1000px, the spread becomes two columns and the working note follows the essay. At 600px and below the order is heading, small illustrated identity strip, lead, background, curiosity, working approach. The illustrated strip uses a 112px image column (88px below 360px). It is a catalogue plate, not new factual project evidence.

## Closing page
Contact is not another About split. A large question spans the peach field, followed by an offset prose-and-LinkedIn continuation in column two. Phones make this one linear reading passage. Disclosure and return-to-collection remain reachable at the bottom.

## Navigation and accessibility
Header on phones is deliberately two rows: identity, then two 16px links. About and Contact are ordinary anchors; the real supplied LinkedIn route is in Contact. Native links have minimum 44px height; scene buttons are 52px desktop and 48px phone. Focus remains a 3px ink outline with 6px offset. Safe-area insets and viewport-fit are present. No fixed controls, body locking or independent modal scroll. Reduced motion disables smooth scrolling and transitions; manual replacement still visibly changes the artwork.

## Material and performance
The original three silhouettes, palette, geometry details and reading topology are retained. New glaze uses clearcoat .65, roughness .28, differentiated matte foliage, and original translucent greenhouse panes. Static geometry is batched by material without removing detail; the whole batch can rotate on a quarter-turn turntable. Detail lens magnifies 1.27×, and raking light moves the actual key light. Demand-driven exponential transitions settle completely, latest inputs interrupt them, and hidden/offscreen work cancels. Pause/reduced motion visibly applies the requested orientation/light/lens immediately. There is no idle ambient loop. Still fallback assets remain historical original renders, not updated material captures; enhancement controls disable when WebGL fails. A no-JS style exposes the first still and every ordinary reading/contact path.

## Rules
- Color owns whole reading regions, not card accents.
- Keep imagined-art disclosure next to collection captions.
- Preserve miniature craft and manual browsing; never imply client proof.
- Let the catalogue's plate, essay and marginal note differ in scale and purpose.
- Keep professional/contact information reachable without browsing every scene.

## Verification boundary
Real Chromium captures and trusted keyboard/touch tests are in content-results.json and .impeccable/review/. Parent comparative review is still required; technical passes are not aesthetic or physical-Safari certification. The detector output is historical and was not rerun.
