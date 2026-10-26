export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Full-Stack" | "Frontend / UI" | "Web Applications";
  featured: boolean;
  technologies: string[];
  summary: string;
  problem: string;
  role: string;
  architecture: string[];
  features: string[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  lessonsLearned: string[];
  futureImprovements: string[];
  links: {
    github: string;
    live?: string;
  };
}

export const projectsData: Project[] = [
  {
    id: "dev-stack",
    title: "Dev-Stack",
    tagline: "Curated tech stack toolkit and developer resource platform.",
    category: "Full-Stack",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Node.js"],
    summary:
      "A developer knowledge hub designed to help software engineers discover, compare, and organize modern tech stacks, libraries, and architecture patterns.",
    problem:
      "Modern developers frequently navigate an overwhelming ecosystem of tools, libraries, and frameworks. Finding vetted, interoperable tools with clear trade-offs and code examples is often time-consuming.",
    role: "Lead Full-Stack Developer — Designed the data schema, implemented the user interface with accessible filtering, and built modular resource cards.",
    architecture: [
      "Next.js App Router for server-rendered listings with fast static generation.",
      "TypeScript interfaces ensuring strict validation of tool categories and compatibility rules.",
      "Tailwind CSS utility architecture with design tokens for consistent spacing and elevation.",
      "Client-side state management for real-time category filtering and search queries.",
    ],
    features: [
      "Dynamic categorization by Frontend, Backend, Database, and DevOps layers.",
      "Interactive comparison matrix showing tool trade-offs and use cases.",
      "Search-as-you-type indexing across tools, libraries, and frameworks.",
      "Lightweight, zero-bloat UI designed for fast mobile and desktop loading.",
    ],
    challenges: [
      {
        challenge: "Managing extensive tool data while keeping page bundle sizes minimal.",
        solution: "Decoupled static data into TypeScript schemas and leveraged Next.js Server Components to render tool cards without shipping unnecessary client JS.",
      },
      {
        challenge: "Creating an intuitive filtering system that works seamlessly on small touchscreens.",
        solution: "Implemented horizontal scrollable category pills on mobile with accessible ARIA keyboard navigation.",
      },
    ],
    lessonsLearned: [
      "Type safety across datasets eliminates runtime undefined errors when filtering categories.",
      "Prioritizing semantic HTML over custom div soup yields immediate accessibility improvements.",
    ],
    futureImprovements: [
      "Add interactive bookmarking using browser localStorage.",
      "Integrate automated GitHub star and release version tracking.",
    ],
    links: {
      github: "https://github.com/shamsu082277/shamsu-portfolio",
    },
  },
  {
    id: "bazardor",
    title: "BazarDor",
    tagline: "Bangla-first commodity and daily essential grocery price tracker.",
    category: "Full-Stack",
    featured: true,
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    summary:
      "A localized web application tracking daily essential grocery and commodity price trends across regional markets in Bangladesh to enhance consumer price transparency.",
    problem:
      "Fluctuating daily commodity prices in local markets lack centralized digital transparency, leaving everyday consumers and families without reliable price information before visiting markets.",
    role: "Full-Stack Developer — Built the responsive dashboard, product filtering, price change indicators, and MongoDB data aggregation queries.",
    architecture: [
      "Next.js full-stack architecture with API routes handling commodity submissions and updates.",
      "MongoDB database modeling commodities, market locations, date stamps, and price points.",
      "Tailwind CSS responsive design with Bangla-first typography and high-contrast indicators.",
      "RESTful API endpoints for filtering commodities by category, district, and time range.",
    ],
    features: [
      "Bangla-first interface displaying localized currency, weights, and category labels.",
      "Daily price indicators showing upward, downward, and steady commodity trends.",
      "Market-based breakdown comparing average, minimum, and maximum prices.",
      "Category navigation covering vegetables, poultry, spices, and grains.",
    ],
    challenges: [
      {
        challenge: "Handling localized Bengali numerals and text formatting while calculating numerical averages.",
        solution: "Maintained standard numeric types in the database and created lightweight locale-aware formatting utilities for the UI display layer.",
      },
      {
        challenge: "Rendering dense tables and cards clearly on low-end mobile devices.",
        solution: "Created collapsible card views on mobile that expand to show multi-market price comparisons on desktop.",
      },
    ],
    lessonsLearned: [
      "Localized software requires careful separation between computational data formats and presentation strings.",
      "Database indexing on category and date fields significantly speeds up historical price queries.",
    ],
    futureImprovements: [
      "Introduce crowd-sourced receipt verification for crowd-validated market rates.",
      "Add offline PWA capabilities for quick inspection in open-air markets.",
    ],
    links: {
      github: "https://github.com/shamsu082277",
    },
  },
  {
    id: "engineering-workbench",
    title: "The Engineering Workbench",
    tagline: "Personal developer portfolio built with Next.js 16, Tailwind CSS v4, and HeroUI v3.",
    category: "Frontend / UI",
    featured: true,
    technologies: ["Next.js 16", "TypeScript 5", "Tailwind CSS v4", "HeroUI v3", "React 19"],
    summary:
      "A modern, performance-engineered developer portfolio documenting architectural decisions, design tokens, and real-world code as a public development tutorial.",
    problem:
      "Many developer portfolios look either like generic boilerplate templates or are bloated with heavy, unoptimized 3D animations that hurt usability and Core Web Vitals.",
    role: "Sole Architect & Developer — Conceived the workbench aesthetic, defined Tailwind v4 design tokens, implemented accessible HeroUI layout components, and configured zero-FOUC theme switching.",
    architecture: [
      "Next.js 16 App Router using React 19 Server Components by default.",
      "Tailwind CSS v4 with custom `@layer base` CSS variables for instant dark and light mode adaptation.",
      "HeroUI v3 components with strict server/client boundary separation.",
      "Zero-FOUC theme initialization script executing synchronously before first paint.",
    ],
    features: [
      "Precision 'Engineering Workbench' lab aesthetic with subtle glowing borders and telemetry status.",
      "Fully accessible dark and light mode toggle with system preference fallback.",
      "Hybrid single-page homepage anchors combined with dedicated project and blog detail pages.",
      "100% responsive navigation drawer with keyboard `Escape` closing and focus traps.",
    ],
    challenges: [
      {
        challenge: "Handling Next.js 16 Partial Prerendering restrictions with dynamic dates and client hooks.",
        solution: "Leveraged React 19 `useSyncExternalStore` for stable SSR snapshots and wrapped route-dependent navigation in React `<Suspense>` boundaries.",
      },
      {
        challenge: "Integrating Tailwind CSS v4 and HeroUI v3 with clean server-side rendering.",
        solution: "Used `@heroui/styles` utilities for shared styling, isolating interactive `@heroui/react` components strictly to Client Component leaves.",
      },
    ],
    lessonsLearned: [
      "Documenting design decisions and benchmarking references before coding prevents architectural drift.",
      "Modern CSS variables in Tailwind v4 make multi-theme support dramatically cleaner than legacy class-swapping.",
    ],
    futureImprovements: [
      "Add interactive code snippet copy telemetry.",
      "Implement automated GitHub Actions verification workflow.",
    ],
    links: {
      github: "https://github.com/shamsu082277/shamsu-portfolio",
    },
  },
];
