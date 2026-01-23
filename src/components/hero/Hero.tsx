import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { profile } from "../../data/profile";
import { cv } from "../../data/cv";
import { asset } from "../../lib/asset";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export function Hero() {
  return (
    <section className="relative pb-14 pt-10 sm:pb-20 sm:pt-16">
      <div className="container">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 inline-flex gap-2">
                <Sparkles className="h-4 w-4" />
                Open to opportunities • Remote-friendly
              </Badge>

              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {profile.name}
                <span className="block text-slate-500 dark:text-slate-300">
                  {profile.headline}
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {profile.tagline}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects">
                  <Button>
                    See projects <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>

                <Link to="/resume">
                  <Button variant="secondary">
                    View CV <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>

                <a href={asset(cv.assets.pdf)} target="_blank" rel="noreferrer">
                  <Button variant="ghost">
                    Download CV <Download className="h-4 w-4" />
                  </Button>
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-400">
                <span className="rounded-full border border-slate-200 bg-white/60 px-3 py-1 dark:border-slate-800 dark:bg-slate-950/50">
                  React
                </span>
                <span className="rounded-full border border-slate-200 bg-white/60 px-3 py-1 dark:border-slate-800 dark:bg-slate-950/50">
                  TypeScript
                </span>
                <span className="rounded-full border border-slate-200 bg-white/60 px-3 py-1 dark:border-slate-800 dark:bg-slate-950/50">
                  Supabase
                </span>
                <span className="rounded-full border border-slate-200 bg-white/60 px-3 py-1 dark:border-slate-800 dark:bg-slate-950/50">
                  AI workflows
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <HeroCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <div className="relative mx-auto max-w-lg">
      <div className="absolute -inset-2 rounded-[2.2rem] bg-slate-900/10 blur-2xl dark:bg-slate-100/10" />
      <div className="relative overflow-hidden rounded-[2.2rem] border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/50">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
              Currently building
            </div>
            <div className="mt-1 text-lg font-semibold">WikiForum</div>
            <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Knowledge base + forum with AI semantic search (RAG) that answers
              from verified wiki context and shows sources.
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Stat label="Focus" value="UX + clean code" />
          <Stat label="Stack" value="React + TS" />
          <Stat label="Data" value="Supabase" />
          <Stat label="AI" value="RAG search" />
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white/70 p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-200">
          <div className="font-semibold">What I enjoy most</div>
          <p className="mt-1 leading-relaxed text-slate-600 dark:text-slate-300">
            I love building predictable UI around tricky state — search, async
            flows, and “no surprises” UX. AI is cool, but reliability is cooler.
          </p>
        </div>
        <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          Built with React + TS, Redux Toolkit, Supabase (Postgres/Auth/Edge
          Functions), pgvector.
        </div>

        <div className="mt-6 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 animate-float rounded-full bg-emerald-500" />
            Available for interviews
          </span>
          <a
            href="#contact"
            className="font-semibold text-slate-900 hover:underline dark:text-slate-100"
          >
            Let&apos;s talk →
          </a>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-800 dark:bg-slate-950/60">
      <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}
