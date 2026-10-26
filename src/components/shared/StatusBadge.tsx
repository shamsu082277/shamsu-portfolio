import { cn } from "@/lib/utils";

export interface StatusBadgeProps {
  status?: string;
  detail?: string;
  className?: string;
  variant?: "emerald" | "sky" | "neutral";
  pulse?: boolean;
}

export function StatusBadge({
  status = "Workbench v1.0",
  detail = "Systems Nominal",
  className,
  variant = "emerald",
  pulse = true,
}: StatusBadgeProps) {
  const dotColor =
    variant === "sky"
      ? "bg-accent-sky"
      : variant === "neutral"
      ? "bg-text-muted"
      : "bg-accent-emerald";

  const ringColor =
    variant === "sky"
      ? "bg-accent-sky/75"
      : variant === "neutral"
      ? "bg-text-muted/75"
      : "bg-accent-emerald/75";

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono font-medium",
        "bg-bg-elevated/80 border border-border-subtle backdrop-blur-sm text-text-primary shadow-xs",
        className
      )}
      aria-label={`Status: ${status}${detail ? ` - ${detail}` : ""}`}
    >
      <span className="relative flex h-2 w-2 items-center justify-center" aria-hidden="true">
        {pulse && (
          <span
            className={cn(
              "absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping",
              ringColor
            )}
          />
        )}
        <span className={cn("relative inline-flex h-2 w-2 rounded-full", dotColor)} />
      </span>
      <span className="tracking-wide uppercase text-[11px] font-semibold">{status}</span>
      {detail && (
        <>
          <span className="text-border-subtle" aria-hidden="true">
            /
          </span>
          <span className="text-text-muted text-[11px] font-normal">{detail}</span>
        </>
      )}
    </div>
  );
}

