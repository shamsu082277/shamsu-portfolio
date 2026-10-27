export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "web-dev-trainer",
    role: "Web Development Trainer",
    organization: "STS IT Training Institute & Infosys",
    period: "Professional Training",
    description:
      "Delivering structured web development instruction, mentoring emerging developers, and simplifying complex technical principles into actionable, practical skills.",
    responsibilities: [
      "Deliver comprehensive web development training sessions and explain technical concepts clearly.",
      "Teach and guide learners to improve their practical web development and coding skills.",
      "Conduct hands-on workshops covering HTML, CSS, JavaScript, responsive layouts, and CMS tools.",
      "Review student projects, troubleshoot coding problems, and offer constructive architectural feedback.",
    ],
    skills: ["Web Development Training", "HTML/CSS", "JavaScript", "Curriculum Mentorship", "Technical Communication"],
  },
  {
    id: "diconlogy",
    role: "Web Development & Project Coordination",
    organization: "DiConLogy",
    period: "Agency & Client Projects",
    description:
      "Contributing to agency web development deliverables, coordinating cross-functional project requirements, and overseeing website deployment quality.",
    responsibilities: [
      "Contribute directly to client website development, layout customization, and maintenance.",
      "Coordinate project tasks, milestones, and deliverables to ensure on-time delivery.",
      "Ensure web interfaces adhere to responsive design standards and client specifications.",
      "Troubleshoot front-end and CMS configuration issues across multiple client accounts.",
    ],
    skills: ["WordPress", "Project Coordination", "Web Development", "Client Communication", "Quality Assurance"],
  },
  {
    id: "freelance-developer",
    role: "Freelance Web Developer & Designer",
    organization: "Freelance / Global Clients",
    period: "Ongoing Practice",
    description:
      "Partnering directly with business owners, entrepreneurs, and service providers worldwide to build, customize, and optimize high-performing websites.",
    responsibilities: [
      "Design and develop custom websites for businesses, e-commerce stores, personal brands, and service providers.",
      "Build, customize, maintain, and refine websites according to exact client specifications.",
      "Implement WooCommerce stores with customized product flows, carts, and payment integrations.",
      "Perform website speed optimization, diagnostic troubleshooting, and regular security updates.",
    ],
    skills: ["WordPress", "WooCommerce", "Elementor", "Responsive Web Design", "Speed Optimization", "Client Support"],
  },
];
