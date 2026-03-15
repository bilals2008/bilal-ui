"use client";

import * as React from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const UnderlineExpandButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, ...props }, ref) => (
  <Button
    ref={ref}
    className={cn(
      "relative border-b-2 border-blue-600 bg-transparent pb-1 text-blue-600",
      "before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-blue-600 before:transition-all before:duration-300",
      "hover:before:w-full",
      className,
    )}
    {...props}
  />
));
UnderlineExpandButton.displayName = "UnderlineExpandButton";
