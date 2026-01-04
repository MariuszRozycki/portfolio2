import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Change this if you deploy under a different GitHub Pages subpath.
// Example: "/portfolio2/" -> https://<user>.github.io/portfolio2/
const BASE = "/portfolio2/";

export default defineConfig({
  base: BASE,
  plugins: [react()],
});
