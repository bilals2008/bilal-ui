"use client";

export function GlowSeparator() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">Glow Separator</h4>
        <p className="text-sm text-muted-foreground">Luminous divider effect</p>
      </div>
      <div className="h-1 w-full rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50" />
      <p className="text-sm text-muted-foreground">Glowing neon-like divider</p>
    </div>
  );
}

