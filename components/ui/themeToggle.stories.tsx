import type { Meta, StoryObj } from "@storybook/react";
import { ThemeToggle } from "./themeToggle";

const meta: Meta<typeof ThemeToggle> = {
  title: "Design System/Atoms/ThemeToggle",
  component: ThemeToggle,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {
  args: {
    // No args needed for ThemeToggle
  },
};
