import { CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

import { getThemeByKey, ThemeKey } from "../theme/getThemeByKey";

interface DesignSystemProviderProps {
  children: ReactNode;
  themeKey?: ThemeKey;
}

export const DesignSystemProvider = ({
  children,
  themeKey = "default",
}: DesignSystemProviderProps) => {
  const theme = getThemeByKey(themeKey);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
