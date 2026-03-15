"use client";

import * as React from "react";
import { motion } from "motion/react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const FloatButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        ref={ref}
        className={cn("shadow-lg transition-shadow hover:shadow-xl", className)}
        {...props}
      />
    </motion.div>
  ),
);
FloatButton.displayName = "FloatButton";
