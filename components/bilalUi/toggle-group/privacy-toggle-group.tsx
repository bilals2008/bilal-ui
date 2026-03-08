"use client";

import * as React from "react";
import { Globe, Lock, Share2 } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function PrivacyToggleGroup() {
  const [privacy, setPrivacy] = React.useState("private");

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Sharing</label>
      <ToggleGroup type="single" value={privacy} onValueChange={(v) => v && setPrivacy(v)}>
        <ToggleGroupItem value="private" aria-label="Private">
          <Lock className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="public" aria-label="Public">
          <Globe className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="shared" aria-label="Shared">
          <Share2 className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

