"use client";

import * as React from "react";
import { motion } from "motion/react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const SlideRevealButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, children, ...props }, ref) => (
  <motion.div whileHover="hover" whileTap={{ scale: 0.95 }}>
    <Button ref={ref} className={cn("relative overflow-hidden", className)} {...props}>
      <motion.span
        initial={{ x: -100, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.span>
    </Button>
  </motion.div>
));
SlideRevealButton.displayName = "SlideRevealButton";
