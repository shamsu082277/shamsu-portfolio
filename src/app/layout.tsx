import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shamsu Uddin | Full-Stack Web Developer",
  description:
    "Personal developer portfolio of Shamsu Uddin — Full-Stack Web Developer building modern, responsive, and performant web applications with TypeScript, React, Next.js, and Node.js.",
  keywords: [
    "Shamsu Uddin",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Shamsu Uddin" }],
  creator: "Shamsu Uddin",
  openGraph: {
    title: "Shamsu Uddin | Full-Stack Web Developer",
    description:
      "Full-Stack Developer building modern, responsive, and performant web applications with TypeScript, React, Next.js, and Node.js.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#0a0f1d] text-[#cbd5e1] antialiased selection:bg-[#10b981]/30 selection:text-[#34d399]">
        {children}
      </body>
    </html>
  );
}
