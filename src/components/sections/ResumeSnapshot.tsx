import { motion } from "framer-motion";
import { Download, ArrowRight, Sparkles } from "lucide-react";
import { cv } from "../../data/cv";
import { asset } from "../../lib/asset";
import { Link } from "react-router-dom";
import { SectionHeader } from "../SectionHeader";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export function ResumeSnapshot() {
  const topStack = [
    "React",
    "TypeScript",
    "Redux Toolkit",
    "Supabase",
    "pgvector",
    "OpenAI embeddings"
  ];

  return (
    <section id="resume" className="py-14 sm:py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Resume"
          title="CV highlights — but in a way your eyes will enjoy."
          description="Pulled directly from my CV: tech stack, timeline, and the “what I actually did” part."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="relative overflow-hidden p-6 lg:col-span-2">
            <div aria-hidden className="absolute inset-0 opacity-70 [background:radial-gradient(600px_circle_at_20%_10%,rgba(148,163,184,0.22),transparent_55%)]" />
            <div aria-hidden className="absolute inset-0 opacity-70 [background:radial-gradient(500px_circle_at_80%_45%,rgba(148,163,184,0.18),transparent_55%)]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200">
                <Sparkles className="h-4 w-4" />
                Snapshot
              </div>

              <h3 className="mt-4 text-base font-semibold">{cv.role}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {cv.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {topStack.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href={asset(cv.assets.pdf)} target="_blank" rel="noreferrer">
                  <Button>
                    Download CV <Download className="h-4 w-4" />
                  </Button>
                </a>
                <Link to="/resume">
                  <Button variant="secondary">
                    View resume <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-base font-semibold">Timeline</h3>
            <div className="mt-4 space-y-3">
              {cv.experience.slice(0, 3).map((it) => (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45 }}
                  className="rounded-2xl border border-slate-200 bg-white/60 p-4 dark:border-slate-800 dark:bg-slate-950/40"
                >
                  <div className="text-sm font-semibold">{it.title}</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">{it.period}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-white/60 p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-200">
              Languages:{" "}
              <span className="font-medium">
                {cv.languages.map((l) => `${l.label} (${l.level})`).join(" • ")}
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
