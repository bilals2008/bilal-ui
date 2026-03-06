"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon, MinusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IntentState = "unchecked" | "partial" | "confirmed";

const INTENT_ORDER: IntentState[] = ["unchecked", "partial", "confirmed"];

function nextIntentState(state: IntentState): IntentState {
  const currentIndex = INTENT_ORDER.indexOf(state);
  return INTENT_ORDER[(currentIndex + 1) % INTENT_ORDER.length];
}

export function TriStateIntentCheckbox() {
  const [state, setState] = React.useState<IntentState>("unchecked");

  const checkedState: CheckboxPrimitive.CheckedState =
    state === "confirmed" ? true : state === "partial" ? "indeterminate" : false;

  const statusLabel =
    state === "confirmed"
      ? "Confirmed"
      : state === "partial"
        ? "Partially applied"
        : "Not applied";

  return (
    <div className="inline-flex items-center gap-3 rounded-lg border border-border px-3 py-2">
      <CheckboxPrimitive.Root
        id="tri-state-intent"
        checked={checkedState}
        onCheckedChange={() => setState((prev) => nextIntentState(prev))}
        className={cn(
          "relative grid size-4 shrink-0 place-content-center rounded-[4px] border shadow-xs outline-none transition-all",
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
        <p className="text-sm font-medium leading-none">Apply Parent Permission</p>
        <p id="tri-state-intent-note" className="text-xs text-muted-foreground" title="Partial means only some child items are selected.">
          Status: {statusLabel}
        </p>
      </div>
    </div>
  );
}
