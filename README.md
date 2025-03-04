# Design System Web

Este proyecto es un sistema de diseño web que incluye componentes reutilizables, temas y configuraciones para Storybook y pruebas.

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```sh
npm install
```

## Levantar Entorno de Desarrollo

Para iniciar el entorno de desarrollo y visualizar los componentes, ejecuta:

```sh
npm run storybook
```

## Crear Nuevos Componentes

1. Navega a la carpeta `lib\components\atoms`.
2. Crea una nueva carpeta para tu componente, por ejemplo, `my-component`.
3. Dentro de esta carpeta, crea un archivo `index.tsx` y define tu componente.

Ejemplo:

```tsx
import React from "react";

export const MyComponent = () => {
  return <div>My New Component</div>;
};
```

## Crear Stories

1. Navega a la carpeta del componente que creaste.
2. Crea un archivo `my-component.stories.tsx`.

Ejemplo:

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { MyComponent } from ".";

const meta: Meta<typeof MyComponent> = {
  title: "Components/Atoms/MyComponent",
  component: MyComponent,
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Default: Story = {
  args: {},
};
```

## Testear Componente Nuevo

1. Navega a la carpeta del componente que creaste.
2. Crea un archivo `my-component.test.tsx`.

Ejemplo:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MyComponent } from "./MyComponent";

describe("MyComponent", () => {
  it("debe renderizar correctamente", () => {
    render(<MyComponent />);
    expect(screen.getByText("My New Component")).toBeInTheDocument();
  });
});
```

Para ejecutar las pruebas, ejecuta:

```sh
npm run test
```

## Crear un Nuevo Tema

1. Navega a la carpeta `lib\theme`.
2. Cree una nueva carpeta para tu tema, por ejemplo, `my-new-theme`.
3. Crea un archivo `myNewTheme.ts` y define tu tema.

Ejemplo:

```ts
export const myNewTheme = {
  palette: {
    primary: {
      main: "#123456",
    },
    // Otros colores...
  },
  spacing: 8,
  shape: {
    borderRadius: 16,
  },
};
```

## Testear Tema Nuevo

1. Navega a la carpeta `lib\theme\my-new-theme`.
2. Crea un archivo `myNewTheme.test.ts`.

Ejemplo:

```ts
import { describe, it, expect } from "vitest";
import { myNewTheme } from "./myNewTheme";

describe("myNewTheme", () => {
  it("debería tener el color primario correcto", () => {
    expect(myNewTheme.palette.primary.main).toBe("#123456");
  });

  it("debería tener el espaciado configurado en 8", () => {
    expect(myNewTheme.spacing).toBe(8);
  });

  it("debería tener el radio de borde configurado en 16", () => {
    expect(myNewTheme.shape.borderRadius).toBe(16);
  });
});
```

Para ejecutar las pruebas, ejecuta:

```sh
npm run test
```

¡Listo! Ahora tienes una guía completa para trabajar con este proyecto.
