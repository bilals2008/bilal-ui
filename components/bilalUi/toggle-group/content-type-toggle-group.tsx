"use client";

import * as React from "react";
import { BarChart3, FileText, Image as ImageIcon } from "lucide-react";

import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ContentTypeToggleGroup() {
  const [content, setContent] = React.useState("text");

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">Content Type</Label>
      <ToggleGroup type="single" value={content} onValueChange={(v) => v && setContent(v)}>
        <ToggleGroupItem value="text" aria-label="Text">
          <FileText className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="visual" aria-label="Visual">
          <ImageIcon className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="data" aria-label="Data">
          <BarChart3 className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}



