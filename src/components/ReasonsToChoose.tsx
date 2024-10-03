"use client"

import { cn } from "@/lib/utils";
import {
  IconBolt,
  IconBrain,
  IconMessageCircle,
  IconPuzzle,
  IconRepeat,
  IconStar,
  IconWallet,
} from "@tabler/icons-react";
import { CheckCircle } from "lucide-react";

export function ReasonsToChoose() {
  const features = [
    {
      title: "Seamless Async Communication",
      description:
        "Stay effortlessly connected with real-time updates, ensuring you're always in sync with progress.",
      icon: IconMessageCircle,
    },
    {
      title: "Blazing-Fast Turnaround",
      description:
        "Your designs, code, and deliverables arrive in record time—within days, or even just hours.",
      icon: IconBolt,
    },
    {
      title: "Guaranteed Satisfaction",
      description:
        "Not 100% satisfied? We'll keep refining until you are, or offer a full refund—no hassle, no fuss.",
      icon: CheckCircle,
    },
    {
      title: "Top-Tier Quality, Every Time",
      description:
        "We consistently deliver premium results tailored to your needs.",
      icon: IconStar,
    },
    {
      title: "Infinite Revisions",
      description:
        "We don't stop until it's flawless. Unlimited revisions until the final product aligns with your vision.",
      icon: IconRepeat,
    },
    {
      title: "Cost-Efficient Solutions",
      description:
        "No long-term contracts or hidden fees—just transparent, affordable pricing that fits your budget.",
      icon: IconWallet,
    },
    {
      title: "AI-Driven Optimization",
      description:
        "Leverage cutting-edge AI to automate workflows, streamline processes, and amplify efficiency.",
      icon: IconBrain,
    },
    {
      title: "Custom-Tailored Solutions",
      description:
        "We shape our services around your unique needs, providing solutions that evolve with your business.",
      icon: IconPuzzle,
    },
  ];

  return (
    <div className="py-6 md:py-12 flex flex-col items-center ">
      <div></div>

      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature
            key={feature.title}
            {...feature}
            index={index}
            icon={<feature.icon />}
          />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: JSX.Element;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-purple-200 dark:border-purple-800",
        (index === 0 || index === 4) &&
          "lg:border-l border-purple-200 dark:border-purple-800",
        index < 4 && "lg:border-b border-purple-200 dark:border-purple-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-purple-100 dark:from-purple-900 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-purple-100 dark:from-purple-900 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-purple-600 dark:text-purple-400 group-hover/feature:text-violet-500 dark:group-hover/feature:text-violet-400 transition-colors duration-200">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-purple-300 dark:bg-purple-700 group-hover/feature:bg-gradient-to-b group-hover/feature:from-purple-500 group-hover/feature:via-violet-500 group-hover/feature:to-pink-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-purple-800 dark:text-purple-100 group-hover/feature:text-violet-600 dark:group-hover/feature:text-violet-300">
          {title}
        </span>
      </div>
      <p className="text-sm text-slate-300 group-hover/feature:text-violet-500 dark:group-hover/feature:text-violet-200 max-w-xs relative z-10 px-10 transition-colors duration-200">
        {description}
      </p>
    </div>
  );
};
