import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label";
import { Paragraph } from "./typography";
import { Input } from "./input";

const meta: Meta<typeof Label> = {
  title: "Design System/Atoms/Label",
  component: Label,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Username",
  },
};

export const WithTypography: Story = {
  args: {
    children: <Paragraph>Username</Paragraph>,
  },
};

export const WithTypographyAndInput: Story = {
  args: {
    children: (
      <div className="flex flex-col gap-2">
        <Paragraph size="sm" weight="medium" color="foreground">
          Username
        </Paragraph>
        <Input placeholder="Enter your username" />
      </div>
    ),
  },
};
