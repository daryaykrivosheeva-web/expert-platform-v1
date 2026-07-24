# Deployment

## Vercel (recommended)

1. In the Vercel dashboard, **Add New → Project → Import Git Repository**
   and select this repo.
2. Set **Root Directory** to `Сайт` — the app lives in this subfolder, not
   the repo root (the repo root also holds `СРМ/`, `Онлайн-запись/`,
   `Клиенты/`, `Портфолио/`).
3. Vercel auto-detects Next.js via `vercel.json` — no build settings to
   change beyond the Root Directory.
4. Every push to a non-default branch (or every pull request) gets its own
   **Preview Deployment** URL automatically. Pushes to `main` deploy to
   **Production** automatically.
5. No environment variables are required — the template has no backend.

## Netlify

1. **Add new site → Import an existing project** and select this repo.
2. Set **Base directory** to `Сайт`.
3. `netlify.toml` is already configured with `@netlify/plugin-nextjs`, which
   gives full SSR support (not just static export).
4. Netlify creates **Deploy Previews** for pull requests and a **Production**
   deploy from `main` the same way Vercel does.

## Custom domain

Both platforms support adding a custom domain from their dashboard once the
first deployment succeeds — point the domain's DNS at the platform as
instructed there, then update `seo.siteUrl` in `src/config/site.config.ts`
to match and redeploy.

## Local production build (sanity check before deploying)

```bash
npm install
npm run build
npm run start
```
