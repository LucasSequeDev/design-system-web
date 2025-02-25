import { dirname, extname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import react from "@vitejs/plugin-react";
import { glob } from "glob";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { configDefaults } from "vitest/config";

const __dirname = dirname(fileURLToPath(import.meta.url));

const inputs = glob
  .sync("lib/**/*.{ts,tsx}")
  .map((file) => [
    relative("lib", file.slice(0, file.length - extname(file).length)),
    fileURLToPath(new URL(file, import.meta.url)),
  ]);

export default defineConfig({
  plugins: [
    react(),
    dts({ include: ["lib"], tsconfigPath: "./tsconfig.build.json" }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./lib/test/setup.ts", // Archivo de configuración inicial
    coverage: {
      reporter: ["text", "html"],
      exclude: [
        "dist/**",
        "src/**",
        ".storbook/**",
        "lib/test/**",
        "lib/main.tsx",
        "lib/**/*.stories.tsx",
      ],
      include: ["lib/**/*.ts", "lib/**/*.tsx"],
      thresholds: {
        global: {
          statements: 100,
          branches: 100,
          functions: 100,
          lines: 100,
        },
      },
    },
    exclude: [...configDefaults.exclude, "dist/**", "src/**", ".storbook/**"],
    reporters: ["html"],
    outputFile: ".test/test-report.html",
  },
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.tsx"),
      name: "DesignSystemWeb",
      fileName: "dsw",
      formats: ["es"],
    },
    copyPublicDir: false,
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@mui/material",
        "@emotion/react",
        "@emotion/styled",
      ],
      input: Object.fromEntries(inputs),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
});
