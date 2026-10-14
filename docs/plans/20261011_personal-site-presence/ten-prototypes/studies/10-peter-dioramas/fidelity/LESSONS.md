# Verification lessons
- Playwright forces Emulation.setFocusEmulationEnabled true for Chromium. Use a raw headed Chromium CDP connection, without Playwright’s attached focus emulation, to test real document.hidden with tab switching. Disabling it from a second CDP session did not release the original session’s forced visibility. Preserve failed headless lifecycle/window-minimization attempts as inconclusive, not passes.
- Use elapsed wall-time convergence rather than a capped per-frame increment for scene interaction: software-rendered shared hosts can make a nominal 40-frame transition take tens of seconds.
- Batch static original geometry by material, retain directional shadows and all scene detail, and cache shadows where geometry/light never move.
- Scope reading navigation to its actual header/nav control: a matching skip link outside the viewport is not an activation failure of the visible navigation.
- Inspect fallback images themselves: an old whole-page capture can bake headline/navigation into scenery and duplicate text on phones. Capture pure original renderer output with HTML overlays hidden.
- Exercise real WebGL context loss with WEBGL_lose_context as well as the initial ?fallback path; recovery must stop scheduled draws, disable renderer-only controls and restore rehomed scene/still ownership.
- Check phone-to-landscape-to-phone after rehoming a canvas; removing the canvas is not enough if a stale live-margin class still hides the fallback image.
- Wait for a replacement image to decode before asserting its dimensions. Preserve an early unsettled observation as historical rather than calling it an asset failure.
- Keep test cardinality tied to the executed viewport list; shrinking a six-size supplemental check to three requires updating its exact count assertion.
