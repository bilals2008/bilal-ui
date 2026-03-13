"use client";

import * as React from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <Button
      ref={ref}
      className={cn(
        "relative overflow-hidden bg-slate-900 text-white",
        "before:absolute before:inset-0 before:-translate-x-full before:animate-pulse before:animate-shimmer",
        "before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
        className,
      )}
      {...props}
    />
  ),
);
ShimmerButton.displayName = "ShimmerButton";
