"use client";

export function ShadowSeparator() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">Shadow Divider</h4>
        <p className="text-sm text-muted-foreground">Separator with depth</p>
      </div>
      <div className="border-t border-gray-200 shadow-md" />
      <p className="text-sm text-muted-foreground">Content with shadow effect</p>
    </div>
  );
}

