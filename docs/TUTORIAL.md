# Build a Developer Portfolio with Free AI Tools

This tutorial documents the end-to-end journey of building a modern, high-performance developer portfolio using modern web technologies and AI pair-programming tools.

---

## 1. Introduction
A developer portfolio is more than a resume—it is a functional showcase of your engineering capabilities, code quality, design sensibility, and problem-solving approach. In this tutorial series, we document every architectural decision, prompt, and development milestone from initial ideation to production deployment.

## 2. Tools and Prerequisites
* **Next.js 16 (App Router)**: React framework for server-rendered and statically generated web applications.
* **TypeScript 5**: Type-safe development with strict type inference.
* **Tailwind CSS v4**: High-performance CSS engine for utility-first styling.
* **HeroUI v3**: Modern, accessible React component library built with Tailwind integration.
* **Git & GitHub**: Version control and public repository hosting.
* **Vercel**: Zero-config hosting platform with instant global edge deployment.
* **AI Coding Assistant**: Guided architecture, reference benchmarking, and code generation.

## 3. Creating the Next.js Project
The project was initialized using `create-next-app` with TypeScript, Tailwind CSS, and App Router enabled:
```bash
npx create-next-app@latest shamsu-portfolio --typescript --tailwind --app --eslint
```

## 4. Installing HeroUI
HeroUI v3 packages were installed alongside core dependencies:
```bash
npm install @heroui/react @heroui/styles
```

## 5. Project Structure
The repository follows a clean, modular architecture:
```
shamsu-portfolio/
├── docs/               # Project logs, design decisions, prompts, and tutorials
├── public/             # Static assets, icons, and resume files
├── src/
│   ├── app/            # App Router routes and page layouts
│   ├── components/     # Modular, reusable UI components
│   │   ├── home/       # Home-specific section components
│   │   ├── layout/     # Navbar, Footer, and responsive drawer
│   │   ├── projects/   # Bento cards and filter grids
│   │   └── shared/     # Buttons, chips, badges, and section headers
│   ├── data/           # Structured TypeScript datasets (profile, projects, experience, faq)
│   └── lib/            # Shared utility functions and helpers
```

## 6. Designing the Portfolio: Reference Benchmarking & Decisions
Rather than designing in isolation or blindly copying an existing template, we conducted a competitive benchmark across six diverse developer portfolios to extract best-in-class visual and functional patterns:

### Primary Inspirations
1. **Manav Portfolio Lab (Visual Inspiration)**:
   - *Key takeaway*: The "Lab / Engineering Workstation" theme. OLED dark mode background (`#08090C`), glowing 1px borders, diagnostic UI cards, live status telemetry badges (`STATUS: AVAILABLE`), and subtle monospace accents.
2. **Cyntax (Feature Inspiration)**:
   - *Key takeaway*: Authoritative engineering credibility. A comprehensive recruiter/client FAQ accordion (answering questions on workflow, pricing models, code ownership, and timelines), architectural philosophy statements, and structured service breakdowns.

### Secondary Inspirations
* **Nishchay Jain**: Bento-grid project cards, categorized technical arsenal (Frontend, Backend, AI, Cloud), and floating glassmorphic navigation dock.
* **Mahmoud Zalt (`zalt.me`)**: Terminal command prompt aesthetics and high-utility features.
* **Maame Yaa Twumasi**: Minimalist, high-clarity engineering narrative with zero fluff.
* **Nayan Bobde**: Structured baseline resume flow showing clean single-page organization.

### The Synthesized Design Direction: "The Engineering Workbench"
We synthesized these findings into an original concept: **"The Engineering Workbench"**. It combines the visual precision of a high-tech experimental lab with the professional clarity of an enterprise engineering consultant.

*Full details and token specifications are documented in [DESIGN-DECISIONS.md](./DESIGN-DECISIONS.md).*

## 7. Implementing the Pages
*(Upcoming Milestone: Layout, Navbar, Hero, Bento Projects, Skills Radar, FAQ, and Contact)*

## 8. Testing & Quality Assurance
*(Upcoming Milestone: Automated linting, accessibility audit with axe/Lighthouse, responsive testing)*

## 9. Publishing to GitHub
*(Upcoming Milestone: Git commits, branch management, and repository setup)*

## 10. Deploying to Vercel
*(Upcoming Milestone: Continuous deployment via Vercel GitHub integration)*

## 11. Troubleshooting & Common Pitfalls
* **Network Sandbox Restrictions during Reference Research**:
  * *Issue*: Outbound terminal requests (`curl`) were blocked by environment network isolation.
  * *Solution*: Leveraged public search indices, package metadata, and developer registries to analyze references accurately without inventing facts.

## 12. Lessons Learned
* **Benchmarking Before Coding**: Spending time analyzing real-world developer portfolios helps identify both visual strengths (what looks distinct and polished) and functional strengths (what actually convinces recruiters and clients to hire you).
* **Separation of Design from Implementation**: Locking down design tokens, component architecture, and copy structures in documentation before touching UI code prevents costly rewrites and inconsistency.
