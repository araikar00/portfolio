# Aryan Raikar — Portfolio

Personal portfolio site for Software Engineer / ML-adjacent roles. Built with **Astro**, deployed on **Vercel**.

## Local development

```bash
export PATH="$HOME/.local/node/bin:$PATH"   # if Node was installed to ~/.local/node
npm install
npm run dev
```

## Update your content

Edit typed data files under `src/data/`:

| File | What to update |
|------|----------------|
| `site.ts` | Name, headline, email, LinkedIn, GitHub |
| `projects.ts` | Selected work |
| `experience.ts` | Jobs / internships |
| `education.ts` | School and coursework |
| `skills.ts` | Skill groups |
| `interests.ts` | Short interest list |

Replace `public/resume.pdf` with your real resume (keep the same filename).

## Live site

- Portfolio: [https://aryanraikar.vercel.app](https://aryanraikar.vercel.app)
- Resume PDF: [https://aryanraikar.vercel.app/resume.pdf](https://aryanraikar.vercel.app/resume.pdf)

Redeploy after content changes:

```bash
export PATH="$HOME/.local/node/bin:$PATH"
npm run build
vercel --prod --yes
```

## Custom domain

1. Buy a domain (Cloudflare Registrar, Namecheap, Google Domains/Squarespace, etc.) — e.g. `aryanraikar.dev`
2. In Vercel → Project `aryanraikar` → **Settings → Domains** → add the domain
3. Point DNS as Vercel instructs (usually an `A` record to `76.76.21.21` or their nameservers)
4. Wait for HTTPS to provision, then update `site` in `astro.config.mjs` and the sitemap URL in `public/robots.txt`
5. Redeploy

## GitHub (optional but recommended)

```bash
export PATH="$HOME/.local/bin:$HOME/.local/node/bin:$PATH"
gh auth login
gh repo create portfolio --public --source=. --remote=origin --push
vercel git connect   # or link the repo in the Vercel dashboard for auto-deploys
```

## Scripts

- `npm run dev` — local server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build
