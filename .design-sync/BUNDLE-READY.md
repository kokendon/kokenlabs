# Re-sync bundle — built 2026-09-01, NOT YET PUSHED

Brand guidelines v1.4 alignment. Source files were fixed; **the Claude Design project
`7deb0bf7-b605-4482-8c70-347001a41a09` still holds the old values until this is pushed.**

## Blocked on
`DesignSync` requires design-system authorization, which cannot be granted from a
non-interactive session. **Run `/design-login` once from an interactive Claude Code
session on this machine**; headless/SDK runs then reuse it.

## What changed vs the last sync
- `--kl-shadow-primary` / `-hover`: violet+pink blur-glow → neutral directional
  (`0 6px 20px rgba(0,0,0,.45)` / `0 10px 28px rgba(0,0,0,.55)`). These are consumed by
  `.kl-btn-primary`, so every design on that class was rendering a banned glow (brand v1.4 §02).
- Volt rule text: "≤5% of a layout" → "exactly one per screen" (brand v1.4 §03), in
  `tokens.css`, the style guide's body copy and swatch label, and the README.
- Token file header → v1.1, aligned to brand guidelines v1.4.

## Bundle contents (`bundle/`, 156K)
```
styles.css              entry — @imports fonts.css, tokens/tokens.css, components.css
tokens/tokens.css       v1.1; Google Fonts @import dropped (fonts.css serves them locally)
components.css          unchanged — it references the tokens, which is correct
fonts.css + fonts/      Inter, JetBrains Mono, Space Grotesk (self-hosted woff2)
guidelines/style-guide.html
conventions.md
```

## Verified before staging
Served the bundle and loaded it in a real browser:
- `--kl-bg` → `#0A0B0E`, `--kl-accent` → `#A24BFF`, `--kl-shadow-primary` → neutral
- `.kl-btn-primary` computes `rgba(0,0,0,0.45) 0 6px 20px` — no colour component
- `body.kl-body` → `rgb(10,11,14)`; `.kl-h1` → Space Grotesk; all three families load
- no console errors

## To push
1. `/design-login` in an interactive session
2. `DesignSync get_project` on `7deb0bf7-b605-4482-8c70-347001a41a09` to confirm it's writable
3. `list_files` to diff against the paths above
4. `finalize_plan` with `localDir` = this `bundle/` directory
5. `write_files` using `localPath` for each

Per NOTES.md the whole styling layer re-uploads — cheap and idempotent, no component diff.
