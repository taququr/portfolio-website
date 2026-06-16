import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { toast } from "sonner";

const meta: Meta = {
  title: "Design System/Overlays/Sonner",
  render: () => {
    return (
      <>
        <Button
          onClick={() => {
            toast("Hello world!");
          }}
        >
          Toast
        </Button>
      </>
    );
  },
};
export default meta;

export { meta as Sandbox };
