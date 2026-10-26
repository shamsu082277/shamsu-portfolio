import { siteConfig } from "@/data/profile";

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      <a
        href={siteConfig.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-muted hover:text-accent-sky transition-colors"
        aria-label="GitHub Repository"
      >
        <span className="font-mono text-xs">GitHub</span>
      </a>
    </div>
  );
}
