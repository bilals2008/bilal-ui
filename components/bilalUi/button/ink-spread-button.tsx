"use client";

import * as React from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const InkSpreadButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => (
    <Button
      ref={ref}
      className={cn(
        "relative overflow-hidden bg-blue-600 text-white",
        "after:absolute after:inset-0 after:scale-0 after:rounded-full after:bg-blue-400",
        "after:origin-center after:transition-transform after:duration-500",
        "hover:text-white hover:after:scale-100 [&]:relative [&]:z-10",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  ),
);
InkSpreadButton.displayName = "InkSpreadButton";
