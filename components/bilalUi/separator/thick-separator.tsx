"use client";

import { Separator } from "@/components/ui/separator";

export function ThickSeparator() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">Thick Divider</h4>
        <p className="text-sm text-muted-foreground">Bold visual separation</p>
      </div>
      <Separator className="h-2 bg-gray-900" />
      <p className="text-sm text-muted-foreground">Section below</p>
    </div>
  );
}

