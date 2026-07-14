# Koken Labs — Design System v1.0

The single source of truth for every Koken Labs asset. Sync this into Claude Design once, and every new project inherits the brand automatically — no re-pasting colors, fonts, or components.

**Tagline:** From chaos to clarity. **Voice:** engineer who closed the deal — direct, short sentences, numbers over adjectives, zero hype.

## Files
| File | What it is | Role |
|------|-----------|------|
| `tokens.css` | All design variables — color, type, space, radius, elevation | **Canonical.** Machine-readable source for `/design-sync`. |
| `components.css` | Component library — buttons, cards, labels/chips, and the product-doc parts (cover, category divider, prompt card, script card) | **Canonical.** Depends on `tokens.css`. |
| `design-system.html` | Living style guide — renders every token and component with real sample content | Human reference + standalone upload fallback. Self-contained (inlines the CSS). |
| `mark.svg` | The ō mark — open ring + macron in the Nova gradient | Logo. Never close the ring. |

`tokens.css` and `components.css` are the truth. `design-system.html` demonstrates them — if you change a token, regenerate the inlined CSS in the HTML (or just trust the two CSS files, which is what Claude Design reads).

## Connect it to Claude Design (`/design-sync`)

1. Put this folder in a Git repo (either its own repo, or a `design-system/` folder inside an existing one). Push it to GitHub.
2. In **Claude Code**, run:
   ```
   /design-sync
   ```
   and point it at this repo / folder. Claude Design ingests `tokens.css` + `components.css` as your real design system.
3. Open **Claude Design** and start a new project — it now **auto-inherits Koken**. Reference components by name in prompts, e.g. *"use the prompt-card component"*, *"lay this out on a category-divider page"*, *"primary CTA in the Nova gradient."*
4. When the brand evolves, edit `tokens.css` / `components.css`, push, and re-run `/design-sync`. Every project picks up the change.

> Design-sync is only as good as its source. This folder is kept clean and product-focused on purpose — no marketing-site chrome, just the reusable system.

## No repo yet? Standalone fallback
Upload `design-system.html` (or paste its contents) at the **start** of a Claude Design project as the foundation reference. Works immediately; you just attach it per project instead of it auto-inheriting.

## Token quick-reference
- **Backgrounds:** Obsidian `#0A0B0E` (page) · Carbon `#14161B` (surface) · Carbon-2 `#191C23` (inset) · Steel `#262A33` (border)
- **Brand:** Nova gradient `#A24BFF → #FF53B1` @ 120° (hero) · Volt `#C8FA4B` (one spark, ≤5%)
- **Text:** Cloud `#F4F6FA` · Mist `#99A2B2` (muted)
- **Type:** Space Grotesk (display 500/600) · Inter (body) · JetBrains Mono (labels/code)

## Component names to reference in Claude Design
`kl-btn-primary` · `kl-btn-ghost` · `kl-card` · `kl-label` · `kl-chip-volt` · `kl-eyebrow` · `kl-grad-text` · `kl-doc-cover` · `kl-doc-divider` · `kl-prompt-card` (Kit) · `kl-script-card` (Vault)

*Koken Labs — From chaos to clarity.*
