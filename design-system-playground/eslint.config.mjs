// ESLint 9 Flat Config for Next.js 16
import storybook from "eslint-plugin-storybook";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create compat instance for eslint-config-next (which uses legacy format)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  // Next.js configs (converted from legacy format)
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  
  // Storybook plugin configuration
  {
    files: ["**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    plugins: {
      storybook: fixupPluginRules(storybook),
    },
    rules: {
      ...fixupConfigRules(storybook.configs.recommended).rules,
    },
  },
  
  // Global ignores
  {
    ignores: [
      // Build outputs
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "storybook-static/**",
      ".storybook-static/**",
      // Dependencies
      "node_modules/**",
      // Config files
      "*.config.js",
      "*.config.ts",
      "*.config.mjs",
      // TypeScript
      "next-env.d.ts",
      "*.tsbuildinfo",
      // Git hooks
      ".husky/**",
      // Public assets
      "public/**",
      // Other
      "coverage/**",
      ".turbo/**",
    ],
  },
  
  // Custom rules
  {
    rules: {
      // Custom rule to discourage raw hex colors - use Tailwind tokens instead
      'no-restricted-syntax': [
        'warn',
        {
          selector: 'Literal[value=/#[0-9a-fA-F]{3,8}/]',
          message: 'Use Tailwind color tokens (bg-primary, text-foreground, etc.) instead of raw hex colors',
        },
        {
          selector: 'TemplateElement[value.raw=/#[0-9a-fA-F]{3,8}/]',
          message: 'Use Tailwind color tokens instead of raw hex colors in template literals',
        },
      ],
    },
  },
  
  // Prettier config - must be last to override conflicting rules
  // Using compat to convert legacy eslint-config-prettier format
  ...compat.extends("prettier"),
];
