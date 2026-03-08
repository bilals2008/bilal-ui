"use client";

import { Separator } from "@/components/ui/separator";

export function BasicSeparator() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">Basic Separator</h4>
        <p className="text-sm text-muted-foreground">
          Simple horizontal divider between content sections.
        </p>
      </div>
      <Separator />
      <p className="text-sm text-muted-foreground">Content below separator</p>
    </div>
  );
}
