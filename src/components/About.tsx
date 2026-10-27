import { profileData } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Background & Approach<span className="text-emerald-400">.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Building reliable, responsive, and performance-tuned websites for businesses and individuals worldwide.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              I am a <strong className="text-white font-semibold">Web Developer & WordPress Specialist</strong> based in {profileData.location}. I work with businesses, entrepreneurs, and individuals to create professional, user-friendly websites that achieve real business goals.
            </p>
            <p>
              My hands-on experience covers <span className="text-emerald-400 font-medium">WordPress development, WooCommerce online stores, custom Elementor layouts</span>, responsive frontend interfaces with <strong className="text-white">React, JavaScript, and Tailwind CSS</strong>, along with proactive website maintenance and speed optimization.
            </p>
            <p>
              In addition to client development, I have had the privilege of serving as a <strong className="text-white">Web Development Trainer</strong> at STS IT Training Institute & Infosys, helping aspiring learners grasp technical concepts and build practical coding skills. I also coordinate client deliverables at DiConLogy, ensuring projects run smoothly from concept to deployment.
            </p>

            {/* Quick Metrics Bar */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-[#111a2e] border border-white/5">
                <span className="text-slate-400 block mb-1">LOCATION</span>
                <span className="text-white font-semibold">Bangladesh (Remote)</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#111a2e] border border-white/5">
                <span className="text-slate-400 block mb-1">PRIMARY FOCUS</span>
                <span className="text-emerald-400 font-semibold">WordPress & Frontend</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#111a2e] border border-white/5 col-span-2 sm:col-span-1">
                <span className="text-slate-400 block mb-1">AVAILABILITY</span>
                <span className="text-white font-semibold">Open for Clients</span>
              </div>
            </div>
          </div>

          {/* Pillars Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-[#111a2e]/90 border border-white/5 hover:border-emerald-500/30 transition-all duration-200">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold">
                  01
                </span>
                <h3 className="text-base font-bold text-white">WordPress & E-commerce</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Tailored business websites, company profiles, and WooCommerce online stores with reliable product catalogs, carts, and payment integrations.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#111a2e]/90 border border-white/5 hover:border-emerald-500/30 transition-all duration-200">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold">
                  02
                </span>
                <h3 className="text-base font-bold text-white">Modern Frontend Code</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Interactive, clean, and mobile-first interfaces developed with HTML5, CSS3, JavaScript, React.js, and modern Tailwind utility architecture.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#111a2e]/90 border border-white/5 hover:border-emerald-500/30 transition-all duration-200">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold">
                  03
                </span>
                <h3 className="text-base font-bold text-white">Optimization & Support</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Speed optimization, troubleshooting errors, routine plugin/theme updates, and ongoing technical maintenance for continuous uptime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

