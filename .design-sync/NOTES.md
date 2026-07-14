# design-sync notes — Koken Labs

## Shape: custom `css` (outside the converter envelope)
This design system is **CSS-only**: `design-system/tokens.css` + `design-system/components.css`
plus a style-guide HTML and `mark.svg`. There is **no** `package.json`, Storybook, `dist/`, or
compiled component library. The standard `package-build.mjs` / `resync.mjs` converter path does
**not** apply — there is nothing to bundle into `window.*` React components.

## What we sync (decision, 2026-07-13)
Don chose a **styling-layer sync** (not React component wrappers): ship the real `tokens.css` +
`components.css` via a `styles.css` `@import` closure + self-hosted fonts, plus a conventions doc
naming every `--kl-*` token and `kl-*` component class. No `_ds_bundle.js`, no component cards.
Designs inherit Koken by class name (e.g. `<button class="kl-btn-primary">`).

## Re-sync
Source of truth = `design-system/tokens.css` + `design-system/components.css`. To re-sync after a
brand change: edit those, then rebuild the bundle (styles.css closure + fonts + README) and re-upload
to project `7deb0bf7-b605-4482-8c70-347001a41a09`. There is no anchor-based component diff because
there are no components — the whole styling layer re-uploads (cheap, idempotent).

## Fonts
Brand fonts (Space Grotesk, Inter, JetBrains Mono) are self-hosted under `fonts/` with `@font-face`
so designs render on-brand even if external font hosts are blocked. `tokens.css`'s original Google
Fonts `@import` is dropped in the synced copy in favor of the local `fonts.css`.
