# Custom domain checklist

Your site is already live at https://aryanraikar.vercel.app

To attach a personal domain (recommended for applications):

1. Register a domain — good options: `aryanraikar.dev`, `aryanraikar.com`, `raikar.dev`
2. Open Vercel → project **aryanraikar** → Settings → Domains → Add
3. Follow Vercel’s DNS instructions for your registrar
4. Update these files to the new origin, then redeploy:
   - `astro.config.mjs` → `site: 'https://yourdomain'`
   - `public/robots.txt` → Sitemap URL
5. Optional: connect GitHub for auto-deploys
   - Vercel Dashboard → Project → Settings → Git → Connect `araikar00/portfolio`
