import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./typography";

const meta: Meta<typeof Heading> = {
  title: "Design System/Atoms/Typography",
  component: Heading,
  argTypes: {
    className: {
      control: "text",
    },
    level: {
      control: "select",
      options: ["h1", "h2", "h3", "h4"],
    },
    font: {
      control: "select",
      options: ["sans", "mono"],
    },
    weight: {
      control: "select",
      options: ["light", "normal", "medium", "semibold", "bold"],
    },
    color: {
      control: "select",
      options: [
        "foreground",
        "muted",
        "primary",
        "secondary",
        "accent",
        "destructive",
        "success",
        "warning",
        "info",
        "sky",
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Heading>;

export const HeadingDefault: Story = {
  args: {
    children: "Design System/Atoms",
  },
};

export const HeadingAlternative: Story = {
  args: {
    children: "Design System/Atoms",
    level: "h4",
    color: "muted",
  },
};
