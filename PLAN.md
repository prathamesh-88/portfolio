# Static portfolio rewrite

## Phase 1 — Content and structure (implemented)
- Use user-confirmed CoinDCX, Edra Labs, and Wingify contributions.
- Homepage: introduction, selected work, experience, recognition, writing, contact.
- Five work pages: futures isolation, exchange market data, RAG-backed scraping, Edra product engineering and leadership, and VWO integrations. Four technical cases are selected on the homepage.
- Use Problem → Constraints → Architecture → Decisions → Execution → Impact without invented metrics, dates, protocols, or rollout claims.

## Phase 2 — Visual implementation (implemented; browser QA passed)
- Buildless semantic HTML and shared responsive CSS.
- Warm neutral background, green accent, readable typography, and compact identity. The portrait was removed in the typography refinement below.
- Core content and navigation work without JavaScript. Optional JavaScript provides persistent System, Light, and Dark appearance selection.

## Phase 3 — Work depth (expanded with owner notes and résumé evidence)
- [x] Expand futures isolation with its business context, Rails code boundary, separate EKS cluster, and development-loop improvements.
- [x] Use the owner-confirmed résumé figures: full unit tests from 40 to 10 minutes; component boot time from 3 minutes to 25 seconds.
- [x] Add exchange market-data module ownership, service coordination, and the limited scope of the OMS contribution.
- [x] Add a dedicated scraping case covering RAG-based page indexing, Qdrant, and the OEM-website comparison of roughly 2 days to 2 hours. Do not publish an unverified efficiency percentage.
- [x] Separate Edra product engineering and leadership from the scraping architecture; use engineering-team growth from 7 to 45+.
- [x] Name VWO integrations and tie the 45+ lead figure specifically to Google Tag Manager onboarding.
- [x] Use résumé titles, month/year employment dates, and 2026 award year; link the supplied PDF from navigation and the hero.
- [ ] Confirm futures coupling details, inter-service communication, migration safeguards, and rollback execution before describing them.
- [ ] Confirm exchange module responsibilities, technical trade-offs, protocols, and any measured reliability or latency outcomes before adding architectural claims.
- [ ] Confirm scraping chunking, retrieval evaluation, index maintenance, and failure-handling details before expanding the retrieval diagram.
- [ ] Add publication after confirming the paper URL.

## Phase 4 — Validation and release (initial QA complete; production deployed)
- [x] Initial Chrome QA: homepage, original three work pages, and 404 at 320, 390, 768, and 1440px. No horizontal overflow; one h1 per page; no browser errors.
- [x] Repeat Chrome QA for all seven pages at 320, 390, 768, and 1440px: 84 viewport/theme checks across Light, Dark, and JavaScript-disabled views. No horizontal overflow or browser errors. Verified PDF download, persistent/system themes, and keyboard skip navigation; reviewed desktop/mobile screenshots.
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
- The static rewrite originated on an orphan branch and now lives on master in the main portfolio directory.
- Deployable static files live in public/; repository metadata, documentation, and checks stay at the root. No package installation or build process is required.
- The old Next.js code is not part of the static deployment.

## Typography refinement
- Removed the profile photo and rebalanced the hero as one column.
- Unified headings and body around a sans-serif stack; removed the serif italic accent.
- Increased heading weights and small-label sizes; strengthened secondary text in both themes.

## GitHub and continuous deployment preparation

- [x] Isolate deployable files in public/ and update the Vercel output directory.
- [x] Ignore local environment files, Vercel state, and generated caches.
- [x] Add offline site validation, regression tests, and read-only GitHub Actions checks.
- [x] Document the existing-project CD setup without requiring Vercel API secrets.
- [x] Push the static rewrite to GitHub as master and verify GitHub Actions checks.
- [x] Configure Vercel production branch tracking for master and verify a Git-sourced production deployment.
- [x] Add regression checks for six-section case studies and résumé downloads.
