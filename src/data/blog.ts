export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  tags: string[];
  content: {
    heading?: string;
    paragraphs: string[];
    codeBlock?: {
      language: string;
      code: string;
    };
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "building-the-engineering-workbench",
    slug: "building-the-engineering-workbench",
    title: "Building The Engineering Workbench: Next.js 16, Tailwind CSS v4, and HeroUI v3",
    summary:
      "A deep dive into setting up Next.js 16 App Router, Tailwind CSS v4's CSS variable engine, and HeroUI v3 to build a zero-FOUC developer portfolio.",
    date: "2026-10-26",
    readTime: "5 min read",
    tags: ["Next.js", "Tailwind CSS", "HeroUI", "TypeScript", "Architecture"],
    content: [
      {
        heading: "Moving Beyond Generic Templates",
        paragraphs: [
          "When starting my portfolio, I wanted to avoid two common extremes: the generic template that looks like every other resume, and the overly complex 3D website that takes ten seconds to load and runs down user battery life.",
          "Inspired by the high-tech precision of Manav Portfolio Lab and the authoritative engineering credibility of Cyntax, I conceived 'The Engineering Workbench'—an interface that feels like an active engineer's workstation while delivering instant loading times and accessible typography.",
        ],
      },
      {
        heading: "The Shift to Tailwind CSS v4 Layered CSS Variables",
        paragraphs: [
          "Tailwind CSS v4 introduces a streamlined CSS-first configuration model. Instead of relying on a bulky tailwind.config.js, we define design tokens directly in globals.css using @layer base and @theme.",
          "By declaring CSS variables for backgrounds, text, and border tokens, both dark and light themes can be controlled purely through CSS cascade, eliminating runtime overhead.",
        ],
        codeBlock: {
          language: "css",
          code: `@layer base {
  :root, .light {
    --bg-primary: #f8fafc;
    --text-primary: #0f172a;
    --accent-sky: #0284c7;
  }
  .dark {
    --bg-primary: #08090c;
    --text-primary: #f3f4f6;
    --accent-sky: #38bdf8;
  }
}`,
        },
      },
      {
        heading: "Eliminating the Flash of Unstyled Content (FOUC)",
        paragraphs: [
          "A recurring challenge with dark-mode default portfolios is the brief white flash that occurs before React mounts and reads localStorage.",
          "We resolved this by injecting a minimal synchronous script inside the document <head>. This reads the saved preference or system theme and writes the 'dark' or 'light' class onto document.documentElement before the browser paints the initial frame.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Modern web development does not require heavyweight dependencies to feel futuristic. Thoughtful typography, subtle 1px borders, and disciplined component boundaries create an interface that is both memorable and blazing fast.",
        ],
      },
    ],
  },
  {
    id: "lessons-learned-building-bazardor",
    slug: "lessons-learned-building-bazardor",
    title: "Lessons Learned Building BazarDor: Commodity Price Tracking in Bangladesh",
    summary:
      "How building a Bangla-first market price tracking application taught me the nuances of localized software, database aggregation, and responsive mobile UX.",
    date: "2026-09-15",
    readTime: "6 min read",
    tags: ["React", "MongoDB", "Localization", "Full-Stack"],
    content: [
      {
        heading: "The Problem of Daily Market Fluctuations",
        paragraphs: [
          "In Bangladesh, daily essential grocery prices fluctuate across regional wholesale and retail markets. Everyday consumers often have no way to verify whether the price they are quoted reflects the broader market rate.",
          "BazarDor was born to provide an accessible digital reference point where citizens could check commodity averages, trends, and regional comparisons from their smartphones.",
        ],
      },
      {
        heading: "Localization Beyond Simple Translation",
        paragraphs: [
          "One of the biggest lessons from BazarDor was that localization is much deeper than translating string labels. Bengali numerals (১, ২, ৩), localized units of measurement (যেমন: কেজি, ডজন, হালি), and date formatting require intentional design.",
          "If you store formatted strings in the database, you cannot perform mathematical aggregations like finding minimum, maximum, and average prices. The solution was to keep pure numeric types in MongoDB and apply localized formatting utilities only at the presentation boundary.",
        ],
      },
      {
        heading: "Designing for Low-End Mobile Browsers",
        paragraphs: [
          "Most users access market information while walking through physical bazaars on mobile devices with fluctuating cellular connectivity. Complex desktop data tables fail in this scenario.",
          "We designed high-contrast card modules with clear directional indicators (red for price increases, green for decreases) and lightweight SVG trend arrows that render instantaneously even on 3G connections.",
        ],
      },
    ],
  },
  {
    id: "type-safety-and-design-tokens",
    slug: "type-safety-and-design-tokens",
    title: "Why Type Safety and Design Tokens Matter for Solo Developers",
    summary:
      "Exploring how TypeScript interfaces and centralized design tokens accelerate feature delivery and prevent subtle regressions when working alone.",
    date: "2026-08-20",
    readTime: "4 min read",
    tags: ["TypeScript", "Design Systems", "Best Practices"],
    content: [
      {
        heading: "The Solo Developer Trap",
        paragraphs: [
          "When working alone on a project, it is tempting to take shortcuts: using 'any' types, hardcoding arbitrary hex colors directly in JSX, or duplicating navigation arrays across header and footer files.",
          "While this feels fast initially, it creates a maintenance nightmare after two weeks when you need to rename a route or adjust your primary accent color.",
        ],
      },
      {
        heading: "Single Source of Truth",
        paragraphs: [
          "Inspired by Cyntax's principle of 'Single Source of UI Truth', I enforce centralized data models in src/data/ and reusable tokens in Tailwind CSS.",
          "When your navigation links, project metadata, and skill sets live in typed TypeScript files, the compiler immediately warns you if a component expects a property that was renamed.",
        ],
      },
      {
        heading: "Key Takeaways",
        paragraphs: [
          "1. Centralize content in typed data structures rather than embedding copy inside UI components.",
          "2. Use CSS variables for colors and borders so theme variations require zero JavaScript recalculations.",
          "3. Let the compiler do the remembering for you so your mental bandwidth is focused on solving real engineering problems.",
        ],
      },
    ],
  },
];
