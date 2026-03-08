"use client";

import { Separator } from "@/components/ui/separator";

export function ColoredSeparator() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div>
        <h4 className="mb-2 text-sm font-semibold">Blue Separator</h4>
        <Separator className="h-1 bg-blue-500" />
      </div>
      <div>
        <h4 className="mb-2 text-sm font-semibold">Red Separator</h4>
        <Separator className="h-1 bg-red-500" />
      </div>
      <div>
        <h4 className="mb-2 text-sm font-semibold">Green Separator</h4>
        <Separator className="h-1 bg-green-500" />
      </div>
    </div>
  );
}

