"use client";

import { useState, type ReactNode } from "react";
import { BarChart3, Bell, Database, Shield } from "lucide-react";

import { Switch } from "@/components/ui/switch";

const icons: Record<string, ReactNode> = {
  marketing: <Bell className="h-4 w-4" />,
  product: <BarChart3 className="h-4 w-4" />,
  security: <Shield className="h-4 w-4" />,
  updates: <Database className="h-4 w-4" />,
};

export function NotificationPreferenceSwitch() {
  const [notifications, setNotifications] = useState({
    marketing: false,
    product: true,
    security: true,
    updates: false,
  });

  const handleChange = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Notifications</h3>
      <div className="space-y-2">
        {Object.entries(notifications).map(([key, value]) => (
          <div
            key={key}
            className="flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-muted/30"
          >
            <div className="rounded bg-muted/60 p-2 text-muted-foreground">{icons[key]}</div>
            <span className="flex-1 text-sm capitalize text-foreground">{key}</span>
            <Switch checked={value} onCheckedChange={() => handleChange(key as keyof typeof notifications)} />
          </div>
        ))}
      </div>
    </div>
  );
}

