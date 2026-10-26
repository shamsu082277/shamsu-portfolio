import React from "react";
import { cn } from "@/lib/utils";

export interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "main" | "article" | "header" | "footer";
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export function PageContainer({
  as: Component = "div",
  children,
  className,
  size = "default",
  ...props
}: PageContainerProps) {
  const sizeClasses = {
    narrow: "max-w-5xl",
    default: "max-w-7xl",
    wide: "max-w-(--breakpoint-2xl)",
  };

  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

