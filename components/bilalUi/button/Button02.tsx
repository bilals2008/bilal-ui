// File: components/bilalUi/button/Button02.tsx

"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const MotionButton = motion.create(Button);

export const ShinyButton = () => {
    return (
        <MotionButton
            initial={{ "--x": "100%", scale: 1 } as any}
            animate={{ "--x": "-100%" } as any}
            whileTap={{ scale: 0.97 }}
            transition={{
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1,
                type: "spring",
                stiffness: 20,
                damping: 15,
                mass: 2,
                scale: {
                    type: "spring",
                    stiffness: 10,
                    damping: 5,
                    mass: 0.1
                }
            }}
            className={cn(
                "relative rounded-xl border border-zinc-200 dark:border-zinc-800",
                "bg-[linear-gradient(-45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%,transparent_100%)]",
                "bg-size-[200%_200%,100%_100%] bg-position-[var(--x)_0,0_0] bg-no-repeat",
                "shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.97] h-10 px-6"
            )}
            variant="secondary"
            style={{
                backgroundColor: "var(--background)",
            }}
        >
            <span className="relative z-10 flex items-center gap-2">
                Shiny Border
            </span>
            <span className="absolute inset-0 rounded-xl block p-px bg-linear-to-r from-transparent via-zinc-400/50 to-transparent -z-10 opacity-0 transition-opacity button-border-mask" />
        </MotionButton>
    );
};
