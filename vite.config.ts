import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      name: "type-guardian",
      entry: "src/index.ts",
      fileName: "index",
    },
    rollupOptions: {
      output: {
        name: "typeGuardian",
      },
    },
  },
  plugins: [dts({ entryRoot: "src" })],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@root": __dirname,
    },
  },
});
