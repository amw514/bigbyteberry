import Image from "next/image";
import {
  ArrowRight,
  Code,
  Zap,
  Users,
  Lightbulb,
  Shield,
  Handshake,
} from "lucide-react";

export default function About() {
  const coreValues = [
    {
      icon: <Users className="w-8 h-8 text-teal-500" />,
      title: "Client Value",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: "Innovation & Excellence",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Integrity & Transparency",
    },
    {
      icon: <Handshake className="w-8 h-8 text-green-500" />,
      title: "People-Centric Approach",
    },
    {
      icon: <Code className="w-8 h-8 text-indigo-500" />,
      title: "Accountability",
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "Collaboration & Teamwork",
    },
  ];

  return (
    <div className="w-11/12 mx-auto py-24">
      <header>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About BigByteBerry
          </h1>
          <p className="text-xl md:text-2xl">
            Empowering businesses through innovative technology solutions
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Discover Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className=" mb-4">
                BigByteBerry was founded with a vision to empower businesses
                through innovative and advanced technology solutions. From small
                startups to growing enterprises, we provide tech-driven services
                that transform the way companies operate, streamline their
                processes, and build stronger digital presences.
              </p>
              <p className="">
                Our journey began with a group of tech enthusiasts passionate
                about leveraging the latest technological advancements, from web
                design to artificial intelligence (AI), automation, and digital
                transformation.
              </p>
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="BigByteBerry team"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="">
                At BigByteBerry, our mission is to empower businesses by
                providing cutting-edge, tailored technology solutions that
                enable growth, innovation, and efficiency. We are committed to
                delivering high-quality services that solve real-world
                challenges and create value for our clients through technology.
              </p>
            </div>
            <div className=" p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="">
                We envision a future where businesses, regardless of size, can
                easily access and integrate the most innovative technologies to
                drive success and scale without limitations. BigByteBerry
                aspires to be a trusted leader in the tech industry, continually
                pushing the boundaries of what&apos;s possible through digital
                transformation.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Core Values That Drive Our Brand Forward
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                {value.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">
                  {value.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <div className="">
            <p className="text-lg mb-4">
              BigByteBerry isn&apos;t just another tech agency. We are your
              dedicated partner for success. With a people-driven approach, a
              passion for innovation, and a commitment to excellence, we deliver
              solutions that make a real difference to your business.
            </p>
            <p className="text-lg">
              Whether you need a sophisticated AI system or a beautifully
              designed website, we have the expertise and dedication to make it
              happen.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
