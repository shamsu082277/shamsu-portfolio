export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  title: string;
  additionalRoles: string[];
  location: string;
  bio: string;
  links: {
    github: string;
    linkedin: string;
    freelancer: string;
    dribbble: string;
    email: string;
  };
  services: ServiceItem[];
}

export const profileData: ProfileData = {
  name: "Shamsu Uddin",
  title: "Web Developer & WordPress Specialist",
  additionalRoles: [
    "Web Designer",
    "WooCommerce Developer",
    "Freelance Web Developer",
    "Web Development Trainer",
    "Project Coordinator",
  ],
  location: "Bangladesh",
  bio: "I’m a web developer and designer who builds modern, responsive websites and web applications. I specialize in frontend development, e-commerce solutions, website customization, performance optimization, and creating user-friendly digital experiences.",
  links: {
    github: "https://github.com/shamsu082277",
    linkedin: "https://linkedin.com/in/shamsu082277/",
    freelancer: "https://www.freelancer.com/u/shamsu082277",
    dribbble: "https://dribbble.com/shamsu082277",
    email: "shamsu082277@gmail.com",
  },
  services: [
    {
      id: "wordpress-dev",
      title: "WordPress Website Development",
      description:
        "Professional business, personal brand, company profile, and service websites built for reliability, ease of management, and search engine visibility.",
      icon: "wordpress",
    },
    {
      id: "woocommerce",
      title: "WooCommerce & E-commerce",
      description:
        "Complete online stores, product catalogs, shopping carts, checkout customization, payment gateway setup, and e-commerce functionality.",
      icon: "shopping-cart",
    },
    {
      id: "elementor-customization",
      title: "Elementor & WordPress Customization",
      description:
        "Pixel-perfect page building, theme customization, plugin setup, custom header/footer design, and ongoing visual improvements.",
      icon: "layout",
    },
    {
      id: "responsive-design",
      title: "Responsive Web Design",
      description:
        "Mobile-first layouts, clean typography, intuitive user interfaces, and consistent experiences across smartphones, tablets, and desktop displays.",
      icon: "smartphone",
    },
    {
      id: "website-redesign",
      title: "Website Redesign",
      description:
        "Modernize dated websites with fresh layouts, improved usability, cleaner code structure, and engaging interactive elements.",
      icon: "refresh-cw",
    },
    {
      id: "website-maintenance",
      title: "Website Maintenance",
      description:
        "Regular core and plugin updates, security monitoring, content revisions, technical troubleshooting, and dependable ongoing support.",
      icon: "shield-check",
    },
    {
      id: "speed-optimization",
      title: "Website Speed Optimization",
      description:
        "Improve loading times, image compression, caching strategies, Core Web Vitals optimization, and diagnosing performance bottlenecks.",
      icon: "zap",
    },
    {
      id: "frontend-dev",
      title: "Frontend Development",
      description:
        "Building responsive, interactive web interfaces and single-page applications using HTML5, CSS3, JavaScript, React, and Tailwind CSS.",
      icon: "code",
    },
  ],
};
