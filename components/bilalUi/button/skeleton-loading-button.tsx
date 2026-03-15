"use client";

import * as React from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const SkeletonLoadingButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, ...props }, ref) => (
  <Button
    ref={ref}
    disabled
    className={cn(
      "relative overflow-hidden bg-slate-300",
      "before:absolute before:inset-0 before:animate-pulse before:animate-shimmer",
      "before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent",
      className,
    )}
    {...props}
  />
));
SkeletonLoadingButton.displayName = "SkeletonLoadingButton";
