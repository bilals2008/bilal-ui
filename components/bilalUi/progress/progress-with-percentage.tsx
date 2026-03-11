"use client";

import { Progress } from "@/components/ui/progress";

export function ProgressWithPercentage() {
  const value = 72;

  return (
    <div className="flex w-full max-w-sm flex-col gap-1">
      <div className="flex justify-between text-sm">
        <span>Uploading...</span>
        <span className="font-mono font-medium">{value}%</span>
      </div>
      <Progress value={value} />
    </div>
  );
}

