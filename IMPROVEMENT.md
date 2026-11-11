# Portfolio Improvement Plan

This plan turns the findings in `REVIEW.md` into a low-risk, phase-wise redesign. Each phase should be completed and verified before moving to the next.

## Phase 0 — Baseline and content decisions

**Goal:** establish a dependable starting point and gather the copy needed for a focused portfolio.

1. Install project dependencies using the existing lockfile.
2. Run linting and a production build; record any existing failures before changing the interface.
3. Confirm the primary audience and desired outcome of the site (for example: hiring managers, potential clients, or collaborators).
4. Prepare concise copy for:
   - A one-sentence engineering positioning statement.
   - One supporting sentence on current focus and expertise.
   - Two primary calls to action: “View projects” and “Get in touch”.
   - Three to five selected projects, each with a role, outcome, and relevant technologies.
5. Decide whether articles remain a primary navigation item or become secondary content.

**Exit criteria:** the current site builds successfully and the replacement home-page content is available.

## Phase 1 — Design foundation

**Goal:** create a coherent visual system while retaining the existing dark direction.

1. Define reusable design tokens for background layers, text, muted text, accent, borders, radii, shadows, and spacing.
2. Introduce a calmer typography scale for eyebrow text, hero heading, section heading, card title, and body copy.
3. Reduce excessive uppercase styling and wide letter spacing; reserve them for short labels only.
4. Establish consistent section spacing and a readable maximum content width.
5. Add clear hover, keyboard-focus, and active states for links and buttons.

**Exit criteria:** shared styles make headings, paragraphs, cards, links, and buttons visually consistent without page-specific overrides.

## Phase 2 — Responsive shell and navigation

**Goal:** remove rigid constraints and make the site usable at every viewport width.

1. Replace `width: 60vw`, `min-width: 750px`, and the navbar’s `min-width: 1100px` with fluid width and max-width rules.
2. Use a responsive content grid that becomes a single column at smaller widths and only introduces a secondary profile column when there is enough space.
3. Keep the navigation compact on desktop and ensure the mobile menu has accessible labels, focus behavior, and clear open/close states.
4. Remove duplicated metadata declarations in the shared layout.
5. Check desktop, tablet, and mobile widths for horizontal scrolling and clipped content.

**Exit criteria:** no horizontal overflow occurs from 320px through large desktop widths, and navigation remains accessible with mouse and keyboard.

## Phase 3 — Home-page redesign

**Goal:** make the first screen communicate value quickly and direct visitors to meaningful actions.

1. Replace the résumé-style bullet list with a hero containing:
   - A compact identity label.
   - A clear positioning statement focused on backend engineering.
   - A short supporting paragraph.
   - “View projects” and “Get in touch” actions.
2. Integrate the profile image into the hero or an adjacent supporting panel rather than leaving it as an isolated sidebar.
3. Move detailed experience, previous companies, and technology preferences into a scannable “About” or “Experience” section below the hero.
4. Use semantic heading order and descriptive call-to-action labels.
5. Ensure the hero remains effective when the image is unavailable or hidden on small screens.

**Exit criteria:** within the first viewport, a visitor can identify the owner’s speciality, credibility, and next action without reading a long list.

## Phase 4 — Projects and article presentation

**Goal:** turn content lists into stronger evidence of engineering ability.

1. Redesign project cards to foreground title, problem or outcome, technologies, and external link affordance.
2. Replace the generic project placeholder where dedicated project imagery is available; otherwise use a consistent intentional fallback treatment.
3. Add a selected-projects section to the home page and keep the full project archive on its own page.
4. Apply the same spacing, typography, and metadata hierarchy to articles.
5. Confirm external links clearly indicate their destination and are safe (`rel="noreferrer"` is already present where relevant).

**Exit criteria:** projects can be scanned in seconds and each card communicates why it matters.

## Phase 5 — Accessibility and metadata polish

**Goal:** make the redesigned site inclusive, understandable, and shareable.

1. Replace empty `alt` attributes with descriptive text when an image conveys content; retain empty alt text only for truly decorative images.
2. Verify color contrast for normal and muted text, buttons, links, borders, and focus indicators.
3. Remove justified body copy in favor of left-aligned text.
4. Ensure all interactive elements can be reached, operated, and understood by keyboard.
5. Review page titles, descriptions, Open Graph fields, Twitter fields, canonical URL, and preview image for consistency with the redesigned content.

**Exit criteria:** accessibility checks identify no critical keyboard, contrast, semantic, or alternative-text issues.

## Phase 6 — Validation and release

**Goal:** ship a stable, visually verified result.

1. Run linting and a production build.
2. Test the homepage, projects, and articles at mobile, tablet, laptop, and large desktop widths.
3. Test the navigation, primary actions, project links, social links, and email action.
4. Perform a final content proofread and verify that all claims, roles, links, and project descriptions are current.
5. Update the Graphify graph with `graphify --update` after the redesign, then review any new relationships or warnings.

**Exit criteria:** build passes, key flows work on all target viewports, and the graph remains current.

## Suggested delivery order

Implement Phases 1–3 together as the first visible redesign milestone. Follow with Phase 4, then complete accessibility and release validation in Phases 5–6.
