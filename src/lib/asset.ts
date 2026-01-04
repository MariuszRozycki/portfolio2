/**
 * Builds a URL that respects Vite's BASE_URL (important for GitHub Pages).
 * Example: asset("pictures/tour-guide/tour-guide.jpg")
 */
export function asset(path: string) {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${path.replace(/^\//, "")}`;
}
