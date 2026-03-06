"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const RING_RADIUS = 14;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

export function ProgressCheckbox() {
  const [checked, setChecked] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (!checked) {
      setProgress(0);
      return;
    }

    const frame = requestAnimationFrame(() => {
      setProgress(100);
    });

    return () => cancelAnimationFrame(frame);
  }, [checked]);

  const strokeDashoffset =
    RING_CIRCUMFERENCE - (progress / 100) * RING_CIRCUMFERENCE;

  return (
    <label
      htmlFor="progress-checkbox"
      className="inline-flex cursor-pointer items-center gap-3 rounded-lg border border-border px-3 py-2"
    >
      <span className="relative grid size-8 place-items-center">
        <svg
          viewBox="0 0 36 36"
          className="-rotate-90 absolute inset-0 size-8"
          aria-hidden="true"
        >
          <circle
            cx="18"
            cy="18"
            r={RING_RADIUS}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-muted-foreground/30"
          />
          <circle
            cx="18"
            cy="18"
            r={RING_RADIUS}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray={RING_CIRCUMFERENCE}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="text-primary transition-all duration-500 ease-out"
          />
        </svg>

        <Checkbox
          id="progress-checkbox"
          checked={checked}
          onCheckedChange={(value) => setChecked(value === true)}
          className="relative z-10"
        />
      </span>

      <span className="text-sm font-medium">
        Complete Step{" "}
        <span className="text-muted-foreground">({progress.toFixed(0)}%)</span>
      </span>
    </label>
  );
}
