import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";

const meta: Meta<typeof Textarea> = {
  title: "Design System/Molecules/Textarea",
  component: Textarea,
  argTypes: {
    className: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Enter your text here...",
  },
};

export const NoResize: Story = {
  args: {
    placeholder: "Enter your text here...",
    className: "resize-none",
  },
};

export const NoResizeStaticHeight: Story = {
  args: {
    placeholder: "Enter your text here...",
    className: "h-32 resize-none overflow-y-auto",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Enter your text here...",
    disabled: true,
  },
};
