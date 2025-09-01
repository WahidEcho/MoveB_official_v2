import * as React from "react";
import { cn } from "@/lib/utils";

export function CardGlass({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border",
        "border-[var(--mb-border)] bg-[var(--mb-surface)] backdrop-blur",
        "shadow-[inset_0_0_1px_rgba(255,255,255,0.12)]",
        "transition hover:shadow-[0_0_24px_0_rgba(6,86,255,0.25)]",
        className
      )}
      {...props}
    />
  );
}


