"use client";

export function IconSeparator() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">Icon Divider</h4>
        <p className="text-sm text-muted-foreground">
          Separator with centered icon
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex-1 border-t border-gray-300" />
        <div className="text-lg font-semibold">*</div>
        <div className="flex-1 border-t border-gray-300" />
      </div>
      <p className="text-sm text-muted-foreground">Decorative icon separator</p>
    </div>
  );
}

