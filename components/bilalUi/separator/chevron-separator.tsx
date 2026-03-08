"use client";

export function ChevronSeparator() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">Chevron Separator</h4>
        <p className="text-sm text-muted-foreground">Directional divider</p>
      </div>
      <div className="flex justify-center gap-1 text-2xl text-gray-400">
        <span>{">"}</span>
        <span>{">"}</span>
        <span>{">"}</span>
      </div>
      <p className="text-sm text-muted-foreground">
        Directional chevron divider
      </p>
    </div>
  );
}

