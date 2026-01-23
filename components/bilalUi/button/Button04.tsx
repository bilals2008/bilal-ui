// File: components/bilalUi/button/Button04.tsx

"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const CopyButton = () => {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Button
            onClick={handleCopy}
            variant="outline"
            className={cn(
                "relative w-32 overflow-hidden transition-all active:scale-95 bg-zinc-100 dark:bg-zinc-800 border-none hover:bg-zinc-200 dark:hover:bg-zinc-700"
            )}
        >
            <AnimatePresence mode="wait" initial={false}>
                {copied ? (
                    <motion.div
                        key="check"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium"
                    >
                        <Check className="w-4 h-4" />
                        <span>Copied!</span>
                    </motion.div>
                ) : (
                    <motion.div
                        key="copy"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute flex items-center gap-2 text-zinc-600 dark:text-zinc-300 font-medium"
                    >
                        <Copy className="w-4 h-4" />
                        <span>Copy Code</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </Button>
    );
};
