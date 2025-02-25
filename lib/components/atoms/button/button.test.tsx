import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from ".";

describe("Button", () => {
  it("debe renderizar el texto correctamente", () => {
    render(<Button>Click Me</Button>);
    expect(
      screen.getByRole("button", { name: /click me/i })
    ).toBeInTheDocument();
  });

  it("debe aplicar las propiedades correctamente", () => {
    render(
      <Button variant="contained" color="primary">
        Primary Button
      </Button>
    );
    const button = screen.getByRole("button", { name: /primary button/i });
    expect(button).toHaveClass("MuiButton-containedPrimary");
  });

  it("debe estar deshabilitado cuando recibe la prop disabled", () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole("button", { name: /disabled button/i });
    expect(button).toBeDisabled();
  });
});
