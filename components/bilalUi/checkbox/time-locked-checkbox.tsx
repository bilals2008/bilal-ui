"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const LOCK_SECONDS = 5;

type LockState = "idle" | "pending" | "finalized";

export function TimeLockedCheckbox() {
  const [checked, setChecked] = React.useState(false);
  const [state, setState] = React.useState<LockState>("idle");
  const [secondsLeft, setSecondsLeft] = React.useState(LOCK_SECONDS);

  React.useEffect(() => {
    if (state !== "pending" || !checked) {
      return;
    }

    if (secondsLeft === 0) {
      setState("finalized");
      return;
    }

    const timer = window.setTimeout(() => {
      setSecondsLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [state, checked, secondsLeft]);

  const handleCheckedChange = (value: boolean | "indeterminate") => {
    const next = value === true;

    if (next) {
      if (state === "finalized") {
        return;
      }

      setChecked(true);
      setState("pending");
      setSecondsLeft(LOCK_SECONDS);
      return;
    }

    if (state === "pending") {
      setChecked(false);
      setState("idle");
      setSecondsLeft(LOCK_SECONDS);
    }
  };

  const undoPending = () => {
    if (state !== "pending") {
      return;
    }

    setChecked(false);
    setState("idle");
    setSecondsLeft(LOCK_SECONDS);
  };

  const resetFinalized = () => {
    setChecked(false);
    setState("idle");
    setSecondsLeft(LOCK_SECONDS);
  };

  return (
    <div className="inline-flex min-w-[320px] flex-col gap-3 rounded-lg border border-border p-3">
      <label htmlFor="time-locked-checkbox" className="inline-flex items-start gap-3">
        <Checkbox
          id="time-locked-checkbox"
          checked={checked}
          onCheckedChange={handleCheckedChange}
          disabled={state === "finalized"}
        />

        <span className="space-y-1">
          <span className="block text-sm font-medium leading-none">Confirm irreversible action</span>
          {state === "idle" && (
            <span className="block text-xs text-muted-foreground">
              Checking starts a {LOCK_SECONDS}-second undo window.
            </span>
          )}
          {state === "pending" && (
            <span className="block text-xs text-amber-700">
              Finalizing in {secondsLeft}s. You can still undo.
            </span>
          )}
          {state === "finalized" && (
            <span className="block text-xs font-medium text-foreground">
              Finalized. This selection is locked.
            </span>
          )}
        </span>
      </label>

      <div className="flex items-center gap-2">
        {state === "pending" && (
          <button
            type="button"
            onClick={undoPending}
            className="rounded-md border border-border px-2.5 py-1 text-xs font-medium"
          >
            Undo
          </button>
        )}

        {state === "finalized" && (
          <button
            type="button"
            onClick={resetFinalized}
            className="rounded-md border border-border px-2.5 py-1 text-xs font-medium"
          >
            Reset demo
          </button>
        )}
      </div>
    </div>
  );
}
