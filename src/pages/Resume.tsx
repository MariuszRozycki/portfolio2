import { useMemo, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Download,
  ExternalLink,
  Copy,
  Check,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Printer,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cv } from "../data/cv";
import { asset } from "../lib/asset";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";

type Tab = "CV" | "PDF";

function SectionTitle({
  children,
  right,
}: {
  children: string;
  right?: ReactNode;
}) {
  return (
    <div className="mb-3 flex items-center justify-between gap-3">
      <h2 className="text-base font-semibold tracking-tight sm:text-lg">
        {children}
      </h2>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200/70 bg-white/50 px-3 py-1 text-xs text-slate-700 dark:border-slate-800/70 dark:bg-slate-950/40 dark:text-slate-200 print:bg-white print:text-slate-900 print:border-slate-300">
      {children}
    </span>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/60 text-slate-800 dark:border-slate-800/70 dark:bg-slate-950/50 dark:text-slate-200 print:bg-white print:border-slate-300">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs text-slate-500 dark:text-slate-400">
          {label}
        </div>
        {href ? (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="block truncate text-sm font-medium text-slate-800 hover:underline dark:text-slate-100 print:text-slate-900"
          >
            {value}
          </a>
        ) : (
          <div className="truncate text-sm font-medium text-slate-800 dark:text-slate-100 print:text-slate-900">
            {value}
          </div>
        )}
      </div>
    </div>
  );
}

function TabButton({
  active,
  icon,
  children,
  onClick,
}: {
  active: boolean;
  icon: ReactNode;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition",
        "border",
        active
          ? "border-slate-200 bg-white text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-100"
          : "border-transparent bg-transparent text-slate-600 hover:border-slate-200 hover:bg-white/40 dark:text-slate-300 dark:hover:border-slate-800 dark:hover:bg-slate-950/30",
        "print:hidden",
      ].join(" ")}
      aria-pressed={active}
    >
      {icon}
      {children}
    </button>
  );
}

function EntryCard({
  title,
  org,
  role,
  period,
  technologies,
  bullets,
}: {
  title: string;
  org: string;
  role?: string;
  period: string;
  technologies?: string[];
  bullets: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/40 p-4 dark:border-slate-800/70 dark:bg-slate-950/30 print:bg-white print:border-slate-300">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="min-w-0">
          <div className="text-sm font-semibold text-slate-900 dark:text-slate-50 print:text-slate-900">
            {title}
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-300 print:text-slate-700">
            {org}
            {role ? ` · ${role}` : ""}
          </div>
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400 print:text-slate-600">
          {period}
        </div>
      </div>

      {technologies?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {technologies.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
      ) : null}

      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-200 print:text-slate-800">
        {bullets.map((b, i) => (
          <li key={i}>{b.replace(/\.\.\./g, "")}</li>
        ))}
      </ul>
    </div>
  );
}

export function Resume() {
  const [tab, setTab] = useState<Tab>("CV");
  const [copied, setCopied] = useState(false);

  const experience = useMemo(() => cv.experience, []);
  const work = experience.filter((e) => e.kind === "work");
  const projects = experience.filter((e) => e.kind === "project");

  const topSkills = [
    ...cv.techStack.frontend.slice(0, 6),
    ...cv.techStack.stateAndData.slice(0, 4),
    ...cv.techStack.backendPlatforms.slice(0, 4),
  ].slice(0, 12);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(cv.contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  };

  const onPrint = () => window.print();

  return (
    <div className="pb-20 pt-6 sm:pt-10 print:pb-0 print:pt-0">
      <div className="container print:max-w-none print:px-0">
        {/* Top bar */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between print:hidden">
          <Link
            to="/#top"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <Button variant="ghost" onClick={onPrint}>
              Print <Printer className="h-4 w-4" />
            </Button>

            <a href={asset(cv.assets.pdf)} target="_blank" rel="noreferrer">
              <Button variant="secondary">
                Resume PDF <ExternalLink className="h-4 w-4" />
              </Button>
            </a>

            <a href={asset(cv.assets.pdf)} download>
              <Button>
                Download my CV <Download className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-6"
        >
          <Card className="relative overflow-hidden p-6 sm:p-8 print:shadow-none print:bg-white print:border-slate-300">
            <div
              aria-hidden
              className="absolute inset-0 opacity-40 [background:radial-gradient(1200px_circle_at_15%_10%,rgba(148,163,184,0.22),transparent_55%)] print:hidden"
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-30 [background:radial-gradient(900px_circle_at_85%_45%,rgba(148,163,184,0.18),transparent_55%)] print:hidden"
            />
            <div className="relative grid gap-6 lg:grid-cols-[1.7fr,1fr]">
              {/* Left */}
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="inline-flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    CV page
                  </Badge>
                </div>

                <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl print:text-3xl">
                  {cv.name}
                </h1>
                <p className="mt-2 text-base text-slate-700 dark:text-slate-200 print:text-slate-800">
                  {cv.role}
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 print:text-slate-700">
                  {cv.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {topSkills.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <a href={cv.contact.github} target="_blank" rel="noreferrer">
                    <Button variant="ghost" aria-label="GitHub">
                      <Github className="h-4 w-4" />
                    </Button>
                  </a>
                  <a
                    href={cv.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="ghost" aria-label="LinkedIn">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </a>

                  <Button
                    variant="ghost"
                    onClick={copyEmail}
                    aria-label={copied ? "Email copied" : "Copy email"}
                    title={copied ? "Copied!" : "Copy email"}
                  >
                    {copied ? "Email copied" : "Copy email"}
                    {copied ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>

                  <div className="ml-auto hidden items-center gap-2 lg:flex print:hidden">
                    <TabButton
                      active={tab === "CV"}
                      icon={<FileText className="h-4 w-4" />}
                      onClick={() => setTab("CV")}
                    >
                      Web CV
                    </TabButton>
                    <TabButton
                      active={tab === "PDF"}
                      icon={<ExternalLink className="h-4 w-4" />}
                      onClick={() => setTab("PDF")}
                    >
                      PDF
                    </TabButton>
                  </div>
                </div>
              </div>

              {/* Right - quick contact */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 lg:hidden print:hidden">
                  <TabButton
                    active={tab === "CV"}
                    icon={<FileText className="h-4 w-4" />}
                    onClick={() => setTab("CV")}
                  >
                    Web CV
                  </TabButton>
                  <TabButton
                    active={tab === "PDF"}
                    icon={<ExternalLink className="h-4 w-4" />}
                    onClick={() => setTab("PDF")}
                  >
                    PDF
                  </TabButton>
                </div>

                <div className="rounded-2xl border border-slate-200/70 bg-white/40 p-4 dark:border-slate-800/70 dark:bg-slate-950/30 print:bg-white print:border-slate-300">
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-50 print:text-slate-900">
                    Contact
                  </div>
                  <div className="mt-3 space-y-3">
                    <ContactRow
                      icon={<Mail className="h-4 w-4" />}
                      label="Email"
                      value={cv.contact.email}
                      href={`mailto:${cv.contact.email}`}
                    />
                    <ContactRow
                      icon={<Phone className="h-4 w-4" />}
                      label="Phone"
                      value={cv.contact.phone}
                      href={`tel:${cv.contact.phone.replace(/\s/g, "")}`}
                    />
                    <ContactRow
                      icon={<MapPin className="h-4 w-4" />}
                      label="Location"
                      value={cv.contact.location}
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200/70 bg-white/40 p-4 dark:border-slate-800/70 dark:bg-slate-950/30 print:bg-white print:border-slate-300">
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-50 print:text-slate-900">
                    Languages
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cv.languages.map((l) => (
                      <Chip key={l.label}>
                        {l.label} · {l.level}
                      </Chip>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CONTENT */}
        <div className="mt-6">
          {tab === "PDF" ? (
            <Card className="overflow-hidden p-0 print:hidden">
              <div className="border-b border-slate-200/70 p-4 text-sm text-slate-600 dark:border-slate-800/70 dark:text-slate-300">
                PDF preview (if your browser blocks it, use “Resume PDF” above)
              </div>
              <iframe
                title="CV PDF"
                src={asset(cv.assets.pdf)}
                className="h-[78vh] w-full"
              />
            </Card>
          ) : (
            <div className="grid gap-6 lg:grid-cols-12">
              {/* MAIN */}
              <div className="space-y-6 lg:col-span-8">
                <Card className="p-6 print:shadow-none print:bg-white print:border-slate-300">
                  <SectionTitle>Experience</SectionTitle>
                  <div className="space-y-4">
                    {work.map((e) => (
                      <EntryCard
                        key={`${e.title}-${e.period}`}
                        title={e.title}
                        org={e.org}
                        role={e.role}
                        period={e.period}
                        technologies={e.technologies}
                        bullets={e.bullets}
                      />
                    ))}
                  </div>
                </Card>

                <Card className="p-6 print:shadow-none print:bg-white print:border-slate-300">
                  <SectionTitle>Selected projects</SectionTitle>
                  <div className="space-y-4">
                    {projects.map((e) => (
                      <EntryCard
                        key={`${e.title}-${e.period}`}
                        title={e.title}
                        org={e.org}
                        role={e.role}
                        period={e.period}
                        technologies={e.technologies}
                        bullets={e.bullets}
                      />
                    ))}
                  </div>
                </Card>

                <Card className="p-6 print:shadow-none print:bg-white print:border-slate-300">
                  <SectionTitle>Education</SectionTitle>
                  <div className="space-y-3">
                    {cv.education.map((ed) => (
                      <div
                        key={`${ed.org}-${ed.period}`}
                        className="rounded-2xl border border-slate-200/70 bg-white/40 p-4 dark:border-slate-800/70 dark:bg-slate-950/30 print:bg-white print:border-slate-300"
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <div className="text-sm font-semibold text-slate-900 dark:text-slate-50 print:text-slate-900">
                            {ed.degree}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 print:text-slate-600">
                            {ed.period}
                          </div>
                        </div>
                        <div className="mt-1 text-sm text-slate-600 dark:text-slate-300 print:text-slate-700">
                          {ed.org}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* SIDEBAR */}
              <div className="space-y-6 lg:col-span-4 lg:sticky lg:top-6 lg:self-start print:static">
                <Card className="p-6 print:shadow-none print:bg-white print:border-slate-300">
                  <SectionTitle>Core stack</SectionTitle>

                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Frontend
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {cv.techStack.frontend.map((s) => (
                          <Chip key={s}>{s}</Chip>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        State & Data
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {cv.techStack.stateAndData.map((s) => (
                          <Chip key={s}>{s}</Chip>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Platforms
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {cv.techStack.backendPlatforms.map((s) => (
                          <Chip key={s}>{s}</Chip>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 print:shadow-none print:bg-white print:border-slate-300">
                  <SectionTitle>Testing</SectionTitle>
                  <div className="flex flex-wrap gap-2">
                    {cv.techStack.testing.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 print:shadow-none print:bg-white print:border-slate-300">
                  <SectionTitle>Tooling & DevOps</SectionTitle>
                  <div className="flex flex-wrap gap-2">
                    {cv.techStack.toolingDevOps.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 print:shadow-none print:bg-white print:border-slate-300">
                  <SectionTitle>Collaboration</SectionTitle>
                  <div className="flex flex-wrap gap-2">
                    {cv.techStack.collaborationWorkflow.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 print:shadow-none print:bg-white print:border-slate-300">
                  <SectionTitle>Links</SectionTitle>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={cv.contact.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="secondary">
                        GitHub <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                    <a
                      href={cv.contact.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="secondary">
                        LinkedIn <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                    <a href={`mailto:${cv.contact.email}`}>
                      <Button variant="secondary">
                        Email <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>

        {/* Print helper */}
        <div className="mt-10 text-xs text-slate-500 dark:text-slate-400 print:hidden">
          Tip: Press{" "}
          <span className="rounded border border-slate-200 px-1.5 py-0.5 dark:border-slate-800">
            Ctrl
          </span>{" "}
          +{" "}
          <span className="rounded border border-slate-200 px-1.5 py-0.5 dark:border-slate-800">
            P
          </span>{" "}
          to print or save as PDF.
        </div>
      </div>
    </div>
  );
}
