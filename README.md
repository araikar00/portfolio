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

## Deploy

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com) (framework preset: Astro)
3. After deploy, add a custom domain under Project → Settings → Domains

Resume URL after deploy: `https://<your-domain>/resume.pdf`

## Scripts

- `npm run dev` — local server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build
