import type { StorybookConfig } from "@storybook/react-vite";
export * from 'storybook-i18n/manager';

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-react-router-v6"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
    },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
