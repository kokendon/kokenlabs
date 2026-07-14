# Koken Labs — design system conventions

**From chaos to clarity.** Dark-first brand. Voice: engineer who closed the deal — direct, short
sentences, numbers over adjectives, zero hype. Style with the `kl-*` classes below and the `--kl-*`
CSS variables; **never hard-code hex or px** — every color, size, and space has a token.

The full truth lives in the bound files — read them before styling:
`styles.css` (the entry; `@import`s the three below) → `tokens/tokens.css` (every variable) →
`components.css` (every class) → `guidelines/style-guide.html` (a rendered gallery of all of it).

## Setup / wrapping
Designs are **dark-first on Obsidian**. Wrap page content in `kl-body` — it sets the background
(`--kl-bg` = Obsidian `#0A0B0E`), text color (`--kl-cloud`), and Inter body font. Without it you get
an unstyled white page. Headings use Space Grotesk automatically via `kl-h1/h2/h3`.

```html
<body class="kl-body">
  <p class="kl-eyebrow">FROM CHAOS TO CLARITY</p>
  <h1 class="kl-h1">Ship the <span class="kl-grad-text">system</span>, not the chaos.</h1>
  <p class="kl-lede">One source of truth. Every project inherits the brand.</p>
  <a class="kl-btn kl-btn-primary kl-btn-lg" href="#">Book a call</a>
  <a class="kl-btn kl-btn-ghost" href="#">See the work</a>
</body>
```

## The styling idiom
A **utility-class system**: apply `kl-*` classes for components and type; drop to `var(--kl-*)`
tokens for your own layout glue (grids, custom spacing). No Tailwind, no CSS-in-JS.

**Component & type classes** (from `components.css`):

| Family | Classes |
|---|---|
| Type | `kl-h1` `kl-h2` `kl-h3` `kl-lede` `kl-muted` `kl-grad-text` (Nova-gradient text) |
| Labels | `kl-eyebrow` (mono, gradient dot) · `kl-label` (metadata chip) · `kl-chip-volt` (Volt spark chip) |
| Buttons | `kl-btn` (base, always add a variant) + `kl-btn-primary` (Nova gradient) / `kl-btn-ghost` · size `kl-btn-lg` |
| Cards | `kl-card` · `kl-card-tag` (mono eyebrow inside a card) |
| Rule | `kl-hr` (hairline divider) |
| Doc parts | `kl-doc-page` · `kl-doc-cover` (`kl-doc-title/-sub/-meta`) · `kl-doc-divider` (`kl-doc-num/-cat/-promise`) |
| Prompt card | `kl-prompt-card` (`kl-pc-head/-id/-title/-tags/-body/-tip`, `kl-var` = fill-in variable) |
| Script card | `kl-script-card` (`kl-sc-head/-id/-hook/-beats/-cta/-overlays/-visual`) |

**Token families** (from `tokens/tokens.css`) — use these for anything custom:

- **Surfaces (semantic):** `--kl-bg` (page) · `--kl-surface` / `--kl-surface-2` (cards / insets) · `--kl-border`
- **Text:** `--kl-text` (Cloud) · `--kl-text-muted` (Mist) · `--kl-accent` (violet) · `--kl-accent-soft`
- **Brand:** `--kl-nova-gradient` (`120°`, violet→pink) · `--kl-spark` (Volt `#C8FA4B`)
- **Type:** `--kl-font-display` (Space Grotesk) / `--kl-font-body` (Inter) / `--kl-font-mono` (JetBrains Mono);
  sizes `--kl-fs-display/-h2/-h3/-lede/-body/-small/-label`; weights `--kl-weight-*`
- **Space (4pt):** `--kl-space-1` … `--kl-space-8` · **Radius:** `--kl-radius` / `--kl-radius-sm` / `--kl-radius-pill`
- **Elevation:** `--kl-shadow-primary` (violet glow, primary CTA only) · **Layout:** `--kl-max-w` (72rem)

## Brand rules (do not break)
- **Primary CTA is always the Nova gradient** (`kl-btn-primary`). Ghost buttons for everything secondary.
- **Volt (`--kl-spark`) is one spark per layout, ≤5% of the surface** — a single chip, one highlighted
  word. Never a background or a second button.
- **The ō mark:** never close the ring, no glows/bevels on it. Soft shadows only, and only on cards/CTAs.
- Gradient is for emphasis (hero words, big numbers, the mark) — not body text or large fills.
