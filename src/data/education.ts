export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  highlights: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "programming-hero",
    degree: "Complete Web Development Certificate",
    institution: "Programming Hero",
    period: "2023 — 2024",
    location: "Online / Remote",
    highlights: [
      "Rigorous program covering modern frontend, backend, and full-stack software development.",
      "Comprehensive training in HTML5, CSS3, JavaScript (ES6+), React, Node.js, Express, and MongoDB.",
      "Hands-on project deliverables including e-commerce interfaces, price trackers, and interactive dashboards.",
      "Emphasis on clean code, git collaboration, debugging, and production deployments.",
    ],
  },
  {
    id: "academic-studies",
    degree: "Higher Secondary & General Academic Studies",
    institution: "Formal Academic Education",
    period: "Completed",
    location: "Bangladesh",
    highlights: [
      "Strong foundational focus in science, mathematics, analytical reasoning, and computer fundamentals.",
      "Developed problem-solving methodology and technical self-learning discipline.",
    ],
  },
];
