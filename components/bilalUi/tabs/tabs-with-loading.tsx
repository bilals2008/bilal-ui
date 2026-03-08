"use client";

import { useState } from "react";
import { BarChart2, Database, Users } from "lucide-react";

import { cn } from "@/lib/utils";

const ITEMS = [
  { value: "data", label: "Data", icon: Database },
  { value: "reports", label: "Reports", icon: BarChart2 },
  { value: "users", label: "Users", icon: Users },
];

export function TabsWithLoading() {
  const [tab, setTab] = useState("data");
  const [loading, setLoading] = useState(false);

  const handleChange = (value: string) => {
    setLoading(true);
    setTab(value);
    setTimeout(() => setLoading(false), 800);
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex gap-1 border-b border-border">
        {ITEMS.map(({ value, label, icon: Icon }) => (
          <button
            key={value}
            type="button"
            onClick={() => handleChange(value)}
            className={cn(
              "flex items-center gap-2 border-b-2 px-4 py-2.5 text-sm font-medium transition-colors",
              tab === value
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>
      <div className="min-h-[48px] p-4 text-sm text-muted-foreground">
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            Loading...
          </div>
        ) : (
          `${ITEMS.find((item) => item.value === tab)?.label} content loaded.`
        )}
      </div>
    </div>
  );
}
