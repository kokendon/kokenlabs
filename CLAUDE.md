# Koken Labs — website (kokendon/kokenlabs)

Static multi-page marketing site, no build step. Repo root = this folder; entry `index.html`
(pages: index / services / about / learn / contact + styles.css, site.js, hero-fx.js, assets/,
sitemap.xml, robots.txt, vercel.json). Brand voice: "From chaos to clarity" — plain-English,
reassurance-first, anti-hype. **Full deploy runbook + history lives in `DEPLOY.md` — read it first.**

## Deploy
- **Production branch is `main` (NOT `master`).** Push to `main` → Vercel auto-deploys to
  kokenlabs.ai. Pushes to `master` only create throwaway preview deploys that never reach the domain.
- **Required commit-author email: `tarwaterdon@gmail.com`** (matches the connected GitHub identity;
  other authors can get deploys blocked). Commit like:
  `git -c user.email=tarwaterdon@gmail.com -c user.name="Koken Labs" commit -m "..."`
- Vercel project `kokenlabs` (`prj_OKmBlc0EexO2UrOb6ZNZgfEs9xJi`), team `kokendons-projects`
  (`team_87GnWfgdmmckj2kizcq8qS3I`). After pushing, confirm the new deployment reaches
  `READY` / target `production` (Vercel dashboard or MCP `list_deployments`) matching your commit SHA.
- If Vercel silently misses a push, an empty commit `git commit --allow-empty -m "Trigger deploy"`
  nudges the webhook.

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
(`utm_medium=email`); all `utm_campaign=launch`. To add a platform: add a `{source,destination}` entry
to the `redirects` array and push to `main`. Canonical list also mirrored in the Koken Labs project
folder at `social/utm-links.md`.
