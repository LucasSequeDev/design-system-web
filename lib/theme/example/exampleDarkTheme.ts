import { createTheme } from "@mui/material/styles";

export const EXAMPLE_DARK_KEY = "example:dark" as const;

export const EXAMPLE_DARK_TOKENS = {
  palette: {
    mode: "dark",
    primary: {
      main: "#78e41e",
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
    divider: "#4f3283",
  },
  spacing: 8,
  shape: {
    borderRadius: 16,
  },
} as const;

export const explameDarkTheme = createTheme(EXAMPLE_DARK_TOKENS);
