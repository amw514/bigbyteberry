import { IconRobot } from "@tabler/icons-react";
import { Code, Rocket } from "lucide-react";
import { AnimatedAutomationSection } from "./AnimatedAutomationSection";

export default function FeaturesListSection() {
  return (
    <section className="py-6 lg:p-16 text-white mx-auto ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:items-start  md:flex-row gap-12">
          {/* Left side: Automation and AI */}
          <div className="w-11/12 md:w-1/2 space-y-6 flex flex-col items-center md:items-start text-center md:text-start ">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              Empowering Business with
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Automation and AI
              </span>
            </h2>
            <p className="text-gray-300 mb-6">
              Harness the power of to streamline your
              processes, enhance user experiences, and achieve your business
              goals through innovative Automation, AI and Web Development.
            </p>
            <ul className="space-y-4">
              {[
                {
                  icon: IconRobot,
                  text: "AI-driven personalization for user engagement",
                },
                {
                  icon: Code,
                  text: "Automated code optimization for peak performance",
                },
                {
                  icon: Rocket,
                  text: "Intelligent scaling solutions for rapid growth",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <item.icon className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side: Key benefits */}
          <div className="w-11/12 md:w-1/2">
            <AnimatedAutomationSection />
          </div>
        </div>
      </div>
    </section>
  );
}
