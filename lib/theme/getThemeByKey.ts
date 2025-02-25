import { EXAMPLE_DARK_KEY, explameDarkTheme } from "./example/exampleDarkTheme";
import {
  EXAMPLE_LIGHT_KEY,
  explameLightTheme,
} from "./example/exampleLightTheme";

export const themes = {
  [EXAMPLE_LIGHT_KEY]: explameLightTheme,
  [EXAMPLE_DARK_KEY]: explameDarkTheme,
  default: explameLightTheme,
} as const;

export type ThemeKey = keyof typeof themes;

export const getThemeByKey = (key: ThemeKey) => {
  return themes[key] || themes.default;
};
