"use client";

import * as React from "react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const steps = [
  {
    value: "draft",
    title: "Draft",
    desc: "Write and collect all initial content.",
  },
  {
    value: "review",
    title: "Review",
    desc: "Share internally and apply feedback.",
  },
  {
    value: "publish",
    title: "Publish",
    desc: "Release and notify your audience.",
  },
];

export function TimelineStepRadioGroup() {
  const [value, setValue] = React.useState("review");

  return (
    <RadioGroup
      value={value}
      onValueChange={setValue}
      className="w-full max-w-sm gap-2"
    >
      {steps.map((step, index) => {
        const id = `timeline-${step.value}`;
        const active = value === step.value;

        return (
          <Label
            key={step.value}
            htmlFor={id}
            className={cn(
              "flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition-colors",
              active ? "border-primary bg-primary/5" : "hover:bg-accent"
            )}
          >
            <div className="flex items-center gap-3">
              <div className="flex size-6 items-center justify-center rounded-full bg-muted text-xs font-medium">
                {index + 1}
              </div>
              <RadioGroupItem value={step.value} id={id} />
            </div>

            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">{step.title}</p>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </div>
          </Label>
        );
      })}
    </RadioGroup>
  );
}
