"use client";

import { useEffect, useState } from "react";

import { Progress } from "@/components/ui/progress";

export function ProgressAnimated() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((current) => (current >= 100 ? 0 : current + 1));
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex w-full max-w-sm flex-col gap-1">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Loading</span>
        <span>{value}%</span>
      </div>
      <Progress value={value} />
    </div>
  );
}

