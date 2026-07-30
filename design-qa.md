# Design QA — Wastexa cinematic entry

Date: 2026-07-31  
Production URL: `https://wasteo-clever-flow.vercel.app/?qa=759faf1`

## Evidence

Source visual truth:

- `/Users/prajaktagaikwad/.codex/generated_images/019fb3e8-7f02-7a23-9bd2-421047a33ddc/call_6cFsSx2R3tioCQAPG5dnUgJ6.png`
- Original source: 1586 × 992 pixels.
- Normalized source: `qa/entry-experience/reference-normalized.png`, center-cropped and resized to 1280 × 720.

Production implementation:

- `qa/entry-experience/current/atlas-production-final.png`
- `qa/entry-experience/current/rfq-production.png`
- `qa/entry-experience/current/compliance-production.png`
- Browser capture: 2560 × 1440 pixels at 2× density.
- CSS viewport: 1280 × 720.
- Normalized implementation: `qa/entry-experience/current/atlas-production-final-normalized.jpg`, 1280 × 720.
- Side-by-side comparison: `qa/entry-experience/current/comparison-production-final.png`.

State:

- Homepage at scroll position 0.
- Supply Atlas selected and motion paused for the stable comparison.
- Fixed navigation and transparent illustrative notice visible over the scene.

## Findings

No actionable P0, P1 or P2 issues remain.

P3 follow-up:

- A future media pass could add WebM alternatives if production analytics show a meaningful bandwidth benefit.
- This pass used the connected in-app Browser's 1280 × 720 viewport. Mobile behavior was code-reviewed but not captured at a separate 390 px browser viewport in this pass.

## Full-view comparison

The production entry preserves the selected target's full-screen media composition, left-aligned procurement narrative, green active phrase, entry CTA, scene counter and three-option selector. The smaller headline and brighter media treatment intentionally differ from the original target in response to the user's latest direction. The imagery now has more visual priority while the content remains readable.

## Focused-region review

The headline, demo notice, navigation, scene controls and image crop were legible in the full-view comparison, so a separate focused crop was not required. DOM geometry confirmed that the selector label begins at 24 px and remains inside the viewport.

## Required fidelity surfaces

- Fonts and typography: Space Grotesk remains consistent with the site. The desktop headline renders at 46.08 px with 1.0 line height and balanced two-line wrapping. Eyebrows, demo disclosure and scene labels use restrained optical sizes.
- Spacing and layout rhythm: the full entry fits the 1280 × 720 viewport. Navigation, disclosure, copy, CTA and selectors remain inside the frame with zero horizontal overflow.
- Colors and visual tokens: transparent navigation and disclosure allow the scene to remain full bleed. Wastexa green is reserved for the active phrase, CTA and selected-scene underline.
- Image quality and asset fidelity: all three scenes report 1920 × 1080 intrinsic video dimensions, ready state 4 and 8.04-second duration. Production applies the approved brightness, saturation and contrast treatment, with versioned media URLs to avoid stale browser assets.
- Copy and content: each scene maps cleanly to supplier discovery, RFQ normalization and supplier risk/compliance. The illustrative-demo statement remains visible without dominating the scene.

## Interaction, accessibility and production verification

- All three scene controls display the correct media, eyebrow, headline and supporting copy.
- Right-arrow keyboard navigation changes the scene correctly.
- Pause/play works; inactive video streams pause.
- `Enter Wastexa` scrolls to the existing product story with its top at 64 px.
- Entry videos pause when the scene leaves the viewport.
- Navigation remains transparent with no backdrop blur after scrolling.
- Pointer-selected scene controls no longer display an intrusive focus rectangle.
- Keyboard focus treatment remains available.
- Reduced-motion logic uses static poster assets and disables auto-advance.
- Production media loaded successfully at 1920 × 1080.
- Production console errors: none.
- `npm run lint`: passed with six pre-existing fast-refresh warnings in shared UI files.
- `npm run build`: passed.

## Comparison history

Initial P2 finding:

- Pointer selection left a large green focus rectangle around the active scene control, visually overpowering the restrained selector.

Fix:

- Prevented mouse-down focus on scene tabs while preserving keyboard focus behavior.
- Reduced the keyboard focus outline to a one-pixel inset treatment.

Post-fix evidence:

- Production active element returns to `BODY` after pointer selection.
- Selected-tab computed outline is `none`.
- `qa/entry-experience/current/comparison-production-final.png`.

final result: passed
