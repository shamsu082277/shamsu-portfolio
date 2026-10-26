import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  children?: React.ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  children,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "space-y-3",
        isCenter ? "text-center mx-auto max-w-2xl" : "text-left max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-accent-sky",
            isCenter && "justify-center"
          )}
        >
          <span className="text-accent-sky/60" aria-hidden="true">
            {"//"}
          </span>
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-text-muted leading-relaxed">
          {description}
        </p>
      )}

      {children && <div className="pt-2">{children}</div>}
    </div>
  );
}
