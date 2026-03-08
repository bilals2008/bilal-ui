"use client";

import { useState } from "react";
import { Lock } from "lucide-react";

import { Switch } from "@/components/ui/switch";

export function PermissionSwitch() {
  const [permissions, setPermissions] = useState({
    camera: true,
    microphone: false,
    location: true,
    contacts: false,
  });

  const handleChange = (key: keyof typeof permissions) => {
    setPermissions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Permissions</h3>
      <div className="space-y-2 divide-y divide-border rounded-lg border border-border">
        {Object.entries(permissions).map(([key, value]) => (
          <div
            key={key}
            className={`flex items-center justify-between p-4 transition-colors ${
              value
                ? "hover:bg-green-50/30 dark:hover:bg-green-950/10"
                : "hover:bg-red-50/30 dark:hover:bg-red-950/10"
            }`}
          >
            <div className="flex items-center gap-3">
              <Lock className={`h-4 w-4 ${value ? "text-green-600" : "text-muted-foreground"}`} />
              <span className="text-sm capitalize text-foreground">{key}</span>
            </div>
            <Switch checked={value} onCheckedChange={() => handleChange(key as keyof typeof permissions)} />
          </div>
        ))}
      </div>
    </div>
  );
}

