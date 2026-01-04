import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-200",
        className
      )}
      {...props}
    />
  );
}
