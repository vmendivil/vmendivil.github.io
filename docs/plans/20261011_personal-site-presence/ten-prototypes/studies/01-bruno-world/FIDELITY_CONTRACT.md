# Fidelity contract

Source: https://bruno-simon.com/. Live revisit rendered entry ring only; retained bruno-world.png shows vehicle-scale world, lighting and environmental presence. Prior shortlist verifies free exploration; current live driving is not claimed. Gap: fixed wide camera, rigid rover, instant relocation. Focal implementation: inertial rover with wheel rotation/suspension and bounded pursuit camera; direct destinations frame their architecture without teleporting the rover. Reading remains the enamel route log. Mobile uses existing touch steering; reduced motion uses immediate destination framing. Three.js retained; 30fps cap, <=1.5 DPR, no borrowed code/assets. Physics remains kinematic, not source-level rigid-body simulation.

Preserve all factual copy and LinkedIn. Add complete no-JS reading rather than controls-only fallback. Planned contract precedes runtime edits. Evidence: fidelity/ reference observations and retained original captures (copied for durable private evidence only).

## Implemented outcome
Inertial driving now turns all wheel/hub geometry and banks/pitches the service rover. A bounded pursuit camera follows its physical position and eases into a slightly closer view at speed. Destination selection frames the landmark instead of relocating the rover; closing reverses to its real position. Rendering is capped at 30fps and sun shadow texture at 1024px. The enamel route log remains unchanged.

## Material limits
Kinematic keep-out boxes, not rigid-body vehicle physics; no source-level physics toys, weather or reflections. Coast rendering measured only 2 desktop / 4 phone renders per second under this heavily concurrent software-WebGL run. This is not a smoothness pass. Initial 2.5-second paused snapshots had 1/2 residual camera frames; the diagnostic confirmed zero work after settling, but settling took ~15 seconds in this environment. One inherited hover contrast advisory is 4.46:1 vs 4.5:1; it remains unresolved. Tinted offset shadow warnings are retained accepted elevation, not newly added effects.
