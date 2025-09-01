import * as React from "react";
import { cn } from "@/lib/utils";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs",
        "border border-[var(--mb-border)] bg-[var(--mb-surface)] text-[var(--mb-text)] backdrop-blur",
        className,
      )}
      {...props}
    />
  );
}

export default Badge;


