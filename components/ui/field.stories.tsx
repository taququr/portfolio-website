import type { Meta, StoryObj } from "@storybook/react";
import { Field, FieldGroup, FieldLabel, FieldError } from "./field";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";

const meta: Meta<typeof Field> = {
  title: "Design System/Molecules/Field",
  component: Field,
  argTypes: {
    className: {
      control: "text",
    },
    orientation: {
      control: "select",
      options: ["vertical", "horizontal", "responsive"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Field>;

export const Default: Story = {
  args: {
    children: (
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="default">Field Label</FieldLabel>
          <Input id="default" />
        </Field>
      </FieldGroup>
    ),
  },
};

export const ContactForm: Story = {
  args: {
    children: (
      <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input id="name" />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" />
        </Field>
        <Field className="md:col-span-2">
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea id="message" />
        </Field>
        <Field className="md:col-span-2">
          <Button>Submit</Button>
        </Field>
      </FieldGroup>
    ),
  },
};

export const ContactFormError: Story = {
  args: {
    children: (
      <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input id="name" aria-invalid={true} />
          <FieldError>Name is required</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" aria-invalid={true} />
          <FieldError>Email is required</FieldError>
        </Field>
        <Field className="md:col-span-2">
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea id="message" />
        </Field>
        <Field className="md:col-span-2">
          <Button>Submit</Button>
        </Field>
      </FieldGroup>
    ),
  },
};
