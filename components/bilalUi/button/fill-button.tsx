"use client";

import * as React from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const FillButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => (
    <Button
      ref={ref}
      className={cn(
        "relative overflow-hidden border-2 border-blue-600 text-blue-600",
        "before:absolute before:inset-0 before:origin-left before:scale-x-0 before:bg-blue-600 before:transition-transform before:duration-300",
        "hover:before:scale-x-100 hover:text-white z-0",
        "[&_span]:relative [&_span]:z-10",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
    </Button>
  ),
);
FillButton.displayName = "FillButton";
