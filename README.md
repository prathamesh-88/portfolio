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

GitHub Actions runs these commands with read-only repository permissions. Checks cover internal links and anchors, heading counts, required metadata, sitemap coverage, deployment configuration, and JavaScript syntax. They do not replace browser, accessibility, or external-link checks.

## Enable continuous deployment

Use the existing Vercel Git integration; a separate GitHub deployment workflow and Vercel API secrets are not needed.

1. Push this branch to the existing GitHub repository:

   ```sh
   git push -u origin rewrite/static-html
   ```

2. In Vercel, confirm `personal-portfolio` is connected to `prathamesh-88/portfolio` with the repository root as its Root Directory. Do not set Root Directory to `public`; Vercel must read the root-level `vercel.json`.
3. Review the branch's Preview deployment and GitHub validation results. `vercel.json` selects no framework, skips build/install commands, and publishes only `public/`.
4. In **Settings → Environments → Production → Branch Tracking**, set the production branch to `rewrite/static-html`. Keep automatic production-domain assignment enabled.
5. Create a production deployment from that branch. Verify the homepage, all three work pages, `/articles/`, `/projects/`, and a missing URL on https://prathamesh.online.
6. Future pushes to `rewrite/static-html` will deploy to production. Other branches normally receive Preview deployments.

The GitHub workflow validates only; it does not deploy or gate Vercel's independent Git deployments. Require successful checks before merging updates into the production branch if a validation gate is needed.

This is an orphan branch with no shared history with the Next.js `main` branch. Deploy it directly; do not force-push or replace `main` to enable CD. No remote push or Vercel branch-tracking change was made during repository preparation.

## Production deployment

Deployed on 2026-11-10 to the existing Vercel project, `personal-portfolio`:

- Production: https://prathamesh.online
- Deployment: `dpl_26HFnRWd2jQAwYQfpGMaDwoNsLhL`
- Previous production deployment: `dpl_8R8jeQekEVuvFdE5N3AV44PVVWc5`
- Source: public files uploaded from this worktree through Vercel MCP, then deployed with the production target. No Git commit or push was performed.
- `vercel.json` disables framework builds and dependency installation, enables trailing slashes, and redirects the old articles and projects routes to their homepage sections. The initial manual deployment used files at the worktree root; subsequent Git deployments publish the identical site files from `public/`.
- The project's Node.js setting was updated from discontinued `18.x` to `24.x`. The framework preset remains unchanged; `vercel.json` overrides it for this static deployment.

Verified deployed HTML, CSS, JavaScript, favicons, social image, robots, and sitemap against local files. Also verified legacy redirects, the custom 404 page, and both production hostnames. Planning documents were excluded from the upload.

Git integration and production branch tracking were not changed. A future deployment from the existing production branch can replace this manual deployment. Follow the continuous deployment steps above before relying on Git-based updates.
