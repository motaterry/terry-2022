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
    options: {}
  },

  staticDirs: ["../public"],

  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '..'),
      };
    }
    return config;
  }
};

export default config;
