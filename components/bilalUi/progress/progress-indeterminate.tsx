"use client";

export function ProgressIndeterminate() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-1">
      <span className="text-sm text-muted-foreground">Connecting to server...</span>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
        <div className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-primary animate-[indeterminate_1.4s_ease-in-out_infinite]" />
        <style>{`
          @keyframes indeterminate {
            0% { transform: translateX(-100%) scaleX(1); }
            50% { transform: translateX(150%) scaleX(1.5); }
            100% { transform: translateX(400%) scaleX(1); }
          }
        `}</style>
      </div>
    </div>
  );
}

