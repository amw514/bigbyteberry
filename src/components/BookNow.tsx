import Link from "next/link";
import React from "react";

const BookNow = () => {
  return (
    <Link
      href="https://calendly.com/bigbyteberry/30min"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] hover:scale-105 transition-transform duration-300">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Book Now
        </span>
      </button>
    </Link>
  );
};

export default BookNow;
