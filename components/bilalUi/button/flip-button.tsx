"use client";

import * as React from "react";
import { motion } from "motion/react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const FlipButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => (
    <motion.div
      whileHover={{ rotateX: 10 }}
      whileTap={{ scale: 0.95 }}
      style={{ perspective: 1000 }}
    >
      <Button ref={ref} className={cn("transition-transform", className)} {...props}>
        {children}
      </Button>
    </motion.div>
  ),
);
FlipButton.displayName = "FlipButton";
