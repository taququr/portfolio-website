import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Design System/Molecules/Button",
  component: Button,
  argTypes: {
    className: {
      control: "text",
    },
    variant: {
      control: "select",
      options: ["default", "outline", "secondary", "ghost", "destructive", "link"],
    },
    size: {
      control: "select",
      options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
    },
    disabled: {
      control: "boolean",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Press Me",
  },
};

export const OutlineSmall: Story = {
  args: {
    children: "Press Me",
    variant: "outline",
    size: "sm",
  },
};

export const Disabled: Story = {
  args: {
    children: "Press Me",
    disabled: true,
  },
};
