"use client";

import { useState } from "react";
import { CreditCard, Settings, ShieldCheck, User } from "lucide-react";

import { cn } from "@/lib/utils";

const ITEMS = [
  { value: "profile", label: "Profile", icon: User },
  { value: "billing", label: "Billing", icon: CreditCard },
  { value: "security", label: "Security", icon: ShieldCheck },
  { value: "settings", label: "Settings", icon: Settings },
];

export function VerticalTabs() {
  const [tab, setTab] = useState("profile");

  return (
    <div className="flex w-full max-w-lg gap-4">
      <div className="flex w-40 shrink-0 flex-col gap-1">
        {ITEMS.map(({ value, label, icon: Icon }) => (
          <button
            key={value}
            type="button"
            onClick={() => setTab(value)}
            className={cn(
              "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              tab === value
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>
      <div className="flex-1 rounded-lg border bg-card p-4 text-sm text-muted-foreground">
        {ITEMS.find((item) => item.value === tab)?.label} content goes here.
      </div>
    </div>
  );
}
