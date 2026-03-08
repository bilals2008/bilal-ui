"use client";

import * as React from "react";
import { FileText, Image as ImageIcon, Music, Video } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function MediaTypeFilterToggleGroup() {
  const [mediaTypes, setMediaTypes] = React.useState<string[]>(["image"]);

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Media Type</label>
      <ToggleGroup type="multiple" value={mediaTypes} onValueChange={setMediaTypes}>
        <ToggleGroupItem value="image" aria-label="Images">
          <ImageIcon className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="video" aria-label="Videos">
          <Video className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="audio" aria-label="Audio">
          <Music className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="document" aria-label="Documents">
          <FileText className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
