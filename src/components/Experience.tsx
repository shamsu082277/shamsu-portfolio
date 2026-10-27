import { experienceData } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative border-t border-white/5 bg-[#0a0f1d]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-14">
          <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>04 // WORK HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience<span className="text-emerald-400">.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Training future developers, coordinating client deliverables, and building real-world websites.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-white/10 ml-3 sm:ml-6 space-y-10">
          {experienceData.map((item) => (
            <div key={item.id} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0a0f1d] border-2 border-emerald-400 group-hover:scale-125 group-hover:bg-emerald-400 transition-all duration-200" />

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#111a2e] border border-white/5 hover:border-emerald-500/30 transition-all duration-200 shadow-xl shadow-black/20">
                {/* Header: Role & Organization */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-emerald-400/90">
                      {item.organization}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 self-start sm:self-auto">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {item.period}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-5">
                  {item.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="text-emerald-400 font-mono text-xs mt-0.5">▸</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-[#0a0f1d] border border-white/5 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

