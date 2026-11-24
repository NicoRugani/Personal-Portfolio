# Nicholas Rugani — Portfolio

A personal portfolio built with React and Vite, published with GitHub Pages at
**https://nicorugani.github.io/Personal-Portfolio/**

The site covers three featured projects, two of them as full case studies, alongside an
about page and a contact form.

## Run locally

Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

Vite prints the local URL. It includes the `/Personal-Portfolio/` base path, so
`http://127.0.0.1:5173/` on its own will 404; that is expected.

```sh
npm run lint       # eslint; this also gates the deploy
npm run build      # production build into dist/
npm run preview    # serve the build at http://127.0.0.1:4173/Personal-Portfolio/
npm run format     # prettier
```

## How it is put together

```
index.html                     the single entry point
src/
  main.jsx                     mounts React, sets the router basename
  App.jsx                      routes, plus redirects for the old .html URLs
  siteUrl.js                   base-path helper for links outside the router
  useScrollToTop.js            resets scroll between routes, handles #anchors
  usePageTitle.js              per-route document title
  styles.css                   all styling, tokens at the top
  pages/                       Home, Work, CaseStudy, About, Contact, NotFound
  components/                  SiteLayout, SiteHeader, ProjectCard, ContactForm
  data/                        projects.js, caseStudies.js, about.js
  assets/                      case study screenshots
vite.config.js                 base path and the 404.html fallback
```

Content lives in `src/data/` and the components render it, so adding a project or a case
study is a data change rather than a markup change. A project in `projects.js` gains a
"Read case study" link automatically once a matching slug exists in `caseStudies.js`.

## Two things to know before editing

**The base path.** The site is served from a project subpath, not a domain root. Vite
rewrites asset URLs at build time but never anchor `href`s. Internal links therefore go
through react-router `<Link>`, which applies the router basename. A bare `href="/about"`
will build, lint and deploy cleanly, then 404 for real visitors. This check must print
nothing:

```sh
grep -rnE 'href="/[a-z]|href="/"' src/ index.html | grep -v 'rel="icon"'
```

The `rel="icon"` line is excluded because Vite *does* rewrite asset `href`s on `<link>`
tags. Only anchor hrefs are the hazard.

**The 404 fallback.** GitHub Pages has no server-side rewrite, so a request for a route
like `/work/planit` matches no file. A Vite plugin copies `dist/index.html` to
`dist/404.html` at build time, which Pages serves for unmatched paths, letting React
resolve the real route. Those URLs return a 404 status while rendering the right page.

## Deploy

`.github/workflows/deploy.yml` runs on every push to `main`: install, lint, build, then
publish `dist/` to Pages. Lint failures block the deploy. `dist/` is gitignored and must
never be committed.
