export type CvTechStack = {
  frontend: string[];
  stateAndData: string[];
  backendPlatforms: string[];
  testing: string[];
  toolingDevOps: string[];
  collaborationWorkflow: string[];
};

export type CvExperience = {
  title: string;
  org: string;
  period: string;
  role?: string;
  technologies?: string[];
  bullets: string[];
  kind: "work" | "project" | "education";
};

export type CvEducation = {
  org: string;
  degree: string;
  period: string;
};

export const cv = {
  name: "Mariusz Rozycki",
  role: "Front-End Developer",
  contact: {
    phone: "+47 939 28 270",
    email: "mariusz.frontdev@gmail.com",
    location: "Sosnowiec, Poland / Oppegård, Norway",
    github: "https://github.com/MariuszRozycki",
    linkedin: "https://www.linkedin.com/in/mariusz-rozycki/",
  },
  summary:
    "Front-End developer with a Higher Professional Degree in Front-End Development (Noroff). I build modern React + TypeScript applications with a strong focus on clean, modular code and great UX. Recently I’ve been working on an AI-assisted wiki search using Redux Toolkit, Supabase (Postgres/Auth/Storage/Edge Functions), pgvector and OpenAI embeddings.",
  techStack: {
    frontend: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "SCSS/Sass", "Tailwind CSS", "Bootstrap", "React-Bootstrap"],
    stateAndData: ["Redux Toolkit (RTK)", "REST APIs", "React Router"],
    backendPlatforms: ["Node.js (basic)", "Express (MERN basics)", "Supabase (Postgres, Auth, Storage, Edge Functions)", "MongoDB", "WordPress / WP API"],
    testing: ["React Testing Library", "Jest", "Cypress", "Playwright"],
    toolingDevOps: ["Git", "GitHub", "GitHub Actions (CI)", "Vite", "VS Code", "ESLint", "Prettier"],
    collaborationWorkflow: ["GitHub (PRs, code reviews)", "GitHub Projects (boards)", "Trello", "Quick onboarding to Jira/Confluence/Bitbucket"],
  } satisfies CvTechStack,
  education: [
    {
      org: "Noroff",
      degree: "Higher Professional Degree in Front-End Development",
      period: "2021 — 2025",
    },
    {
      org: "Ignatianum University",
      degree: "Bachelor of pedagogy",
      period: "2003 — 2008",
    },
  ] satisfies CvEducation[],
  languages: [
    { label: "Polish", level: "Native" },
    { label: "Norwegian", level: "B2" },
    { label: "English", level: "B2" },
  ],
  experience: [
    {
      kind: "work",
      title: "WikiForum (Wiki + AI Search)",
      org: "Company Norway Consulting",
      role: "Backend + Front-End Developer",
      period: "Apr 2025 — Present",
      technologies: ["React", "TypeScript", "Redux Toolkit", "Vite", "Tailwind", "Supabase", "pgvector", "OpenAI embeddings"],
      bullets: [
        "Built AI-assisted wiki search: semantic vector search (pgvector) + Edge Function that generates answers only from wiki context.",
        "Implemented search state & async flows (RTK thunks/slices), including history and sources returned to the UI.",
        "Worked with Supabase (RPC, RLS/auth-aware access patterns) and integrated results with React Router navigation.",
        "Collaborated in a team workflow (PR reviews, tasks, QA checks) to maintain clean, modular code.",
      ],
    },
    {
      kind: "work",
      title: "Customer Service Portal (Zendesk based)",
      org: "Freelance",
      role: "Front-End Developer",
      period: "Apr 2024 — Freelance",
      technologies: ["HTML", "CSS", "JavaScript", "Zendesk Guide", "CRM integration", "HTML template customization"],
      bullets: [
        "Implemented dynamic banners and extended the ticket table with CRM-driven custom columns.",
        "Added conditional form logic and refactored layouts to improve UX.",
        "Enabled content updates for non-technical staff via editable HTML components.",
      ],
    },
    {
      kind: "project",
      title: "Holidaze — Booking App",
      org: "Project",
      role: "Front-End Developer",
      period: "Nov 2024 — Feb 2025",
      technologies: ["React", "React Router", "TypeScript", "Vite", "Bootstrap / React-Bootstrap", "GitHub Pages"],
      bullets: [
        "Built a customer/admin booking UI integrating with the Holidaze API.",
        "Focused on modern front-end practices and seamless UX across devices.",
      ],
    },
    {
      kind: "project",
      title: "Tour Guide — Travel Guide App",
      org: "Project",
      role: "Front-End Developer",
      period: "Oct 2024 — Dec 2024",
      technologies: ["React", "React Router", "Bootstrap", "SCSS", "Vite", "Fetch API", "Node.js (backend setup)", "Netlify"],
      bullets: [
        "Built a responsive app for exploring and booking guided tours.",
        "Implemented interactive listings and modular SCSS styling with a clean component architecture.",
      ],
    },
    {
      kind: "project",
      title: "Noroff Dev Agency (team project)",
      org: "Project",
      role: "QA, Scrum Master",
      period: "Feb 2023 — Mar 2023",
      technologies: ["Vite", "Bootstrap", "Jest", "Cypress", "ESLint", "Prettier", "GitHub Actions", "Netlify"],
      bullets: [
        "Worked in a team with clear responsibilities across dev, QA, and project management.",
        "Helped ensure thorough testing and alignment with best practices.",
      ],
    },
    {
      kind: "project",
      title: "eCommerce Store — React App",
      org: "Project",
      role: "Front-End Developer",
      period: "Oct 2024 — Nov 2024",
      technologies: ["React", "React Router", "Styled-components", "Fetch API", "Netlify"],
      bullets: [
        "Built product browsing, cart, and checkout flows with responsive UI.",
        "Integrated API-driven product data with clean state & navigation patterns.",
      ],
    },
    {
      kind: "project",
      title: "GAVEL — Auction Website",
      org: "Project",
      role: "Front-end Developer",
      period: "Nov 2023 — Jan 2024",
      technologies: ["JavaScript", "SASS/SCSS", "HTML", "CSS", "Netlify"],
      bullets: [
        "Built an auction platform with auth, listing creation, bidding, pagination, search, and sorting.",
        "Used localStorage for persistence and designed responsive prototypes in Adobe XD.",
      ],
    },
  ] satisfies CvExperience[],
  assets: {
    pdf: "cv/mariusz-rozycki-cv-en.pdf",
  },
} as const;
