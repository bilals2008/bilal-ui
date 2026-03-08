"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export function ProgressControlled() {
  const [value, setValue] = useState(40);

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Progress value={value} />
      <div className="flex justify-center gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => setValue((current) => Math.max(0, current - 10))}
        >
          -10
        </Button>
        <span className="w-12 self-center text-center font-mono text-sm">{value}%</span>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setValue((current) => Math.min(100, current + 10))}
        >
          +10
        </Button>
      </div>
    </div>
  );
}

