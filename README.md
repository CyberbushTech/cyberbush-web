# Cyberbush website

Static marketing site for Cyberbush (eVTOL aircraft). Built with Next.js (App
Router) and exported to fully static HTML for hosting on GitHub Pages.

## Internationalization

The site is bilingual. Instead of runtime locale routing, the language is fixed
**at build time** and each language is deployed to its own domain:

| Locale | Domain          | Build env                  |
| ------ | --------------- | -------------------------- |
| en     | cyberbush.tech  | `NEXT_PUBLIC_SITE_LOCALE=en` |
| ru     | cyberbush.ru    | `NEXT_PUBLIC_SITE_LOCALE=ru` |

Translations live in `app/dictionaries/{en,ru}.ts`. `app/site-config.ts` holds
the locale list and per-language domains. The language switcher in the navbar
links across domains, preserving the current path; SEO `hreflang` alternates are
emitted from `app/layout.tsx`.

## Local development

```bash
npm install
NEXT_PUBLIC_SITE_LOCALE=en npm run dev   # or ru
```

Open http://localhost:3000.

## Static build

```bash
NEXT_PUBLIC_SITE_LOCALE=en npm run build   # outputs ./out
```

`next.config.mjs` sets `output: "export"`, `trailingSlash: true`, and
`images.unoptimized` so the result is a plain static bundle.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
twice (en/ru) and publishes each build to a separate GitHub Pages repository.

Required repository configuration (Settings → Secrets and variables → Actions):

- Variables: `PAGES_ORG`, `PAGES_REPO_EN`, `PAGES_REPO_RU`
- Secret: `DEPLOY_TOKEN` (PAT with write access to the target repos)

Each target repo must have GitHub Pages enabled (branch `gh-pages`) with its
custom domain set. The workflow writes the `CNAME` and `.nojekyll` files.
