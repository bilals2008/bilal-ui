"use client";

import * as React from "react";
import { motion } from "motion/react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const ExpandButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <motion.div
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <Button
        ref={ref}
        className={cn("shadow-md transition-shadow hover:shadow-lg", className)}
        {...props}
      />
    </motion.div>
  ),
);
ExpandButton.displayName = "ExpandButton";
