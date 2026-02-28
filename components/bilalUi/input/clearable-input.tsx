"use client";

import * as React from "react";
import { CircleXIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ClearableInput() {
  const [value, setValue] = React.useState("Click to clear");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const id = React.useId();

  const handleClearInput = () => {
    setValue("");
    inputRef.current?.focus();
  };

  return (
    <div className="w-full max-w-xs space-y-2">
      <Label htmlFor={id}>Input with clear button</Label>
      <div className="relative">
        <Input
          ref={inputRef}
          id={id}
          type="text"
          placeholder="Type something..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className="pr-9"
        />
        {value ? (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleClearInput}
            className="absolute inset-y-0 right-0 rounded-l-none text-muted-foreground hover:bg-transparent focus-visible:ring-ring/50"
          >
            <CircleXIcon className="text-red-500" />
            <span className="sr-only">Clear input</span>
          </Button>
        ) : null}
      </div>
    </div>
  );
}
