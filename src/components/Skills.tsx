import { skillsData } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-14">
          <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>03 // TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills<span className="text-emerald-400">.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Practical skills, tools, and frameworks I use to build, customize, and maintain modern web applications.
          </p>
        </div>

        {/* 4 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="p-6 sm:p-7 rounded-2xl bg-[#111a2e] border border-white/5 hover:border-emerald-500/30 transition-all duration-200 flex flex-col justify-between shadow-xl shadow-black/20"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-mono text-emerald-400/90 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    {category.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Badges without fake percentages */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3.5 py-2 rounded-xl bg-[#0a0f1d] border border-white/5 hover:border-emerald-500/40 hover:bg-[#16223b] transition-all duration-150 flex items-center gap-2 group/skill"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 group-hover/skill:bg-emerald-400" />
                      <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover/skill:text-white">
                        {skill}
                      </span>
                    </div>
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

