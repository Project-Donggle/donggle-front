import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@map", replacement: resolve(__dirname, "src/domains/map") },
      { find: "@post", replacement: resolve(__dirname, "src/domains/post") },
      { find: "@user", replacement: resolve(__dirname, "src/domains/user") },
      { find: "@global", replacement: resolve(__dirname, "src/global") },
      { find: "@UI", replacement: resolve(__dirname, "src/UI") },
    ],
  },
});
