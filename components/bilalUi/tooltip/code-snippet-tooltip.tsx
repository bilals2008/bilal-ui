"use client";

import { Code } from "lucide-react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function CodeSnippetTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 transition-colors duration-150 hover:bg-slate-200">
          <Code className="size-4 text-slate-700" />
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs border-slate-800 bg-slate-900 p-3 font-mono text-xs text-slate-50">
        <div className="rounded bg-black p-2">
          <code className="text-green-400">npm install @bilal-ui/components</code>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}

