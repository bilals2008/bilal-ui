"use client";

import { useState } from "react";
import { Copy } from "lucide-react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function ClickToCopyTooltip() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("bilal-ui@latest");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={handleCopy}
          className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-50 transition-colors duration-150 hover:bg-green-100"
        >
          <Copy className="size-4 text-green-600" />
        </button>
      </TooltipTrigger>
      <TooltipContent className="border-slate-800 bg-slate-900 text-slate-50">
        {copied ? "Copied!" : "Click to copy version"}
      </TooltipContent>
    </Tooltip>
  );
}

