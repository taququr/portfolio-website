"use client";

import { z } from "zod";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { sendEmail } from "@/lib/send-email";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field";
import { Heading, Paragraph } from "@/components/ui/typography";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

function AboutPage() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await sendEmail(data);
      if (response.success) {
        toast.success("Email sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send email");
      }
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
    <div className="container mx-auto max-w-5xl py-10 px-4 space-y-4 md:space-y-10 font-sans">
      <header className="pt-20 pb-12 flex flex-col items-center text-center gap-4">
        <Heading level="h1" className="group-data-[size=sm]/card:text-sm">
          About & Philosophy
        </Heading>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2 flex flex-col gap-6">
          <Paragraph>
            I am a frontend-focused developer specializing in building reliable, type-safe, and highly performant web
            architectures. My approach to programming is grounded in predictability and robustness—ensuring smooth,
            error-free, and reliable user experiences.
          </Paragraph>
          <Paragraph>
            While my primary focus centers on frontend systems, my capabilities extend deeper into the architecture. I
            am experienced in establishing backend foundations and working directly with databases like PostgreSQL,
            alongside integrating modern headless CMS platforms like Strapi and Sanity to ensure dynamic, decoupled
            content delivery.
          </Paragraph>
        </div>

        <Card className="bg-muted/30 border-dashed">
          <CardHeader className="pb-2">
            <Paragraph size="sm" weight="semibold" font="mono" color="sky">
              System Stacks
            </Paragraph>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Paragraph size="xs" weight="semibold" font="mono" color="foreground">
                Core Engine:
              </Paragraph>
              <Paragraph size="xs" font="mono" color="muted">
                Next.js 16 (App Router) • React 19 / SvelteKit • Svelte 5
              </Paragraph>
            </div>
            <div>
              <Paragraph size="xs" weight="semibold" font="mono" color="foreground">
                Styling:
              </Paragraph>
              <Paragraph size="xs" font="mono" color="muted">
                Tailwind CSS v4 • shadcn/ui • Flowbite
              </Paragraph>
            </div>
            <div>
              <Paragraph size="xs" weight="semibold" font="mono" color="foreground">
                Database & CMS:
              </Paragraph>
              <Paragraph size="xs" font="mono" color="muted">
                PostgreSQL • Strapi • Sanity
              </Paragraph>
            </div>
            {/* <div>
              <div className="font-semibold text-foreground">
                Home Lab Config:
              </div>
              <div className="text-muted-foreground">
                Unraid OS • Docker Compose • Cloudflare Tunnels
              </div>
            </div> */}
          </CardContent>
        </Card>
      </section>

      <section className="border-t border-border pt-12">
        <div className="max-w-xl">
          <Heading level="h2" className="mb-2">
            Get in Touch
          </Heading>
          <Paragraph size="sm" color="muted" className="mb-6">
            Have an application design, collaboration opportunity, or contract position? Drop a secure message below.
          </Paragraph>

          <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="col-span-1">
                    <FieldLabel htmlFor="name">Name</FieldLabel>
                    <Input id="name" {...field} aria-invalid={fieldState.invalid} />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="col-span-1">
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input id="email" {...field} aria-invalid={fieldState.invalid} />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
              <Controller
                name="message"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="col-span-2">
                    <FieldLabel htmlFor="message">Message</FieldLabel>
                    <Textarea
                      id="message"
                      {...field}
                      aria-invalid={fieldState.invalid}
                      className="h-32 resize-none overflow-y-auto"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
              <Button className="font-mono col-span-2">Send Message</Button>
            </FieldGroup>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
