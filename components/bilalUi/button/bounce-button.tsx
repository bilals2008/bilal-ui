"use client";

import * as React from "react";
import { motion } from "motion/react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const BounceButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        ref={ref}
        className={cn("shadow-md transition-shadow hover:shadow-lg", className)}
        {...props}
      />
    </motion.div>
  ),
);
BounceButton.displayName = "BounceButton";
