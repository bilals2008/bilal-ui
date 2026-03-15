"use client";

import * as React from "react";
import { motion } from "motion/react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const RotateButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <motion.div
      whileHover={{ rotate: 2 }}
      whileTap={{ scale: 0.95, rotate: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Button ref={ref} className={cn("transition-transform", className)} {...props} />
    </motion.div>
  ),
);
RotateButton.displayName = "RotateButton";
