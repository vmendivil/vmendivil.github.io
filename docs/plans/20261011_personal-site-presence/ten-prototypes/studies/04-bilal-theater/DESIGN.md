---
name: Ideas on a String
description: Accepted maple-and-paper miniature theater with a printed program
colors:
  paper: "#f4eddd"
  stage-mint: "#d2e2cf"
  ink: "#342c23"
  secondary-ink: "#67503c"
  curtain: "#b84226"
  printed-accent: "#95391f"
  rule: "#c7b99f"
  maple: "#ca9768"
  wood-edge: "#9d6c42"
  paper-scenery: "#fff7e4"
  mint-scenery: "#a7c4a6"
  mint-leaf: "#769778"
  brass: "#b99149"
typography:
  display:
    fontFamily: "Young, serif"
    fontSize: "clamp(52px, 5vw, 76px)"
    fontWeight: 400
    lineHeight: 1.13
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Young, serif"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: 1.25
  body:
    fontFamily: "Figtree, sans-serif"
    fontSize: "18px"
    lineHeight: 1.6
  detail:
    fontFamily: "Figtree, sans-serif"
    fontSize: "16px"
    lineHeight: 1.65
rounded:
  motion: "30px"
spacing:
  program-top: "38px"
  spread-top: "30px"
  paragraph: "16px"
components:
  cue:
    backgroundColor: "transparent"
    textColor: "{colors.printed-accent}"
    padding: "8px 0"
---
# Design System: Ideas on a String

## Authority and preservation
The user accepted the miniature theater. This refinement changes its reading surfaces, not its scenic world. Original maple deck, lit cut-paper scenery, curtains, bobbin inventor, brass gears, procedural grain and all four chapter stories remain. `style.css` retains the original scenic styling; `program.css` owns the new program and responsive overrides. No new assets or fabricated professional claims.

## Printed-program grammar
The program is an inline editorial spread, not a card or modal. A Young Serif masthead and thin double-ended rules establish a printed page. Contents occupy the left column on desktop; a narrow binding gutter separates the chapter leaf. Roman chapter folios carry the actual sequence, replacing decorative circular stamps. Paragraphs remain unboxed. A running colophon closes the spread. The next cue is an ink-and-rule page-turn control, not a raised rounded CTA. Warm paper and rust ink belong to the same wood/paper/mint world; no heavy texture, dark sidebar, fake tickets or fabricated credits.

## Typography and pacing
Self-hosted Young Serif supplies display, masthead (40px desktop / 34px mobile), contents heading, Roman folios and chapter headings (32px desktop / 27px phone / 25px at 320). Self-hosted Figtree is the practical reading face: primary copy 18px desktop / 16px phone, detail always 16px, both comfortable 1.6–1.65 leading. Maximum paragraph measure is 69ch. Intro is 16px on compact screens; stage caption is 14px and pause label 12px inside a 100×44px target. Small footer/colophon print is supporting disclosure, not the reading body.

## Desktop composition
The 94px header and 500px stage preserve the approved silhouette, materials, directional light and camera framing. A paper-backed Read the program link stays legible where the rail crosses the wood deck. The program is capped at 1200px with 36px insets; its spread is 230px contents / remaining chapter leaf. The leaf has a 64px Roman margin and 22px gutter. Controls follow the prose; the conversation's genuine LinkedIn link is in the leaf, not only in the header.

## Phone, tablet and landscape
At 900px and below, the title/intro, visible canvas, caption/control rail and printed program are separate normal-flow regions. No desktop widgets are fixed over reading. Portrait phone canvas remains 310px; tablet is 380px; short landscape is 300px, with a side-by-side title/intro band. All can scroll naturally; no forced viewport fit or body lock. Phone contents form two columns; tablet/landscape uses four. The chapter leaf retains its folio margin. Its footer becomes stacked at 320px. Main paragraph and detail sizes remain at least 16px. Safe-area padding and viewport-fit=cover are provided; physical Safari/dynamic-browser-chrome behavior is not certified.

## Navigation and states
Native chapter buttons have 52px minimum height, truthful aria-current and visible focus. Next and direct chapter input bring the compact reader to the changed leaf. Read the program and See this scene are real anchor links between regions. Tab, Enter, Space, ArrowLeft/Right and Escape work. Desktop fine-pointer wheel over the stage changes chapters; compact/coarse-pointer wheel scrolls the document instead. The real LinkedIn destination and supplied copy remain unchanged. Forced WebGL failure leaves the program, navigation and contact usable.

## Motion
Original exponential camera interpolation and ambient gear motion remain on desktop. Compact and reduced-motion views cut directly. Reduced motion starts still with a disabled, truthfully labelled Stage is still control; it does not offer a misleading resume. Escape and the regular pause control stop ambient animation. Offscreen/hidden-tab rendering still stops. Software WebGL can render desktop pans slower than wall-clock delays; settled evidence uses a paused direct cut, not a screenshot of neighboring moving sets.

## Evidence and limits
`content-results.json`: 139/139 browser checks, six requested viewports, trusted touchscreen taps, keyboard and mouse wheel, all four chapters, extended-prose stress, reduced-motion changed/stable canvas and WebGL failure. Current captures in `.impeccable/review/`: desktop.png, mobile.png, content-desktop.png, content-mobile.png, content-landscape.png and landscape.png. Opening/content/landscape images were inspected in a bounded build/fix/confirm pass. Historical detector evidence remains unchanged; no detector rerun. Parent comparative visual acceptance is still required.


## Current all-21 fidelity pass — Physical cue
The proscenium and camera remain fixed. Native Previous scene / Pull next thread handles close folded fly curtains, exchange the chapter scenery, lower suspended labels and accelerate brass gears; the original bobbin follows the red thread. The printed program updates immediately and retains its entire reading/contact path. Last input wins; pause/reduced motion produce actual final scene cuts. Phone receives the same cue machinery. Normal rendering is capped at ~30fps, 1024px shadows and DPR1.5; expensive work stops offscreen/hidden. Full program available without JavaScript.
This supersedes earlier motion/renderer constraints in this document, not its accepted art direction or factual reading grammar. Verification/evidence is tracked in FIDELITY_REPORT.md and fidelity-evidence/. Earlier detector and results remain historical.
