"use client";

import { useState } from "react";

import { Switch } from "@/components/ui/switch";

export function BasicSwitch() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Basic Switches</h3>
      <div className="flex items-center gap-6">
        <Switch checked={checked} onCheckedChange={setChecked} />
        <Switch defaultChecked />
        <Switch disabled />
        <Switch disabled defaultChecked />
      </div>
    </div>
  );
}
