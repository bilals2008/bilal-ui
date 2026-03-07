"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

type RiskLevel = "low" | "medium" | "high";

const RISK_STYLES: Record<
  RiskLevel,
  {
    label: string;
    checkboxClass: string;
    badgeClass: string;
    note: string;
  }
> = {
  low: {
    label: "Low Risk",
    checkboxClass:
      "border-emerald-500/70 data-[state=checked]:border-emerald-600 data-[state=checked]:bg-emerald-600",
    badgeClass: "border-emerald-500/40 bg-emerald-500/10 text-emerald-700",
    note: "minor impact settings",
  },
  medium: {
    label: "Medium Risk",
    checkboxClass:
      "border-amber-500/70 data-[state=checked]:border-amber-600 data-[state=checked]:bg-amber-600",
    badgeClass: "border-amber-500/40 bg-amber-500/10 text-amber-700",
    note: "workflow behavior may change",
  },
  high: {
    label: "High Risk",
    checkboxClass:
      "border-rose-500/70 data-[state=checked]:border-rose-600 data-[state=checked]:bg-rose-600",
    badgeClass: "border-rose-500/40 bg-rose-500/10 text-rose-700",
    note: "destructive or hard-to-reverse action",
  },
};

export function RiskAwareCheckbox() {
  const [risk, setRisk] = React.useState<RiskLevel>("medium");
  const [checked, setChecked] = React.useState(false);

  const selectedRisk = RISK_STYLES[risk];

  return (
    <div className="inline-flex min-w-[320px] flex-col gap-3 rounded-lg border border-border p-3">
      <div className="flex flex-wrap items-center gap-2">
        {(Object.keys(RISK_STYLES) as RiskLevel[]).map((level) => {
          const isActive = risk === level;
          return (
            <button
              key={level}
              type="button"
              onClick={() => setRisk(level)}
              className={cn(
                "rounded-full border px-2.5 py-1 text-xs font-medium transition-colors",
                isActive
                  ? RISK_STYLES[level].badgeClass
                  : "border-border bg-background text-muted-foreground hover:text-foreground"
              )}
              aria-pressed={isActive}
            >
              {RISK_STYLES[level].label}
            </button>
          );
        })}
      </div>

      <label htmlFor="risk-aware-checkbox" className="inline-flex items-start gap-3">
        <Checkbox
          id="risk-aware-checkbox"
          checked={checked}
          onCheckedChange={(value) => setChecked(value === true)}
          className={selectedRisk.checkboxClass}
        />

        <span className="space-y-1">
          <span className="block text-sm font-medium leading-none">I understand the impact</span>
          <span className="block text-xs text-muted-foreground">
            Current level: {selectedRisk.label} ({selectedRisk.note})
          </span>
          {checked && (
            <span className="block text-xs font-medium text-foreground">
              Confirmed: you acknowledged {selectedRisk.label.toLowerCase()} changes.
            </span>
          )}
        </span>
      </label>
    </div>
  );
}
