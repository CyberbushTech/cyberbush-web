# Cyberbush website

Static marketing site for Cyberbush (eVTOL aircraft). Next.js (App Router)
exported to static HTML and hosted on GitHub Pages at **cyberbush.info**.

## Internationalization

Bilingual (English / Russian) as sub-paths on one domain:

- `cyberbush.info/en/…` — English
- `cyberbush.info/ru/…` — Russian
- `cyberbush.info/` — redirects to the visitor's language (default `/en`)

Routes live under `app/[lang]/`. The `[lang]` layout is the root layout
(`generateStaticParams` builds `en` and `ru`). Translations are in
`app/dictionaries/{en,ru}.ts`; the active locale reaches client components via
`app/i18n/locale-context.tsx` (`useLocalizations()` / `useLocale()`). Internal
links are locale-prefixed with `localePath()`. The language switcher in the
navbar swaps the locale prefix, preserving the current path.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000  (redirects to /en)
```

## Static build

```bash
npm run build      # outputs ./out (both locales + root redirect)
npx http-server out   # or: python3 -m http.server 3000 --directory out
```

`next.config.mjs` sets `output: "export"`, `trailingSlash: true`, and
`images.unoptimized`. `scripts/root-redirect.mjs` writes `out/index.html`.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`: one build, published to
this repo's own GitHub Pages via the native `deploy-pages` action (no secrets).
The custom domain `cyberbush.info` is configured in the repo's Pages settings;
DNS must point the apex at GitHub Pages (A `185.199.108–111.153`, AAAA
`2606:50c0:8000–8003::153`).
