import { type ReactNode, useEffect, useState } from "react";
import { applyTheme, getInitialTheme, type Theme } from "../../lib/theme";
import { Navbar } from "./Navbar";
import { CommandMenu } from "../command/CommandMenu";

export function Layout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // SSR not used here, but keep it safe
    try {
      return getInitialTheme();
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <div className="min-h-screen">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-white dark:focus:bg-slate-100 dark:focus:text-slate-900"
      >
        Skip to content
      </a>

      <BackgroundDecor />

      <Navbar theme={theme} onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))} />

      <main id="content" className="relative">
        {children}
        <CommandMenu />
      </main>
    </div>
  );
}

function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-slate-200 blur-3xl dark:bg-slate-800/60" />
      <div className="absolute right-[-120px] top-24 h-80 w-80 rounded-full bg-slate-200 blur-3xl dark:bg-slate-800/60" />
      <div className="absolute bottom-[-160px] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-slate-200 blur-3xl dark:bg-slate-800/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,23,42,0.06),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(148,163,184,0.08),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,rgba(15,23,42,0.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.9)_1px,transparent_1px)] [background-size:64px_64px] dark:opacity-[0.06]" />
    </div>
  );
}
