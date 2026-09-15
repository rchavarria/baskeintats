/// <reference types="vitest/config" />
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// https://vite.dev/config/
export default defineConfig({
  base: "/baskeintats/",
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("node_modules/react") ||
            id.includes("node_modules/react-dom") ||
            id.includes("node_modules/react-router")
          ) {
            return "vendor-react";
          }
        },
      },
    },
  },
  test: {
    globals: true,
    // Split tests into projects so the (expensive) jsdom environment is only
    // created for the tests that actually need a DOM.
    projects: [
      {
        extends: true,
        test: {
          name: "unit",
          environment: "node",
          include: ["src/**/*.test.ts"],
          exclude: ["src/hooks/**/*.test.ts"],
        },
      },
      {
        extends: true,
        test: {
          name: "dom",
          environment: "jsdom",
          setupFiles: "./src/test/setup.ts",
          include: ["src/**/*.test.tsx", "src/hooks/**/*.test.ts"],
        },
      },
    ],
  },
});
