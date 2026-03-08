"use client";

export function BlurSeparator() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">Blur Separator</h4>
        <p className="text-sm text-muted-foreground">Frosted glass effect</p>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent blur-sm" />
      <p className="text-sm text-muted-foreground">Soft blurred divider</p>
    </div>
  );
}
