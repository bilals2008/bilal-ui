// File: components/landing/technology-badges.tsx
import { Sparkles } from "lucide-react";

export function TechnologyBadges() {
  return (
    <div className="flex flex-col sm:flex-row justify-center my-8 sm:my-24 gap-4">
      <div
        className="inline-flex items-center px-4 py-2 rounded-full text-sm 
          bg-linear-to-r from-secondary/50 to-secondary/80
          border border-border shadow-sm"
      >
        <Sparkles className="w-4 h-4 mr-2 text-emerald-500" />
        <span className="bg-clip-text text-transparent bg-linear-to-r from-foreground to-muted-foreground">
          Crafted with Next.js 15 & Tailwind CSS
        </span>
      </div>

      <div
        className="inline-flex items-center px-4 py-2 rounded-full text-sm 
          bg-linear-to-r from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30
          border border-orange-200 dark:border-orange-800/30 shadow-sm"
      >
        <Sparkles className="w-4 h-4 mr-2 text-orange-500" />
        <span className="bg-clip-text text-transparent bg-linear-to-r from-orange-800 to-orange-600 dark:from-orange-200 dark:to-orange-400">
          Optionally with shadcn/ui and Framer Motion
        </span>
      </div>
    </div>
  );
}
