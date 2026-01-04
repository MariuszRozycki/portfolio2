export type ExperienceItem = {
  title: string;
  org: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Front-end QA / Front-end Developer",
    org: "WikiForum (team project)",
    period: "2025 — present",
    bullets: [
      "Built and tested UI features in a React + TypeScript codebase (Redux Toolkit).",
      "Implemented AI-assisted search flows (semantic search + RAG-style answers) with Supabase + OpenAI embeddings.",
      "Collaborated via PR reviews, GitHub Projects, and CI checks."
    ]
  },
  {
    title: "Front-end Developer",
    org: "Zendesk Guide customization (commercial)",
    period: "2024 — 2025",
    bullets: [
      "Customized Zendesk Guide templates (HTML/CSS/JS) and improved UX for end-users.",
      "Extended ticket tables with CRM-driven custom columns and conditional form logic.",
      "Made components editable for non-technical staff."
    ]
  }
];
