# Koken Labs — website (kokendon/kokenlabs)

> ## ⚠️ ORPHANED — this repo does not deploy
> **kokenlabs.ai is served from `website-v2/` on Cloudflare Workers, not from here.** The domain
> moved 2026-08-24 and the Vercel project is **paused**. Pushing to `main` commits source and
> publishes nothing. Do not wait for, or verify, a deployment.
> To change the live site, work in `Koken Labs/website-v2/` and deploy with `npx wrangler`.

Former static marketing site, no build step. Repo root = this folder; entry `index.html`
(pages: index / services / about / learn / contact + styles.css, site.js, hero-fx.js, assets/,
sitemap.xml, robots.txt, vercel.json). Brand voice: "From chaos to clarity" — plain-English,
reassurance-first, anti-hype. **See `DEPLOY.md` for current status and what this repo is still for.**

## What is still live here
`design-system/` is the source of truth for the Claude Design project
`7deb0bf7-b605-4482-8c70-347001a41a09` via `/design-sync` (see `.design-sync/NOTES.md`).
Edit and commit it normally — just don't expect a website deploy.

## Committing (no deploy)
- Branch: `main`. `git push origin main` — source control only, nothing goes live.
- **Required commit-author email: `tarwaterdon@gmail.com`** (matches the connected GitHub
  identity). Commit like:
  `git -c user.email=tarwaterdon@gmail.com -c user.name="Koken Labs" commit -m "..."`
- **Skip every Vercel step.** The project (`prj_OKmBlc0EexO2UrOb6ZNZgfEs9xJi`, team
  `team_87GnWfgdmmckj2kizcq8qS3I`) is paused, so `list_deployments` will not show your commit
  and the empty-commit "nudge the webhook" trick has nothing to nudge. Pre-cutover procedure is
  archived in `DEPLOY.md`.

## Pushing to this repo — environment matters
- **Claude Code session scoped to `kokendon/kokenlabs`: push is native.** The Claude GitHub app has
  write access, so `git push origin main` just works — no token, no proxy. THIS is the way to let
  Claude deploy autonomously. (Ensure the Claude GitHub app has Contents: read & write on this repo.)
- **Cowork cloud sandbox / sessions NOT scoped to this repo: pushing is BLOCKED.** The sandbox git
  proxy returns 403 "not in this session's authorized repository set" and refuses to inject a
  credential even if you supply a token in the URL. `device_bash` has no network either. Workarounds:
  add this repo under **Sources** in the code.claude.com console, or push from Don's Mac
  (`git fetch origin main && git checkout -B main origin/main && git add … && git commit && git push origin main`).

## Social bio-link redirects (`vercel.json`)
Clean short paths that 307-redirect to the homepage carrying a `utm_source`, so a bio field can show
`kokenlabs.ai/linkedin` instead of a raw `?utm_...` string (identical attribution). Paths:
`/linkedin`, `/linkedin-don`, `/linkedin-steve`, `/x`, `/x-don`, `/x-steve`, `/youtube`, `/instagram`,
`/tiktok`, `/threads`, `/bluesky`, `/facebook`, `/github` (all `utm_medium=social`), and `/newsletter`
(`utm_medium=email`); all `utm_campaign=launch`. ⚠️ These shipped with the Vercel deploy — **verify where they resolve now**
before relying on them; editing `redirects` here no longer changes anything live. Canonical list also mirrored in the Koken Labs project
folder at `social/utm-links.md`.
