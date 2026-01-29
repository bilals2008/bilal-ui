// File: components/bilalUi/mdx-action-bar.tsx
"use client";

import * as React from "react";
import {
  Copy,
  ChevronDown,
  Bookmark,
  Check,
  Share2,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { motion, AnimatePresence } from "motion/react";

interface MDXActionBarProps {
  className?: string;
  slug?: string;
  title?: string;
}

export function MDXActionBar({ className, slug, title }: MDXActionBarProps) {
  const [isCopied, setIsCopied] = React.useState(false);
  const [isBookmarked, setIsBookmarked] = React.useState(false);

  const githubUrl = `https://github.com/bilals2008/bilal-ui/blob/main/content/docs/${slug}.mdx`;

  const handleCopyMarkdown = async () => {
    try {
      const url = window.location.href;
      await navigator.clipboard.writeText(
        `Check out this doc: ${title || "Documentation"} - ${url}`,
      );
      setIsCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      toast.error("Failed to copy");
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast.success(
      isBookmarked ? "Removed from bookmarks" : "Added to bookmarks",
    );
  };

  return (
    <div
      className={cn(
        "flex names-center justify-between gap-4 py-3 px-1 bg-background/80 border-b border-border/40 transition-all duration-300",
        className,
      )}
    >
      <div className="flex items-center gap-1.5">
        <Button
          variant="ghost"
          size="sm"
          className="h-8 px-3 gap-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-all duration-200 group"
          onClick={handleCopyMarkdown}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isCopied ? (
              <motion.div
                key="check"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                <Check className="w-3.5 h-3.5 text-emerald-500" />
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                <Copy className="w-3.5 h-3.5 text-sky-500 group-hover:text-sky-600 transition-colors" />
              </motion.div>
            )}
          </AnimatePresence>
          <span className="text-xs font-medium">Copy Link</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-3 gap-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-all duration-200 group"
            >
              <span className="text-xs font-medium">Open</span>
              <ChevronDown className="w-3.5 h-3.5 text-orange-500 group-hover:text-orange-600 transition-colors opacity-80" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuItem
              asChild
              className="gap-2 cursor-pointer text-xs group"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3.5 h-3.5 text-blue-500 group-hover:text-blue-600 transition-colors" />
                <span>Edit on GitHub</span>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="gap-2 cursor-pointer text-xs group"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: title || "Documentation",
                    url: window.location.href,
                  });
                } else {
                  handleCopyMarkdown();
                }
              }}
            >
              <Share2 className="w-3.5 h-3.5 text-indigo-500 group-hover:text-indigo-600 transition-colors" />
              <span>Share</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "h-8 px-3 gap-2 rounded-md transition-all duration-200 group",
          isBookmarked
            ? "text-primary bg-primary/5 hover:bg-primary/10"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
        )}
        onClick={handleBookmark}
      >
        <Bookmark
          className={cn(
            "w-3.5 h-3.5 text-pink-500 group-hover:text-pink-600 transition-colors",
            isBookmarked && "fill-current",
          )}
        />
        <span className="text-xs font-medium">Bookmark</span>
      </Button>
    </div>
  );
}
