"use client";

export function DashedSeparator() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">Dashed Border</h4>
        <p className="text-sm text-muted-foreground">
          Visual separation with dashes
        </p>
      </div>
      <div className="border-t-2 border-dashed border-gray-400" />
      <p className="text-sm text-muted-foreground">Content after dashed line</p>
    </div>
  );
}

