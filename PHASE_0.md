# Phase 0 — Baseline and Content Brief

Completed on 2026-08-22 as the first step of `IMPROVEMENT.md`.

## Baseline verification

### Dependencies

Installed with the existing `yarn.lock` using:

```sh
yarn install --frozen-lockfile
```

No dependency or lockfile changes were made.

### Lint

```sh
yarn lint
```

**Result: passed.** No ESLint warnings or errors were reported.

### Production build

```sh
yarn build
```

**Result: blocked by the build environment.** The source compiled until Next.js attempted to download these Google Fonts through `@next/font`:

- `Inconsolata` in `components/layouts/commonLayout.tsx`
- `Roboto Condensed` in `pages/index.tsx`

The current environment could not fetch Google Fonts, so Next.js ended the build with webpack errors. This is not a lint or TypeScript failure. The redesign should either be verified in an environment with font-network access or migrated to locally hosted font assets before release verification.

Additional non-blocking warning: the local Browserslist data is outdated.

## Draft product decisions

These are working assumptions based on the current site copy and project data. Confirm or revise them before Phase 3 implementation.

| Decision | Draft |
| --- | --- |
| Primary audience | Engineering hiring managers and teams looking for a backend-focused engineer. |
| Primary outcome | Start a conversation through email or professional profile links. |
| Secondary outcome | Review selected projects and technical writing. |
| Portfolio position | Backend engineer focused on scalable, reliable, data-intensive systems. |
| Articles | Retain as secondary navigation and supporting evidence, not the primary home-page action. |

## Draft home-page content

### Positioning statement

> Backend engineer building scalable, reliable systems for products with real operational demands.

### Supporting copy

> Prathamesh Tamanekar is a software engineer with experience across backend development, high-traffic systems, and data-intensive applications. His primary tools include Go, Python, TypeScript, and Solidity.

### Calls to action

- **View selected projects** → `#projects` or `/projects`
- **Get in touch** → `mailto:prathamt3108@gmail.com`

### Supporting experience points

- Founding Software Engineer at Edra Labs.
- Previously contributed to products at Wingify and VWO.
- Interested in web development, machine learning, and blockchain technologies.

These statements are drawn from the current home-page copy and must be confirmed as current before publishing.

## Selected projects for the redesign

Use these projects as the initial featured-work set. The descriptions below are content-ready but should be expanded with measurable outcomes or technical decisions where available.

| Project | Current evidence | Draft card focus |
| --- | --- | --- |
| Image Compression Using GANs | Generative-adversarial image-compression project | Explain the compression approach, quality trade-offs, and model evaluation. |
| Laptop Recommender | NLP recommender built with Streamlit and spaCy | Emphasize recommendation inputs, NLP workflow, and user-facing interface. |
| Micro GAN | Demonstration of GAN-generated images | Present it as a focused generative-model experiment with clear learning goals. |
| Undefeatable Tic Tac Toe | Minimax-based game | Demonstrate algorithmic reasoning and a polished interactive result. |
| YelpCamp | Full-stack Node.js campground application | Highlight application architecture, user flows, and backend responsibilities. |

## Phase 0 exit status

- [x] Dependencies installed from the existing lockfile.
- [x] Lint baseline completed successfully.
- [x] Production build attempted and failure recorded.
- [x] Draft audience, outcome, content, and selected projects prepared.
- [ ] Confirm that roles, employers, technology preferences, and contact links are current.
- [ ] Decide whether to allow remote Google Font fetching in release verification or move to local fonts.
