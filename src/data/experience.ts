export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: "Full-Time" | "Contract" | "Independent / Training" | "Project-Based";
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "full-stack-developer",
    role: "Full-Stack Web Developer",
    organization: "Independent & Open Source Projects",
    period: "2024 — Present",
    location: "Bangladesh (Remote)",
    type: "Project-Based",
    description:
      "Engineering full-stack web applications with modern TypeScript, Next.js App Router, React, and Tailwind CSS. Specializing in responsive frontends, clean architecture, and localized consumer applications.",
    responsibilities: [
      "Architected and deployed 'The Engineering Workbench' portfolio with custom design tokens and zero-FOUC theme switching.",
      "Engineered 'BazarDor', a localized grocery and commodity market price monitoring web application.",
      "Developed 'Dev-Stack', a categorized developer resource hub for modern web technology stacks.",
      "Implemented accessibility best practices (WCAG AA) including keyboard navigability and high-contrast color systems.",
    ],
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "HeroUI", "Node.js", "MongoDB", "Git"],
  },
  {
    id: "web-dev-training",
    role: "Full-Stack Web Development Fellow",
    organization: "Programming Hero",
    period: "2023 — 2024",
    location: "Remote",
    type: "Independent / Training",
    description:
      "Intensive software engineering curriculum covering modern frontend and backend development with JavaScript, TypeScript, React, Node.js, Express, and MongoDB.",
    responsibilities: [
      "Completed hands-on assignments building dynamic single-page applications and full-stack web platforms.",
      "Mastered React component architecture, state management, custom hooks, and RESTful API integration.",
      "Implemented backend services with Express and MongoDB, handling CRUD operations and database schemas.",
      "Participated in peer code reviews, debugging sessions, and git collaboration workflows.",
    ],
    technologies: ["JavaScript (ES6+)", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Git"],
  },
];
