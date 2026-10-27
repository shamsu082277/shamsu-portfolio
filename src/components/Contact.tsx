"use client";

import { useState } from "react";
import { profileData } from "@/data/profile";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleComposeEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim()) {
      setFormStatus("Please enter your message before opening your email client.");
      return;
    }

    const subjectText = encodeURIComponent(
      formData.subject.trim() || `Project Inquiry from ${formData.name.trim() || "Client"}`
    );
    const bodyText = encodeURIComponent(
      `Hi Shamsu,\n\n${formData.message.trim()}\n\nBest regards,\n${formData.name.trim() || "Potential Client"}`
    );

    window.location.href = `mailto:${profileData.links.email}?subject=${subjectText}&body=${bodyText}`;
    setFormStatus("Opening your default email app with your pre-filled inquiry...");
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>07 // START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Work Together<span className="text-emerald-400">.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Whether you need a new WordPress website, a WooCommerce store, frontend development, or ongoing website maintenance, I am here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Email & Profile Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#111a2e] border border-white/5 space-y-4 shadow-xl">
              <h3 className="text-lg font-bold text-white">Direct Email</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Reach out anytime for project quotes, consultations, or inquiries. I respond to all messages promptly.
              </p>

              {/* Email Pill / Copy */}
              <div className="p-3.5 rounded-xl bg-[#0a0f1d] border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-mono text-xs sm:text-sm text-slate-200 truncate">
                    {profileData.links.email}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors flex-shrink-0"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Response time: Usually within 24 hours</span>
              </div>
            </div>

            {/* Verified Public Platforms */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#111a2e] border border-white/5 space-y-3 shadow-xl">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Verified Public Profiles
              </h4>

              <div className="space-y-2.5">
                {/* GitHub */}
                <a
                  href={profileData.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0a0f1d] border border-white/5 hover:border-emerald-500/30 text-slate-300 hover:text-white transition-all text-sm group"
                >
                  <span className="flex items-center gap-3 font-medium">
                    <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>GitHub</span>
                  </span>
                  <span className="font-mono text-xs text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href={profileData.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0a0f1d] border border-white/5 hover:border-emerald-500/30 text-slate-300 hover:text-white transition-all text-sm group"
                >
                  <span className="flex items-center gap-3 font-medium">
                    <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span>LinkedIn</span>
                  </span>
                  <span className="font-mono text-xs text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </a>

                {/* Freelancer */}
                <a
                  href={profileData.links.freelancer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0a0f1d] border border-white/5 hover:border-emerald-500/30 text-slate-300 hover:text-white transition-all text-sm group"
                >
                  <span className="flex items-center gap-3 font-medium">
                    <span className="w-4 h-4 flex items-center justify-center font-bold text-[10px] text-emerald-400">
                      FL
                    </span>
                    <span>Freelancer.com</span>
                  </span>
                  <span className="font-mono text-xs text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </a>

                {/* Dribbble */}
                <a
                  href={profileData.links.dribbble}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0a0f1d] border border-white/5 hover:border-emerald-500/30 text-slate-300 hover:text-white transition-all text-sm group"
                >
                  <span className="flex items-center gap-3 font-medium">
                    <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10.198 10.988c-.604-.047-2.215-.146-4.328.324-.26-.582-.54-1.168-.838-1.75 2.502-1.285 3.522-2.766 3.655-2.969 1.057 1.258 1.511 2.802 1.511 4.395zm-3.033-5.642c-.22.285-1.293 1.625-3.693 2.809-1.171-2.102-2.457-3.957-2.645-4.225 1.834-.652 4.498-.06 6.338 1.416zm-8.318-2.091c.205.291 1.488 2.127 2.658 4.22-2.036.657-4.474.966-7.234.966-.109 0-.214-.006-.321-.008.971-2.261 2.763-4.043 4.897-5.178zm-6.847 7.245v.081c.07.001.144.002.222.002 2.999 0 5.679-.354 7.915-1.077.27.525.525 1.054.764 1.579-3.753 1.229-7.228 3.978-7.794 4.453-1.127-1.442-1.107-3.238-1.107-5.038zm3.645 11.233c.725-.623 3.864-3.136 7.42-4.351 1.045 2.738 1.536 5.375 1.642 6.007-2.716 1.134-6.059.519-9.062-1.656zm10.742.279c-.131-.692-.619-3.189-1.621-5.836 1.944-.485 3.568-.426 4.195-.386-.188 2.571-1.111 4.793-2.574 6.222z" />
                    </svg>
                    <span>Dribbble</span>
                  </span>
                  <span className="font-mono text-xs text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Pre-filled Email Composer (7 cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleComposeEmail}
              className="p-7 rounded-2xl bg-[#111a2e] border border-white/5 shadow-xl space-y-5"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Send a Message</h3>
                <p className="text-xs text-slate-400">
                  Pre-fills a message directly in your default email client to {profileData.links.email}.
                </p>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-xs font-mono uppercase text-slate-400">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Smith"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0a0f1d] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-emerald-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="block text-xs font-mono uppercase text-slate-400">
                  Subject / Service Needed
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. WordPress Redesign / WooCommerce Store"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0a0f1d] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-emerald-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-mono uppercase text-slate-400">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, timeline, or requirements..."
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0a0f1d] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-emerald-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              {formStatus && (
                <p className="text-xs font-mono text-emerald-400 bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-500/20">
                  {formStatus}
                </p>
              )}

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-[#0a0f1d] font-bold text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Compose Email Message</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

