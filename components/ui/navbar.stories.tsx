import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./navbar";
import { Button } from "./button";
import { Moon, Sun } from "lucide-react";

const meta: Meta<typeof Navbar> = {
  title: "Design System/Molecules/Navbar",
  component: Navbar,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {},
};
