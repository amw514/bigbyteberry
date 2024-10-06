"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
const testimonials = [
  {
    quote:
      "BigByteBerry completely transformed our digital presence. From creating a stunning, user-friendly website to integrating AI chatbots for our customer service, they’ve helped us improve efficiency and customer satisfaction.",
    name: "Emily R.",
    title: "CEO, GreenLeaf Organics",
  },
  {
    quote:
      "We approached BigByteBerry for an automation solution to streamline our project management, and they delivered beyond expectations. Their automated systems reduced manual labor by 40%, allowing our team to focus on delivering quality construction work. ",
    name: "Michael T.",
    title: "Founder, SwiftBuild Construction",
  },
  {
    quote:
      "Thanks to BigByteBerry, we were able to launch a fully functional MVP for our online wellness platform in record time. Their expertise in web development and SaaS integration has been a game changer. They understand startups and deliver with speed and precision. ",
    name: "Sarah P.",
    title: "Director, Luma Wellness Center",
  },
  {
    quote:
      "BigByteBerry’s AI integration and automation solutions have been instrumental in improving our operations. We’ve seen a 50% improvement in workflow efficiency, and their custom CRM has made customer management a breeze.",
    name: "James K.",
    title: "COO, EcoFlow Energy",
  },
  {
    quote:
      "We worked with BigByteBerry to overhaul our e-commerce platform, and the results were phenomenal. The new website design, paired with AI-driven product recommendations, has boosted our customer engagement.",
    name: "Rebecca L.",
    title: "CEO, PurePets",
  },
  {
    quote:
      "BigByteBerry helped us create an AI-powered chatbot that handles client queries and scheduling seamlessly. The automation they implemented saves us hours of manual work every week.",
    name: "David W.",
    title: "Founder, Peak Performance Coaching",
  },
];
