"use client";

import { AlertTriangle, Copy, Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function TooltipButtonGroup() {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" className="hover:bg-blue-100">
            <Eye className="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="bg-slate-900 text-slate-50">View Details</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" className="hover:bg-green-100">
            <Copy className="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="bg-slate-900 text-slate-50">Copy to Clipboard</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" className="hover:bg-red-100">
            <AlertTriangle className="size-4 text-red-600" />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="bg-slate-900 text-slate-50">
          Warning: Action Required
        </TooltipContent>
      </Tooltip>
    </div>
  );
}


