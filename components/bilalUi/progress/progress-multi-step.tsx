"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const steps = ["Details", "Payment", "Review", "Confirm"];

export function ProgressMultiStep() {
  const [step, setStep] = useState(1);
  const value = (step / steps.length) * 100;

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex justify-between text-xs text-muted-foreground">
        {steps.map((label, index) => (
          <span
            key={label}
            className={cn(index < step ? "font-medium text-foreground" : "")}
          >
            {label}
          </span>
        ))}
      </div>
      <Progress value={value} />
      <div className="flex justify-end gap-2">
        <Button
          size="sm"
          variant="outline"
          disabled={step <= 1}
          onClick={() => setStep((current) => current - 1)}
        >
          Back
        </Button>
        <Button
          size="sm"
          disabled={step >= steps.length}
          onClick={() => setStep((current) => current + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

