# Current content/mobile verification

`node verify-content.cjs` against loopback :9016 passed: six requested viewports (320×740,390×844,430×932,844×390,768×1024,1440×900). Raw measured geometry, native targets, computed copy sizes, anchor positions and final CTA/footer bounds are in `content-results.json`.

- No document/text/control overflow; header/welcome/controls separated; canvas bounded to garden. Substantial text >=16px and all tested native links/buttons >=44×44px.
- Trusted Playwright touch taps reached About/Practice/Contact and returned to the garden at every viewport. About/practice land at ~30px; contact naturally clamps at document end with its content and CTA visible. Keyboard Tab/Enter navigation and Space pause/Enter resume ran on a separate normal-motion browser; reduced motion verified truthful disabled control and identical preserved canvas pixels. WebGL-denial fallback kept content and contact. No observed page errors in viewport checks.
- Current direct Playwright viewport captures: desktop.png, mobile.png, content-desktop.png, content-mobile.png, landscape.png, content-landscape.png; additional About/Interests captures and contact-mobile.png. These captures use reduced motion for deterministic scene snapshots; not normal-animation screenshots. Old desktop-full.png/mobile-full.png predate this refinement. No detector rerun.
- Browser Use screenshot timed out; isolated headless Chromium was the alternate real rendering engine. Early checks encountered software-WebGL/browser timing failures; fresh motion browser, explicit SwiftShader permission and settling before preserved-pixel sampling produced the final pass. A strict 30px contact test was corrected for native document-end clamping, not hidden by CSS.
- Viewport/touch emulation is not physical iPhone/Safari certification. Safe-area CSS is present; physical browser chrome, notches and low-end-device performance are untested. LinkedIn external delivery untested. Parent owns fresh comparative visual acceptance.

## Historical scenic-rebuild verification (below)
The following claims/captures describe the prior renderer pass, not the current lower-page layout.

# Real browser verification — WebGL rebuild

Actual Chromium/CDP over loopback :8916, named session `ten06rebuild`. `verify-browser.py` is reproducible injected-browser code; `results.json` contains successful assertions. Its pass establishes technical behavior, not independent aesthetic acceptance.

- Desktop layout 1440×900: WebGL ready, both self-hosted fonts loaded, document width1425 including ordinary scrollbar. Mobile390×844: width390, all five sections, 27.2969px practice inset.
- Real Tab traversal reached skip/name/Meet Victor. Native Enter reached #about at30px. Native Space paused; preserved WebGL pixels stable. Native Enter resumed and pixels changed.
- Actual desktop CDP mouse input reached practice/contact. Mobile CDP touchStart/touchEnd reached contact. Tests pause the scene before pointer navigation and allow scrolling to settle; earlier assertions raced delayed input while ambient rendering was active. Interactive latency on real low-end devices is not benchmarked.
- Separate real mouse pause/resume check: paused hashes[-1752262694,-1752262694], resumed foreground hashes[-656411045,704963395]. Initial resumed sampling was incorrectly taken while the tab was hidden; `Page.bringToFront` produced the actual foreground variation. This also confirms hidden-tab rendering suppression.
- Emulated reduced motion actually matched: disabled truthful “Still water · reduced motion” label, aria-pressed true, motion paused, CSS scroll behavior auto, stable pixel checksums.
- WebGL construction failure was exercised by denying WebGL contexts in the next real page before module execution. Renderer exception was caught, canvas and control hidden, personal content and all three native nav links retained.
- Seven checked runtime/library/font/favicon URLs returned200. Window error/unhandled-rejection array and separately intercepted console.error array empty. Exact supplied LinkedIn route and new-tab target retained, zero forms. External LinkedIn delivery was not tested.
- Escape not applicable: there is no modal, focus trap or dismissible overlay.

## Evidence and capture validity
Final `.impeccable/review/desktop.png`1440×900, `mobile.png`390×844; full-page `desktop-full.png`1440×3548, `mobile-full.png`390×4442. Images inspected; full-page pages contain the complete warm-content browse and no blank canvas. Initial mobile showed overlap and narrow canopy. One correction batch broadened branching, fixed petal orientation, separated the mobile scene below copy and reduced excessive render cost. No further visual corrections after that batch.

Standard Chrome `fromSurface:true` screenshot capture repeatedly timed out. Alternate compositor `fromSurface:false` worked. Full-page screenshots were direct one-frame captures after temporarily pinning the scenic section to its original viewport height and extending only the capture viewport; not scroll tiles. The normal desktop compositor capture was clipped by the1280×720 native Chrome window. `desktop.png` was therefore cropped with ffmpeg from the top1440×900 of the valid complete desktop capture, without altering pixels. Provenance is recorded separately. These are capture repairs, not new visual-polish rounds.

## Historical evidence / limits
`superseded-canvas2d/` preserves old screenshots/results/verification, not current proof. `detector-raw.json` is the original unchanged single detector run and does not describe this WebGL rebuild; it was NOT rerun. Its old padding/contrast notes remain historical.

This scene now has genuine curved geometry, physical material lighting and shadow maps, textured shore, reflected tree geometry and animated water. It remains stylized: relatively sparse tree crowns, subdued sky, simplified distant bank and water absorption rather than physically traced refraction/caustics. Do not claim photorealism or pinned-reference optical fidelity. Fresh full parent review is still required.
