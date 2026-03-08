"use client";

import { Separator } from "@/components/ui/separator";

export function VerticalSeparator() {
  return (
    <div className="w-full max-w-sm">
      <div className="flex h-20 items-center gap-4 text-sm">
        <span>Profile</span>
        <Separator orientation="vertical" />
        <span>Settings</span>
        <Separator orientation="vertical" />
        <span>Logout</span>
      </div>
    </div>
  );
}

