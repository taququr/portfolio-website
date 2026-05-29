"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/lib/send-email";
import { toast } from "sonner";

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
        <h1 className="text-5xl font-bold tracking-tight">About & Philosophy</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2 flex flex-col gap-6 text-muted-foreground leading-relaxed">
          <p>
            I am a frontend-focused developer specializing in building reliable, type-safe, and highly performant web
            architectures. My approach to programming is grounded in predictability and robustness—ensuring smooth,
            error-free, and reliable user experiences.
          </p>
          <p>
            While my primary focus centers on frontend systems, my capabilities extend deeper into the architecture. I
            am experienced in establishing backend foundations and working directly with databases like PostgreSQL,
            alongside integrating modern headless CMS platforms like Strapi and Sanity to ensure dynamic, decoupled
            content delivery.
          </p>
        </div>

        <Card className="bg-muted/30 border-dashed">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-mono uppercase tracking-wider text-sky-400 dark:text-sky-500">
              System Stacks
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs font-mono space-y-4">
            <div>
              <div className="font-semibold text-foreground">Core Engine:</div>
              <div className="text-muted-foreground">Next.js 16 (App Router) • React 19 / SvelteKit • Svelte 5</div>
            </div>
            <div>
              <div className="font-semibold text-foreground">Styling:</div>
              <div className="text-muted-foreground">Tailwind CSS v4 • shadcn/ui • Flowbite</div>
            </div>
            <div>
              <div className="font-semibold text-foreground">Database & CMS:</div>
              <div className="text-muted-foreground">PostgreSQL • Strapi • Sanity</div>
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
      </div>

      <section className="border-t border-border pt-12">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold tracking-tight mb-2">Get in Touch</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Have an application design, collaboration opportunity, or contract position? Drop a secure message below.
          </p>

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
