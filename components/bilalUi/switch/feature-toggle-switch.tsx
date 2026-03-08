"use client";

import { useState } from "react";

import { Switch } from "@/components/ui/switch";

export function FeatureToggleSwitch() {
  const [features, setFeatures] = useState({
    betaFeatures: false,
    experimentalUI: false,
    advancedMode: true,
  });

  const handleChange = (key: keyof typeof features) => {
    setFeatures((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Feature Toggles</h3>
      <div className="space-y-3">
        {Object.entries(features).map(([key, value]) => (
          <div
            key={key}
            className={`rounded-lg border p-3 transition-all ${
              value
                ? "border-blue-500/30 bg-blue-50 dark:bg-blue-950/20"
                : "border-border hover:bg-muted/30"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium capitalize text-foreground">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </p>
                {value && <p className="mt-1 text-xs text-blue-600 dark:text-blue-400">Active</p>}
              </div>
              <Switch
                checked={value}
                onCheckedChange={() => handleChange(key as keyof typeof features)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

