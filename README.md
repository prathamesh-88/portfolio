# Prathamesh Tamanekar — static portfolio

Buildless HTML and CSS. All content works without JavaScript.

Preview from this directory:

```sh
python3 -m http.server 3001 --bind 127.0.0.1 --directory public
```

Open http://localhost:3001. All deployable files live in `public/`; documentation, tests, and tooling stay outside the published directory. Configure other static hosts to serve directory index files and `404.html`. The Python preview server does not apply Vercel redirects or the custom 404 page. Review PLAN.md for remaining content and accessibility checks.

Appearance supports System (default), Light, and Dark. The selection is saved locally and shared across pages. Without JavaScript, the site follows the OS preference.

## Repository layout

- `public/` — HTML pages, shared CSS/JavaScript, images, favicons, robots, and sitemap.
- `vercel.json` — static hosting settings and legacy-route redirects.
- `scripts/check_site.py` — dependency-free site checks.
- `tests/` — regression tests for the site checker.
- `.github/workflows/validate.yml` — GitHub Actions validation on pushes and pull requests.
- `PLAN.md` — content, design, and accessibility follow-up.

## Validation

Use Python 3.10+ and Node.js 24. No package installation or compilation is required.

```sh
python3 -m unittest discover -s tests -v
python3 scripts/check_site.py
node --check public/assets/theme.js
```

GitHub Actions runs these commands with read-only repository permissions. Checks cover internal links and anchors, heading counts, six-section case studies, résumé download links and the PDF header, required metadata, sitemap coverage, deployment configuration, and JavaScript syntax. They do not replace browser, accessibility, or external-link checks.

## Continuous deployment

The existing Vercel Git integration deploys `master` to production. A separate GitHub deployment workflow and Vercel API secrets are not needed. The project uses the repository root, publishes only `public/`, skips build/install commands, and automatically assigns the production domains.

1. Validate changes locally, then push the deployment branch:

   ```sh
   git push origin master
   ```

2. Check GitHub validation results and the Vercel production deployment. Other branches normally receive Preview deployments.
3. Verify the homepage, work pages, résumé PDF, `/articles/`, `/projects/`, and a missing URL on https://prathamesh.online.

The existing project is `personal-portfolio`, connected to `prathamesh-88/portfolio`. If recreating its configuration, select `master` under **Settings → Environments → Production → Branch Tracking** and enable automatic production-domain assignment. Do not set Root Directory to `public`; Vercel must read the root-level `vercel.json`.

The GitHub workflow validates only; it does not deploy or gate Vercel's independent Git deployments. Require successful checks before merging updates into the production branch if a validation gate is needed.

The rewrite has no shared history with the old Next.js `main` branch. It is now checked out as `master` in the main repository directory. Do not force-push or replace `main` to update the static site.

## Content evidence

The supplied `public/assets/resume.pdf` provides official role titles, employment dates, and project outcomes. Owner notes provide the futures business context, market-data ownership, and RAG/Qdrant retrieval approach. The owner selected the résumé figures where earlier futures timing estimates differed.

Case studies distinguish implemented work from conceptual ownership diagrams. They do not invent exchange protocols, migration runbooks, performance guarantees, or scraping accuracy/cost results. `PLAN.md` records the remaining technical questions.

## Production deployment history

Git-sourced production deployment verified on 2026-11-11:

- Branch: `master`
- Commit: `b25fc31cce16f0cf1a01e5996fa0b2d230821c12`
- Deployment: `dpl_5qnRWeb1caGnjAEoNymrhxepBgzi`
- Production: https://prathamesh.online

The content expansion described above is not included in that historical deployment until committed and pushed.

Deployed on 2026-11-10 to the existing Vercel project, `personal-portfolio`:

- Production: https://prathamesh.online
- Deployment: `dpl_26HFnRWd2jQAwYQfpGMaDwoNsLhL`
- Previous production deployment: `dpl_8R8jeQekEVuvFdE5N3AV44PVVWc5`
- Source: public files uploaded from this worktree through Vercel MCP, then deployed with the production target. No Git commit or push was performed.
- `vercel.json` disables framework builds and dependency installation, enables trailing slashes, and redirects the old articles and projects routes to their homepage sections. The initial manual deployment used files at the worktree root; subsequent Git deployments publish the identical site files from `public/`.
- The project's Node.js setting was updated from discontinued `18.x` to `24.x`. The framework preset initially remained Next.js with a `vercel.json` override; the Git deployment setup later changed the project preset to Other and the output directory to `public`.

Verified deployed HTML, CSS, JavaScript, favicons, social image, robots, and sitemap against local files. Also verified legacy redirects, the custom 404 page, and both production hostnames. Planning documents were excluded from the upload.

The manual deployment was superseded by the Git-sourced master deployment above. Future pushes to master use the existing Vercel Git integration.
