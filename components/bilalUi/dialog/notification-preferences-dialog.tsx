"use client";

import { useMemo, useState } from "react";
import { BellRing } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

type PreferenceKey = "productUpdates" | "weeklyDigest" | "securityAlerts";

const preferenceItems: {
  key: PreferenceKey;
  title: string;
  description: string;
}[] = [
  {
    key: "productUpdates",
    title: "Product updates",
    description: "Get feature releases and improvements.",
  },
  {
    key: "weeklyDigest",
    title: "Weekly digest",
    description: "Receive a short summary every Friday.",
  },
  {
    key: "securityAlerts",
    title: "Security alerts",
    description: "Stay informed about account activity.",
  },
];

export function NotificationPreferencesDialog() {
  const [preferences, setPreferences] = useState<Record<PreferenceKey, boolean>>(
    {
      productUpdates: true,
      weeklyDigest: false,
      securityAlerts: true,
    },
  );

  const selectedCount = useMemo(
    () => Object.values(preferences).filter(Boolean).length,
    [preferences],
  );

  const togglePreference = (key: PreferenceKey) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <BellRing className="size-4" />
          Manage Alerts
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Notification Preferences</DialogTitle>
          <DialogDescription>
            Choose which updates should reach your inbox.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-2">
          {preferenceItems.map((item) => (
            <div
              key={item.key}
              className="flex items-start gap-3 rounded-md border p-3"
            >
              <Checkbox
                id={item.key}
                checked={preferences[item.key]}
                onCheckedChange={() => togglePreference(item.key)}
                className="mt-0.5"
              />
              <div className="space-y-1">
                <Label htmlFor={item.key}>{item.title}</Label>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <DialogFooter className="items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            {selectedCount} notification channels enabled
          </p>
          <div className="flex gap-2">
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="button">Save Preferences</Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
