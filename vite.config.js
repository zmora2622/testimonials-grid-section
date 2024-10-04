import { defineConfig } from "vite";
export default defineConfig({
 base: "./",
 build: {
  outDir: "./docs/",
 },
 css: {
  preprocessorOptions: {
   scss: {
    api: "modern-compiler", // or "modern", "legacy"
   },
  },
 },
});
