"use client";

import { Progress } from "@/components/ui/progress";

export function ProgressThick() {
  return (
    <div className="w-full max-w-sm">
      <Progress
        value={55}
        className="h-6 rounded-lg [&_[data-slot=progress-indicator]]:bg-violet-600"
      />
    </div>
  );
}

