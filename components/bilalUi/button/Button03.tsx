// File: components/bilalUi/button/Button03.tsx

"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const NeoBrutalismButton = () => {
    return (
        <Button
            className={cn(
                "group relative border-2 border-black rounded-md active:scale-95",
                "bg-[#FFCD29] text-black hover:bg-[#FFCD29]",
                "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1",
                "transition-all h-10 px-6 font-bold"
            )}
        >
            <span className="flex items-center gap-2">
                Neo Brutalism
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
        </Button>
    );
};
