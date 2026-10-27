import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0f1d] text-[#cbd5e1] selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* 1. Navbar with Section Anchors & Direct Contact CTA */}
      <Navbar />

      {/* Main Single-Page Content Pipeline */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section with Side-by-Side Bio & Professional Photo */}
        <Hero />

        {/* 3. About Me */}
        <About />

        {/* 4. Services Offered (WordPress, WooCommerce, Frontend, Speed Optimization, etc.) */}
        <Services />

        {/* 5. Technical Skills Categorized Badges */}
        <Skills />

        {/* 6. Professional Work Experience Timeline */}
        <Experience />

        {/* 7. Selected Projects with Live Links & On-Page Detail Modal */}
        <Projects />

        {/* 8. Education Timeline */}
        <Education />

        {/* 9. Let's Work Together & Contact Section */}
        <Contact />
      </main>

      {/* 10. Simple Semantic Footer */}
      <Footer />
    </div>
  );
}
