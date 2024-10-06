"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

export default function FAQs() {
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqsContent = [
    {
      title: "1. How does the process work once I sign up?",
      content: `
        After signing up, we’ll establish direct communication through your preferred method (email, phone, etc.). We’ll gather information about your project needs and begin working on your customized solution. Whether it’s AI integration, web development, automation, or any other service, we ensure regular updates and close collaboration throughout the process.
      `,
    },
    {
      title: "2. What services do you offer?",
      content: `
        We offer a wide range of tech solutions, including:
  
        - Web design and development
        - AI integration and automation
        - Digital marketing and CRM implementation
        - SaaS platform development
        - Chatbot creation
        - MVP development for startups and small businesses
        - Custom software solutions tailored to your business needs
      `,
    },
    {
      title: "3. How do you ensure the quality of your services?",
      content: `
        We follow a structured approach, including planning, development, testing, and refinement for all projects. For AI, automation, and chatbot development, we thoroughly test systems for accuracy and reliability. For web development and SaaS projects, we conduct rigorous testing to ensure performance, security, and user experience before launch.
      `,
    },
    {
      title: "4. Do you offer ongoing support after project completion?",
      content: `
        Yes, we provide post-launch support to ensure that everything runs smoothly. Whether you need system upgrades, bug fixes, or general maintenance, we’re here to assist you. We also offer long-term support plans for businesses looking to maintain and expand their digital solutions.
      `,
    },
    {
      title: "5. Can you develop AI and automation solutions for my business?",
      content: `
        Absolutely! We specialize in creating AI-driven solutions and automating business processes to improve efficiency. Whether you're looking to integrate AI into customer support, automate workflows, or develop machine learning models, we’ll work with you to implement a solution tailored to your business goals.
      `,
    },
    {
      title: "6. What is an MVP, and how can you help me build one?",
      content: `
        An MVP (Minimum Viable Product) is the basic version of a product that allows you to test your idea in the market. We can help you develop an MVP with core functionalities, allowing you to gather user feedback quickly and iterate efficiently before scaling up.
      `,
    },
    {
      title: "7. How do I get started?",
      content: `
        Simply reach out to us via our contact form, email or just book meeting. We’ll schedule a consultation to discuss your project needs and goals. After understanding your requirements, we’ll create a proposal and begin working on your project.
      `,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Frequently Ask Questions
      </h1>
      <p className="mb-8 text-gray-300">Last Updated: October 5, 2024</p>

      {faqsContent.map((section, index) => (
        <div key={index} className="mb-6 border-b border-gray-700 pb-6">
          <button
            onClick={() => toggleSection(index)}
            className="flex justify-between items-center w-full text-left font-semibold text-xl py-2 text-purple-400 hover:text-purple-300 transition-colors duration-200"
          >
            {section.title}
            {expandedSections.includes(index) ? (
              <ChevronUpIcon className="h-6 w-6" />
            ) : (
              <ChevronDownIcon className="h-6 w-6" />
            )}
          </button>
          {expandedSections.includes(index) && (
            <div className="mt-4 text-gray-300 space-y-4 whitespace-pre-line">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
