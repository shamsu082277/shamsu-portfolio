"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1d]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-white font-semibold text-lg tracking-tight focus:outline-none"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-sm font-bold group-hover:border-emerald-400 group-hover:bg-emerald-500/20 transition-all duration-200">
            SU
          </span>
          <span className="font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
            Shamsu<span className="text-emerald-400">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#111a2e]/70 border border-white/5 px-4 py-1.5 rounded-full backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-emerald-400 rounded-full transition-colors duration-150"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs lg:text-sm font-semibold text-[#0a0f1d] bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200"
          >
            <span>Let&apos;s Talk</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg focus:outline-none"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-[#0c1427] border-b border-white/10 shadow-xl space-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 text-base font-medium text-slate-300 hover:text-emerald-400 hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 px-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-2.5 px-4 text-sm font-semibold text-[#0a0f1d] bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow transition-colors"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

