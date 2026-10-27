import { profileData } from "@/data/profile";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#070c17] py-12 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          {/* Brand & Designation */}
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
              SU
            </span>
            <div>
              <p className="text-sm font-bold text-white">
                {profileData.name}
              </p>
              <p className="text-xs font-mono text-slate-400">
                {profileData.title}
              </p>
            </div>
          </div>

          {/* Center Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono text-slate-300">
            <a href="#about" className="hover:text-emerald-400 transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-emerald-400 transition-colors">
              Services
            </a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">
              Projects
            </a>
            <a href="#education" className="hover:text-emerald-400 transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-emerald-400 text-slate-300 transition-colors"
              aria-label="GitHub Profile"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            <a
              href={profileData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-emerald-400 text-slate-300 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a
              href={profileData.links.freelancer}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-emerald-400 text-slate-300 transition-colors font-bold text-xs"
              aria-label="Freelancer Profile"
            >
              FL
            </a>

            <a
              href={profileData.links.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-emerald-400 text-slate-300 transition-colors"
              aria-label="Dribbble Portfolio"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10.198 10.988c-.604-.047-2.215-.146-4.328.324-.26-.582-.54-1.168-.838-1.75 2.502-1.285 3.522-2.766 3.655-2.969 1.057 1.258 1.511 2.802 1.511 4.395zm-3.033-5.642c-.22.285-1.293 1.625-3.693 2.809-1.171-2.102-2.457-3.957-2.645-4.225 1.834-.652 4.498-.06 6.338 1.416zm-8.318-2.091c.205.291 1.488 2.127 2.658 4.22-2.036.657-4.474.966-7.234.966-.109 0-.214-.006-.321-.008.971-2.261 2.763-4.043 4.897-5.178zm-6.847 7.245v.081c.07.001.144.002.222.002 2.999 0 5.679-.354 7.915-1.077.27.525.525 1.054.764 1.579-3.753 1.229-7.228 3.978-7.794 4.453-1.127-1.442-1.107-3.238-1.107-5.038zm3.645 11.233c.725-.623 3.864-3.136 7.42-4.351 1.045 2.738 1.536 5.375 1.642 6.007-2.716 1.134-6.059.519-9.062-1.656zm10.742.279c-.131-.692-.619-3.189-1.621-5.836 1.944-.485 3.568-.426 4.195-.386-.188 2.571-1.111 4.793-2.574 6.222z" />
              </svg>
            </a>

            <a
              href="#hero"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <p>© 2026 {profileData.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Built with Next.js, React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

