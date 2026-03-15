"use client";

import * as React from "react";
import { motion } from "motion/react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const PulseButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          "0 0 0 0 rgba(59, 130, 246, 0.7)",
          "0 0 0 10px rgba(59, 130, 246, 0)",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <Button ref={ref} className={cn("rounded-lg shadow-lg", className)} {...props} />
    </motion.div>
  ),
);
PulseButton.displayName = "PulseButton";
