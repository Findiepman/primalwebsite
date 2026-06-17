# PrimalMines Website

Single-file React landing page and guides hub for the PrimalMines Minecraft server.

## Files
- `index.html` — the entire site. React, Tailwind and all content are inlined. No build step.

## Deploy to GitHub Pages
1. Create a public GitHub repo named `primalmines-site` (or `<username>.github.io` if you want it at the root domain).
2. Push `index.html` to the repo root.
3. Repo Settings → Pages → Source: `Deploy from a branch` → Branch: `main` → Folder: `/ (root)` → Save.
4. Wait a minute. The site goes live at `https://<username>.github.io/primalmines-site/`.

## Point your domain
1. Porkbun → DNS for `primalmines.net`.
2. Add a CNAME record:
   - Host: `www` (or whatever subdomain you want)
   - Answer: `<username>.github.io`
3. In the GitHub repo → Settings → Pages → Custom domain: enter `www.primalmines.net`. GitHub generates a free SSL cert in a few minutes.
4. Add a `CNAME` file at the repo root containing just `www.primalmines.net`.

## Editing
Everything lives in `index.html`. Search for `GUIDE_CATEGORIES` and `GUIDES` to edit the sidebar and the guide content. The Tailwind config and custom CSS sit at the top of the file.

## Color theme
Primary brand color is `#4AE34A`. The full palette is defined in the Tailwind config block near the top of `index.html` under `colors.primal`.
