export type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio_theme";

export function getInitialTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;

  // fallback to OS preference
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");

  localStorage.setItem(STORAGE_KEY, theme);
}
