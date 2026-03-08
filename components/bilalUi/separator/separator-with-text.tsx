"use client";

export function SeparatorWithText() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex-1 border-t border-gray-300" />
        <span className="text-sm font-medium text-muted-foreground">OR</span>
        <div className="flex-1 border-t border-gray-300" />
      </div>
      <p className="text-center text-sm text-muted-foreground">
        Popular divider for authentication flows
      </p>
    </div>
  );
}

