import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  MessageCircle,
  Zap,
  TrendingUp,
  Users,
  Shield,
  Handshake,
} from "lucide-react";

export default function Component() {
  const coreValues = [
    {
      icon: MessageCircle,
      title: "Client Value",
      description:
        "We believe that the success of our clients defines our success. We are fully committed to understanding your business goals and delivering solutions that go beyond expectations.",
    },
    {
      icon: Zap,
      title: "Innovation & Excellence",
      description:
        "Innovation is at the heart of everything we do. We constantly push the boundaries of technology to ensure that our solutions are forward-thinking and cutting-edge.",
    },
    {
      icon: Shield,
      title: "Integrity & Transparency",
      description:
        "We maintain honest, open communication with our clients, employees, and partners. You can trust us to deliver what we promise.",
    },
    {
      icon: Users,
      title: "People-Centric Approach",
      description:
        "We prioritize well-being, collaboration, and mutual respect. Our team is dedicated to fostering strong and enduring relationships.",
    },
    {
      icon: TrendingUp,
      title: "Accountability",
      description:
        "We take responsibility for our actions, our services, and the outcomes we create for our clients. Every project is treated with the utmost care.",
    },
    {
      icon: Handshake,
      title: "Collaboration & Teamwork",
      description:
        "We believe in the power of collaboration. By bringing together diverse skill sets and backgrounds, we foster innovation and progress.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20 w-11/12  text-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">
        About BigByteBerry
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="col-span-full bg-[#1a1a2e] border-none">
          <CardHeader>
            <CardTitle className="text-white">Discover Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px] text-gray-300">
              <p>
                BigByteBerry was founded with a vision to empower businesses
                through innovative and advanced technology solutions. From small
                startups to growing enterprises, we provide tech-driven services
                that transform the way companies operate, streamline their
                processes, and build stronger digital presences.
              </p>
              <p className="mt-4">
                Our journey began with a group of tech enthusiasts passionate
                about leveraging the latest technological advancements, from web
                design to artificial intelligence (AI), automation, and digital
                transformation. We noticed a gap in the market where businesses
                needed not just a digital solution but a partner who could help
                them thrive in the fast-evolving tech landscape. With that in
                mind, BigByteBerry was born to offer more than just
                services—we&apos;re here to be a strategic partner in growth.
              </p>
              <p className="mt-4">
                Today, we are a full-service tech agency offering a range of
                solutions, including web development, AI integration,
                automation, chatbot development, SaaS platforms, digital
                marketing, and MVP creation. Our goal is to help businesses of
                all sizes stay ahead in a competitive digital world.
              </p>
            </ScrollArea>
          </CardContent>
        </Card>
        <Card  className="bg-[#1a1a2e] col-span-2  border-none">
          <CardHeader>
            <CardTitle className="text-white">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="text-gray-300">
              <p>
                At BigByteBerry, our mission is to empower businesses by
                providing cutting-edge, tailored technology solutions that
                enable growth, innovation, and efficiency. We are committed to
                delivering high-quality services that solve real-world
                challenges and create value for our clients through technology.
              </p>
            </ScrollArea>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1a2e] border-none">
          <CardHeader>
            <CardTitle className="text-white">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className=" text-gray-300">
              <p>
                We envision a future where businesses, regardless of size, can
                easily access and integrate the most innovative technologies to
                drive success and scale without limitations. BigByteBerry
                aspires to be a trusted leader in the tech industry, continually
                pushing the boundaries of what&apos;s possible through digital
                transformation.
              </p>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
      <h2 className="text-3xl font-bold text-center my-8">
        Core Values That Drive Our Brand Forward
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coreValues.map((value, index) => (
          <Card key={index} className="bg-[#1a1a2e] border-none">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-[#8a2be2] flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">{value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
