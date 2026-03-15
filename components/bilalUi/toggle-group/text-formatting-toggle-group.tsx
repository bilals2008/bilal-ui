"use client";

import * as React from "react";
import { Bold, Code, Italic, Underline } from "lucide-react";

import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function TextFormattingToggleGroup() {
  const [formats, setFormats] = React.useState<string[]>(["bold"]);

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">Text Formatting</Label>
      <ToggleGroup type="multiple" value={formats} onValueChange={setFormats}>
        <ToggleGroupItem value="bold" aria-label="Bold">
          <Bold className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <Italic className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <Underline className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="code" aria-label="Code">
          <Code className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}




