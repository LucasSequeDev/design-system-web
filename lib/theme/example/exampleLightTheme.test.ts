import { describe, expect, it } from "vitest";

import { getThemeByKey, themes } from "../getThemeByKey";
import { EXAMPLE_LIGHT_KEY, EXAMPLE_LIGHT_TOKENS } from "./exampleLightTheme";

describe("EXAMPLE_LIGHT_TOKENS", () => {
  it('debería tener el modo "light"', () => {
    expect(EXAMPLE_LIGHT_TOKENS.palette.mode).toBe("light");
  });

  it("debería tener el color primario correcto", () => {
    expect(EXAMPLE_LIGHT_TOKENS.palette.primary.main).toBe("#1fc9c9");
  });

  it("debería tener el color secundario correcto", () => {
    expect(EXAMPLE_LIGHT_TOKENS.palette.secondary.main).toBe("#f500e8");
  });

  it("debería tener el color de error correcto", () => {
    expect(EXAMPLE_LIGHT_TOKENS.palette.error.main).toBe("#ff1000");
  });

  it("debería tener el color de advertencia correcto", () => {
    expect(EXAMPLE_LIGHT_TOKENS.palette.warning.main).toBe("#ffff8d");
  });

  it("debería tener el color del divisor correcto", () => {
    expect(EXAMPLE_LIGHT_TOKENS.palette.divider).toBe("#91bdd2");
  });

  it("debería tener el espaciado configurado en 8", () => {
    expect(EXAMPLE_LIGHT_TOKENS.spacing).toBe(8);
  });

  it("debería tener el radio de borde configurado en 16", () => {
    expect(EXAMPLE_LIGHT_TOKENS.shape.borderRadius).toBe(16);
  });

  it("debería devolver el tema cuando se pasa la clave", () => {
    const theme = getThemeByKey(EXAMPLE_LIGHT_KEY);
    expect(theme).toBe(themes[EXAMPLE_LIGHT_KEY]);
  });
});
