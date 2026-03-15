"use client";

import * as React from "react";
import { motion } from "motion/react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const SlideUpButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <motion.div
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <Button
        ref={ref}
        className={cn("shadow-md transition-shadow hover:shadow-lg", className)}
        {...props}
      />
    </motion.div>
  ),
);
SlideUpButton.displayName = "SlideUpButton";
