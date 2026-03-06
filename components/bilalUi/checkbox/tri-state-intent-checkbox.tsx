"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon, MinusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IntentState = "unchecked" | "partial" | "confirmed";

const CHILD_PERMISSIONS = [
  { id: "perm-view-orders", label: "View orders" },
  { id: "perm-create-orders", label: "Create orders" },
  { id: "perm-edit-orders", label: "Edit orders" },
  { id: "perm-refund-orders", label: "Refund orders" },
] as const;

type PermissionId = (typeof CHILD_PERMISSIONS)[number]["id"];
type PermissionMap = Record<PermissionId, boolean>;

function getIntentState(selectedCount: number, totalCount: number): IntentState {
  if (selectedCount === 0) return "unchecked";
  if (selectedCount === totalCount) return "confirmed";
  return "partial";
}

export function TriStateIntentCheckbox() {
  const [permissions, setPermissions] = React.useState<PermissionMap>({
    "perm-view-orders": true,
    "perm-create-orders": false,
    "perm-edit-orders": true,
    "perm-refund-orders": false,
  });

  const selectedCount = React.useMemo(
    () => CHILD_PERMISSIONS.filter((permission) => permissions[permission.id]).length,
    [permissions]
  );

  const state = getIntentState(selectedCount, CHILD_PERMISSIONS.length);

  const checkedState: CheckboxPrimitive.CheckedState =
    state === "confirmed" ? true : state === "partial" ? "indeterminate" : false;

  const statusLabel =
    state === "confirmed"
      ? "Confirmed"
      : state === "partial"
        ? "Partially applied"
        : "Not applied";

  const setAllChildren = React.useCallback((enabled: boolean) => {
    setPermissions((prev) => {
      const next = { ...prev };
      for (const permission of CHILD_PERMISSIONS) {
        next[permission.id] = enabled;
      }
      return next;
    });
  }, []);

  const toggleChild = React.useCallback((permissionId: PermissionId, checked: CheckboxPrimitive.CheckedState) => {
    setPermissions((prev) => ({
      ...prev,
      [permissionId]: checked === true,
    }));
  }, []);

  return (
    <fieldset className="w-full max-w-md rounded-lg border border-border p-3">
      <legend className="sr-only">Nested permission selector</legend>

      <div className="flex items-start gap-3">
        <CheckboxPrimitive.Root
          id="tri-state-intent-parent"
          checked={checkedState}
          onCheckedChange={(checked) => setAllChildren(checked !== false)}
          className={cn(
            "relative mt-0.5 grid size-4 shrink-0 place-content-center rounded-[4px] border shadow-xs outline-none transition-all",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "data-[state=unchecked]:border-input",
            "data-[state=indeterminate]:border-amber-500/70 data-[state=indeterminate]:bg-amber-50",
            "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
          )}
          aria-describedby="tri-state-intent-note"
        >
          {state === "partial" && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[4px]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, rgba(245,158,11,0.35) 0 2px, transparent 2px 5px)",
              }}
            />
          )}

          <CheckboxPrimitive.Indicator className="relative z-10 grid place-content-center text-current">
            {state === "partial" ? <MinusIcon className="size-3.5" /> : <CheckIcon className="size-3.5" />}
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>

        <div className="space-y-0.5">
          <label htmlFor="tri-state-intent-parent" className="text-sm font-medium leading-none">
            Orders Permissions
          </label>
          <p id="tri-state-intent-note" className="text-xs text-muted-foreground" title="Partial means only some child permissions are selected.">
            Status: {statusLabel} ({selectedCount}/{CHILD_PERMISSIONS.length} selected)
          </p>
        </div>
      </div>

      <div className="mt-3 space-y-2 pl-7">
        {CHILD_PERMISSIONS.map((permission) => (
          <label key={permission.id} className="flex items-center gap-2 text-sm">
            <CheckboxPrimitive.Root
              id={permission.id}
              checked={permissions[permission.id]}
              onCheckedChange={(checked) => toggleChild(permission.id, checked)}
              className={cn(
                "grid size-4 shrink-0 place-content-center rounded-[4px] border border-input shadow-xs outline-none transition-all",
                "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              )}
            >
              <CheckboxPrimitive.Indicator className="grid place-content-center text-current">
                <CheckIcon className="size-3.5" />
              </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>
            <span>{permission.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
