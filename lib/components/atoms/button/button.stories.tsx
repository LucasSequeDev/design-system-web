import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    variant: { control: "radio", options: ["contained", "outlined", "text"] },
    color: {
      control: "select",
      options: ["primary", "secondary", "error", "info", "success", "warning"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "contained",
    color: "primary",
    children: "Click Me!",
  },
};
