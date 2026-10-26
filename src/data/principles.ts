export interface Principle {
  id: string;
  tag: string;
  title: string;
  description: string;
}

export const principlesData: Principle[] = [
  {
    id: "typed-systems",
    tag: "01 // SYSTEM",
    title: "Typed & Scalable Architecture",
    description:
      "Emphasizing strict TypeScript types, Next.js Server Components, and modular code architecture to prevent regressions and keep codebases maintainable as they grow.",
  },
  {
    id: "single-source",
    tag: "02 // DESIGN",
    title: "Single Source of UI Truth",
    description:
      "Unifying design tokens, typography, and reusable component primitives rather than scattering arbitrary inline styles and duplicating code across views.",
  },
  {
    id: "a11y-performance",
    tag: "03 // QUALITY",
    title: "Accessibility & Performance First",
    description:
      "Targeting fast Core Web Vitals, semantic HTML landmarks, visible focus rings, and high-contrast readable typography across dark and light environments.",
  },
  {
    id: "pragmatic-craft",
    tag: "04 // PROCESS",
    title: "Pragmatic Engineering & Simplicity",
    description:
      "Prioritizing reliable standard platforms, clean documentation, and direct solutions over premature abstraction and unnecessary third-party dependencies.",
  },
];
