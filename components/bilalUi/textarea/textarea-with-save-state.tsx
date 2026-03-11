"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaWithSaveState() {
  const [value, setValue] = useState("This is the last saved version.");
  const [saved, setSaved] = useState("This is the last saved version.");
  const isDirty = value !== saved;

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="saveable">Draft</Label>
        {isDirty && (
          <span className="text-xs font-medium text-amber-500">Unsaved</span>
        )}
      </div>
      <Textarea
        id="saveable"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={4}
      />
      <div className="flex gap-2 self-end">
        <Button
          size="sm"
          variant="outline"
          onClick={() => setValue(saved)}
          disabled={!isDirty}
        >
          Revert
        </Button>
        <Button size="sm" onClick={() => setSaved(value)} disabled={!isDirty}>
          Save
        </Button>
      </div>
    </div>
  );
}

