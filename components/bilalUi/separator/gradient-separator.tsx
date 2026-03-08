"use client";

export function GradientSeparator() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">Gradient Separator</h4>
        <p className="text-sm text-muted-foreground">Multi-color visual divider</p>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500" />
      <p className="text-sm text-muted-foreground">Stylish gradient divider</p>
    </div>
  );
}

