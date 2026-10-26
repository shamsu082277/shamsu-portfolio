# Build a Developer Portfolio with Free AI Tools

This tutorial documents the end-to-end journey of building a modern, high-performance developer portfolio using modern web technologies and AI pair-programming tools.

---

## 1. Introduction
A developer portfolio is more than a resume—it is a functional showcase of your engineering capabilities, code quality, design sensibility, and problem-solving approach. In this tutorial series, we document every architectural decision, prompt, and development milestone from initial ideation to production deployment.

## 2. Tools and Prerequisites
* **Next.js 16 (App Router)**: React framework for server-rendered and statically generated web applications.
* **TypeScript 5**: Type-safe development with strict type inference.
* **Tailwind CSS v4**: High-performance CSS engine for utility-first styling.
* **HeroUI v3**: Modern, accessible React component library built with Tailwind integration.
* **Git & GitHub**: Version control and public repository hosting.
* **Vercel**: Zero-config hosting platform with instant global edge deployment.
* **AI Coding Assistant**: Guided architecture, reference benchmarking, and code generation.

## 3. Creating the Next.js Project
The project was initialized using `create-next-app` with TypeScript, Tailwind CSS, and App Router enabled:
```bash
npx create-next-app@latest shamsu-portfolio --typescript --tailwind --app --eslint
```

## 4. Installing HeroUI
HeroUI v3 packages were installed alongside core dependencies:
```bash
npm install @heroui/react @heroui/styles
```

## 5. Project Structure
The repository follows a clean, modular architecture:
```
shamsu-portfolio/
├── docs/               # Project logs, design decisions, prompts, and tutorials
├── public/             # Static assets, icons, and resume files
├── src/
│   ├── app/            # App Router routes and page layouts
│   ├── components/     # Modular, reusable UI components
│   │   ├── home/       # Home-specific section components
│   │   ├── layout/     # Navbar, Footer, and responsive drawer
│   │   ├── projects/   # Bento cards and filter grids
│   │   └── shared/     # Buttons, chips, badges, and section headers
│   ├── data/           # Structured TypeScript datasets (profile, projects, experience, faq)
│   └── lib/            # Shared utility functions and helpers
```

## 6. Designing the Portfolio: Reference Benchmarking & Decisions
Rather than designing in isolation or blindly copying an existing template, we conducted a competitive benchmark across six diverse developer portfolios to extract best-in-class visual and functional patterns:

### Primary Inspirations
1. **Manav Portfolio Lab (Visual Inspiration)**:
   - *Key takeaway*: The "Lab / Engineering Workstation" theme. OLED dark mode background (`#08090C`), glowing 1px borders, diagnostic UI cards, live status telemetry badges (`STATUS: AVAILABLE`), and subtle monospace accents.
2. **Cyntax (Feature Inspiration)**:
   - *Key takeaway*: Authoritative engineering credibility. A comprehensive recruiter/client FAQ accordion (answering questions on workflow, pricing models, code ownership, and timelines), architectural philosophy statements, and structured service breakdowns.

### Secondary Inspirations
* **Nishchay Jain**: Bento-grid project cards, categorized technical arsenal (Frontend, Backend, AI, Cloud), and floating glassmorphic navigation dock.
* **Mahmoud Zalt (`zalt.me`)**: Terminal command prompt aesthetics and high-utility features.
* **Maame Yaa Twumasi**: Minimalist, high-clarity engineering narrative with zero fluff.
* **Nayan Bobde**: Structured baseline resume flow showing clean single-page organization.

### The Synthesized Design Direction: "The Engineering Workbench"
We synthesized these findings into an original concept: **"The Engineering Workbench"**. It combines the visual precision of a high-tech experimental lab with the professional clarity of an enterprise engineering consultant.

*Full details and token specifications are documented in [DESIGN-DECISIONS.md](./DESIGN-DECISIONS.md).*

## 7. Implementing the Layout and Core Components
In this milestone, we established the site-wide architecture, reusable components, and theme engine before building individual page contents:

### 1. Tailwind CSS v4 & HeroUI v3 Layered Variables
In Tailwind CSS v4, theme tokens are declared directly in CSS via `@layer base` and `@theme`. We configured CSS variables for both dark mode (default) and light mode:
- **Dark Mode**: Obsidian `#08090C`, Elevated Surface `#161B24`, Sky Blue `#38BDF8`, Terminal Emerald `#10B981`.
- **Light Mode**: High-clarity Slate `#F8FAFC`, Secondary `#FFFFFF`, Muted `#64748B`.
- Variables map seamlessly to HeroUI v3's internal tokens (`--background`, `--foreground`, `--surface`, `--accent`, `--success`), ensuring all components inherit the theme automatically.

### 2. Zero-FOUC Theme Switching with HeroUI v3
HeroUI v3 provides a native `useTheme` hook that syncs with `localStorage` (key: `"heroui-theme"`) and the DOM `data-theme` and `classList`. To eliminate Flash of Unstyled Content (FOUC), we injected an inline script in `src/app/layout.tsx` that evaluates the stored preference before the browser paints. We paired this with React 19's `useSyncExternalStore` in `ThemeToggle.tsx` to prevent hydration mismatches and eliminate cascading `useEffect` renders.

### 3. Core Reusable Layout Components
- **`Navbar`**: Floating, sticky glassmorphic navigation header featuring a portfolio monogram badge (`SU`), live status telemetry indicator, hybrid anchor and dedicated page links, active link highlighting, `ThemeToggle`, primary CTA button, and an accessible mobile drawer with keyboard `Escape` closing.
- **`Footer`**: Semantic footer providing verified links to GitHub, internal anchors, dynamic copyright year via `useSyncExternalStore`, and technology attribution.
- **`PageContainer`**: Centralized layout wrapper (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`) preventing horizontal overflow and ensuring consistent layout margins.
- **`SectionHeader`**: Consistent section header with monospace terminal eyebrow tag (`//`), prominent heading, and description text.
- **`StatusBadge`**: Configurable telemetry pill with animated pulsing dot and customizable status/detail labels.

## 8. Implementing the Page Sections
*(Upcoming Milestone 4: Hero Section, Engineering Principles, Projects Bento Grid, Skills Radar, FAQ, and Contact)*

## 9. Testing & Quality Assurance
*(Upcoming Milestone: Automated linting, accessibility audit with axe/Lighthouse, responsive testing)*

## 10. Publishing to GitHub
*(Upcoming Milestone: Git commits, branch management, and repository setup)*

## 11. Deploying to Vercel
*(Upcoming Milestone: Continuous deployment via Vercel GitHub integration)*

## 12. Troubleshooting & Common Pitfalls
* **Network Sandbox Restrictions during Reference Research**:
  * *Issue*: Outbound terminal requests (`curl`) were blocked by environment network isolation.
  * *Solution*: Leveraged public search indices, package metadata, and developer registries to analyze references accurately without inventing facts.
* **Server/Client Component Boundaries with `@heroui/react`**:
  * *Issue*: `@heroui/react` exports components built on React Aria that declare `'client-only'`. Importing utilities like `cn` from `@heroui/react` in Server Components causes a build error.
  * *Solution*: Import `cn` from `@heroui/styles` which is a pure utility package safe for Server Components.
* **Partial Prerendering with URL and Time Dependencies**:
  * *Issue*: Next.js 16 Partial Prerendering flags `usePathname()` in layouts outside `<Suspense>` and dynamic `new Date()` calls.
  * *Solution*: Wrapped `<Navbar />` inside a `<Suspense>` fallback, and utilized `useSyncExternalStore` for SSR-safe dynamic year calculation.
* **React Compiler `set-state-in-effect` Warnings**:
  * *Issue*: Calling `setState` synchronously inside `useEffect` triggers React Compiler performance lint errors.
  * *Solution*: Managed route-change state during render and used `useSyncExternalStore` for mount detection.
