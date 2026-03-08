"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaWithHelperText() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="bio">Bio</Label>
      <Textarea id="bio" placeholder="Tell us about yourself..." rows={3} />
      <p className="text-xs text-muted-foreground">
        This will be displayed on your public profile.
      </p>
    </div>
  );
}

