import type { NextConfig } from "next";

// Prevent worker concurrency file lock collisions on Windows during prerender
process.env.NEXT_CPU_COUNT = "1";

const nextConfig: NextConfig = {
  /* Clean standard Next.js config */
};

export default nextConfig;
