import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import type { Project } from "../../data/projects";
import { asset } from "../../lib/asset";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { cn } from "../../lib/cn";

type Tab = "Overview" | "Details" | "Tech stack";

export function ProjectDialog({
  project,
  onClose
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [tab, setTab] = useState<Tab>("Overview");

  useEffect(() => {
    if (!project) return;
    setTab("Overview");
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, onClose]);

  const body = useMemo(() => {
    if (!project) return null;

    if (tab === "Overview") {
      return (
        <div className="grid gap-6 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.links.live ? (
                <a href={project.links.live} target="_blank" rel="noreferrer">
                  <Button>
                    Live <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
              ) : null}
              {project.links.github ? (
                <a href={project.links.github} target="_blank" rel="noreferrer">
                  <Button variant="secondary">
                    GitHub <Github className="h-4 w-4" />
                  </Button>
                </a>
              ) : null}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
              <img
                src={asset(project.image)}
                alt={project.title}
                className="h-44 w-full object-cover"
              />
            </div>

            <div className="mt-3 text-xs text-slate-600 dark:text-slate-400">
              Tip: open the project and test it on mobile width — responsive layouts are my love language.
            </div>
          </div>
        </div>
      );
    }

    if (tab === "Details") {
      return <HtmlBlock html={project.detailsHtml ?? ""} />;
    }

    return <HtmlBlock html={project.stackHtml ?? ""} />;
  }, [project, tab]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            aria-label="Close"
            className="absolute inset-0 cursor-default bg-black/40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-950"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-6 py-4 dark:border-slate-800">
              <div>
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                  Project
                </div>
                <div className="text-lg font-semibold">{project.title}</div>
              </div>

              <button
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900"
                aria-label="Close dialog"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="px-6 pt-4">
              <div className="flex flex-wrap gap-2">
                {(["Overview", "Details", "Tech stack"] as Tab[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={cn(
                      "rounded-full px-4 py-2 text-xs font-semibold transition",
                      tab === t
                        ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                        : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="max-h-[72vh] overflow-auto px-6 py-6">
              {body}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function HtmlBlock({ html }: { html: string }) {
  return (
    <div
      className={cn(
        "text-sm leading-relaxed text-slate-700 dark:text-slate-200",
        "[&>h4]:mt-4 [&>h4]:text-base [&>h4]:font-semibold",
        "[&>p]:mt-2 [&>p]:text-slate-600 dark:[&>p]:text-slate-300",
        "[&>ul]:mt-3 [&>ul]:list-disc [&>ul]:space-y-2 [&>ul]:pl-5",
        "[&_span]:font-semibold",
        "[&_img]:h-6 [&_img]:w-6 [&_img]:rounded-md [&_img]:object-contain",
        "[&_li]:text-slate-700 dark:[&_li]:text-slate-200",
        "[&_.h5]:text-base [&_.fw-bold]:font-semibold"
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
