import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type Variant = "primary" | "secondary" | "ghost";

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition",
        "focus:outline-none focus:ring-2 focus:ring-slate-400/60 dark:focus:ring-slate-500/60",
        variant === "primary" &&
          "bg-slate-900 text-white shadow-sm hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white",
        variant === "secondary" &&
          "border border-slate-200 bg-white text-slate-800 shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900",
        variant === "ghost" &&
          "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900",
        className
      )}
      {...props}
    />
  );
}
