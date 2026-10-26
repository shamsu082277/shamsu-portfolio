export interface FaqItem {
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    question: "What is your primary focus and core technical stack?",
    answer:
      "I specialize in full-stack web development with a strong focus on modern TypeScript, Next.js (App Router), React, and Tailwind CSS. On the backend, I work with Node.js, Express, MongoDB, and RESTful API integrations.",
  },
  {
    question: "What is your current work availability and working arrangement?",
    answer:
      "I am currently open to full-time junior/mid-level web development roles, contract engagements, and open-source collaborations in remote or hybrid settings.",
  },
  {
    question: "How do you approach code quality, testing, and accessibility?",
    answer:
      "I treat accessibility and performance as primary requirements rather than afterthoughts. I enforce strict TypeScript types, linting rules (ESLint/Prettier), semantic HTML landmarks, WCAG AA color contrast, visible keyboard navigation focus rings, and zero-bloat asset delivery.",
  },
  {
    question: "How do you manage communication and project progress?",
    answer:
      "I believe in proactive, transparent communication. I utilize Git branching workflows, detailed commit messages, clear pull request descriptions, and structured project documentation so all stakeholders stay aligned.",
  },
  {
    question: "What is the best way to get in touch with you?",
    answer:
      "The fastest way to reach me is directly via email at shamsu082277@gmail.com, or by connecting through my GitHub profile at github.com/shamsu082277. You can also send a message via the contact form on this site.",
  },
];
