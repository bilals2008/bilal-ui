"use client";

import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaWithBadge() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center gap-2">
        <Label htmlFor="review">Review</Label>
        <Badge variant="secondary">Required</Badge>
      </div>
      <Textarea id="review" placeholder="Write your review..." rows={4} />
    </div>
  );
}

