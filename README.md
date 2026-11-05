# Albert Sanjay Dansoh — Portfolio

React + Vite portfolio, styled with the Arrivo signature palette
(Midnight Black `#101820`, Champagne Gold `#C5A46D`, Warm Ivory `#F5F3EF`, Slate Grey `#46545C`).

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Edit content
All text, projects, experience and skills live in **`src/data.js`**.
- Add a LinkedIn URL → `profile.linkedin`
- Offer a CV download → put the PDF in `public/` and set `profile.cv` to its file name
- Use a real screenshot for a project → put the image in `public/` and add `image: './your-file.png'` to that project
- The "On GitHub" section loads your latest public repos live from the GitHub API.

## Deploy to GitHub Pages

**Option A — GitHub Actions (recommended)**
1. Create a repo on GitHub (e.g. `albert-portfolio`, or `albert-sanjay.github.io` for a root URL).
2. Push this folder to the `main` branch:
   ```bash
   git init && git add . && git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/albert-sanjay/albert-portfolio.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source: GitHub Actions**.
   Every push to `main` now builds and deploys automatically (`.github/workflows/deploy.yml`).

**Option B — one command**
```bash
npm run deploy     # builds and pushes dist/ to a gh-pages branch
```
Then set **Settings → Pages → Source: Deploy from a branch → `gh-pages`**.

Your site will be at `https://albert-sanjay.github.io/albert-portfolio/`
(or `https://albert-sanjay.github.io/` if the repo is named `albert-sanjay.github.io`).
Asset paths are relative (`base: './'`), so it works under either URL without changes.
If you use a different repo name, update `homepage` in `package.json`.
