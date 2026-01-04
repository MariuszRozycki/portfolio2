import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200/70 bg-white/70 shadow-sm backdrop-blur",
        "dark:border-slate-800/70 dark:bg-slate-950/50",
        className
      )}
      {...props}
    />
  );
}
