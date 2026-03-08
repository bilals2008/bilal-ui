"use client";

import { useState } from "react";

import { Switch } from "@/components/ui/switch";

export function AccessibilitySwitchOptions() {
  const [a11y, setA11y] = useState({
    highContrast: false,
    reduceMotion: true,
    largeText: false,
    screenReaderMode: false,
  });

  const handleChange = (key: keyof typeof a11y) => {
    setA11y((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Accessibility</h3>
      <div className="space-y-2 divide-y divide-border rounded-lg border border-border">
        {Object.entries(a11y).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between p-4 transition-colors hover:bg-muted/40">
            <span className="text-sm capitalize text-foreground">
              {key.replace(/([A-Z])/g, " $1").trim()}
            </span>
            <Switch checked={value} onCheckedChange={() => handleChange(key as keyof typeof a11y)} />
          </div>
        ))}
      </div>
    </div>
  );
}

