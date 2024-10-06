import React from "react";
import BookNow from "./BookNow";

export function HeroLeftSection() {
  return (
    <div className="flex items-center md:items-start flex-col justify-center space-y-6 text-center md:text-left text-black dark:text-white font-sans  relative w-11/12  md:w-2/4  overflow-hidden">
      <div>
        <h2 className="text-3xl relative z-20 sm:text-4xl lg:text-6xl font-bold">
        Driving Business with 
          <br />
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-1">
              <span className="">Smart Innovation.</span>
            </div>
          </div>
        </h2>
      </div>
      <div className="text-xs lg:text-sm w-11/12">
        AI, automation, and web development to elevate your digital
        presence and drive targeted marketing strategies that deliver real
        results. Enhancing efficiency by 40%, driving 3x ROI, or implementing
        AI-driven strategies. Let us help you transform potential into
        performance.
      </div>
      <div>
        <BookNow />
      </div>
    </div>
  );
}
