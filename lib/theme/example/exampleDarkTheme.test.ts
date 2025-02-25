import { describe, expect, it } from "vitest";

import { getThemeByKey, themes } from "../getThemeByKey";
import { EXAMPLE_DARK_KEY, EXAMPLE_DARK_TOKENS } from "./exampleDarkTheme";

describe("EXAMPLE_DARK_TOKENS", () => {
  it('debería tener el modo "dark"', () => {
    expect(EXAMPLE_DARK_TOKENS.palette.mode).toBe("dark");
  });

  it("debería tener el color primario correcto", () => {
    expect(EXAMPLE_DARK_TOKENS.palette.primary.main).toBe("#78e41e");
  });

  it("debería tener el color secundario correcto", () => {
    expect(EXAMPLE_DARK_TOKENS.palette.secondary.main).toBe("#f500e8");
  });

  it("debería tener el color de error correcto", () => {
    expect(EXAMPLE_DARK_TOKENS.palette.error.main).toBe("#ff1000");
  });

  it("debería tener el color de advertencia correcto", () => {
    expect(EXAMPLE_DARK_TOKENS.palette.warning.main).toBe("#ffff8d");
  });

  it("debería tener el color del divisor correcto", () => {
    expect(EXAMPLE_DARK_TOKENS.palette.divider).toBe("#4f3283");
  });

  it("debería tener el espaciado configurado en 8", () => {
    expect(EXAMPLE_DARK_TOKENS.spacing).toBe(8);
  });

  it("debería tener el radio de borde configurado en 16", () => {
    expect(EXAMPLE_DARK_TOKENS.shape.borderRadius).toBe(16);
  });

  it("debería devolver el tema cuando se pasa la clave", () => {
    const theme = getThemeByKey(EXAMPLE_DARK_KEY);
    expect(theme).toBe(themes[EXAMPLE_DARK_KEY]);
  });
});
