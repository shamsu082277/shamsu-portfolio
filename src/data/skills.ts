export interface SkillCategory {
  title: string;
  badge: string;
  description: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "WordPress & CMS",
    badge: "CMS & E-COMMERCE",
    description: "Creating customizable business sites, e-commerce stores, and tailored content platforms.",
    skills: [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "Theme Customization",
      "Plugin Configuration",
    ],
  },
  {
    title: "Frontend Development",
    badge: "UI & INTERACTION",
    description: "Designing responsive, user-friendly layouts and interactive client interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "React Router",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Web Design",
    ],
  },
  {
    title: "Full-Stack & Modern Web",
    badge: "BACKEND & FRAMEWORKS",
    description: "Connecting dynamic user interfaces to backend APIs and persistent databases.",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "Next.js",
    ],
  },
  {
    title: "Tools & Workflow",
    badge: "DEV & OPTIMIZATION",
    description: "Version control, build automation, performance auditing, and troubleshooting.",
    skills: [
      "Git",
      "GitHub",
      "Vite",
      "Website Troubleshooting",
      "Website Speed Optimization",
    ],
  },
];
