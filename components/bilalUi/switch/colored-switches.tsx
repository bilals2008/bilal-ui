"use client";

import { Switch } from "@/components/ui/switch";

const colors = [
  { name: "Blue", className: "data-[state=checked]:bg-blue-600" },
  { name: "Green", className: "data-[state=checked]:bg-green-600" },
  { name: "Red", className: "data-[state=checked]:bg-red-600" },
  { name: "Purple", className: "data-[state=checked]:bg-purple-600" },
];

export function ColoredSwitches() {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Color Variants</h3>
      <div className="grid grid-cols-2 gap-4">
        {colors.map((color) => (
          <div
            key={color.name}
            className="flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-muted/50"
          >
            <span className="text-sm text-foreground">{color.name}</span>
            <Switch defaultChecked className={color.className} />
          </div>
        ))}
      </div>
    </div>
  );
}

