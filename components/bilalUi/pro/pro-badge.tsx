// File: components/bilalUi/pro/pro-badge.tsx
import { Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProBadgeProps {
  size?: "xs" | "sm" | "md" | "lg";
  label?: string;
  showIcon?: boolean;
  className?: string;
  variant?: "pro" | "info" | "stable";
  appearance?: "default" | "light" | "outline" | "ghost";
}

export function ProBadge({
  size = "sm",
  label = "Pro",
  showIcon = true,
  className,
  variant = "pro",
  appearance = "light",
}: ProBadgeProps) {
  return (
    <Badge
      variant={variant}
      appearance={appearance}
      size={size}
      className={cn("gap-1", className)}
    >
      {showIcon && <Crown className={cn(size === "xs" ? "h-2.5 w-2.5" : size === "lg" ? "h-4 w-4" : "h-3 w-3")} />}
      {label}
    </Badge>
  );
}
