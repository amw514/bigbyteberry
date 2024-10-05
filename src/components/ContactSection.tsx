import React from "react";
import ContactForm from "./ContactUsForm";
import CalendlyEmbed from "./CalendlyEmbed";
import { Globe } from "./Globe";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center flex flex-col space-y-7 max-w-lg mx-auto">
        <h2 className="text-2xl lg:text-4xl font-bold ">Contact Us</h2>
        <p className="text-gray-300  ">
          Help us empower your business with global reach and cutting-edge
          solutions. We&apos;re ready to take your brand to the next level!
        </p>
        <Link
          href="https://calendly.com/bigbyteberry/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="shadow-[0_0_0_3px_#000000_inset]  px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            Schedule a Call
          </button>
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-start mt-10">
        <div className="w-full lg:w-1/2 max-w-2xl">
          <Globe />
        </div>
        <div className="w-full lg:w-1/2 max-w-md">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
