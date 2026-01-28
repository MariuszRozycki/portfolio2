import { useMemo, useState } from "react";
import { Search, Filter, ExternalLink, Github } from "lucide-react";
import { projects } from "../../data/projects";
import { SectionHeader } from "../SectionHeader";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { asset } from "../../lib/asset";

export function ProjectsSection({
  onOpenProject,
}: {
  onOpenProject: (id: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string>("All");

  const tags = useMemo(() => {
    const set = new Set<string>();
    for (const p of projects) for (const t of p.tags) set.add(t);
    return ["All", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects
      .filter((p) => (tag === "All" ? true : p.tags.includes(tag)))
      .filter((p) => {
        if (!q) return true;
        return (
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
        );
      });
  }, [query, tag]);

  return (
    <section id="projects" className="py-14 sm:py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Projects"
          title="Work that actually exists on the internet."
          description="Clickable, responsive, and built to learn real-world workflows."
        />

        <div className="mb-6 grid gap-3 md:grid-cols-3">
          <Card className="p-4 md:col-span-2">
            <label className="flex items-center gap-2">
              <Search className="h-4 w-4 text-slate-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects by name, tag, or description…"
                className="
                            w-full bg-transparent py-2 text-sm outline-none
                            placeholder:text-slate-400 dark:placeholder:text-slate-600
                          "
              />
            </label>
          </Card>

          <Card className="p-4">
            <label className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-slate-500" />
              <select
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="w-full bg-transparent py-2 text-sm outline-none
                            placeholder:text-slate-400 dark:placeholder:text-slate-600"
              >
                {tags.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {visible.map((p) => (
            <Card key={p.id} className="group overflow-hidden">
              <button
                onClick={() => onOpenProject(p.id)}
                className="block w-full text-left"
              >
                <div className="relative">
                  <img
                    src={asset(p.image)}
                    alt={p.title}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    {p.tags.slice(0, 5).map((t) => (
                      <Badge
                        key={t}
                        className="border-white/30 bg-white/20 text-white"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {p.description.length > 300
                          ? p.description.slice(0, 300).replace(/\s+\S*$/, "") +
                            "…"
                          : p.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>
              </button>
              <div className="border-t border-slate-200/60 p-4 dark:border-slate-800/60">
                <div className="flex flex-wrap items-center gap-2">
                  {p.links.live ? (
                    <a href={p.links.live} target="_blank" rel="noreferrer">
                      <Button variant="secondary" className="h-9 px-3">
                        Live <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  ) : null}

                  {p.links.github ? (
                    <a href={p.links.github} target="_blank" rel="noreferrer">
                      <Button variant="ghost" className="h-9 px-3">
                        GitHub <Github className="h-4 w-4" />
                      </Button>
                    </a>
                  ) : null}

                  {!p.links.github && p.codeSamplesUrl ? (
                    <a href={p.codeSamplesUrl} target="_blank" rel="noreferrer">
                      <Button variant="ghost" className="h-9 px-3">
                        Code samples <Github className="h-4 w-4" />
                      </Button>
                    </a>
                  ) : null}

                  {!p.links.github && !p.codeSamplesUrl && p.repoNote ? (
                    <>
                      <Badge className="border-slate-300/60 bg-slate-50 text-slate-700 dark:border-slate-700/60 dark:bg-slate-900 dark:text-slate-200">
                        Private repo
                      </Badge>
                      <span className="text-xs text-slate-600 dark:text-slate-400">
                        {p.repoNote}
                      </span>
                    </>
                  ) : null}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {visible.length === 0 ? (
          <div className="mt-10 text-sm text-slate-600 dark:text-slate-400">
            No results. Try a different tag or search phrase.
          </div>
        ) : null}
      </div>
    </section>
  );
}
