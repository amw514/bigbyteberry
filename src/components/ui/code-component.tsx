"use client";
import { ClipboardIcon } from "lucide-react";

export function CommandCode({ children }: Readonly<{ children: string }>) {

  const handleClick = () => {
    const email = "bigbyteberry@gmail.com";
    const subject = encodeURIComponent("Hi bigbyteberry");
    const body = encodeURIComponent("\n\n"); // This will place the cursor on a new line in the body
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };
  return (
    <button
      className="flex transform-gpu items-center justify-between space-x-3 rounded-md bg-amber-300/20 px-5 py-3 text-amber-800 tracking-tighter transition-all hover:bg-amber-300/15 active:scale-90 active:bg-amber-300/30 dark:text-amber-400"
      onClick={handleClick}
      type="button"
    >
      <code className="overflow-ellipsis whitespace-nowrap text-left">
        {children}
      </code>
      <ClipboardIcon className=" size-4" />
    </button>
  );
}
