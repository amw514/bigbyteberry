import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Cloud,
  Code,
  DollarSign,
  Users,
  Zap,
  Lock,
  Rocket,
  RefreshCw,
  BarChart,
  Server,
  Layers,
  CheckCircle,
  ShoppingCart,
  GraduationCap,
  Home,
} from "lucide-react";
import Link from "next/link";

export default function page() {
  const features = [
    {
      icon: Code,
      title: "Custom-Built Platforms",
      description:
        "Tailored SaaS solutions built from the ground up to meet your specific business needs.",
    },
    {
      icon: DollarSign,
      title: "Pricing Integration",
      description:
        "Implement flexible pricing models with secure payment gateways for smooth transactions.",
    },
    {
      icon: Users,
      title: "Multi-Tenancy Architecture",
      description:
        "Support multiple clients while keeping data secure and isolated.",
    },
    {
      icon: Zap,
      title: "Scalability & Flexibility",
      description:
        "Build platforms that grow with your business, supporting both vertical and horizontal scaling.",
    },
    {
      icon: RefreshCw,
      title: "Subscription Management",
      description:
        "Effortlessly manage customer subscriptions with built-in tracking and automation tools.",
    },
    {
      icon: Layers,
      title: "API Integration",
      description:
        "Seamlessly connect your SaaS product with other software and services.",
    },
    {
      icon: Lock,
      title: "Security & Compliance",
      description:
        "Implement industry-standard security protocols and ensure regulatory compliance.",
    },
    {
      icon: Rocket,
      title: "Testing and Deployment",
      description:
        "Rigorous testing and smooth deployment processes for optimal performance.",
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Reduced Costs & Maintenance",
      description:
        "Lower upfront costs and simplified maintenance with cloud-based solutions.",
    },
    {
      icon: Rocket,
      title: "Faster Time to Market",
      description:
        "Launch your SaaS product quickly with our streamlined development process.",
    },
    {
      icon: BarChart,
      title: "Subscription-Based Revenue",
      description:
        "Generate predictable, recurring revenue through subscription-based services.",
    },
    {
      icon: RefreshCw,
      title: "Continuous Updates & Improvements",
      description:
        "Keep your platform current with seamless updates and new feature rollouts.",
    },
  ];

  const industries = [
    {
      icon: Server,
      title: "Healthcare",
      description:
        "Cloud-based patient management systems and telehealth platforms.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description:
        "Manage online stores, inventory, and order processing in real-time.",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "Scalable learning management systems for schools and corporate training.",
    },
    {
      icon: Home,
      title: "Real Estate",
      description:
        "Property management, listings, and virtual tour SaaS solutions.",
    },
    {
      icon: DollarSign,
      title: "Finance",
      description:
        "Automate accounting, payroll, and tax reporting with compliant SaaS tools.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1e] text-white p-8 py-[100px]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          SaaS Development: Scalable, Custom Solutions for Your Business
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg mb-4">
              At BigByteBerry, we specialize in developing Software as a Service
              (SaaS) platforms that are tailored to meet the unique needs of
              your business. Whether you&apos;re looking to build a SaaS product
              from scratch or enhance an existing platform, our team of experts
              handles everything from concept to deployment.
            </p>
            <p className="text-lg mb-4">
              We ensure a smooth, efficient, and scalable process, allowing you
              to focus on growing your business while we handle the technical
              complexities.
            </p>
          </div>
          <div className="relative h-64 md:h-full">
            <div className="absolute inset-0 bg-[#8a2be2] rounded-lg transform rotate-3"></div>
            <div className="absolute inset-0 bg-[#1a1a2e] rounded-lg -rotate-3 flex items-center justify-center">
              <Cloud className="w-24 h-24 text-[#8a2be2]" />
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6">
          Key Features of Our SaaS Development Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-[#1a1a2e] border-none">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#8a2be2] flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6">
          How SaaS Solutions Can Transform Your Business
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-[#1a1a2e] border-none">
              <CardContent className="flex items-start p-6">
                <benefit.icon className="w-8 h-8 text-[#8a2be2] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6">
          Industries Benefiting from SaaS Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {industries.map((industry, index) => (
            <Card key={index} className="bg-[#1a1a2e] border-none">
              <CardContent className="flex items-center p-6">
                <industry.icon className="w-8 h-8 text-[#8a2be2] mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Your SaaS Platform?
          </h2>
          <p className="text-lg mb-6">
            BigByteBerry is your trusted partner in creating scalable,
            feature-rich SaaS solutions. Whether you&apos;re a startup looking
            to enter the market or an established business seeking to expand
            your offerings, our team is here to help.
          </p>
          <Button className="bg-[#8a2be2] hover:bg-[#9b4ddb] text-white font-bold py-2 px-4 rounded">
           <Link href="https://calendly.com/bigbyteberry/30min" target="_blank" rel="noopener noreferrer">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
