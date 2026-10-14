---
name: WorkbenchOS
description: Original amber personal-document workspace
colors:
  ground: "#1c160f"
  surface: "#241c13"
  amber: "#efb567"
  cream: "#ffe4ad"
  muted: "#c9a779"
  line: "#896238"
  hover: "#3a2b1b"
  pressed: "#594024"
  titlebar: "#302315"
  texture: "#00000016"
typography:
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "17px"
    lineHeight: 1.65
  headline:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "clamp(32px, 4vw, 48px)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-.025em"
  utility:
    fontFamily: "ui-monospace, Courier New, monospace"
    fontSize: "14px"
  prose-minimum:
    fontSize: "16px"
  subsection:
    fontSize: "22px"
  subsection-mobile:
    fontSize: "23px"
  lead:
    fontSize: "21px"
  lead-mobile:
    fontSize: "20px"
  mobile-title:
    fontSize: "36px"
  fallback-title:
    fontSize: "32px"
  file-label:
    fontSize: "24px"
  mobile-contact:
    fontSize: "19px"
  home-prose-mobile:
    fontSize: "18px"
  path-desktop:
    fontSize: "15px"
  utility-small:
    fontSize: "13px"
  utility-smallest:
    fontSize: "12px"
spacing:
  control: "8px 16px"
  reading: "40px 48px 60px"
  reading-mobile: "32px 20px 48px"
components:
  button-active:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ground}"
    padding: "8px 16px"
---
# Design System: WorkbenchOS

## Experience fidelity — implemented
`workbench-tools.js` adds a native command-launcher dialog: Ctrl/Meta K or the visible Home action searches document names, filenames, headings and real prose, plus Home and Texture operations. Enter opens the first match; empty results are explicit; Escape and Close restore focus. Tab/Shift+Tab wrap at both dialog endpoints. Desktop Maximize/Restore changes actual workspace dimensions while retaining reading offset. Single-document phones/short landscape omit sizing because their reading already fills the width. The 220ms clip reveal is desktop-only; page-scrolled mobile activation is instant to preserve restored offsets. No ambient loops, no fabricated system services, no storage.
Launcher tokens: 25px desktop/22px mobile title, 18px search input, 16px label, 14px utility/help, #100c08ba backdrop. Prose remains at least 16px.

## Overview
**Creative North Star: "A personal document workbench"**
Amber application chrome surrounds a calm brown-black reading surface. The home has original locally drawn bitmap name lettering and four purposeful files. The frame is the material, not a device in a room. User-pinned EddyOS inspiration governs palette and file grammar, not assets or biography.
**Key Characteristics:**
- Original bitmap identity, readable native HTML prose.
- Thin amber application strokes and divided controls.
- Immediate file destinations; no boot or permission gate.
## Colors
Amber is the actionable foreground, cream the reading ink, warm muted ink the paths and marginal labels. Brown-black ground and slightly lifted brown surface separate home from reading. Line color is structural, not body text.
## Typography
Display identity is an original five-by-seven SVG bitmap drawing generated in main.js. It is not a copied font and its accessible name is normal text. Body uses 17px Arial for calm Read-mode comprehension; lead 21px desktop/20px mobile, headings 32–48px desktop/36px mobile. Utilities use the native monospace stack for file names and paths. Endnotes and sidebar explanatory prose are 16px native body text. Home identity supporting prose is 16px minimum at every breakpoint. Ordinary document paragraphs and definition answers are 17px. Smaller 12–15px sizes are reserved for file/path/status/link-destination chrome, not ordinary paragraphs. Body measure is at most 67ch.
## Layout
Desktop: 60px bar, sparse four-corner file launcher, centered name, task strip. Active window is at most 1100px wide with a 190px directory column and independently scrolling document. Tablet retains a 150px directory. At width <=600px or height <=500px use one full-width document, normal page scrolling, persistent Home bar, sticky titlebar and Back below it, and sticky four-app bottom navigation with safe-area padding. Narrow home is a vertical file list; landscape home uses two columns. All interactive controls have >=44px height.
## Elevation & Depth
Document frame uses 12px 18px 40px #100c08 shadow; no glow halos. Optional scanlines are restricted to home, off initially, and never cross document reading text. No motion is required for comprehension.
## Shapes
Square narrow application edges; original line SVG document and window icons. No rounded card grid or imported OS assets.
## Components
Native buttons open and switch documents. Minimize retains a task and reading offset; Home and Escape also retain tasks and offsets. Switching/task activation restores the target file’s pane/page offset and focuses its article. Close removes that task and discards only its saved offset. Back consumes document history without adding a new entry, restores the prior file’s offset, then returns Home when exhausted. State lasts until reload; no persistence claim across viewport mode changes. A static no-JavaScript document index exposes identical complete prose and native section/return/LinkedIn links instead of inert shell buttons. Desktop task buttons restore open files; mobile app navigation reopens or switches a file. Current destinations use amber-filled state. Focus is 2px cream with 4px offset; text selection reverses to ground on amber; scrollbars use line on ground. LinkedIn is the only external contact route, labeled as a new tab; no collection form.
## Do's and Don'ts
- Do keep meaningful document prose readable and untextured.
- Do retain reachable Home, Back and app switching on mobile.
- Don't introduce fake diagnostics, irrelevant games or permission prompts.
- Don't copy blackletter, OS logos, source assets or project claims.
