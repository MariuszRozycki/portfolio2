# Modern Portfolio (Vite + React + TypeScript + Tailwind)

This is a redesigned, modern version of the portfolio.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## GitHub Pages deployment
This repo is configured for GitHub Pages with Vite `base` set to:

- `/portfolio2/`

If you deploy under a different path, change `BASE` in `vite.config.ts` **and** update `public/404.html`.

## Update content
- Profile text/links: `src/data/profile.ts`
- Projects: `src/data/projects.ts`
- Skills: `src/data/skills.ts`
- Experience: `src/data/experience.ts`
