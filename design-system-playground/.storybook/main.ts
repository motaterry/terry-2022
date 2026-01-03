// This file has been automatically migrated to valid ESM format by Storybook.
import type { StorybookConfig } from '@storybook/nextjs-vite';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],

  addons: ["@storybook/addon-a11y", "@storybook/addon-docs"],

  framework: {
    name: "@storybook/nextjs-vite",
    options: {
      // Disable Next.js SWC loader to avoid compatibility issues
      nextConfigPath: undefined,
    }
  },

  staticDirs: ["../public"],
  
  // Configure base path for serving Storybook from /storybook route
  base: './',

  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '..'),
      };
      // Prevent Storybook from trying to use webpack loader
      config.resolve.alias['@storybook/nextjs'] = false;
    }
    // Exclude Next.js SWC loader from Vite build
    if (config.optimizeDeps) {
      config.optimizeDeps.exclude = [
        ...(config.optimizeDeps.exclude || []),
        '@storybook/nextjs',
        'next/dist/build/swc',
      ];
    }
    return config;
  }
};

export default config;
