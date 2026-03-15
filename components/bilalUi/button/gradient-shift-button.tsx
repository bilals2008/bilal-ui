"use client";

import * as React from "react";
import { motion } from "motion/react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const GradientShiftButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, ...props }, ref) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Button
      ref={ref}
      className={cn(
        "bg-gradient-to-r from-blue-500 to-purple-600 text-white transition-all duration-300 hover:from-blue-600 hover:to-purple-700",
        className,
      )}
      {...props}
    />
  </motion.div>
));
GradientShiftButton.displayName = "GradientShiftButton";
