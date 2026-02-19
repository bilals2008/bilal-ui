// File: components/bilalUi/avatar/animated-avatar-group.tsx
"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export type AvatarData = {
  src: string;
  alt: string;
  href?: string;
};

export type AnimatedAvatarGroupProps = {
  avatars: AvatarData[];
  maxVisible?: number;
  size?: number;
  overlap?: number;
  className?: string;
  expandOnHover?: boolean;
};

const AnimatedAvatarGroup = ({
  avatars,
  maxVisible = 4,
  size = 40,
  overlap = 0.3,
  className,
  expandOnHover = true,
}: AnimatedAvatarGroupProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [isHoverDevice, setIsHoverDevice] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const handleChange = (event: MediaQueryListEvent) => {
      setIsHoverDevice(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const visibleAvatars = avatars.slice(0, maxVisible);
  const hiddenCount = avatars.length - maxVisible;
  const hasHiddenAvatars = hiddenCount > 0;

  const overlapPx = size * overlap;
  const expanded = expandOnHover && isHoverDevice && isHovered;

  const springTransition = shouldReduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, duration: 0.25, bounce: 0.1 };

  return (
    <motion.div
      aria-label="Avatar group"
      className={cn("flex items-center", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="group"
    >
      {visibleAvatars.map((avatar, index) => {
        const marginLeft = index === 0 ? 0 : expanded ? 4 : -overlapPx;

        const content = (
          <motion.img
            alt={avatar.alt}
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 1, scale: expanded ? 1.05 : 1 }
            }
            className="rounded-full object-cover"
            height={size}
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }
            }
            src={avatar.src}
            style={{ width: size, height: size }}
            transition={{
              ...springTransition,
              delay: shouldReduceMotion ? 0 : index * 0.03,
            }}
            width={size}
          />
        );

        return (
          <motion.div
            animate={{ marginLeft, opacity: 1 }}
            className="relative"
            key={avatar.src}
            style={{
              zIndex: visibleAvatars.length - index,
              width: size,
              height: size,
            }}
            transition={{
              ...springTransition,
              delay: shouldReduceMotion ? 0 : index * 0.03,
            }}
          >
            <div
              className="rounded-full border-2 border-background"
              style={{ width: size, height: size }}
            >
              {avatar.href ? (
                <a aria-label={avatar.alt} href={avatar.href} rel="noopener">
                  {content}
                </a>
              ) : (
                content
              )}
            </div>
          </motion.div>
        );
      })}

      {hasHiddenAvatars && (
        <motion.div
          animate={{
            marginLeft: expanded ? 4 : -overlapPx,
            opacity: 1,
          }}
          className="relative flex items-center justify-center rounded-full border-2 border-background bg-muted"
          style={{ width: size, height: size, zIndex: 0 }}
          transition={{
            ...springTransition,
            delay: shouldReduceMotion ? 0 : visibleAvatars.length * 0.03,
          }}
        >
          <span
            className="font-medium text-muted-foreground"
            style={{ fontSize: size * 0.3 }}
          >
            {`+${hiddenCount}`}
          </span>
        </motion.div>
      )}
    </motion.div>
  );
};

// ─── Demo Export ─────────────────────────────────────────────────────────────

const DEMO_AVATARS: AvatarData[] = [
  {
    src: "https://github.com/shadcn.png",
    alt: "shadcn",
    href: "https://github.com/shadcn",
  },
  {
    src: "https://github.com/leerob.png",
    alt: "leerob",
    href: "https://github.com/leerob",
  },
  {
    src: "https://github.com/rauchg.png",
    alt: "rauchg",
    href: "https://github.com/rauchg",
  },
  {
    src: "https://github.com/emilkowalski.png",
    alt: "emilkowalski",
    href: "https://github.com/emilkowalski",
  },
  {
    src: "https://github.com/t3dotgg.png",
    alt: "t3dotgg",
    href: "https://github.com/t3dotgg",
  },
  {
    src: "https://github.com/midudev.png",
    alt: "midudev",
    href: "https://github.com/midudev",
  },
];

export function AnimatedAvatarGroupDemo() {
  return (
    <AnimatedAvatarGroup
      avatars={DEMO_AVATARS}
      maxVisible={4}
      size={44}
      expandOnHover
    />
  );
}

export default AnimatedAvatarGroup;
