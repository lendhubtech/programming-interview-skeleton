import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    rules: {
      // React rules
      "react/react-in-jsx-scope": "off",

      // Accessibility rules
      "jsx-a11y/alt-text": "error",
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "coverage/**",
    "next-env.d.ts",
    "*.config.js",
    "*.config.ts",
    "*.config.mjs",
    "vitest.config.ts",
    "vitest.setup.ts",
  ]),
]);

export default eslintConfig;
