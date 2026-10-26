export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  concept: string;
  title: string;
  tagline: string;
  bio: string;
  aboutSnippet: string;
  location: string;
  status: {
    label: string;
    detail: string;
  };
  links: {
    github: string;
    email: string;
    linkedin?: string;
  };
  navLinks: NavLink[];
}

export const siteConfig: SiteConfig = {
  name: "Shamsu Uddin",
  role: "Full-Stack Web Developer",
  concept: "The Engineering Workbench",
  title: "Shamsu Uddin | Full-Stack Web Developer",
  tagline: "Building scalable, typed web applications with clean architecture and meticulous craftsmanship.",
  bio: "Full-stack developer focused on modern TypeScript ecosystems, Next.js App Router, React, and responsive design systems. Passionate about performance, clean code patterns, and practical problem solving.",
  aboutSnippet: "I am a web developer with a strong foundation in modern JavaScript/TypeScript, React, Next.js, and backend technologies. I treat software development as an engineering discipline—emphasizing maintainability, type safety, and real-world user value.",
  location: "Bangladesh",
  status: {
    label: "Workbench v1.0",
    detail: "Systems Nominal",
  },
  links: {
    github: "https://github.com/shamsu082277",
    email: "shamsu082277@gmail.com",
    linkedin: "https://linkedin.com",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Education", href: "/education" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};
