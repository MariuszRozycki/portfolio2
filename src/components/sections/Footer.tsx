import { profile } from "../../data/profile";
import { cv } from "../../data/cv";
import { asset } from "../../lib/asset";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200/60 py-10 dark:border-slate-800/60">
      <div className="container flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <div className="text-sm text-slate-600 dark:text-slate-400">
          © {year} {profile.name}. Built with React + TypeScript.
        </div>
        <div className="text-sm text-slate-600 dark:text-slate-400">
          <a className="underline underline-offset-4 hover:text-slate-900 dark:hover:text-slate-100" href={asset(cv.assets.pdf)} target="_blank" rel="noreferrer">Download CV (PDF)</a>
        </div>
      </div>
    </footer>
  );
}
