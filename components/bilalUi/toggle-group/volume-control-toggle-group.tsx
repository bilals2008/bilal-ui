"use client";

import * as React from "react";
import { Volume2, VolumeX } from "lucide-react";

import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function VolumeControlToggleGroup() {
  const [volume, setVolume] = React.useState("medium");

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">Volume</Label>
      <ToggleGroup type="single" value={volume} onValueChange={(v) => v && setVolume(v)}>
        <ToggleGroupItem value="mute" aria-label="Mute">
          <VolumeX className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="medium" aria-label="Medium">
          <Volume2 className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
      <p className="text-xs capitalize text-muted-foreground">{volume} volume</p>
    </div>
  );
}




