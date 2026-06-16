import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph } from "./typography";

const meta: Meta<typeof Paragraph> = {
  title: "Design System/Atoms/Typography",
  component: Paragraph,
  argTypes: {
    className: {
      control: "text",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "base", "lg", "xl"],
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

type Story = StoryObj<typeof Paragraph>;

export const ParagraphDefault: Story = {
  args: {
    children: "Design System/Atoms",
  },
};

export const ParagraphTags: Story = {
  args: {
    children: "Frontend",
    size: "xs",
    color: "sky",
    font: "mono",
    className: "uppercase tracking-wider",
  },
};

export const ParagraphLabel: Story = {
  args: {
    children: "Username",
    size: "sm",
    color: "foreground",
    weight: "medium",
  },
};
