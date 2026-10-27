"use client";

import { useState, useEffect } from "react";
import { projectsData, type Project } from "@/data/projects";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 md:py-28 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-14">
          <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>05 // SELECTED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects<span className="text-emerald-400">.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Real-world web applications, commercial client e-commerce stores, and open-source developer platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-2xl bg-[#111a2e] border border-white/5 hover:border-emerald-500/40 transition-all duration-300 overflow-hidden shadow-xl shadow-black/20 group"
            >
              <div>
                {/* Visual Header / Mockup Banner */}
                <div className="relative h-44 w-full bg-gradient-to-br from-[#16223b] via-[#0f172a] to-[#0a0f1d] border-b border-white/5 p-6 flex flex-col justify-between overflow-hidden">
                  <div className="absolute -right-4 -bottom-6 font-mono text-7xl text-white/[0.03] select-none font-bold">
                    {"</>"}
                  </div>

                  {/* Top Bar: Category & Status */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Live Verified
                    </span>
                  </div>

                  {/* Title & Tagline in Banner */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#0a0f1d] border border-white/5 text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                {/* View Details modal trigger */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 focus:outline-none py-1.5"
                >
                  <span>View Details</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* External Action Links */}
                <div className="flex items-center gap-2">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white text-slate-300 text-xs font-medium border border-white/5 transition-colors"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>Source Code</span>
                    </a>
                  )}

                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-[#0a0f1d] text-xs font-bold shadow-sm shadow-emerald-500/20 transition-colors"
                      aria-label={`${project.title} live demo`}
                    >
                      <span>Live Demo</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Detail Modal (Keeps everything on the same page) */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0f172a] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6 text-slate-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                    {selectedProject.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Project Case Study
                  </span>
                </div>
                <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-emerald-400 mt-0.5 font-medium">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Overview & Problem */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1">
                  {"//"} Project Overview
                </h4>
                <p className="text-sm leading-relaxed text-slate-200">
                  {selectedProject.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1">
                  {"//"} Role & Contribution
                </h4>
                <p className="text-sm leading-relaxed text-slate-300">
                  {selectedProject.role}
                </p>
              </div>
            </div>

            {/* Full Technology Stack */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2">
                {"//"} Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#16223b] border border-white/5 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Challenges & Solutions */}
            {selectedProject.challenges && selectedProject.challenges.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  {"//"} Challenges & Solutions
                </h4>
                <div className="space-y-2.5">
                  {selectedProject.challenges.map((c, i) => (
                    <div key={i} className="p-3.5 rounded-lg bg-[#111a2e] border border-white/5 text-xs sm:text-sm">
                      <p className="font-semibold text-white mb-1">
                        Challenge: <span className="font-normal text-slate-300">{c.challenge}</span>
                      </p>
                      <p className="font-semibold text-emerald-400">
                        Solution: <span className="font-normal text-slate-300">{c.solution}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Future Improvements */}
            {selectedProject.futureImprovements && selectedProject.futureImprovements.length > 0 && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2">
                  {"//"} Future Improvements
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  {selectedProject.futureImprovements.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-emerald-400 font-mono">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Modal Footer Links */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {selectedProject.links.github && (
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10 transition-colors"
                  >
                    <span>View Repository</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                {selectedProject.links.live && (
                  <a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-[#0a0f1d] text-xs font-bold transition-colors"
                  >
                    <span>Visit Live Website</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="text-xs font-mono text-slate-400 hover:text-white"
              >
                Press [Esc] or Click to Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

