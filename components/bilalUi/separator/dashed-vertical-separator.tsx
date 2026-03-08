"use client";

export function DashedVerticalSeparator() {
  return (
    <div className="w-full max-w-sm">
      <div className="flex h-24 items-center gap-4 text-sm">
        <div className="flex-1">
          <p className="font-semibold">Feature 1</p>
          <p className="text-xs text-muted-foreground">Description</p>
        </div>
        <div className="h-16 border-l-2 border-dashed border-gray-400" />
        <div className="flex-1">
          <p className="font-semibold">Feature 2</p>
          <p className="text-xs text-muted-foreground">Description</p>
        </div>
      </div>
    </div>
  );
}

