"use client";
import { useCopyToClipboard } from "@/hooks/useCopyCode";
import { ClipboardIcon } from "lucide-react";
import { toast } from "sonner";

export function CommandCode({ children }: Readonly<{ children: string }>) {
  const [copiedText, copy] = useCopyToClipboard();
  const handleCopyCode = (_code: string) => {
    copy(children);
    toast.success(`Command copied: ${copiedText}`);
  };
  return (
    <button
      className="flex transform-gpu items-center justify-between space-x-3 rounded-md bg-amber-300/20 px-5 py-3 text-amber-800 tracking-tighter transition-all hover:bg-amber-300/15 active:scale-90 active:bg-amber-300/30 dark:text-amber-400"
      onClick={() => handleCopyCode(children)}
      type="button"
    >
      <code className="overflow-ellipsis whitespace-nowrap text-left">
        {children}
      </code>
      <ClipboardIcon className=" size-4" />
    </button>
  );
}
