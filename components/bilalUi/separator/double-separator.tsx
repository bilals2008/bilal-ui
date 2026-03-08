"use client";

import { Separator } from "@/components/ui/separator";

export function DoubleSeparator() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">Double Separator</h4>
        <p className="text-sm text-muted-foreground">Parallel dividing lines</p>
      </div>
      <div className="space-y-1">
        <Separator className="bg-gray-400" />
        <Separator className="bg-gray-400" />
      </div>
      <p className="text-sm text-muted-foreground">
        Elegant double-line divider
      </p>
    </div>
  );
}

