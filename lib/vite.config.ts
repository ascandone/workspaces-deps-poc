import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { externalizeDeps } from "vite-plugin-externalize-deps";
import react from "@vitejs/plugin-react";

const isExternal = (id: string) => !id.startsWith(".");

export default defineConfig({
  publicDir: false,
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    externalizeDeps(),
  ],
  build: {
    target: "es2015",
    outDir: "./dist",
    lib: {
      entry: "./src/index.ts",
      formats: ["es", "cjs"],
      name: "mylib",
      fileName: (format) => `${format}/index.js`,
    },
    rollupOptions: {
      external: isExternal,
      output: {
        format: "es",
        dir: "dist",
        preserveModules: true,
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
