import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import BookNow from "./BookNow";

export function HeroSection() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col space-y-6 text-center text-black dark:text-white font-sans ">
        <div>
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-6xl font-bold">
            3x Growth Through
            <br />
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent ]">
                <span className="">AI Automation.</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="">AI Automation.</span>
              </div>
            </div>
          </h2>
        </div>
        <div className="text-xs lg:text-sm mx-auto px-8 max-w-[750px]">
          AI, automation, and innovative web development to elevate your digital
          presence and drive targeted marketing strategies that deliver real
          results. Enhancing efficiency by 40%, driving 3x ROI, or implementing
          AI-driven strategies. Let us help you transform potential into
          performance.
        </div>
        <div>
          <BookNow />
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
