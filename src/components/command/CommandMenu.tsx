import { useEffect, useMemo, useState } from "react";
import type React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Command, Search, CornerDownLeft, ExternalLink, Download } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { cv } from "../../data/cv";
import { asset } from "../../lib/asset";
import { cn } from "../../lib/cn";

type Cmd = {
  label: string;
  hint?: string;
  keywords?: string;
  run: () => void;
};

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const onHome = location.pathname === "/";

  const commands: Cmd[] = useMemo(() => {
    const go = (hash: string) => {
      if (onHome) {
        window.location.hash = hash;
      } else {
        navigate(`/${hash}`);
      }
      setOpen(false);
    };

    return [
      { label: "Go to About", hint: "#about", keywords: "about intro profile", run: () => go("#about") },
      { label: "Go to Resume snapshot", hint: "#resume", keywords: "resume cv snapshot", run: () => go("#resume") },
      { label: "Go to Projects", hint: "#projects", keywords: "projects work", run: () => go("#projects") },
      { label: "Go to Contact", hint: "#contact", keywords: "contact email", run: () => go("#contact") },
      { label: "Open full CV page", hint: "/resume", keywords: "resume cv full", run: () => { navigate("/resume"); setOpen(false); } },
      { label: "Download CV (PDF)", hint: "pdf", keywords: "download pdf cv", run: () => { window.open(asset(cv.assets.pdf), "_blank"); setOpen(false); } },
      { label: "Open GitHub", hint: "external", keywords: "github code", run: () => { window.open(cv.contact.github, "_blank"); setOpen(false); } },
      { label: "Email me", hint: "mailto", keywords: "email contact", run: () => { window.open(`mailto:${cv.contact.email}`, "_blank"); setOpen(false); } },
    ];
  }, [navigate, onHome]);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return commands;
    return commands.filter((c) => {
      const text = `${c.label} ${c.hint ?? ""} ${c.keywords ?? ""}`.toLowerCase();
      return text.includes(s);
    });
  }, [commands, q]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const isK = e.key.toLowerCase() === "k";
      if ((e.ctrlKey || e.metaKey) && isK) {
        e.preventDefault();
        setOpen((v: boolean) => !v);
        setQ("");
        return;
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => {
      const el = document.getElementById("cmdk-input") as HTMLInputElement | null;
      el?.focus();
    }, 0);
    return () => window.clearTimeout(t);
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 top-[12vh] w-[min(720px,92vw)] -translate-x-1/2 overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80"
          >
            <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-3 dark:border-slate-800">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-200 bg-white/70 dark:border-slate-800 dark:bg-slate-950/60">
                <Command className="h-4 w-4 text-slate-600 dark:text-slate-300" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/70 px-3 py-2 dark:border-slate-800 dark:bg-slate-950/60">
                  <Search className="h-4 w-4 text-slate-500" />
                  <input
                    id="cmdk-input"
                    value={q}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQ(e.target.value)}
                    placeholder="Type a command…"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  />
                  <span className="hidden text-xs text-slate-400 sm:inline">Esc</span>
                </div>
              </div>
            </div>

            <div className="max-h-[52vh] overflow-auto p-2">
              {filtered.length === 0 ? (
                <div className="p-6 text-sm text-slate-600 dark:text-slate-300">
                  No matches. Try “projects”, “download”, or “contact”.
                </div>
              ) : (
                <div className="grid gap-2">
                  {filtered.map((c: Cmd) => (
                    <button
                      key={c.label}
                      type="button"
                      onClick={c.run}
                      className={cn(
                        "flex w-full items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-left text-sm transition",
                        "hover:border-slate-200 hover:bg-white dark:hover:border-slate-800 dark:hover:bg-slate-950/60"
                      )}
                    >
                      <span className="font-medium text-slate-900 dark:text-slate-50">{c.label}</span>
                      <span className="inline-flex items-center gap-2 text-xs text-slate-500">
                        {c.label.toLowerCase().includes("download") ? <Download className="h-4 w-4" /> : null}
                        {c.label.toLowerCase().includes("open") || c.label.toLowerCase().includes("email") ? (
                          <ExternalLink className="h-4 w-4" />
                        ) : null}
                        {c.hint ? <span>{c.hint}</span> : null}
                        <CornerDownLeft className="h-4 w-4" />
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-slate-200 px-4 py-3 text-xs text-slate-500 dark:border-slate-800">
              Tip: Ctrl + K to open • Esc to close
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
