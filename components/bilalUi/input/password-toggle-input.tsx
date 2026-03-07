"use client";

import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function PasswordToggleInput() {
  const [visible, setVisible] = React.useState(false);

  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="password-toggle-input">Password</Label>
      <div className="relative">
        <Input
          id="password-toggle-input"
          type={visible ? "text" : "password"}
          placeholder="Enter password"
          className="pr-10"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0 h-10 w-10"
          onClick={() => setVisible((v) => !v)}
        >
          {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          <span className="sr-only">Toggle password visibility</span>
        </Button>
      </div>
    </div>
  );
}
