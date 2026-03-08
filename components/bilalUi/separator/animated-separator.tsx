"use client";

export function AnimatedSeparator() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">Animated Separator</h4>
        <p className="text-sm text-muted-foreground">Dynamic expanding line</p>
      </div>
      <div className="relative h-1 overflow-hidden bg-gradient-to-r from-transparent via-blue-500 to-transparent">
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>
      <p className="text-sm text-muted-foreground">Eye-catching divider</p>
    </div>
  );
}

