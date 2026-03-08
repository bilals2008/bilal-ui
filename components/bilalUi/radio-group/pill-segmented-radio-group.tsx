"use client";

import * as React from "react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const views = [
  { value: "grid", label: "Grid View" },
  { value: "split", label: "Split View" },
  { value: "list", label: "List View" },
];

export function PillSegmentedRadioGroup() {
  const [value, setValue] = React.useState("split");

  return (
    <RadioGroup
      value={value}
      onValueChange={setValue}
      className="flex items-center gap-2 rounded-full border p-1"
    >
      {views.map((view) => {
        const id = `pill-${view.value}`;
        const active = value === view.value;

        return (
          <Label
            key={view.value}
            htmlFor={id}
            className={cn(
              "flex cursor-pointer items-center gap-2 rounded-full px-3 py-1.5 text-sm transition-colors",
              active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent"
            )}
          >
            <RadioGroupItem value={view.value} id={id} className="sr-only" />
            {view.label}
          </Label>
        );
      })}
    </RadioGroup>
  );
}
