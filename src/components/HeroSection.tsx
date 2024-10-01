import React from "react";
import { HeroLeftSection } from "./HeroLeftSection";
import { HeroRightImage } from "./HeroRightImage";

export function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row space-y-8  justify-center md:justify-around items-center h-[52rem] md:h-[48rem] p-6 md:p-12 ">
      <div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-700 rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-700 rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-700 rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-700 rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
        </div>
      </div>
      <HeroLeftSection />
      <HeroRightImage />
    </div>
  );
}
