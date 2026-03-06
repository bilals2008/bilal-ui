"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon, PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function TokenizedCheckbox() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="inline-flex items-center gap-3">
      <CheckboxPrimitive.Root
        id="tokenized-checkbox"
        checked={checked}
        onCheckedChange={(value) => setChecked(value === true)}
        className={cn(
          "inline-flex h-8 items-center border outline-none transition-all duration-300",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          checked
            ? "rounded-full border-primary bg-primary px-3 text-primary-foreground"
            : "rounded-md border-input bg-background px-2 text-foreground"
        )}
      >
        {checked ? (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold">
            <CheckIcon className="size-3.5" />
            Design
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <PlusIcon className="size-3.5" />
            Add Design
          </span>
        )}
      </CheckboxPrimitive.Root>

      <label htmlFor="tokenized-checkbox" className="text-sm text-muted-foreground">
        Tokenized selection
      </label>
    </div>
  );
}
