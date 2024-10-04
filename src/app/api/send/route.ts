"use server";

import ContactFormEmail from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const message = formData.get("message") as string;
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "bigbyteberry@gmail.com",
    subject: `New Contact Form Submission from ${name}`,
    react: ContactFormEmail({ name, email, company, message }),
  });
};
