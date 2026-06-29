# Deploy — Koken Labs website

Static HTML/CSS/JS site. Root is this `website/` folder (entry `index.html`).
No build step required.

## Status
- Host: Vercel (intended)
- Git repo: _not set up yet_
- Token: _not provided_
- Production URL: _TBD_ (custom domain target: kokenlabs.ai)

## Fastest path to live (run locally, you're authenticated)
From this folder on your machine:

```bash
cd "Koken Labs/website"
npx vercel --prod
```

First run links/creates the Vercel project; subsequent `npx vercel --prod`
re-deploys. Point the `kokenlabs.ai` domain at the project in the Vercel
dashboard once it's live.

## Path for sandbox deploys (so Claude can deploy + verify)
Provide a Vercel access token (Vercel → Account Settings → Tokens). With it,
Claude can run `npx vercel --prod --token <TOKEN> --yes` from the sandbox and
verify the deployment reaches READY. Treat the token as a secret.

## Pre-push check
`python3 <publish-live skill>/scripts/check_static.py index.html`
Note: it flags `application/ld+json` blocks as JS errors — that's a false
positive; JSON-LD here is valid JSON.
