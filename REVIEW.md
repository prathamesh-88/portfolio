# Portfolio Review

## Graphify audit

Graphify has been added under `graphify-out/`.

- `graphify-out/graph.html` — interactive project map
- `graphify-out/GRAPH_REPORT.md` — audit report
- `graphify-out/graph.json` — raw graph data

The graph maps 171 nodes across 25 communities. The principal content path is:

`Home → getStaticProps → getBlogPosts/getProjects → article/project components`

The graph health check reports 37 dangling references. These are primarily external or type references rather than broken local source files.

## Interface review

The site needs a stronger redesign rather than small visual tweaks.

### Information hierarchy

The home page currently reads as a long, résumé-style bullet list. It lacks a clear hero statement, an obvious next action, and a quick way to scan the most important work.

Recommended direction:

1. Open with a concise engineering positioning statement.
2. Add clear “View projects” and “Get in touch” calls to action.
3. Surface selected projects with outcome-oriented descriptions.
4. Move supporting biography and experience detail below the initial pitch.

### Layout and responsiveness

The layout relies on rigid dimensions that are likely to behave poorly at intermediate viewport sizes:

- Navbar: `min-width: 1100px`
- Content container: `min-width: 750px`
- Main layout: `width: 60vw`

The sidebar profile image is visually disconnected from the opening narrative. A responsive layout should flow from one column on small screens to a balanced content-and-profile grid only where enough horizontal space is available.

### Visual design

The dark theme is a reasonable foundation, but the current visual system is too flat:

- All-caps headings with wide letter spacing compete with the body content.
- Spacing does not create enough separation between sections.
- Project cards offer limited hierarchy and visual differentiation.
- The profile image is treated as a standalone sidebar object rather than part of the hero.

Use a calmer type scale, more deliberate vertical rhythm, and project cards that make each project’s role, outcome, and technologies easy to scan.

### Accessibility and polish

- Replace empty image alt text where images convey information.
- Strengthen link and focus states.
- Remove the duplicate favicon declaration in the shared layout.
- Avoid justified body copy, which can create uneven spacing and reduce readability.

## Recommended implementation scope

Rebuild the home page around a concise hero, direct calls to action, a responsive layout, and outcome-driven project presentation. Preserve the existing dark palette while improving hierarchy, spacing, accessibility, and responsive behavior.
