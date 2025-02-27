import { createTheme } from "@mui/material/styles";

export const EXAMPLE_LIGHT_KEY = "example:light" as const;

export const EXAMPLE_LIGHT_TOKENS = {
  palette: {
    mode: "light",
    primary: {
      main: "#1fc9c9",
    },
    secondary: {
      main: "#f500e8",
    },
    error: {
      main: "#ff1000",
    },
    warning: {
      main: "#ffff8d",
    },
    divider: "#91bdd2",
  },
  spacing: 8,
  shape: {
    borderRadius: 16,
  },
} as const;

export const explameLightTheme = createTheme({
  ...EXAMPLE_LIGHT_TOKENS,
  cssVariables: { cssVarPrefix: "example-light" },
});
