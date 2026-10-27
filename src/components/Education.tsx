import { educationData } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative border-t border-white/5 bg-[#0a0f1d]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-14">
          <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>06 // ACADEMIC FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education<span className="text-emerald-400">.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Academic qualifications and professional software development training.
          </p>
        </div>

        {/* Education Timeline / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-2xl bg-[#111a2e] border border-white/5 hover:border-emerald-500/30 transition-all duration-200 flex flex-col justify-between shadow-xl shadow-black/20"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-medium text-emerald-400">
                      {item.institution}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                    {item.period}
                  </span>
                </div>

                <p className="text-xs font-mono text-slate-400 mb-4 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{item.location}</span>
                </p>

                {/* Highlights */}
                <ul className="space-y-2 pt-2 border-t border-white/5">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <span className="text-emerald-400 font-mono text-xs mt-0.5">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Status footer */}
              <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Verified Education
                </span>
                <span>Graduated</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

