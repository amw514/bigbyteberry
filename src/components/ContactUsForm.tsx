"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/send-email";

export default function ContactForm() {
  const [status, setStatus] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      await sendEmail(formData);
      setStatus("success");
      toast({
        title: "✅ Successfully sent message",
        description: "📧 We'll get back to you as soon as possible.",
      });
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");

    } catch (error) {
      setStatus("error");
      toast({
        variant: "destructive",
        title: "❌ Failed to send message",
        description: `⚠️ ${error}`,
      });
    }
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200 mb-2">
        Contact Us
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mb-6 dark:text-neutral-300">
        We&apos;d love to hear from you. Please fill out this form and
        we&apos;ll get back to you as soon as possible.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {status === "success" && (
          <p className="text-green-500 mt-4">✅ Successfully sent message</p>
        )}
        {status === "error" && (
          <p className="text-red-500 mt-4">❌ Failed to send message</p>
        )}
        <LabelInputContainer>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}

          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="john@example.com"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="company">Company Name</Label>
          <Input
            id="company"
            name="company"
            placeholder="Acme Inc."
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}

          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Your message here..."
            required
            className="min-h-[100px] resize-y"
            value={message}
            onChange={(e) => setMessage(e.target.value)}

          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send Message
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
