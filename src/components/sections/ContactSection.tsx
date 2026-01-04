import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Copy, Check } from "lucide-react";
import { profile } from "../../data/profile";
import { SectionHeader } from "../SectionHeader";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.links.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  }

  return (
    <section id="contact" className="py-14 sm:py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build something people enjoy using."
          description="If you want a teammate who cares about UX, reliability, and fast iteration — I’m in."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-base font-semibold">Reach me</h3>

            <div className="mt-4 grid gap-3 text-sm">
              <a
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/60 p-4 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950/40 dark:hover:bg-slate-900"
                href={`mailto:${profile.links.email}`}
              >
                <span className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {profile.links.email}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    copyEmail();
                  }}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:underline dark:text-slate-200"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </a>

              <a
                className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/60 p-4 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950/40 dark:hover:bg-slate-900"
                href={`tel:${profile.links.phone.replace(/\s/g, "")}`}
              >
                <Phone className="h-4 w-4" />
                {profile.links.phone}
              </a>

              <a
                className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/60 p-4 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950/40 dark:hover:bg-slate-900"
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>

              <a
                className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/60 p-4 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950/40 dark:hover:bg-slate-900"
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-base font-semibold">Quick note</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              I’m happy to jump on a short call and talk through your product, stack, and expectations.
              If you already have a job post — send it and I’ll map my experience to your needs.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${profile.links.email}?subject=Let%E2%80%99s%20talk%20about%20a%20role`}>
                <Button>Email me</Button>
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <Button variant="secondary">Message on LinkedIn</Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
