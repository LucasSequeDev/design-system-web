import type { Preview } from "@storybook/react";
import React from "react";

import { DesignSystemProvider } from "../lib/provider/DesignSystemProvider";
import { ThemeKey, themes } from "../lib/theme/getThemeByKey";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story, context) => {
    const themeKey = (context.globals.theme || "default") as ThemeKey;
    return (
      <DesignSystemProvider themeKey={themeKey}>
        <Story />
      </DesignSystemProvider>
    );
  },
];

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      title: "Seleccionar Theme",
      icon: "cog",
      items: Object.keys(themes).map((key) => ({
        value: key,
        title: key,
      })),
      showName: true,
    },
  },
};

export default preview;
