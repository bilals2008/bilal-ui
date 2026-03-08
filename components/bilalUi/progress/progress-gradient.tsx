"use client";

import { Progress } from "@/components/ui/progress";

export function ProgressGradient() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-1">
      <div className="flex justify-between text-sm">
        <span>XP Progress</span>
        <span className="text-muted-foreground">2,400 / 3,000</span>
      </div>
      <Progress
        value={80}
        className="[&_[data-slot=progress-indicator]]:bg-gradient-to-r [&_[data-slot=progress-indicator]]:from-violet-500 [&_[data-slot=progress-indicator]]:to-pink-500"
      />
    </div>
  );
}

