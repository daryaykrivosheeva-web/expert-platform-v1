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
5. No environment variables are required for a single-client deployment —
   the template has no backend. For multiple real clients deployed from
   this one repo, see "Multiple clients, one repo" below.

## Multiple clients, one repo

This repo now serves more than one real client (e.g. the psychologist and
the lawyer adaptations), each with their own domain and their own Vercel/
Netlify project. `src/config/site.config.ts` picks the active niche config
via the `NEXT_PUBLIC_SITE_CONFIG` environment variable:

1. Create a **separate Vercel/Netlify project** per client, all pointing at
   this same repo/branch (Root Directory still `Сайт`).
2. In that project's environment variables, set `NEXT_PUBLIC_SITE_CONFIG` to
   the client's config key — e.g. `lawyer` for `src/config/examples/lawyer.config.ts`.
3. Leave it unset for the original client (psychologist) — it's the default,
   so that project needs no env var and is never affected by new clients
   being added.

**Never change the default in `site.config.ts`** to point at a new client —
that would flip every deployment without an env var set (i.e. the original
client's production site) to the new client's content. Always add the new
client via a new env var on a new project instead.

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
