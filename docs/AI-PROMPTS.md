# AI Prompts and Results

For each meaningful prompt, record:
- Date
- Tool used
- Task
- Prompt
- Files changed
- Result
- Errors and fixes

---

### Prompt 1: Reference Benchmarking & Design Decisions Specification
- **Date**: 2026-10-26
- **Tool Used**: `search_web`, `read_file`, `write_file`, `run_command`
- **Task**: Inspect 6 portfolio references, compare Manav Portfolio Lab and Cyntax, define a cohesive original design direction, propose homepage structure and design system, and document findings.
- **Prompt**:
  > We are building my personal developer portfolio and documenting the entire process as a public tutorial.
  > Reference websites: nishchayjain, nayanbobde, maameyaa, zalt.me, manav-portfolio-lab (visual inspiration), cyntax.dev (feature inspiration).
  > Inspect references, analyze visual styles and features, propose cohesive design direction, page structure, reusable components, design tokens, and document in docs/DESIGN-DECISIONS.md, docs/PROJECT-LOG.md, and docs/TUTORIAL.md.
- **Files Changed**:
  - `docs/DESIGN-DECISIONS.md` (created)
  - `docs/PROJECT-LOG.md` (updated)
  - `docs/AI-PROMPTS.md` (updated)
  - `docs/TUTORIAL.md` (updated)
- **Result**:
  - Successfully synthesized an original design direction ("The Engineering Workbench") combining the high-tech lab aesthetic of Manav Portfolio Lab with the structured, authoritative client features of Cyntax.
  - Formulated a 9-section homepage plan, HeroUI v3 + Tailwind v4 design tokens, and a reusable component tree.
- **Errors and Fixes**:
  - Direct outbound `curl.exe` in terminal timed out due to sandbox/environment firewall restrictions.
  - Fixed by leveraging web search indexing, public GitHub repository profiles, and developer registries to analyze all 6 references accurately without inventing data.


---

### Prompt 2: Milestone 3 — Layout and Core Components
- **Date**: 2026-10-26
- **Tool Used**: `read_file`, `write_file`, `edit_file`, `run_command`
- **Task**: Establish site-wide design tokens, HeroUI v3 theme switching, shared layout (Navbar, Footer, PageContainer, SectionHeader, StatusBadge), root layout configuration, and full verification.
- **Prompt**:
  > Milestone 3 — Layout and Core Components. Implement only the site-wide foundation and reusable layout components. Do not build the complete homepage or any individual content pages in this milestone. Establish reusable design tokens, theme switching, shared layout (Navbar, Footer, PageContainer, SectionHeader, StatusBadge), update root layout, and verify with ESLint, TypeScript, and production build.
- **Files Changed**:
  - `src/app/globals.css` (Tailwind v4 tokens & HeroUI theme variables)
  - `src/lib/utils.ts` (`cn` helper via `@heroui/styles`)
  - `src/data/profile.ts` (site configuration and navigation data)
  - `src/components/layout/Navbar.tsx` (responsive header with mobile drawer & keyboard ESC)
  - `src/components/layout/Footer.tsx` (accessible footer with dynamic year & verified links)
  - `src/components/layout/ThemeToggle.tsx` (accessible theme switcher)
  - `src/components/layout/PageContainer.tsx` (responsive container)
  - `src/components/shared/SectionHeader.tsx` (reusable section heading)
  - `src/components/shared/StatusBadge.tsx` (configurable status indicator)
  - `src/app/layout.tsx` (anti-FOUC script, Suspense boundary, metadata)
  - `src/app/page.tsx` (clean milestone foundation preview)
  - `docs/DESIGN-DECISIONS.md`, `docs/PROJECT-LOG.md`, `docs/AI-PROMPTS.md`, `docs/TUTORIAL.md`
- **Result**:
  - Successfully built all shared components and site-wide theme engine.
  - Zero lint errors, zero TypeScript errors, clean production build.
- **Errors and Fixes**:
  - Empty 0-byte `page.tsx` routes caused TS module errors; resolved by adding placeholder components.
  - Turbopack worker process panic on Windows; resolved by targeting Webpack for build.
  - `@heroui/react` client-only import in Server Components; resolved by importing `cn` from `@heroui/styles`.
  - Next.js 16 prerender error on dynamic `usePathname()`; resolved by wrapping `<Navbar />` with `<Suspense>`.
  - Next.js 16 prerender error on `new Date()`; resolved using `useSyncExternalStore`.
