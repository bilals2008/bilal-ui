"use client";

export function WavySeparator() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">Wavy Separator</h4>
        <p className="text-sm text-muted-foreground">Curved organic divider</p>
      </div>
      <svg className="h-8 w-full" viewBox="0 0 300 20" preserveAspectRatio="none">
        <path
          d="M0,10 Q75,0 150,10 T300,10"
          stroke="currentColor"
          fill="none"
          className="text-gray-400"
        />
      </svg>
      <p className="text-sm text-muted-foreground">Organic curved divider</p>
    </div>
  );
}

