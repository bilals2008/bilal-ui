"use client";

import * as React from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const GlassButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <Button
      ref={ref}
      className={cn(
        "border border-white/40 bg-white/30 text-slate-900 backdrop-blur-md",
        "shadow-lg shadow-white/10 transition-all duration-300 hover:border-white/60 hover:bg-white/40",
        className,
      )}
      {...props}
    />
  ),
);
GlassButton.displayName = "GlassButton";
