---
name: Future Archive
description: A cobalt studio for a curious, practical developer
colors:
  cobalt: "#153cff"
  ivory: "#f3f1e5"
  midnight: "#0b226f"
  signal: "#e9ee75"
  focus: "#eff56c"
  ink: "#132aad"
typography:
  display:
    fontFamily: "Chakra, Arial, sans-serif"
    fontSize: "clamp(64px, 6.65vw, 96px)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Chakra, Arial, sans-serif"
    fontSize: "clamp(40px, 5.8vw, 84px)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Arial, sans-serif"
    fontSize: "18px"
    lineHeight: 1.6
spacing:
  paragraph: "24px"
  mobile-section: "44px"
  desktop-section: "72px"
components:
  motion-button:
    textColor: "{colors.ivory}"
    padding: "8px 10px mobile; 8px 15px desktop"
    minHeight: "44px"
  motion-button-hover:
    backgroundColor: "{colors.focus}"
---
# Design System: Future Archive

Current functional closure: WebGL context loss now enters the existing text fallback, hides/disables motion, and prevents queued, scroll, preference and resize rendering until reload. See `PARENT_CLOSURE.md` for verified current runtime hashes and assembly limits.
## Overview
**Creative North Star: "The curiosity lens"**
A saturated studio and a reflective, folded object make technology feel personal without impersonating a robot. Real geometry carries the sculptural material; ordinary scrolling carries the visitor. Page-scale ivory, midnight and yellow fields change the pace of the readable sections.
**Key Characteristics:**
- Reflective lamination, rolled edges and concentric detail.
- Wide squared lettering without diagnostic or terminal language.
- Editorial spreads, aligned working-method rows, stepped interest essays and native navigation.
## Colors
Cobalt owns the opening and closing. Ivory supports grounded context; midnight supports a considered approach. Signal yellow owns the interests section rather than becoming scattered neon trim.
**The Field Rule.** Give a section a complete color field; do not distribute the palette into interchangeable cards.
## Typography
Self-hosted Chakra Petch Medium is the display and navigation voice. Neutral Arial is 18px/1.6 body text, not a display substitution. The context lead uses 28–42px Chakra. Context headlines reach 84px desktop; the final invitation reaches 96px. Mobile title is 58px (54px at 320), context 38px (34px at 320), method 40px (36px at 320), interest essays 34px. Opening text is 17px; captions, navigation, labels and footer are 16px.
## Layout
The opening retains the approved full-stage sculpture on desktop. Below it, an ivory context spread uses a full-width two-line headline, cobalt baseline and a narrow vertical reading division. The midnight approach pairs three phrases with three aligned paragraphs; mobile interleaves each phrase and its prose rather than dumping the headings first. A compact curved colophon closes that spread. Yellow interests form two broad editorial essays, the second indented on desktop, with subject labels at the prose foot. Contact is a full-width invitation above two contrasting text measures and an external link, not another left-title/right-copy template. Desktop insets remain 6%; mobile uses safe-area-aware 24px margins and 44px section starts. At 700px and below, the opening is auto-height with a 100svh minimum: title and marginal note, reserved 300px sculpture stage (260px at 320), introduction, Explore, then caption and pause. No fixed-height mobile panel or body lock. Landscape uses a 660px scrollable scenic composition rather than compressing content into 390px. Tablet retains paired reading columns. All section anchors use 24px native scroll padding.
## Elevation & Depth
No CSS box shadows or glass panels. Depth comes from actual WebGL geometry, standard metallic materials, a studio reflection map and directional lighting. Seven compound-curved ribbons, rolled lips, ceramic ribs and a sparse orbital detail replace primitive object stand-ins.
## Shapes
Straight typography rails and square motion-control borders contrast with dimensional curved laminations. No cards, stacked panels, modal shells or portrait masks.
## Components
The motion button has a thin ivory stroke and signal hover surface. Focus rings are three pixels with seven pixels of offset. Anchors retain native link semantics; main navigation and footer afford direct access without completing a visual interaction. Reduced motion disables the movement-only button with a truthful label. The expensive animation stops when offscreen or the document is hidden. WebGL failure retains readable context and displays a text alternative.
## Experience-fidelity sequence (implemented)
The accepted cobalt studio and original reflective lens remain. Desktop normal-motion uses one held 180svh opening shot: the existing composition stays sticky while scroll changes the camera from z=10 to 8.3, turns the lens by 0.9 radians and opens the seven laminations with differentiated vertical separation and rotation. A small mid-shot exposure lift follows that same progress; it is not a global reveal effect. Initial 1600ms assembly is bounded; native wheel, keyboard and touch scrolling reverse the sequence. Phones keep the accepted auto-height content/stage order rather than pinning a viewport-taller title and text. Their initial assembly and stage-visible scroll disassembly carry the focal motion without blocking reading. Shallow landscape retains the 660px flowing stage. Ordinary anchors skip the sequence freely. Reduced motion keeps the original lens and uses no camera/ribbon movement or spatial entrance. The existing Pause control freezes ambient turning; scrolling remains purposeful camera input. Portrait tablet framing uses scale 0.82, x=1.2 and camera z=14.5→12.8 to preserve the full lens and title clearance; repair-tablet captures supersede the earlier clipped 768px opening. Draws stop when canvas is outside the viewport or document is hidden. `window.__fidelity` exposes real draw counts/camera/progress for checks.

## Do's and Don'ts
- Do preserve readable, factual personal context and the real contact route.
- Do self-host geometry runtime and display font.
- Don't add fake diagnostics, progress percentages, achievements or dates.
- Don't reinterpret the sculpture as proof of a specific technical mechanism.

Directional vocabulary: authored 24-unit SVG paths with square-ended shafts and open mitered heads, using currentColor. Link icons are 18px with 1.5px non-scaling strokes; the context mark is 72px with a 2px stroke (48px on tablet) and retains its mobile-hidden behavior. Decorative paths are hidden from accessibility and cannot receive focus; real text labels and native anchors remain unchanged. Detector warnings about Arial and percentage section insets are historical build evidence, not silently suppressed or rerun.
