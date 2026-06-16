import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Design System/Molecules/Input",
  component: Input,
  argTypes: {
    className: {
      control: "text",
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "tel", "url"],
      description: "The native HTML input type mapping",
    },
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    "aria-invalid": {
      control: "boolean",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Enter text",
  },
};

export const Disabled: Story = {
  args: {
    type: "text",
    placeholder: "Enter text",
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    type: "text",
    placeholder: "Enter text",
    "aria-invalid": true,
  },
};
