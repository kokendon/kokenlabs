# Deploy — Koken Labs website

> ## ⚠️ THIS REPO NO LONGER DEPLOYS ANYTHING
>
> **kokenlabs.ai is served from `website-v2/` on Cloudflare Workers, not from here.**
> The domain moved 2026-08-24; the Vercel project is **paused** and this repo is orphaned.
>
> **Pushing to `main` does not publish a site.** It commits source, nothing more.
> There is no deployment to verify afterwards.
>
> To change the live site, work in **`Koken Labs/website-v2/`** and deploy with
> `npx wrangler` from that directory.

Status recorded 2026-09-01. Earlier revisions of this file described a working
Vercel deploy; that was true until the cutover and is kept below as history.

---

## What this repo is still for

Not dead — just not a website any more. Two things here are live dependencies:

| Path | Still used by | Notes |
|---|---|---|
| `design-system/` | **Claude Design** via `/design-sync` | `tokens.css` + `components.css` are the source of truth for project `7deb0bf7-b605-4482-8c70-347001a41a09`. See `.design-sync/NOTES.md`. |
| `vercel.json` | historical | Held the `/linkedin`, `/x`, `/youtube` … UTM bio-link redirects. **Verify where those resolve now** — if they were part of the Vercel deploy, they moved or broke at cutover. Canonical list: `Koken Labs/social/utm-links.md`. |

So: commit changes here when you edit the design system. Just don't expect a deploy.

## Committing (still applies)

- **Commit-author email must be `tarwaterdon@gmail.com`** — matches the connected GitHub
  identity. Still worth honouring for consistent history:
  `git -c user.email="tarwaterdon@gmail.com" -c user.name="Koken Labs" commit -m "…"`
- Push normally: `git push origin main`.
- **Do not run the Vercel verification step.** The project is paused; `list_deployments`
  will not show a new deployment and waiting for one is chasing a deploy that won't happen.

## Open decision

The Vercel project (`kokenlabs`, `prj_OKmBlc0EexO2UrOb6ZNZgfEs9xJi`, team
`kokendons-projects` / `team_87GnWfgdmmckj2kizcq8qS3I`) is paused but **not deleted** —
deleting it is Don's call. Retire it whenever, once the `vercel.json` redirect question
above is settled.

---

## History — how this worked before the cutover

Kept for reference. **None of it is current.**

<details>
<summary>Pre-2026-08-24 Vercel deploy procedure</summary>

Static HTML/CSS/JS site, no build step, auto-deployed to Vercel on push.

- Branch / production: **`main`** — Vercel's production branch was `main`. Pushes to
  `master` only created PREVIEW deploys (target null) and never reached the live domain.
- Vercel project: `kokenlabs` (`prj_OKmBlc0EexO2UrOb6ZNZgfEs9xJi`),
  team `kokendons-projects` (`team_87GnWfgdmmckj2kizcq8qS3I`)
- Preview URL: `https://kokenlabs-git-master-kokendons-projects.vercel.app`
  (behind Vercel Deployment Protection)

How Claude deployed:
1. Verify: `python3 <publish-live skill>/scripts/check_static.py index.html`
   (the `application/ld+json` "error" is a false positive — JSON-LD is valid JSON).
2. Commit as the required author (see above).
3. Push with the gitignored token to `main`:
   `set -a && source .env.local && set +a`
   `git push "https://x-access-token:${GITHUB_TOKEN}@github.com/kokendon/kokenlabs.git" HEAD:main`
   (always redact the token in surfaced logs)
4. Verify deploy READY/production via Vercel MCP `list_deployments`, matching the pushed SHA.
5. If Vercel silently missed a push, an empty commit nudged the webhook:
   `git commit --allow-empty -m "Trigger deploy"`

Making it public was a manual step: Vercel → Project `kokenlabs` → Settings →
Deployment Protection → turn off "Vercel Authentication", then attach the domain
under Settings → Domains.

</details>
