# Koken Labs Brand Guidelines (visual system) v1.0
Built 2026-11-05 from the live kokenlabs.ai site (`styles.css`, `assets/*.svg`) · Status: documented as-is, not owner-confirmed
Full visual guide: https://claude.ai/artifact/JEFDSHCx3B21TfmEMYfJSc (laid out like the KokenSteve guide)
Voice: see `brand-voice.md` in this folder.

## Logo
- Wordmark: lowercase "k" + the ō + "ken" in Space Grotesk SemiBold 600 (−2 tracking), then "LABS" in JetBrains Mono Bold 700, caps, +2 tracking.
- The ō: an open ring under a bar, in the Nova gradient. It is the one element that keeps its color in every full-color version.
- On dark: letters Cloud #F4F6FA, LABS Nova Violet #A24BFF. On light: letters Obsidian #0A0B0E, LABS Deep Violet #9A3DEB.
- One-color versions (all white, all Obsidian) for single-ink print and engraving: files still to make.
- Clear space: the width of the ō on all sides. Minimum size: 160 px on screen, 1.25 in / 32 mm in print (proposed). Below that, use the ō mark (minimum 16 px).
- Don't: stretch, recolor the ō, color the letters, add glows or shadows, put the full-color logo on the Nova gradient, drop or retype LABS, set the wordmark in caps, swap the ō for a plain o, or place it over busy photos without an Obsidian panel.

## Color
| Role | Name | HEX | Notes |
|---|---|---|---|
| Ground | Obsidian | #0A0B0E | Primary background |
| Signal | Nova gradient | #A24BFF → #FF53B1, 120° | ō, one headline word, buttons, thin rules. Never a background wash. |
| Text / light ground | Cloud | #F4F6FA | Text on dark |
| Surface | Carbon | #14161B | Cards, alternate sections |
| Border | Steel | #262A33 | Dividers on dark |
| Secondary text (dark) | Mist | #99A2B2 | Fails on white (2.6:1) |
| Signal 2 | Volt | #C8FA4B | Status dots and "live" signals only. Never on white. |
| Violet text on light | Deep Violet | #9A3DEB | 4.9:1 on white |
| Secondary text (light) | Graphite | #5A6170 | New in v1.0, replaces Mist on light grounds |

Balance on the site: Obsidian/Carbon ~68%, Cloud/Mist ~20%, Nova ~10%, Volt ~2%.
CMYK values in the visual guide are straight conversions; get a printer's proof before any print run.

## Type
- Space Grotesk 600: display (44–84 px, −2%, 1.08 line height), headings (30–46 px), buttons, numbers.
- Inter 400/500: body 17 px / 1.65, lede 17–21 px in Mist (dark) or Graphite (light).
- JetBrains Mono 500: labels, 12 px, caps, +8% tracking, e.g. "02 — What we do", "STATUS: LIVE".
- Gradient text only for one or two headline words at 28 px+.
- Fallbacks: Arial / system UI; Menlo / Consolas for mono.

## Layout signatures
Dark first. Pill buttons (Nova fill, Obsidian text). Mono eyebrows. A soft violet radial glow behind heroes. Rounded 16 px cards on Carbon with Steel borders.

## Files (repo `assets/`)
- `kokenlabs-logo-dark.svg` (for dark backgrounds), `kokenlabs-logo-light.svg` (for light backgrounds), `kokenlabs-mark.svg` (ō mark), `kokenlabs-monogram.svg` (app icon).
- To make: one-color logos, PNG exports @1x/@2x, favicon set.
- Known issue: the logo SVGs use live text that loads Google Fonts. Outline the text before sending files to Canva, email signatures, decks or printers.

## Open question for the owner
The KokenSteve guide (https://claude.ai/artifact/Y5nnKGXty5eZZNhYmWAJBB) says KokenSteve shares "the same wordmark, the same gold O, the same Poppins type" and "the same palette as Koken Labs" (Koken Gold #FEAE00, Koken Black #111111). The live Koken Labs identity uses none of those. Decide which is the family standard: (a) Koken Labs keeps its own Obsidian/Nova system and KokenSteve's copy is corrected, or (b) Koken Labs moves to the gold family system and this guide is rebuilt. Recommendation: (a), since the Labs system is live and fits an AI build studio; reword KokenSteve's guide to say it shares the Koken name, not the palette.
