// File: components/bilalUi/component-preview.tsx
"use client";

import * as React from "react";
import { RotateCcw, Copy, CheckCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "motion/react";
import { OpenInV0Button } from "./open-in-v0-button";

interface ComponentPreviewProps {
  children: React.ReactNode;
  code?: string;
  name?: string;
  className?: string;
}

function SuccessParticles({
  buttonRef,
}: {
  buttonRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const [rect, setRect] = React.useState<DOMRect | null>(null);
  const [particles, setParticles] = React.useState<
    { x: number; y: number; delay: number }[]
  >([]);

  React.useEffect(() => {
    if (buttonRef.current) {
      setRect(buttonRef.current.getBoundingClientRect());
      // Generate particles once on mount
      const newParticles = [...Array(6)].map((_, i) => ({
        x: (i % 2 ? 1 : -1) * (Math.random() * 50 + 20),
        y: -Math.random() * 50 - 20,
        delay: i * 0.1,
      }));
      setParticles(newParticles);
    }
  }, [buttonRef]);

  if (!rect || particles.length === 0) return null;

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  return (
    <AnimatePresence>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="fixed w-1 h-1 bg-black dark:bg-white rounded-full z-100"
          style={{ left: centerX, top: centerY }}
          initial={{
            scale: 0,
            x: 0,
            y: 0,
          }}
          animate={{
            scale: [0, 1, 0],
            x: [0, p.x],
            y: [0, p.y],
          }}
          transition={{
            duration: 0.6,
            delay: p.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </AnimatePresence>
  );
}

import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";

export function ComponentPreview({
  children,
  code,
  name = "component",
  className,
}: ComponentPreviewProps) {
  const [isCopied, setIsCopied] = React.useState(false);
  const [key, setKey] = React.useState(0); // For refresh functionality

  const copyButtonRef = React.useRef<HTMLButtonElement>(null);

  const handleCopyClick = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleRefresh = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <div
      className={cn("group relative my-6 flex flex-col space-y-4", className)}
    >
      {isCopied && <SuccessParticles buttonRef={copyButtonRef} />}

      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pb-4">
          <div className="flex items-center gap-6">
            <TabsList className="h-9 rounded-lg bg-muted/50 p-1 border border-muted-foreground/10">
              <TabsTrigger
                value="preview"
                className="rounded-md px-4 py-1.5 text-sm font-medium transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              >
                Preview
              </TabsTrigger>
              <TabsTrigger
                value="code"
                className="rounded-md px-4 py-1.5 text-sm font-medium transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              >
                Code
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="flex items-center gap-2">
            <OpenInV0Button name={name.toLowerCase().replace(/\s+/g, "-")} />

            <div className="flex items-center gap-1 rounded-lg border border-muted-foreground/20 bg-muted/20 p-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 rounded-md hover:bg-background/80"
                onClick={handleRefresh}
                title="Refresh Preview"
              >
                <RotateCcw className="h-3.5 w-3.5 text-muted-foreground" />
              </Button>
              <Button
                ref={copyButtonRef}
                variant="ghost"
                size="icon"
                className="h-7 w-7 rounded-md hover:bg-background/80"
                onClick={handleCopyClick}
                title="Copy Code"
              >
                {isCopied ? (
                  <CheckCheck className="h-3.5 w-3.5 text-emerald-500" />
                ) : (
                  <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                )}
              </Button>
            </div>
          </div>
        </div>

        <TabsContent
          value="preview"
          key={key}
          className={cn(
            "relative mt-0 rounded-2xl border bg-black/5 dark:bg-zinc-950/30 min-h-[400px] flex items-center justify-center overflow-hidden",
            "before:absolute before:inset-0 before:bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:before:bg-[radial-gradient(#1f2937_1px,transparent_1px)] before:bg-size-[16px_16px] before:mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
          )}
        >
          <div className="relative z-10 w-full flex items-center justify-center p-10 py-20 transition-all duration-300">
            {children}
          </div>
        </TabsContent>

        <TabsContent value="code" className="mt-0">
          <div className="relative rounded-xl border bg-zinc-950 border-border overflow-hidden shadow-sm">
             <div className="p-4 overflow-x-auto max-h-[600px] text-[13px] font-mono leading-relaxed scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
               <DynamicCodeBlock 
                lang="tsx" 
                code={code || "// Code not provided"}
               />
             </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
