import { cn } from "@heroui/styles";

export { cn };

/**
 * Format a date string to a human-readable display.
 */
export function formatDate(dateString: string): string {
  try {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  } catch {
    return dateString;
  }
}
