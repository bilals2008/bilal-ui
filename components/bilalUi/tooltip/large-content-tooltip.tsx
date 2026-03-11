"use client";

import { Eye } from "lucide-react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function LargeContentTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 transition-colors duration-150 hover:bg-blue-100">
          <Eye className="size-4 text-blue-600" />
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-md border-slate-800 bg-slate-900 p-4 text-slate-50">
        <div className="space-y-3">
          <p className="font-semibold">Detailed Feature Description</p>
          <p className="text-sm leading-relaxed">
            This tooltip provides comprehensive information about a feature. It
            can span multiple lines and include detailed explanations.
          </p>
          <p className="text-xs text-slate-400">Last updated: Today at 2:30 PM</p>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}

