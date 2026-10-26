"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/profile";
import { PageContainer } from "./PageContainer";

const emptySubscribe = () => () => {};
const getCurrentYear = () => new Date().getFullYear();
const getServerYear = () => 2026;

export function Footer() {
  const currentYear = useSyncExternalStore(
    emptySubscribe,
    getCurrentYear,
    getServerYear
  );

  return (
    <footer className="w-full border-t border-border-subtle bg-bg-secondary/40 py-12 transition-colors duration-200">
      <PageContainer>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Mission Statement */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-bg-elevated border border-border-subtle font-mono text-xs font-bold text-accent-sky">
                SU
              </div>
              <span className="font-bold text-base tracking-tight text-text-primary">
                {siteConfig.name} {"//"} Workbench
              </span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
            <p className="font-mono text-xs text-text-muted">
              Built with Next.js 16, Tailwind CSS v4, and HeroUI v3.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-text-primary font-semibold">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-accent-sky transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Links */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-text-primary font-semibold">
              Source & Connect
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-text-muted hover:text-accent-sky transition-colors duration-150"
                >
                  <span>GitHub Repository</span>
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-text-muted hover:text-accent-sky transition-colors duration-150"
                >
                  Engineering FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-text-muted hover:text-accent-sky transition-colors duration-150"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-emerald" />
            <span>The Engineering Workbench</span>
          </p>
        </div>
      </PageContainer>
    </footer>
  );
}

