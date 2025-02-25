import { describe, expect, it } from "vitest";

import { getThemeByKey, themes } from "./getThemeByKey";

describe("getThemeByKey", () => {
  it("debería devolver el tema por defecto cuando se pasa una clave no válida", () => {
    // @ts-expect-error: Clave no válida intencionalmente para probar el valor por defecto
    const theme = getThemeByKey("invalid_key");
    expect(theme).toBe(themes.default);
  });

  it("debería devolver el tema por defecto si no se pasa ninguna clave", () => {
    // @ts-expect-error: Probar comportamiento cuando no se pasa ningún argumento
    const theme = getThemeByKey(undefined);
    expect(theme).toBe(themes.default);
  });
});
