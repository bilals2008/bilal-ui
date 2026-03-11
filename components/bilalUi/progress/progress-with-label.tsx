"use client";

import { Progress } from "@/components/ui/progress";

export function ProgressWithLabel() {
  const value = 45;

  return (
    <div className="flex w-full max-w-sm flex-col gap-1">
      <span className="text-sm font-medium">Profile completion</span>
      <Progress value={value} />
    </div>
  );
}

