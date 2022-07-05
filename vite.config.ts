import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import VitePluginHtmlEnv from "vite-plugin-html-env";
// https://vitejs.dev/config/
export default defineConfig({
  //https://www.npmjs.com/package/vite-plugin-html-env
 //dotenv환경변수를 vite에서 html파일에 쓰기 위하여
  plugins: [react(), VitePluginHtmlEnv()],
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
