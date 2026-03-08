"use client";

import { useState } from "react";

import { Switch } from "@/components/ui/switch";

export function WithActionSwitch() {
  const [deleteMode, setDeleteMode] = useState(false);

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-foreground">With Action</h3>
      <div
        className={`rounded-lg border p-4 transition-all ${
          deleteMode
            ? "border-red-500/50 bg-red-50 dark:bg-red-950/20"
            : "border-border hover:bg-muted/30"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">Danger zone</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Enable to see destructive options
            </p>
          </div>
          <Switch checked={deleteMode} onCheckedChange={setDeleteMode} />
        </div>
        {deleteMode && (
          <button className="mt-4 w-full rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700">
            Delete account permanently
          </button>
        )}
      </div>
    </div>
  );
}
