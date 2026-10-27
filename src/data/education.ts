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
    id: "bsc-physics",
    degree: "Bachelor of Science (Honours) in Physics",
    institution: "National University Bangladesh — Narsingdi Government College",
    period: "Exam 2024 (Published 2026)",
    location: "Bangladesh",
    highlights: [
      "Rigorous academic study focusing on physics, mathematics, analytical reasoning, and scientific inquiry.",
      "Developed systematic problem-solving habits, logical thinking, and attention to detail.",
      "Applied quantitative analysis and empirical experimentation methodologies to complex technical domains.",
    ],
  },
  {
    id: "web-dev-cert",
    degree: "Professional Web Development Training",
    institution: "Web Development Fellowship & Practical Curriculum",
    period: "Comprehensive Training",
    location: "Online / Practical",
    highlights: [
      "Intensive practical training covering modern web technologies: HTML5, CSS3, JavaScript (ES6+), React, and Node.js.",
      "Hands-on building of dynamic web applications, e-commerce stores, and responsive user interfaces.",
      "Focus on clean code, Git version control, website maintenance, and performance optimization.",
    ],
  },
];
