import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "Design System/Molecules/Badge",
  component: Badge,
  argTypes: {
    className: {
      control: "text",
    },
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "ghost", "sky", "link"],
    },
    asChild: {
      control: "boolean",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Badge",
    variant: "default",
  },
};

export const ProjectTags: Story = {
  args: {
    children: "Devops",
    variant: "sky",
    className: "font-mono text-xs uppercase rounded-sm tracking-wider",
  },
};

export const AsALink: Story = {
  args: {
    asChild: true,
    children: (
      <a href="https://taququr.com" target="_blank" rel="noreferrer">
        View Portfolio
      </a>
    ),
  },
};
