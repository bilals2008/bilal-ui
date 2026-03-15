"use client";

import * as React from "react";
import { motion } from "motion/react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const GlowButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <motion.div
      whileHover={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)" }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        ref={ref}
        className={cn(
          "bg-blue-600 text-white shadow-lg shadow-blue-500/50 hover:shadow-blue-500/80",
          className,
        )}
        {...props}
      />
    </motion.div>
  ),
);
GlowButton.displayName = "GlowButton";
