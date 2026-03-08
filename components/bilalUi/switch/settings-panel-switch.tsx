"use client";

import { useState } from "react";

import { Switch } from "@/components/ui/switch";

export function SettingsPanelSwitch() {
  const [settings, setSettings] = useState({
    notifications: true,
    emailDigest: false,
    smsAlerts: true,
    pushNotifications: false,
  });

  const handleChange = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Settings Panel</h3>
      <div className="space-y-2 rounded-lg border border-border p-4">
        {Object.entries(settings).map(([key, value]) => (
          <div
            key={key}
            className="rounded border-b border-border/40 px-2 py-3 transition-colors last:border-b-0 hover:bg-muted/20"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm capitalize text-foreground">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </span>
              <Switch
                checked={value}
                onCheckedChange={() => handleChange(key as keyof typeof settings)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

