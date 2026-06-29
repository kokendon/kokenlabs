# Deploy — Koken Labs website

Static HTML/CSS/JS site. Repo root is this `website/` folder (entry `index.html`).
No build step. Auto-deploys to Vercel on push to `master`.

## Config (verified)
- GitHub repo: `kokendon/kokenlabs`  (public)
- Branch / production: `master`
- Vercel project: `kokenlabs`  (id `prj_OKmBlc0EexO2UrOb6ZNZgfEs9xJi`)
- Vercel team: `kokendons-projects`  (id `team_87GnWfgdmmckj2kizcq8qS3I`)
- Required commit-author email: `tarwaterdon@gmail.com`  (matches connected GitHub identity — deploys OK)
- Live (Vercel): https://kokenlabs-git-master-kokendons-projects.vercel.app
  - Currently behind Vercel **Deployment Protection** — disable to make public (see below).
- Custom domain target: kokenlabs.ai (not yet attached)

## How Claude deploys (autonomous)
1. Verify: `python3 <publish-live skill>/scripts/check_static.py index.html`
   (the `application/ld+json` "error" is a false positive — JSON-LD is valid JSON).
2. Clear FUSE locks, then commit as the required author:
   `git -c user.email="tarwaterdon@gmail.com" -c user.name="Koken Labs" commit -m "…"`
3. Push with the gitignored token:
   `set -a && source .env.local && set +a`
   `git push "https://x-access-token:${GITHUB_TOKEN}@github.com/kokendon/kokenlabs.git" master`
   (always redact the token in surfaced logs)
4. Verify deploy READY/production via Vercel MCP `list_deployments`
   (project + team IDs above), matching the pushed commit SHA.

## Make the site public (user action — security setting)
Vercel → Project `kokenlabs` → Settings → Deployment Protection →
turn OFF "Vercel Authentication" (and Preview protection if you want branch URLs open).
Then add `kokenlabs.ai` under Settings → Domains and point DNS as instructed.
