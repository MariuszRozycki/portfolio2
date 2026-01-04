import { profile } from "../../data/profile";
import { cv } from "../../data/cv";
import { SectionHeader } from "../SectionHeader";
import { Card } from "../ui/Card";

export function About() {
  return (
    <section id="about" className="py-14 sm:py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About"
          title="A calm UI is a competitive advantage."
          description="I care about performance, accessibility, and code that a teammate can understand on their first coffee."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-base font-semibold">What I do (from CV)</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              I build front-end apps with <span className="font-semibold">React</span> and <span className="font-semibold">TypeScript</span>.
              I like strong UI foundations: good components, consistent spacing, and predictable state.
              When a feature is complicated, I try to make the UX feel simple.
            </p>

            <ul className="mt-4 grid gap-2 text-sm text-slate-700 dark:text-slate-200">
              <li>• Semantic search + AI-assisted answers (RAG-style)</li>
              <li>• Modern state management (Redux Toolkit)</li>
              <li>• Component-driven UI and responsive layouts</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-base font-semibold">How I work</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              I use AI as a productivity tool — for scaffolding, refactors, tests, and quicker iterations —
              but I keep the final codebase readable, reviewed, and maintainable.
            </p>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-white/60 p-4 text-sm dark:border-slate-800 dark:bg-slate-950/40">
              <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">Location</div>
              <div className="mt-1 font-semibold">{profile.location}</div>
              <div className="mt-3 text-xs font-semibold text-slate-600 dark:text-slate-400">Contact</div>
              <div className="mt-1 text-slate-700 dark:text-slate-200">{profile.links.email}</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
