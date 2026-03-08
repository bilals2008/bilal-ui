"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export function ProgressCountdown() {
  const [value, setValue] = useState(100);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    if (value <= 0) {
      return;
    }

    const timer = setTimeout(() => {
      setValue((current) => (current <= 1 ? 0 : current - 1));
    }, 50);
    return () => clearTimeout(timer);
  }, [running, value]);

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Progress
        value={value}
        className={cn(
          value <= 25
            ? "[&_[data-slot=progress-indicator]]:bg-red-500"
            : "[&_[data-slot=progress-indicator]]:bg-sky-500"
        )}
      />
      <Button
        size="sm"
        variant="outline"
        onClick={() => {
          setValue(100);
          setRunning(true);
        }}
        className="self-center"
      >
        {running && value > 0 ? "Running..." : "Start Countdown"}
      </Button>
    </div>
  );
}
