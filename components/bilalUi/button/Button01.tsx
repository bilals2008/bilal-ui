// File: components/bilalUi/button/Button01.tsx

"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const MotionButton = motion.create(Button);

export const MagneticButton = () => {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <MotionButton
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={cn(
                "rounded-full px-8 h-12", 
                "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900",
                "hover:bg-zinc-800 dark:hover:bg-zinc-200"
            )}
            variant="default" 
        >
            <span>Magnetic Pull</span>
            <ArrowRight className="w-4 h-4 ml-1" />
        </MotionButton>
    );
};
