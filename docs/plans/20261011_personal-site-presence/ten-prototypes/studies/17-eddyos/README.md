# WorkbenchOS / study 17
Standalone runtime: `index.html`, `style.css`, `main.js` only. No build, CDN or external assets. Parent should copy only those three files into the assembled preview. Documentation, tests and evidence are private.

Serve from this folder: `python3 -m http.server 9117 --bind 127.0.0.1`, then visit http://127.0.0.1:9117/.
Run browser coverage from this folder: `node verify.cjs`. The suite uses the existing read-only Playwright installation at `/home/trex/vhmc/projects/devPilot/node_modules/playwright` and its bundled PNG decoder. Override the URL with `STUDY_URL` for parent-owned assembled-runtime verification.

## Reading behavior
- Each document stores its own desktop-pane and mobile-page scroll offset for this session.
- Minimize, Home and Escape retain tasks and offsets. Activating a task or switching files restores the target file’s position and focuses the article.
- Back walks document-switch history without adding another history entry; it restores the prior document’s position. With no history, it returns Home and keeps tasks/positions.
- Close removes the active task and its saved position. Reopening that file starts at the top; other files retain their positions.
- Reload clears session state. Cross-breakpoint position migration is not promised.
- Mobile window actions and Back stay below the persistent Home bar while reading, avoiding an accidental scroll-to-top just to reach an action.

## No-JavaScript reading
With JavaScript disabled the inert workspace controls are hidden. The page exposes a semantic index and the same complete About, Approach, Curiosity and Contact prose, including full-time employment, bounded freelance availability, career interests and the actual LinkedIn link. Native section/return links work without script. This is tested in Playwright contexts with `javaScriptEnabled:false`, not inferred from a `<noscript>` tag.

## Final verification
`verification-results.json` is the final browser evidence: six viewports (320×740, 390×844, 430×932, 844×390 landscape, 768×1024 tablet, 1440×900 desktop), four document flows at each size, six JavaScript-disabled contexts, zero failures, zero page errors and no horizontal overflow. The suite records:
- 54 document-identity/reading-offset assertions across minimize/task restore, independent About/Approach switching, Back, Home, Escape, keyboard minimize, Close/reopen and preservation of the other file.
- Real Tab, Shift+Tab, Enter, Space and Escape; expected article focus, launcher/Home return focus, desktop task activation and trusted Chromium-emulated touch.
- Every visible paragraph, paragraph supporting span, endnote and document definition answer—not only the first lead—measured at ≥16px. All fallback paragraphs and definition answers also measured at ≥16px. Smaller chrome/file/path/link-destination labels are not ordinary prose.
- Home/window controls at least 44px high; viewport-fit=cover and bottom safe-area padding recorded. Chromium emulation reports a zero physical inset; this is not proof of notched-device Safari behavior.
- Home texture pixel differences at every size under reduced motion (43,680–262,152 pixels); toggling off returns the crop to byte-decoded pixel equality. Reading remains untextured and has no animation.
- All no-JavaScript section and return links, native keyboard anchor activation, complete truthful availability and actual contact URL. LinkedIn new-tab activation is intercepted locally to prove navigation without an external request or message.

Fresh final captures live at `.impeccable/review/final-*`: main, every opened document and contact at desktop/mobile/landscape; actual-viewport scrolled reading captures; full no-JavaScript desktop/mobile documents. Full-page mobile captures composite sticky navigation at the initial viewport boundary; use `final-reading-*` for the actual scrolled viewport. Captures were visually inspected; technical passes do not constitute independent ensemble approval.

## Bounded fix evidence and limits
`verification-initial-results.json` preserves the first run, which exposed mobile Back scrolling to the top before saving state. One UI correction batch made Back sticky below the titlebar. `verification-confirmation-results.json` preserves the subsequent run, which restored reading positions but failed an incorrect test expectation that every Close returns focus to Home; mobile appropriately restores its surviving file launcher. The harness expectation alone was corrected, with no further UI changes, and the final suite passed.

One detector execution for this fix is preserved verbatim in `detector-fix-raw.json`; it was not rerun. Its chrome-padding/Arial/optional-texture warnings are pinned-shell exemptions. Type-ramp and palette advisories are documented in DESIGN.md. It predates the sticky-Back correction and documentation updates. The older `detector-raw.json` and older non-final captures are historical, not current proof.

Original bitmap SVG lettering, file icons, flat amber palette and shell topology are retained. No shipping raster assets. No root preview, production, sibling study, commit or deployment changed. Parent comparative review and assembled LAN verification remain required. Physical Safari/iPhone and assistive-technology testing remain unverified. See `FIX_REPORT.md` for the narrow closure verdict.
