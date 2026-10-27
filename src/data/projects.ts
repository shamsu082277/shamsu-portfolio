export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Web Application" | "Full-Stack" | "WordPress & E-commerce" | "Client Project";
  featured: boolean;
  technologies: string[];
  summary: string;
  overview: string;
  role: string;
  challenges: {
    challenge: string;
    solution: string;
  }[];
  futureImprovements: string[];
  links: {
    live?: string;
    github?: string;
  };
}

export const projectsData: Project[] = [
  {
    id: "dev-stack",
    title: "Dev-Stack",
    tagline: "Curated tech stack toolkit and developer resource platform.",
    category: "Web Application",
    featured: true,
    technologies: ["React", "TypeScript", "Tailwind CSS", "DaisyUI", "Vite"],
    summary:
      "A developer knowledge hub designed to help software engineers and students discover, compare, and organize modern tech stacks, libraries, and architecture patterns.",
    overview:
      "Developers frequently navigate a crowded ecosystem of libraries and frameworks. Dev-Stack gathers tested tools into organized categories with concise trade-offs, enabling quick technical decision-making.",
    role: "Sole Frontend & UI Developer — Conceived the project, designed the interface with Tailwind CSS & DaisyUI, and implemented fast client-side category filtering.",
    challenges: [
      {
        challenge: "Organizing extensive lists of frameworks and tools while keeping the UI clean and responsive on mobile.",
        solution: "Implemented categorized filter badges with instant search-as-you-type indexing and clean card grids.",
      },
      {
        challenge: "Ensuring consistent typing across dynamic tool data models.",
        solution: "Defined strict TypeScript schemas for all tool entries, preventing runtime undefined errors.",
      },
    ],
    futureImprovements: [
      "Add interactive bookmarking using localStorage.",
      "Integrate automated GitHub release version badges for popular tools.",
    ],
    links: {
      live: "https://dev-stack-shamsu082277.netlify.app/",
      github: "https://github.com/shamsu082277/Dev-Stack",
    },
  },
  {
    id: "bazardor",
    title: "BazarDor",
    tagline: "Daily essential grocery and commodity price monitoring web application.",
    category: "Full-Stack",
    featured: true,
    technologies: ["Next.js", "TypeScript", "MongoDB", "Better Auth", "Tailwind CSS"],
    summary:
      "A localized web application tracking daily essential grocery and commodity market price trends across Bangladesh to promote consumer price transparency.",
    overview:
      "Fluctuating daily commodity prices in open markets often lack centralized digital transparency. BazarDor provides consumers with reliable daily price trends, market breakdowns, and localized product categories.",
    role: "Full-Stack Developer — Built the responsive dashboard, product categorization, price trend indicators, and MongoDB data queries.",
    challenges: [
      {
        challenge: "Displaying dense commodity data and localized pricing cleanly on low-bandwidth mobile devices.",
        solution: "Created collapsible mobile card views with high-contrast trend indicators and clean Bengali-aware presentation.",
      },
      {
        challenge: "Ensuring secure user authentication and administrative updates.",
        solution: "Integrated Better Auth with Next.js route handlers and server actions for reliable session handling.",
      },
    ],
    futureImprovements: [
      "Introduce historical price trend visualization charts.",
      "Add offline PWA capabilities for quick reference in open-air markets.",
    ],
    links: {
      live: "https://bajar-dor.vercel.app/",
      github: "https://github.com/shamsu082277",
    },
  },
  {
    id: "element-bike",
    title: "Element Bike",
    tagline: "Client e-commerce online store built with WordPress & WooCommerce.",
    category: "WordPress & E-commerce",
    featured: true,
    technologies: ["WordPress", "WooCommerce", "Elementor", "Responsive Web Design", "CSS3"],
    summary:
      "A commercial e-commerce website built for bicycle and cycling gear sales with custom WooCommerce store flows, product catalog, and responsive checkout.",
    overview:
      "The client required an intuitive, modern online store to showcase bicycle collections, specifications, accessories, and facilitate online inquiries and purchases.",
    role: "WordPress & WooCommerce Developer — Configured the store architecture, customized product pages and category filters, and ensured smooth responsive checkout.",
    challenges: [
      {
        challenge: "Handling complex bicycle variation attributes (frame sizes, colors, specifications) with clear user feedback.",
        solution: "Customized WooCommerce variable product displays with intuitive swatch selection and responsive tables.",
      },
      {
        challenge: "Optimizing image-heavy bicycle catalogs for fast mobile loading.",
        solution: "Configured image compression, lazy loading, and caching plugins to maintain snappy performance.",
      },
    ],
    futureImprovements: [
      "Implement multi-currency checkout for international orders.",
      "Integrate automated customer delivery tracking notifications.",
    ],
    links: {
      live: "https://elementgroup.ca/",
    },
  },
  {
    id: "the-tribe-awakening",
    title: "The Tribe Awakening",
    tagline: "Professional brand & community website built with WordPress & Elementor.",
    category: "Client Project",
    featured: false,
    technologies: ["WordPress", "Elementor", "Responsive Design", "Custom CSS"],
    summary:
      "A customized brand website designed to articulate organizational vision, community initiatives, and service offerings with high visual appeal.",
    overview:
      "Built for clean presentation, storytelling, and intuitive cross-device responsiveness for a modern organizational community.",
    role: "WordPress Designer & Developer — Designed the layouts, implemented custom typography and colors, and ensured full cross-browser compatibility.",
    challenges: [
      {
        challenge: "Translating brand creative vision into a fast-loading, mobile-friendly WordPress build.",
        solution: "Crafted custom lightweight Elementor sections without bloated third-party widgets.",
      },
    ],
    futureImprovements: [
      "Add interactive community event calendar integration.",
    ],
    links: {
      live: "https://www.thetribeawakening.com/",
    },
  },
];
