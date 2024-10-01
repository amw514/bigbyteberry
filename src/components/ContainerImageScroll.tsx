"use client";
import React from "react";
import Image from "next/image";

export function ContainerImageScroll() {
  return (
    <div className="flex flex-col overflow-hidden justify-end">
      <div className="max-w-4xl -mt-12 mx-auto h-[20rem] md:h-[30rem] w-full border-4 border-[#8143a2] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl">
        <div className=" h-full w-full  overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4 ">
          <Image
            src={`/heroImage.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
