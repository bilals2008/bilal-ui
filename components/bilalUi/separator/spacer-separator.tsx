"use client";

export function SpacerSeparator() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">Spacer Divider</h4>
        <p className="text-sm text-muted-foreground">Minimal line with padding</p>
      </div>
      <div className="border-t border-gray-300 py-4" />
      <p className="text-sm text-muted-foreground">
        Creates breathing room between sections
      </p>
    </div>
  );
}
