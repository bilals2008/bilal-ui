"use client";

import * as React from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const NeonButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <Button
      ref={ref}
      className={cn(
        "border-2 border-cyan-500 bg-black text-cyan-500 shadow-lg shadow-cyan-500/50",
        "transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-cyan-500/80",
        className,
      )}
      {...props}
    />
  ),
);
NeonButton.displayName = "NeonButton";
