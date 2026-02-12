// File: components/bilalUi/btn-particale.tsx
"use client";

import { MousePointerClick } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { type RefObject, useRef, useState, useMemo } from "react";
import type { ButtonProps } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ParticleButtonProps extends ButtonProps {
  onSuccess?: () => void;
  successDuration?: number;
}

function SuccessParticles({
  buttonRef,
}: {
  buttonRef: React.RefObject<HTMLButtonElement>;
}) {
  const rect = buttonRef.current?.getBoundingClientRect();
  if (!rect) return null;

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const particles = useMemo(() => {
    return [...Array(6)].map((_, i) => ({
      id: i,
      x: (i % 2 ? 1 : -1) * (Math.random() * 50 + 20),
      y: -Math.random() * 50 - 20,
      delay: i * 0.1,
    }));
  }, []);

  return (
    <AnimatePresence>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          animate={{
            scale: [0, 1, 0],
            x: [0, particle.x],
            y: [0, particle.y],
          }}
          className="fixed h-1 w-1 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]"
          initial={{
            scale: 0,
            x: 0,
            y: 0,
          }}
          style={{ left: centerX, top: centerY }}
          transition={{
            duration: 0.6,
            delay: particle.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </AnimatePresence>
  );
}

export default function ParticleButton({
  children,
  onClick,
  onSuccess,
  successDuration = 1000,
  className,
  ...props
}: ParticleButtonProps) {
  const [showParticles, setShowParticles] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    setShowParticles(true);
    onSuccess?.();

    setTimeout(() => {
      setShowParticles(false);
    }, successDuration);
  };

  return (
    <>
      {showParticles && (
        <SuccessParticles
          buttonRef={buttonRef as RefObject<HTMLButtonElement>}
        />
      )}
      <Button
        className={cn(
          "relative transition-transform duration-100",
          showParticles && "scale-95",
          className,
        )}
        onClick={handleClick}
        ref={buttonRef}
        {...props}
      >
        {children}
        <MousePointerClick className="h-4 w-4" />
      </Button>
    </>
  );
}
