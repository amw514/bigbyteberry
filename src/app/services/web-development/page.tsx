import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Smartphone,
  Zap,
  Users,
  Rocket,
  Search,
  Cog,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function page() {
  const services = [
    {
      icon: Globe,
      title: "Custom Websites",
      description:
        "Tailored to your business needs, goals, and target audience.",
    },
    {
      icon: Smartphone,
      title: "Responsive Web Design",
      description:
        "Websites that adapt perfectly to any device for optimal user experience.",
    },
    {
      icon: Zap,
      title: "Landing Pages That Convert",
      description:
        "High-converting pages designed to engage visitors and drive specific actions.",
    },
    {
      icon: Rocket,
      title: "Scalable Web Development",
      description:
        "Websites that evolve with your business, ready for long-term growth.",
    },
    {
      icon: Users,
      title: "Seamless User Experience",
      description:
        "Intuitive, user-friendly websites that keep visitors engaged.",
    },
    {
      icon: Search,
      title: "SEO-Ready Websites",
      description:
        "Optimized for search engines to improve visibility and ranking.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1e] text-white p-8 py-[100px]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Web Development Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg mb-4">
              At BigByteBerry, we offer comprehensive web development services
              tailored to meet the unique needs of businesses. Whether
              you&apos;re a startup looking for a simple landing page or an
              established company in need of a robust, scalable website,
              we&apos;ve got you covered.
            </p>
            <p className="text-lg mb-4">
              We specialize in building modern, responsive, and high-performing
              websites that help businesses thrive in the digital world.
            </p>
          </div>
          <div className="relative h-64 md:h-full">
            <div className="absolute inset-0 bg-[#8a2be2] rounded-lg transform rotate-3"></div>
            <div className="absolute inset-0 bg-[#1a1a2e] rounded-lg -rotate-3 flex items-center justify-center">
              <Globe className="w-24 h-24 text-[#8a2be2]" />
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6">
          Our Web Development Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-[#1a1a2e] border-none">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#8a2be2] flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6">
          Optimized for Speed and Performance
        </h2>
        <div className="bg-[#1a1a2e] rounded-lg p-6 mb-12">
          <p className="text-gray-300 mb-4">
            In the digital age, speed matters. Visitors expect your website to
            load quickly, and search engines prioritize fast websites in search
            rankings. Our development process ensures your website is optimized
            for speed and performance, leading to better user experiences and
            improved SEO results. We focus on:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              Minimizing load times through optimized coding, image compression,
              and caching techniques.
            </li>
            <li>
              Reducing bounce rates by creating engaging, fast-loading web
              pages.
            </li>
            <li>
              Boosting SEO by building websites that adhere to search engine
              best practices.
            </li>
          </ul>
        </div>

        <div className="bg-[#1a1a2e] rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Ongoing Support & Maintenance
          </h2>
          <p className="text-gray-300">
            We don&apos;t just build websites—we ensure they stay up-to-date and
            run smoothly. With our ongoing support and maintenance services,
            we&apos;ll handle updates, security patches, and performance
            optimization, so you can focus on running your business while we
            take care of your site&apos;s health.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-lg mb-6">
            BigByteBerry is your trusted partner for web development, whether
            you need a simple landing page or a complex, multi-functional
            website. Our goal is to build websites that not only look great but
            also drive results for your business.
          </p>
          <Button className="bg-[#8a2be2] hover:bg-[#9b4ddb] text-white font-bold py-2 px-4 rounded">
            <Link
              href="https://calendly.com/bigbyteberry/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Consultation
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
