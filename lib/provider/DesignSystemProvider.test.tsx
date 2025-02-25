import { Typography } from "@mui/material";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { themes } from "../theme/getThemeByKey";
import { DesignSystemProvider } from "./DesignSystemProvider";

describe("DesignSystemProvider", () => {
  it("debe renderizar los children correctamente", () => {
    render(
      <DesignSystemProvider>
        <Typography>Texto de prueba</Typography>
      </DesignSystemProvider>
    );

    expect(screen.getByText("Texto de prueba")).toBeInTheDocument();
  });

  it("debe aplicar el tema por defecto si no se pasa un themeKey", () => {
    render(
      <DesignSystemProvider>
        <Typography>Texto de prueba</Typography>
      </DesignSystemProvider>
    );

    const { palette } = themes.default;

    const textElement = screen.getByText("Texto de prueba");
    expect(textElement).toHaveStyle(`color: ${palette.text.primary}`); // Color de texto en tema por defecto
  });
});
