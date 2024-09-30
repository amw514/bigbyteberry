"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import BookNow from "../BookNow";
import Image from "next/image";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex  max-w-3xl  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-md dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] p-2  items-center justify-between space-x-4",
        className
      )}
    >
      <div>
        <Image src="/Logowithtext.svg" alt="alt" width={120} height={60} />
      </div>
      <div className="flex justify-between space-x-3">
        {navItems.map((navItem: { name: string; link: string; icon?: JSX.Element }, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50  text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
      </div>
      <div>
        <BookNow />
      </div>
    </div>
  );
};
