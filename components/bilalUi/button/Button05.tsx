// File: components/bilalUi/button/Button05.tsx

"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MotionButton = motion.create(Button);

export const GradientGlowButton = () => {
    return (
        <div className="relative group">
            <div className="absolute -inset-0.5 bg-linear-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <MotionButton
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={cn(
                    "relative bg-black text-white h-12 px-7 rounded-lg leading-none divide-x divide-zinc-600 border-none hover:bg-black"
                )}
                variant="default"
            >
                <span className="flex items-center space-x-5">
                    <span className="pr-6 text-zinc-100 font-semibold text-sm">Gradient Glow</span>
                </span>
                <span className="pl-6 text-indigo-400 group-hover:text-zinc-100 transition duration-200 text-sm font-medium">
                    See More &rarr;
                </span>
            </MotionButton>
        </div>
    );
};
