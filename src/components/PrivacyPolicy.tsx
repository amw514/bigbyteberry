"use client"

import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'

export default function PrivacyPolicy() {
  const [expandedSections, setExpandedSections] = useState<number[]>([])

  const toggleSection = (index: number) => {
    setExpandedSections(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const policyContent = [
    {
      title: "1. Information We Collect",
      content: `
        Personal Information: When you reach out to us, request a quote, or use our services, we may gather personal details such as your name, email address, phone number, and business information (e.g., company name).

        Technical Information: We may also collect data related to your device, IP address, browser type, and site usage patterns to help us improve your overall experience on our website.

        Cookies: Our website uses cookies to enhance your experience by remembering preferences and gathering usage statistics. You have control over cookie preferences through your browser settings.
      `
    },
    {
      title: "2. How We Use Your Information",
      content: `
        We use the information we collect to:

        - Provide and manage our services, including web design, digital marketing, AI integration, and other tech solutions.
        - Communicate with you about your project, service inquiries, or updates.
        - Improve the performance and functionality of our website and services.
        - Fulfill legal obligations and protect our rights or the rights of others.
      `
    },
    {
      title: "3. Data Sharing and Disclosure",
      content: `
        At BigByteBerry, we do not sell, trade, or rent your personal information to any third party. However, we may share your data with trusted service providers who assist us in delivering our services (e.g., payment processors, cloud service providers). These third parties are bound by confidentiality agreements and are only permitted to use your information for the purpose of assisting with our services.

        We may also disclose your information if required by law, or in response to legal requests to protect our rights or the rights of others.
      `
    },
    {
      title: "4. Data Security",
      content: `
        We take reasonable and appropriate measures to protect your personal information from unauthorized access, alteration, or disclosure. However, it's important to note that no method of data transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
      `
    },
    {
      title: "5. Your Rights",
      content: `
        You have the right to access, update, or delete the personal information we have on file. You also have the option to opt out of any marketing communications from us at any time.
      `
    },
    {
      title: "6. Changes to This Policy",
      content: `
        BigByteBerry may update this Privacy Policy from time to time. When we make changes, the revised policy will be posted on this page along with the updated date. We encourage you to review this policy periodically to stay informed about how we protect your information.
      `
    },
    {
      title: "7. Contact Us",
      content: `
        If you have any questions, concerns, or requests related to this Privacy Policy or how we handle your data, feel free to reach out to us at:        
      `
    }
  ]

  return (
    <div className="max-w-4xl mx-auto py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      <p className="mb-8 text-gray-300">Last Updated: October 5, 2024</p>
      <p className="mb-8 text-gray-300">
        At BigByteBerry, your privacy is of the utmost importance to us. This Privacy Policy explains how we collect, use, and protect your personal information when you interact with our website or use our services.
      </p>
      {policyContent.map((section, index) => (
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
  )
}