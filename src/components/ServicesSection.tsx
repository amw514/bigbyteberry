"use client";

import {
  Laptop,
  Smartphone,
  PenTool,
  Globe,
  BarChart,
  RocketIcon,
  TrendingUp,
  Zap,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: MessageCircle,
    title: "AI Chatbots",
    description:
      "AI-powered chatbots for seamless customer interactions. Automate responses and improve engagement with intelligent, real-time support.",
    link: "/services/ai-chatbots",
  },
  {
    icon: Zap,
    title: "Automation Solutions",
    description:
      "Automate routine tasks and improve productivity. Our automation solutions streamline workflows, saving time and reducing costs.",
    link: "/services/automation-solutions",
  },
  {
    icon: TrendingUp,
    title: "SaaS Development",
    description:
      "Scalable SaaS platforms tailored to your needs. We create cloud-based solutions that offer flexibility and drive business efficiency.",
    link: "/services/saas-development",
  },
  {
    icon: RocketIcon,
    title: "MVP for Startups",
    description:
      "Launch your MVP in 30 days with core features. Validate your product and enter the market quickly with minimal risk.",
    link: "/services/mvp-for-startups",
  },
  {
    icon: Laptop,
    title: "Web Development",
    description:
      "Custom websites tailored to your business needs. We build responsive, scalable websites with seamless user experiences.",
    link: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications. Engage your customers on-the-go with innovative and high-performance apps.",
    link: "/services/mobile-app-development",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "Intuitive and attractive user interfaces and experiences. Our designs focus on enhancing usability and driving engagement.",
    link: "/services/ui-ux-design",
  },
  {
    icon: Globe,
    title: "SEO Optimization",
    description:
      "Improve your online visibility and search engine rankings. We optimize every aspect of your site for better organic traffic.",
    link: "/services/seo-optimization",
  },
  {
    icon: BarChart,
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies and campaigns. Grow your brand and conversions with targeted, data-driven approaches.",
    link: "/services/digital-marketing",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative  py-16 overflow-hidden text-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-indigo-700 rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
        {/* <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-purple-700 rounded-full filter blur-[100px] opacity-30 animate-pulse"></div> */}
      </div>

      <div className="container relative w-11/12  z-5 mx-auto px-4">
        <h2 className="text-2xl lg:text-5xl font-bold text-center mb-16">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link href={service.link} key={index}>
              <div
                key={index}
                className="bg-[#1a1f2a] p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-[#252b3b] group"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-purple-500 via-violet-500 to-pink-500 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
