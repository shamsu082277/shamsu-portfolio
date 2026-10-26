import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/profile";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#08090C" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name, url: siteConfig.links.github }],
  creator: siteConfig.name,
  metadataBase: new URL("https://github.com/shamsu082277/shamsu-portfolio"),
  openGraph: {
    type: "website",
    locale: "en_US",
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        {/* Anti-FOUC Theme Script: applies saved or system theme prior to first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('heroui-theme');
                  var theme = saved || 'dark';
                  if (saved === 'system') {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(theme);
                  document.documentElement.setAttribute('data-theme', theme);
                  document.documentElement.style.colorScheme = theme;
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-bg-primary text-text-primary selection:bg-accent-sky/20 selection:text-accent-sky font-sans">
        <Suspense fallback={<div className="h-16 w-full border-b border-border-subtle bg-bg-primary/80" />}>
          <Navbar />
        </Suspense>
        <main id="main-content" className="flex-1 focus-visible:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
