import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tailwind from "eslint-plugin-better-tailwindcss";

export default defineConfig([
  // Configs Next.js officielles (NE PAS ignorer)
  ...nextVitals,
  ...nextTs,

  {
    plugins: {
      tailwindcss: tailwind,
    },

    rules: {
      /**
       * Console
       * 👉 console.log interdit, mais logs utiles autorisés
       */
      "no-console": [
        "warn",
        {
          allow: ["warn", "error", "info"],
        },
      ],

      /**
       * Tailwind CSS
       */
      "tailwindcss/enforce-consistent-class-order": "warn",
      "tailwindcss/no-conflicting-classes": "error",

      // ON garde off seulement celle-ci si tu utilises des classes dynamiques
      "tailwindcss/no-unknown-classes": "off",
    },

    settings: {
      tailwindcss: {
        entryPoint: "src/app/globals.css",
      },
    },
  },

  /**
   * Ignorer UNIQUEMENT les artefacts générés
   */
  {
    ignores: [".next/**", "out/**", "build/**", "dist/**", "node_modules/**", "next-env.d.ts"],
  },
]);
