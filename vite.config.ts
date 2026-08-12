import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    // tanstackStart already wires the TanStack Router plugin; adding it again
    // double-transforms route files (duplicate `hot` declaration).
    tanstackStart(),
    react(),
  ],
});
