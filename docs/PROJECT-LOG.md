# Project Development Log

## Milestone 1: Initial Setup & Environment Verification

- Status: Completed
- Framework: Next.js 16 (App Router)
- Language: TypeScript 5
- Styling: Tailwind CSS v4
- UI library: HeroUI v3 (`@heroui/react`, `@heroui/styles`)
- Hosting target: Vercel

### Commands Executed
- Project initialization and dependency verification.
- Structure inspection via PowerShell `Get-ChildItem`.

### Changes Made
- Workspace folders established: `src/app`, `src/components`, `src/data`, `src/lib`, `docs`, `public`.
- Documentation foundation created: `AGENTS.md`, `PROJECT-LOG.md`, `AI-PROMPTS.md`, `TUTORIAL.md`, `DESIGN-DECISIONS.md`.

### Verification
- `npm run lint` / TypeScript checks verified.
- Core project dependencies confirmed in `package.json`.

---

## Milestone 2: Reference Inspection, Benchmarking & Design Decisions

- Status: Completed
- Focus: Competitive analysis of 6 portfolio references, architectural synthesis, and design tokens specification.

### References Inspected
1. `https://nishchayjain.vercel.app/` – Bento grid systems, glassmorphism, AI & distributed systems positioning.
2. `https://nayanbobde.github.io/Portfoliowebsite/` – Traditional single-page baseline, clear resume flow.
3. `https://maameyaa.vercel.app/` – Production-grade full-stack presentation, clean typography, cloud emphasis.
4. `https://zalt.me/` – Interactive terminal aesthetic, client-side utility toolkit (`/tools`), extensive project logs.
5. `https://manav-portfolio-lab.vercel.app/` – **Primary Visual Inspiration**: High-tech engineering lab workstation, OLED dark base, glowing borders, diagnostic UI cards, telemetry badges.
6. `https://cyntax.dev/en` – **Primary Feature Inspiration**: Authoritative client/recruiter FAQ, architectural principles, structured service models, clear technical communication.

### Commands Executed & Inspection Notes
- Inspected references via public search indexing, developer registries (Emma Bostian directory), and GitHub repository source metadata.
- Note on network: Outbound terminal requests were sandboxed; visual and architectural data verified through indexed records and public repositories.

### Changes Made
- Authored comprehensive report in `docs/DESIGN-DECISIONS.md`:
  - 6-reference comparative breakdown.
  - In-depth feature & visual contrast between Manav Portfolio Lab and Cyntax.
  - Proposed original unified concept: "The Engineering Workbench".
  - Defined 9-section homepage architecture.
  - Defined Tailwind v4 & HeroUI v3 design tokens (Obsidian base `#08090C`, Sky Blue `#38BDF8`, Emerald `#10B981`).
  - Outlined component architecture in `src/components/` and non-functional requirements (WCAG 2.1 AA, Mobile, Performance, SEO).
- Updated `docs/AI-PROMPTS.md` with prompt records.
- Updated `docs/TUTORIAL.md` with reference analysis and design methodology.

### Verification
- `docs/DESIGN-DECISIONS.md` created and verified.
- Design choices cross-referenced against `AGENTS.md` constraints (free tier only, no paid services, no code modification before approval).

### Next Step
Wait for user review and approval of design decisions before initiating Milestone 3 (Layout and core component implementation).


---

## Milestone 3: Layout and Core Components

- Status: Completed
- Focus: Site-wide foundation, design system tokens, accessible theme switching, and reusable layout components.

### Commands Executed
- `npm run lint`: Passed with 0 errors, 0 warnings.
- `npx tsc --noEmit`: Passed with 0 type errors.
- `npm run build`: Production build succeeded (`next build --webpack`), generating static HTML and RSC payloads for all routes (`/`, `/_not-found`, `/about`, `/blog`, `/blog/[blogId]`, `/contact`, `/education`, `/experience`, `/projects`, `/projects/[projectId]`).

### Components & Modules Implemented
- `src/app/globals.css`: Full Tailwind CSS v4-compatible CSS variable design tokens for both Dark Mode (Obsidian `#08090C`, Sky Blue `#38BDF8`, Emerald `#10B981`) and Light Mode (Crisp Slate `#F8FAFC`).
- `src/lib/utils.ts`: Standard `cn` helper importing from `@heroui/styles` without server/client boundary conflicts, and date formatting utility.
- `src/data/profile.ts`: Centralized site configuration, verified repository URL (`https://github.com/shamsu082277/shamsu-portfolio`), hybrid navigation links, and telemetry metadata.
- `src/components/layout/ThemeToggle.tsx`: Accessible dark/light mode toggle utilizing HeroUI v3's built-in `useTheme` hook with React 19 `useSyncExternalStore` for hydration-safe rendering.
- `src/components/shared/StatusBadge.tsx`: Telemetry badge with pulsing status dot and neutral default text (`Workbench v1.0 // Systems Nominal`).
- `src/components/layout/PageContainer.tsx`: Reusable responsive layout container (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`).
- `src/components/shared/SectionHeader.tsx`: Semantic section heading with monospace eyebrow label, bold title, and description.
- `src/components/layout/Navbar.tsx`: Floating sticky header with monogram, status badge, active link highlighting, ThemeToggle, Get in Touch CTA, and accessible mobile drawer with Escape key support.
- `src/components/layout/Footer.tsx`: Semantic footer with copyright year (`useSyncExternalStore` hydration-safe pattern), navigation links, verified repository link, and tech attribution.
- `src/app/layout.tsx`: Configured with anti-FOUC theme script, `<Suspense>` boundary around navigation, semantic landmarks, and open graph metadata.

### Errors Encountered & Resolved
1. **Empty `page.tsx` files (0 bytes)**:
   - *Error*: `File is not a module` in TypeScript and Next.js route compilation.
   - *Fix*: Created clean milestone pending placeholder exports in `src/app/about`, `blog`, `contact`, `education`, `experience`, `projects`.
2. **Turbopack Webpack Loader Panic on Windows**:
   - *Error*: Turbopack subprocess failed connecting to Node worker for `@tailwindcss/turbopack` and `reactCompiler`.
   - *Fix*: Updated build script to `next build --webpack`, achieving clean 10-second compilation with full React Compiler and Tailwind v4 support.
3. **HeroUI Client-Only Import in Server Components**:
   - *Error*: `client-only cannot be imported from a Server Component module` when `utils.ts` imported `cn` from `@heroui/react`.
   - *Fix*: Imported `cn` from `@heroui/styles` which contains pure CSS/variants and is safe for RSCs.
4. **Unstable `new Date()` during Static Prerendering**:
   - *Error*: Next.js 16 flagged dynamic date evaluation in `Footer.tsx` during prerender.
   - *Fix*: Leveraged React 19 `useSyncExternalStore` returning a stable SSR snapshot and dynamic client snapshot.
5. **Dynamic `usePathname()` in Root Layout**:
   - *Error*: Blocked partial prerender for dynamic route segments (`/blog/[blogId]`).
   - *Fix*: Wrapped `<Navbar />` inside a `<Suspense>` fallback boundary in `src/app/layout.tsx`.
6. **React Compiler ESLint Warnings (`set-state-in-effect`)**:
   - *Error*: `Avoid calling setState() directly within an effect` in `Navbar.tsx` and `ThemeToggle.tsx`.
   - *Fix*: Handled route state during render and used `useSyncExternalStore` for mount detection.

### Next Step
Wait for user review and approval before proceeding to Milestone 4 (Homepage Hero & Core Sections).
