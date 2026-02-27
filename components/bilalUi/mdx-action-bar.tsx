// File: components/bilalUi/mdx-action-bar.tsx
"use client";

import * as React from "react";
import {
  Copy,
  ChevronDown,
  Bookmark,
  Check,
  ExternalLink,
  MessageCircle,
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
  url?: string;
}

const cache = new Map<string, string>();

export function MDXActionBar({
  className,
  slug,
  title,
  url,
}: MDXActionBarProps) {
  const [isCopied, setIsCopied] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isBookmarked, setIsBookmarked] = React.useState(false);

  // Load bookmark state from localStorage on mount
  React.useEffect(() => {
    if (slug) {
      const stored = localStorage.getItem(`bookmark-${slug}`);
      if (stored === "true") {
        setIsBookmarked(true);
      }
    }
  }, [slug]);

  const pageUrl = (url || "").replace(/\.mdx$/, "");
  const markdownUrl = pageUrl ? `${pageUrl}.mdx` : "";
  const githubUrl = slug
    ? `https://github.com/bilals2008/bilal-ui/blob/main/content/docs/${slug}.mdx`
    : "#";

  const handleCopyMarkdown = async () => {
    if (!markdownUrl) return;

    setIsLoading(true);
    try {
      const cached = cache.get(markdownUrl);
      let content = cached;

      if (!content) {
        const res = await fetch(internalFetchUrl);
        content = await res.text();
        cache.set(internalFetchUrl, content);
      }

      await navigator.clipboard.writeText(content);
      setIsCopied(true);
      toast.success("Markdown copied to clipboard!");
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      toast.error("Failed to copy markdown. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBookmark = () => {
    const newValue = !isBookmarked;
    setIsBookmarked(newValue);
    if (slug) {
      localStorage.setItem(`bookmark-${slug}`, String(newValue));
    }
    toast.success(newValue ? "Added to bookmarks" : "Removed from bookmarks");
  };

  // Use relative URL for internal fetch to avoid CORS/network issues in dev
  const internalFetchUrl = markdownUrl;

  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL ||
    (typeof window !== "undefined" ? window.location.origin : "");
  const fullPageUrl = pageUrl
    ? new URL(pageUrl, baseUrl).toString()
    : "";
  const q = `Read the documentation for ${title || "this component"} at ${fullPageUrl}. I want to ask questions about it.`;

  const aiTools = [
    {
      title: "Open in GitHub",
      href: githubUrl,
      icon: (
        <svg
          fill="currentColor"
          className="w-3.5 h-3.5"
          role="img"
          viewBox="0 0 24 24"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      title: "Open in Scira AI",
      href: `https://scira.ai/?${new URLSearchParams({ q })}`,
      icon: (
        <svg
          fill="none"
          className="w-3.5 h-3.5"
          viewBox="0 0 910 934"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M647.664 197.775C569.13 189.049 525.5 145.419 516.774 66.8849C508.048 145.419 464.418 189.049 385.884 197.775C464.418 206.501 508.048 250.131 516.774 328.665C525.5 250.131 569.13 206.501 647.664 197.775Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="8"
          />
          <path
            d="M516.774 304.217C510.299 275.491 498.208 252.087 480.335 234.214C462.462 216.341 439.058 204.251 410.333 197.775C439.059 191.3 462.462 179.209 480.335 161.336C498.208 143.463 510.299 120.06 516.774 91.334"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="8"
          />
        </svg>
      ),
    },
    {
      title: "Open in ChatGPT",
      href: `https://chatgpt.com/?${new URLSearchParams({ hints: "search", q })}`,
      icon: (
        <svg
          fill="currentColor"
          className="w-3.5 h-3.5"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
        </svg>
      ),
    },
    {
      title: "Open in Claude",
      href: `https://claude.ai/new?${new URLSearchParams({ q })}`,
      icon: (
        <svg
          fill="currentColor"
          className="w-3.5 h-3.5"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z" />
        </svg>
      ),
    },
    {
      title: "Open in T3 Chat",
      href: `https://t3.chat/new?${new URLSearchParams({ q })}`,
      icon: <MessageCircle className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 py-3 px-1 transition-all duration-300 border-b border-border/80 border-dashed",
        className,
      )}
    >
      <div className="flex items-center gap-1.5">
        <Button
          variant="ghost"
          size="sm"
          className="h-8 px-3 gap-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-all duration-200 group"
          onClick={handleCopyMarkdown}
          disabled={isLoading}
          aria-label="Copy markdown to clipboard"
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
          <span className="text-xs font-medium">Copy Markdown</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-3 gap-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-all duration-200 group"
              aria-label="Open sharing options"
            >
              <span className="text-xs font-medium">Open</span>
              <ChevronDown className="w-3.5 h-3.5 text-orange-500 group-hover:text-orange-600 transition-colors opacity-80" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-56 p-1 rounded-xl shadow-2xl bg-popover/95 backdrop-blur-md border border-border/50"
          >
            {aiTools.map((tool) => (
              <DropdownMenuItem
                key={tool.title}
                asChild
                className="flex items-center gap-3 px-3 py-2 cursor-pointer text-sm rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors group"
              >
                <a href={tool.href} target="_blank" rel="noopener noreferrer">
                  {tool.icon}
                  <span className="flex-1">{tool.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:text-muted-foreground transition-colors" />
                </a>
              </DropdownMenuItem>
            ))}
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
        aria-pressed={isBookmarked}
        aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
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
