export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Vite", "React Router", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    title: "State & Data",
    items: ["Redux Toolkit", "Async thunks", "REST APIs", "Supabase (Postgres, Auth, Storage)"]
  },
  {
    title: "Quality",
    items: ["ESLint", "Prettier", "Jest", "Cypress / Playwright", "GitHub Actions (CI/CD)"]
  },
  {
    title: "UI / UX",
    items: ["Responsive UI", "Accessibility basics", "Figma / Adobe XD", "Component design systems"]
  },
  {
    title: "Backend basics",
    items: ["Node.js", "Express", "MongoDB / Atlas", "Edge Functions (Deno)"]
  }
];
