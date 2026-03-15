"use client";

import * as React from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const BorderRotateButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <div className="relative inline-block">
      <div
        className={cn(
          "absolute inset-0 animate-spin rounded-md bg-gradient-to-r from-blue-600 to-purple-600 opacity-75",
        )}
        style={{ animationDuration: "3s" }}
      />
      <Button
        ref={ref}
        className={cn("relative bg-white text-blue-600 hover:text-purple-600", className)}
        {...props}
      />
    </div>
  ),
);
BorderRotateButton.displayName = "BorderRotateButton";
