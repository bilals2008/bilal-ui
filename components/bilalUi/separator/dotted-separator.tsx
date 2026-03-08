"use client";

export function DottedSeparator() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">Dotted Border</h4>
        <p className="text-sm text-muted-foreground">
          Decorative dotted separator
        </p>
      </div>
      <div className="border-t-2 border-dotted border-gray-400" />
      <p className="text-sm text-muted-foreground">Content below dotted line</p>
    </div>
  );
}

