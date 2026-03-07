"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type DiffSlices = {
  prefix: string;
  added: string;
  suffix: string;
  removed: string;
};

function getDiffSlices(baseline: string, current: string): DiffSlices {
  let start = 0;
  const maxStart = Math.min(baseline.length, current.length);

  while (start < maxStart && baseline[start] === current[start]) {
    start += 1;
  }

  let end = 0;
  const maxEnd = Math.min(baseline.length - start, current.length - start);
  while (
    end < maxEnd &&
    baseline[baseline.length - 1 - end] === current[current.length - 1 - end]
  ) {
    end += 1;
  }

  return {
    prefix: current.slice(0, start),
    added: current.slice(start, current.length - end),
    suffix: current.slice(current.length - end),
    removed: baseline.slice(start, baseline.length - end),
  };
}

export function DiffTextarea() {
  const initialBaseline =
    "Ship the feature update this week with clear onboarding copy.";
  const [baseline, setBaseline] = React.useState(initialBaseline);
  const [value, setValue] = React.useState(
    "Ship the feature update this week with bold onboarding copy and a clearer CTA."
  );
  const overlayRef = React.useRef<HTMLDivElement>(null);

  const diff = React.useMemo(() => getDiffSlices(baseline, value), [baseline, value]);
  const hasChanges = baseline !== value;

  const syncOverlayScroll = (event: React.UIEvent<HTMLTextAreaElement>) => {
    if (!overlayRef.current) return;
    overlayRef.current.scrollTop = event.currentTarget.scrollTop;
    overlayRef.current.scrollLeft = event.currentTarget.scrollLeft;
  };

  return (
    <div className="w-full max-w-2xl space-y-3">
      <div className="flex flex-wrap gap-2">
        <Button type="button" size="sm" onClick={() => setBaseline(value)}>
          Set Baseline
        </Button>
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() => {
            setBaseline(initialBaseline);
            setValue(
              "Ship the feature update this week with bold onboarding copy and a clearer CTA."
            );
          }}
        >
          Reset Demo
        </Button>
      </div>

      <div className="rounded-xl border bg-card p-3 shadow-sm">
        <p className="mb-2 text-xs text-muted-foreground">
          Added text shows green tint inside textarea. Removed text is listed below.
        </p>

        <div className="relative">
          <div
            ref={overlayRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-md border border-transparent px-3 py-2 text-sm leading-relaxed"
          >
            <div className="min-h-36 whitespace-pre-wrap break-words text-foreground">
              {diff.prefix}
              {diff.added && (
                <span className="rounded bg-emerald-500/20 px-0.5 text-emerald-800 dark:text-emerald-300">
                  {diff.added}
                </span>
              )}
              {diff.suffix}
            </div>
          </div>

          <Textarea
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onScroll={syncOverlayScroll}
            className="min-h-36 bg-transparent font-medium leading-relaxed text-transparent caret-foreground"
            placeholder="Edit text to see inline diff..."
            aria-label="Diff textarea"
          />
        </div>
      </div>

      <div className="rounded-xl border bg-background p-3">
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Removed Text
        </p>
        {hasChanges && diff.removed ? (
          <p className="rounded-md bg-rose-500/10 px-2 py-1 font-mono text-sm text-rose-700 line-through dark:text-rose-300">
            {diff.removed}
          </p>
        ) : (
          <p className="text-sm text-muted-foreground">No removed text.</p>
        )}
      </div>
    </div>
  );
}
