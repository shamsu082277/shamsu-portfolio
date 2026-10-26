"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";
import { StatusBadge } from "../shared/StatusBadge";
import { PageContainer } from "./PageContainer";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile menu on route change without setState-in-effect
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href.startsWith("/#")) {
      return pathname === "/" && typeof window !== "undefined" && window.location.hash === href.replace("/", "");
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-bg-primary/80 backdrop-blur-md transition-colors duration-200">
      <PageContainer>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand / Monogram */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sky focus-visible:ring-offset-2 p-1 -m-1"
              aria-label={`${siteConfig.name} - Return to Homepage`}
            >
              {/* Monogram Badge */}
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-bg-elevated border border-border-subtle font-mono text-sm font-bold text-accent-sky group-hover:border-accent-sky/50 transition-colors">
                <span className="tracking-tighter">SU</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold tracking-tight text-text-primary group-hover:text-accent-sky transition-colors">
                  {siteConfig.name}
                </span>
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                  Workbench
                </span>
              </div>
            </Link>

            {/* Desktop Status Telemetry */}
            <div className="hidden xl:block pl-2 border-l border-border-subtle">
              <StatusBadge status={siteConfig.status.label} detail={siteConfig.status.detail} />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 text-sm font-medium"
            aria-label="Main Navigation"
          >
            {siteConfig.navLinks.map((link) => {
              const active = isActiveLink(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sky focus-visible:ring-offset-1 ${
                    active
                      ? "text-accent-sky font-semibold bg-bg-elevated/60"
                      : "text-text-muted hover:text-text-primary hover:bg-bg-elevated/40"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle + Contact CTA + Mobile Menu Button */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle />

            {/* Desktop Primary CTA */}
            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-accent-sky text-accent-sky-foreground hover:bg-accent-sky-hover transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sky focus-visible:ring-offset-2 shadow-xs cursor-pointer"
            >
              Get in Touch
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex md:hidden items-center justify-center w-10 h-10 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-elevated border border-border-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sky focus-visible:ring-offset-2 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span className="sr-only">Toggle navigation menu</span>
              {isMobileMenuOpen ? (
                // Close Icon (X)
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </PageContainer>

      {/* Mobile Navigation Drawer / Panel */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-b border-border-subtle bg-bg-secondary/95 backdrop-blur-md px-4 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          <PageContainer>
            <div className="flex flex-col gap-3">
              {/* Mobile Status Badge */}
              <div className="pb-3 border-b border-border-subtle">
                <StatusBadge status={siteConfig.status.label} detail={siteConfig.status.detail} />
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
                {siteConfig.navLinks.map((link) => {
                  const active = isActiveLink(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center min-h-[44px] px-3.5 py-2.5 rounded-lg text-base font-medium transition-colors ${
                        active
                          ? "bg-bg-elevated text-accent-sky font-semibold"
                          : "text-text-muted hover:text-text-primary hover:bg-bg-elevated/60"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile Primary Action */}
              <div className="pt-3 border-t border-border-subtle">
                <Link
                  href="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center min-h-[44px] w-full px-4 py-2.5 rounded-lg text-base font-medium bg-accent-sky text-accent-sky-foreground hover:bg-accent-sky-hover transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </PageContainer>
        </div>
      )}
    </header>
  );
}
