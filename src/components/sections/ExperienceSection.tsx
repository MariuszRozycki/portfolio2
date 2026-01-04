import { SectionHeader } from "../SectionHeader";
import { cv } from "../../data/cv";
import { Card } from "../ui/Card";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-14 sm:py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title="Collaboration > hero mode."
          description="I like small PRs, clear commits, and predictable releases."
        />

        <div className="grid gap-6">
          {cv.experience.map((e) => (
            <Card key={e.title + e.org} className="p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <div className="text-base font-semibold">{e.title}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">{e.org}</div>
                </div>
                <div className="text-xs font-medium text-slate-600 dark:text-slate-400">{e.period}</div>
              </div>

              <ul className="mt-4 grid gap-2 text-sm text-slate-700 dark:text-slate-200">
                {e.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
