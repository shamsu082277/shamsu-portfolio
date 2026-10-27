import { profileData } from "@/data/profile";

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 relative border-t border-white/5 bg-[#0a0f1d]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>02 // SERVICES OFFERED</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What I Can Do For You<span className="text-emerald-400">.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Practical, client-focused web development and optimization services tailored to your project goals.
          </p>
        </div>

        {/* 8 Services Grid (4x2 on large screens, 2 cols on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileData.services.map((service, index) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-[#111a2e] border border-white/5 hover:border-emerald-500/30 transition-all duration-200 flex flex-col justify-between group shadow-lg shadow-black/20 hover:-translate-y-1"
            >
              <div>
                {/* Number & Icon badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    0{index + 1}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-emerald-400/50 group-hover:bg-emerald-400 transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Client Ready</span>
                <span className="text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

