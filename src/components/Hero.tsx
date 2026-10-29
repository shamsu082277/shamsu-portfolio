"use client";

import Image from "next/image";
import { profileData } from "@/data/profile";

export function Hero() {

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-teal-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-mono font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>AVAILABLE FOR FREELANCE & CONTRACTS</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono text-emerald-400 font-medium">
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                {profileData.name}<span className="text-emerald-400">.</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-300 tracking-tight">
                {profileData.title}
              </h2>
            </div>

            {/* Natural First-Person Introduction */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {profileData.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-[#0a0f1d] font-bold text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200"
              >
                <span>View Projects</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#111a2e] hover:bg-[#16223b] border border-white/10 hover:border-emerald-500/30 text-white font-semibold text-sm transition-all duration-200"
              >
                <span>Let&apos;s Work Together</span>
              </a>

              {/* Direct Resume Download Button */}
              <a
                href="/resume.pdf"
                download="Shamsu_Uddin_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/40 text-slate-300 hover:text-white font-mono text-sm transition-all duration-200 shadow-sm"
                aria-label="Download Shamsu Uddin's Resume (PDF)"
              >
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Resume</span>
              </a>
            </div>

            {/* Direct Email Fallback Note */}
            <p className="text-xs font-mono text-slate-400 pt-1">
              Need an updated copy or having trouble downloading? Email me directly at{" "}
              <a
                href={`mailto:${profileData.links.email}?subject=Resume%20Inquiry%20-%20Shamsu%20Uddin`}
                className="text-emerald-400 hover:text-emerald-300 underline font-semibold transition-colors"
              >
                {profileData.links.email}
              </a>
            </p>

            {/* Verified Social Profile Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-3 text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mr-1">
                Verified:
              </span>

              {/* GitHub */}
              <a
                href={profileData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-emerald-400 text-slate-300 border border-white/5 hover:border-emerald-500/30 transition-all"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={profileData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-emerald-400 text-slate-300 border border-white/5 hover:border-emerald-500/30 transition-all"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Freelancer */}
              <a
                href={profileData.links.freelancer}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-emerald-400 text-slate-300 border border-white/5 hover:border-emerald-500/30 transition-all font-bold text-xs"
                aria-label="Freelancer Profile"
                title="Freelancer"
              >
                FL
              </a>

              {/* Dribbble */}
              <a
                href={profileData.links.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-emerald-400 text-slate-300 border border-white/5 hover:border-emerald-500/30 transition-all"
                aria-label="Dribbble Portfolio"
                title="Dribbble"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10.198 10.988c-.604-.047-2.215-.146-4.328.324-.26-.582-.54-1.168-.838-1.75 2.502-1.285 3.522-2.766 3.655-2.969 1.057 1.258 1.511 2.802 1.511 4.395zm-3.033-5.642c-.22.285-1.293 1.625-3.693 2.809-1.171-2.102-2.457-3.957-2.645-4.225 1.834-.652 4.498-.06 6.338 1.416zm-8.318-2.091c.205.291 1.488 2.127 2.658 4.22-2.036.657-4.474.966-7.234.966-.109 0-.214-.006-.321-.008.971-2.261 2.763-4.043 4.897-5.178zm-6.847 7.245v.081c.07.001.144.002.222.002 2.999 0 5.679-.354 7.915-1.077.27.525.525 1.054.764 1.579-3.753 1.229-7.228 3.978-7.794 4.453-1.127-1.442-1.107-3.238-1.107-5.038zm3.645 11.233c.725-.623 3.864-3.136 7.42-4.351 1.045 2.738 1.536 5.375 1.642 6.007-2.716 1.134-6.059.519-9.062-1.656zm10.742.279c-.131-.692-.619-3.189-1.621-5.836 1.944-.485 3.568-.426 4.195-.386-.188 2.571-1.111 4.793-2.574 6.222z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href={`mailto:${profileData.links.email}`}
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-emerald-400 text-slate-300 border border-white/5 hover:border-emerald-500/30 transition-all"
                aria-label="Direct Email"
                title="Email"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Professional Photo (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500 via-teal-500 to-emerald-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-500" />

              {/* Photo Frame Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-emerald-500/30 bg-[#0f172a] shadow-2xl">
                <Image
                  src="/shamsu.png"
                  alt="Shamsu Uddin - Web Developer & WordPress Specialist"
                  fill
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                  priority
                  className="object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d]/75 via-transparent to-transparent pointer-events-none" />

                {/* Diagnostic Corner Label */}
                <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 bg-[#0a0f1d]/90 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-200 font-semibold">{profileData.name}</span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

