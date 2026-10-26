export interface SkillCategory {
  title: string;
  eyebrow: string;
  description: string;
  skills: {
    name: string;
    level: string;
    description: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    eyebrow: "UI // CLIENT",
    description: "Building responsive, accessible, and high-performance user interfaces with modern frameworks.",
    skills: [
      { name: "React 19 / Next.js", level: "Advanced", description: "App Router, Server Components, SSR/SSG, Hooks" },
      { name: "TypeScript", level: "Proficient", description: "Type safety, generics, interfaces, strict mode" },
      { name: "Tailwind CSS v4", level: "Advanced", description: "Design tokens, utility-first layouts, responsive design" },
      { name: "HeroUI v3", level: "Proficient", description: "Accessible UI components, theme integration, custom variants" },
      { name: "HTML5 & Semantic Web", level: "Advanced", description: "Accessibility (WCAG AA), SEO, structured data" },
      { name: "JavaScript (ES6+)", level: "Advanced", description: "Async/await, DOM manipulation, modern patterns" },
    ],
  },
  {
    title: "Backend & Systems",
    eyebrow: "SERVER // API",
    description: "Designing reliable server-side APIs, database schemas, and business logic.",
    skills: [
      { name: "Node.js & Express", level: "Intermediate", description: "RESTful API development, middleware, routing" },
      { name: "Next.js Route Handlers", level: "Proficient", description: "Server actions, API endpoints, request validation" },
      { name: "MongoDB & Mongoose", level: "Intermediate", description: "Document modeling, indexing, aggregation queries" },
      { name: "REST API Design", level: "Proficient", description: "CRUD endpoints, status codes, error handling" },
    ],
  },
  {
    title: "DevOps & Engineering Tooling",
    eyebrow: "INFRA // WORKFLOW",
    description: "Version control, automated build pipelines, and production deployment environments.",
    skills: [
      { name: "Git & GitHub", level: "Proficient", description: "Branching workflows, pull requests, issue tracking" },
      { name: "Vercel", level: "Proficient", description: "Edge deployments, environment variables, preview URLs" },
      { name: "ESLint & Prettier", level: "Proficient", description: "Code quality enforcement, linting rules" },
      { name: "npm & pnpm", level: "Proficient", description: "Package management, dependency resolution" },
    ],
  },
  {
    title: "Engineering Methodologies",
    eyebrow: "PRACTICES // CRAFT",
    description: "Core principles guiding everyday software architecture and delivery.",
    skills: [
      { name: "Responsive Design", level: "Advanced", description: "Mobile-first layouts, touch targets, fluid typography" },
      { name: "Web Accessibility (A11y)", level: "Proficient", description: "Keyboard navigation, screen-reader semantics, contrast" },
      { name: "Clean Architecture", level: "Proficient", description: "Component reusability, single responsibility, separation of concerns" },
      { name: "Performance Optimization", level: "Proficient", description: "Core Web Vitals, code-splitting, asset optimization" },
    ],
  },
];
