import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../../data/profile";
import { cn } from "../../lib/cn";
import type { Theme } from "../../lib/theme";

type NavItem = { label: string; href?: string; to?: string };

const navItems: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
  { to: "/resume", label: "CV" },
];

export function Navbar({
  theme,
  onToggleTheme,
}: {
  theme: Theme;
  onToggleTheme: () => void;
}) {
  const location = useLocation();
  const onHome = location.pathname === "/";

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onScroll = () => setOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header className="sticky top-0 z-40">
      <div className="border-b border-slate-200/60 bg-white/70 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/60">
        <div className="container flex h-16 items-center justify-between">
          {onHome ? (
            <a href="#top" className="group inline-flex items-center gap-2">
              <div className="h-9 w-9 rounded-2xl bg-slate-900 text-white shadow-sm dark:bg-slate-100 dark:text-slate-900">
                <img src="./pictures/user/mariusz-rozycki.png" alt="" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold">{profile.name}</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  {profile.headline}
                </div>
              </div>
            </a>
          ) : (
            <Link to="/#top" className="group inline-flex items-center gap-2">
              <div className="h-9 w-9 rounded-2xl bg-slate-900 text-white shadow-sm dark:bg-slate-100 dark:text-slate-900">
                <img src="./pictures/user/mariusz-rozycki.png" alt="" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold">{profile.name}</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  {profile.headline}
                </div>
              </div>
            </Link>
          )}

          {/* Desktop */}
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((it) => {
              const key = it.to ?? it.href ?? it.label;
              const common =
                "text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white";
              if (it.to) {
                return (
                  <Link key={key} to={it.to} className={common}>
                    {it.label}
                  </Link>
                );
              }
              const to = onHome ? (it.href ?? "#top") : `/${it.href ?? "#top"}`;
              return onHome ? (
                <a key={key} href={to} className={common}>
                  {it.label}
                </a>
              ) : (
                <Link key={key} to={to} className={common}>
                  {it.label}
                </Link>
              );
            })}

            <div className="ml-2 flex items-center gap-2">
              <IconLink href={profile.links.github} label="GitHub">
                <Github className="h-4 w-4" />
              </IconLink>
              <IconLink href={profile.links.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </IconLink>
              <IconLink href={`mailto:${profile.links.email}`} label="Email">
                <Mail className="h-4 w-4" />
              </IconLink>

              <button
                onClick={onToggleTheme}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onToggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900"
              aria-label="Open menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={cn("md:hidden", open ? "block" : "hidden")}>
        <div className="border-b border-slate-200 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
          <div className="container py-4">
            <div className="grid gap-2">
              {navItems.map((it) => {
                const key = it.to ?? it.href ?? it.label;
                const common =
                  "rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-900";
                if (it.to) {
                  return (
                    <Link
                      key={key}
                      to={it.to}
                      onClick={() => setOpen(false)}
                      className={common}
                    >
                      {it.label}
                    </Link>
                  );
                }
                const to = onHome
                  ? (it.href ?? "#top")
                  : `/${it.href ?? "#top"}`;
                return onHome ? (
                  <a
                    key={key}
                    href={to}
                    onClick={() => setOpen(false)}
                    className={common}
                  >
                    {it.label}
                  </a>
                ) : (
                  <Link
                    key={key}
                    to={to}
                    onClick={() => setOpen(false)}
                    className={common}
                  >
                    {it.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 flex items-center gap-3">
              <PillLink href={profile.links.github} label="GitHub" />
              <PillLink href={profile.links.linkedin} label="LinkedIn" />
              <PillLink href={`mailto:${profile.links.email}`} label="Email" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900"
      aria-label={label}
      title={label}
    >
      {children}
    </a>
  );
}

function PillLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900"
    >
      {label}
    </a>
  );
}
