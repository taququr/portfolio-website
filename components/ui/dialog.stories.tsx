import type { Meta, StoryObj } from "@storybook/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";
import { Button } from "./button";

const meta: Meta<typeof Dialog> = {
  title: "Design System/Molecules/Dialog",
  component: Dialog,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    children: (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
          <p>Dialog Content</p>
        </DialogContent>
      </Dialog>
    ),
  },
};
