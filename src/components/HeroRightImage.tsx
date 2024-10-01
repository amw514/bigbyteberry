"use client";
import React from "react";
import Image from "next/image";

export function HeroRightImage() {
  return (
      <div className="w-4/5  md:w-2/4 h-[18rem] md:h-[22rem] border-4 border-[#8143a2] p-1 md:p-2 lg:p-4 bg-[#222222] rounded-[30px] shadow-2xl">
        <div className=" h-full w-full  overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-2 lg:p-4 ">
          <Image
            src={`/heroImage.png`}
            alt="hero image with statistics"
            height={750}
            width={750}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </div>
    </div>
  );
}
