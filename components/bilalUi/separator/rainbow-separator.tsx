"use client";

export function RainbowSeparator() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">Rainbow Separator</h4>
        <p className="text-sm text-muted-foreground">
          Colorful multi-stripe divider
        </p>
      </div>
      <div className="flex h-2 gap-1">
        <div className="flex-1 bg-red-500" />
        <div className="flex-1 bg-orange-500" />
        <div className="flex-1 bg-yellow-500" />
        <div className="flex-1 bg-green-500" />
        <div className="flex-1 bg-blue-500" />
        <div className="flex-1 bg-purple-500" />
      </div>
      <p className="text-sm text-muted-foreground">Vibrant rainbow divider</p>
    </div>
  );
}

