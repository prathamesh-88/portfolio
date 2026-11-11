# Graph Report - portfolio  (2026-08-22)

## Corpus Check
- 44 files · ~55,319 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 171 nodes · 198 edges · 25 communities (10 shown, 15 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Runtime Dependencies
- TypeScript Configuration
- Articles and Home Page
- Project Components
- Shared Site Shell
- Developer Tooling
- Package Scripts
- Build References
- Analytics Setup
- Lint Configuration
- Caching Visuals
- Git Hook
- Brand Marks
- Profile Identity
- Dev.to Icon
- Email Icon
- Instagram Icon
- Lightbulb Icon
- LinkedIn Icon
- Medium Icon
- Twitter Icon
- Project Placeholder
- GitHub Profile
- LinkedIn Profile

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 19 edges
2. `scripts` - 6 edges
3. `getBlogPosts()` - 6 edges
4. `getProjects()` - 6 edges
5. `Project` - 5 edges
6. `Layout()` - 4 edges
7. `lib` - 4 edges
8. `include` - 4 edges
9. `Article` - 4 edges
10. `Articles()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `ProjectProps` --references--> `Project`  [EXTRACTED]
  components/project.tsx → types.ts
- `getStaticProps()` --calls--> `getBlogPosts()`  [EXTRACTED]
  pages/articles.tsx → utility/posts.ts
- `getStaticProps()` --calls--> `getProjects()`  [EXTRACTED]
  pages/index.tsx → utility/projects.ts
- `ProjectsProps` --references--> `Project`  [EXTRACTED]
  pages/projects.tsx → types.ts
- `getStaticProps()` --calls--> `getProjects()`  [EXTRACTED]
  pages/projects.tsx → utility/projects.ts

## Import Cycles
- None detected.

## Communities (25 total, 15 thin omitted)

### Community 0 - "Runtime Dependencies"
Cohesion: 0.05
Nodes (41): @chakra-ui/icons, @chakra-ui/next-js, @chakra-ui/react, date-fns, @emotion/react, @emotion/styled, eslint, eslint-config-next (+33 more)

### Community 1 - "TypeScript Configuration"
Cohesion: 0.09
Nodes (22): dom, dom.iterable, esnext, compilerOptions, allowJs, baseUrl, declaration, esModuleInterop (+14 more)

### Community 2 - "Articles and Home Page"
Cohesion: 0.18
Nodes (11): Articles(), Date(), ArticlesProps, getStaticProps(), getStaticProps(), robotoCondensed, Article, ArticlesProps (+3 more)

### Community 3 - "Project Components"
Cohesion: 0.20
Nodes (12): ProjectComponent(), ProjectProps, Projects(), getStaticProps(), ProjectsProps, HomeProps, Project, ProjectsProps (+4 more)

### Community 4 - "Shared Site Shell"
Cohesion: 0.16
Nodes (9): Footer(), globalFont, Layout(), siteTitle, Links, LinksList, Props, Simple() (+1 more)

### Community 5 - "Developer Tooling"
Cohesion: 0.18
Nodes (11): husky, lint-staged, devDependencies, husky, lint-staged, prettier, @types/gtag.js, @types/unist (+3 more)

### Community 6 - "Package Scripts"
Cohesion: 0.20
Nodes (9): name, private, scripts, build, dev, lint, prepare, start (+1 more)

### Community 7 - "Build References"
Cohesion: 0.29
Nodes (6): next-env.d.ts, node_modules, **/*.ts, **/*.tsx, exclude, include

### Community 10 - "Caching Visuals"
Cohesion: 0.67
Nodes (3): Cache-aside pattern, Read-through cache application, Write-through caching

## Knowledge Gaps
- **82 isolated node(s):** `extends`, `next/core-web-vitals`, `globalFont`, `Props`, `Links` (+77 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Runtime Dependencies` to `Package Scripts`?**
  _High betweenness centrality (0.111) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Developer Tooling` to `Package Scripts`?**
  _High betweenness centrality (0.038) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `TypeScript Configuration` to `Build References`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **What connects `extends`, `next/core-web-vitals`, `globalFont` to the rest of the system?**
  _82 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Runtime Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.04878048780487805 - nodes in this community are weakly interconnected._
- **Should `TypeScript Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._