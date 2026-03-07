"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const SIGNAL_ITEMS = [
  {
    id: "signal-critical",
    label: "Critical Alert",
    toneClass: "text-rose-500",
    checkboxClass:
      "data-[state=checked]:bg-rose-500 data-[state=checked]:border-rose-500 focus-visible:ring-rose-500/20 dark:focus-visible:ring-rose-500/40",
  },
  {
    id: "signal-clear",
    label: "All Clear",
    toneClass: "text-emerald-500",
    checkboxClass:
      "data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500 focus-visible:ring-emerald-500/20 dark:focus-visible:ring-emerald-500/40",
  },
  {
    id: "signal-review",
    label: "Needs Review",
    toneClass: "text-amber-500",
    checkboxClass:
      "data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500 focus-visible:ring-amber-500/20 dark:focus-visible:ring-amber-500/40",
  },
];

export function SignalCheckbox() {
  return (
    <div className="flex flex-col items-start gap-4">
      <Label className="font-semibold">Status Signals</Label>

      <div className="flex flex-col items-start gap-2.5">
        {SIGNAL_ITEMS.map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            <Checkbox
              id={item.id}
              className={`${item.checkboxClass} cursor-pointer dark:text-white`}
              aria-label={item.label}
              defaultChecked
            />
            <Label htmlFor={item.id} className={item.toneClass}>
              {item.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}
