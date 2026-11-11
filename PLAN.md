# Static portfolio rewrite

## Phase 1 — Content and structure (implemented)
- Use user-confirmed CoinDCX, Edra Labs, and Wingify contributions.
- Homepage: introduction, selected work, experience, recognition, writing, contact.
- Three dedicated work overviews. No invented metrics, dates, or migration outcomes.

## Phase 2 — Visual implementation (implemented; browser QA passed)
- Buildless semantic HTML and shared responsive CSS.
- Warm neutral background, green accent, readable typography, and compact identity. The portrait was removed in the typography refinement below.
- Core content and navigation work without JavaScript. Optional JavaScript provides persistent System, Light, and Dark appearance selection.

## Phase 3 — Work depth (initial overviews implemented; editorial follow-up)
- Add verified tradeoffs, rollout steps, and outcomes to Futures overview.
- Add representative service/process examples at Edra.
- Add named integrations and supported customer evidence at Wingify.
- Confirm exact role dates, award date, and scope of Edra team growth.
- Add publication after confirming paper URL; add updated resume after content review.

## Phase 4 — Validation and release (initial QA complete; production deployed)
- [x] Chrome: homepage, three work pages, and 404 at 320, 390, 768, and 1440px. No horizontal overflow; one h1 per page; no browser errors.
- [x] Internal navigation and keyboard skip link checked. Desktop/mobile screenshots visually reviewed.
- [x] Article links resolved through public DEV API and embedded statically.
- Confirm recognition permalink before release.
- [x] Redirected old /articles and /projects routes to homepage writing and work sections; verified on production.
- [x] Add sitemap and robots.
- [x] Added SVG and multi-size ICO favicons, 1200×630 social PNG, and Open Graph/Twitter image metadata across every page.
- [x] Removed unused portrait asset after photo removal.
- [ ] Complete contrast audit and keyboard review beyond skip navigation.
- [x] Deployed public files to the existing Vercel project on 2026-11-10; verified https://prathamesh.online and the existing Vercel hostname. See README.md for deployment IDs and Git-based update caveats.

## Decisions
- Source lives on orphan branch rewrite/static-html in portfolio-static worktree.
- Deployable static files live in public/; repository metadata, documentation, and checks stay at the root. No package installation or build process is required.
- Existing Next.js worktree remains untouched.

## Typography refinement
- Removed the profile photo and rebalanced the hero as one column.
- Unified headings and body around a sans-serif stack; removed the serif italic accent.
- Increased heading weights and small-label sizes; strengthened secondary text in both themes.

## GitHub and continuous deployment preparation

- [x] Isolate deployable files in public/ and update the Vercel output directory.
- [x] Ignore local environment files, Vercel state, and generated caches.
- [x] Add offline site validation, regression tests, and read-only GitHub Actions checks.
- [x] Document the existing-project CD setup without requiring Vercel API secrets.
- [ ] Push rewrite/static-html to GitHub and review its Preview deployment and Actions checks.
- [ ] Change Vercel production branch tracking to rewrite/static-html and verify a Git-sourced production deployment.
