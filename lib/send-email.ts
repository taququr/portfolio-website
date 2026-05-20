"use server";
import { z } from "zod";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export async function sendEmail(formData: ContactFormValues) {
  const validatedFields = contactFormSchema.safeParse(formData);

  if (!validatedFields.success) {
    return { success: false, error: "Invalid data transmission." };
  }

  const { name, email, message } = validatedFields.data;

  try {
    // 2. Transmit the email via Resend
    await resend.emails.send({
      from: "Portfolio Contact <contact@taququr.com>",
      to: "taququr.work@gmail.com",
      subject: `Inquiry: ${name} via taququr.com`,
      replyTo: email,
      text: message,
    });

    return { success: true };
  } catch (error) {
    console.error("Email dispatch failed:", error);
    return { success: false, error: "System failed to transmit message." };
  }
}
