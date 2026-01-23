// File: components/bilalUi/component-preview.tsx
"use client";

import * as React from "react";
import { RotateCcw, Copy, CheckCheck, Terminal } from "lucide-react";
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
  installCommand?: string;
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

import { CodeBlock } from "@/components/ui/code-block";

interface ComponentPreviewProps {
  children: React.ReactNode;
  code?: string;
  name?: string;
  className?: string;
  /**
   * If provided, overrides the fully constructed install command.
   */
  installCommand?: string;
  /**
   * If provided, constructs the install command using:
   * npx shadcn@latest add {NEXT_PUBLIC_APP_URL}/registry/{registry}
   */
  registry?: string;
}

export function ComponentPreview({
  children,
  code,
  name = "component",
  className,
  installCommand,
  registry,
}: ComponentPreviewProps) {
  const [isCopied, setIsCopied] = React.useState(false);
  const [isInstallCopied, setIsInstallCopied] = React.useState(false);
  const [key, setKey] = React.useState(0); // For refresh functionality
  const [sourceCode, setSourceCode] = React.useState<string>("");

  const copyButtonRef = React.useRef<HTMLButtonElement>(null);
  const installButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (code) {
        setSourceCode(code);
    } else if (name) {
        // Fetch source code if not provided directly
        fetch(`/api/source/${name}`)
            .then(res => {
                if (res.ok) return res.text();
                return "// Source code not found";
            })
            .then(text => setSourceCode(text))
            .catch(() => setSourceCode("// Error loading source code"));
    }
  }, [code, name]);

  // Construct the command dynamically
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const registryUrl = registry || `${name}.json`;
  const finalInstallCommand = installCommand ?? `npx shadcn@latest add ${appUrl}/registry/${registryUrl}`;

  const handleCopyClick = () => {
    if (sourceCode) {
      navigator.clipboard.writeText(sourceCode);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleInstallCopy = () => {
    if (finalInstallCommand) {
      navigator.clipboard.writeText(finalInstallCommand);
      setIsInstallCopied(true);
      setTimeout(() => setIsInstallCopied(false), 2000);
    }
  };

  const handleRefresh = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <div
      className={cn(
        "group relative my-6 rounded-xl border bg-background shadow-sm",
        className
      )}
    >
      {isCopied && <SuccessParticles buttonRef={copyButtonRef} />}
      {isInstallCopied && <SuccessParticles buttonRef={installButtonRef} />}

      <Tabs defaultValue="preview" className="relative w-full">
        {/* Toolbar Section */}
        <div className="flex items-center justify-between border-b px-4 py-3 bg-black/5 dark:bg-black/40">
          <TabsList className="h-9 gap-1 rounded-lg bg-zinc-100 dark:bg-zinc-800/60 p-1 text-zinc-500 dark:text-zinc-400">
            <TabsTrigger
              value="preview"
              className="rounded-md px-3 py-1 text-xs font-medium data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-700 data-[state=active]:text-zinc-900 dark:data-[state=active]:text-zinc-100 data-[state=active]:shadow-sm transition-all"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="rounded-md px-3 py-1 text-xs font-medium data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-700 data-[state=active]:text-zinc-900 dark:data-[state=active]:text-zinc-100 data-[state=active]:shadow-sm transition-all"
            >
              Code
            </TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            {finalInstallCommand && (
               <div className="hidden md:flex items-center">
                 <Button
                   ref={installButtonRef}
                   variant="outline"
                   size="sm"
                   className="h-8 gap-2 rounded-lg border-dashed border-zinc-300 dark:border-zinc-700 bg-transparent px-3 text-xs font-mono text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                   onClick={handleInstallCopy}
                 >
                   {isInstallCopied ? <CheckCheck className="size-3.5" /> : <Terminal className="size-3.5" />}
                   <span className="truncate max-w-50">{finalInstallCommand}</span>
                 </Button>
               </div>
            )}

            <div className="flex items-center gap-1">
               <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-lg border-black/5 dark:border-white/5 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-zinc-500 dark:text-zinc-400"
                onClick={handleRefresh}
                title="Refresh Preview"
              >
                <div className={cn("transition-transform duration-500", key > 0 && "rotate-180")}>
                  <RotateCcw className="h-4 w-4" />
                </div>
              </Button>
              <Button
                ref={copyButtonRef}
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-lg border-black/5 dark:border-white/5 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-zinc-500 dark:text-zinc-400"
                onClick={handleCopyClick}
                title="Copy Code"
              >
                {isCopied ? (
                  <CheckCheck className="h-4 w-4 text-emerald-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
               <OpenInV0Button name={name.toLowerCase().replace(/\s+/g, "-")} className="h-9 rounded-lg px-3" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <TabsContent
          value="preview"
          key={key}
          className="relative min-h-100 w-full overflow-hidden rounded-b-xl bg-background mt-0"
        >
           <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />
           <div className="relative z-10 flex h-full min-h-100 w-full items-center justify-center p-10">
            {children}
          </div>
        </TabsContent>

        <TabsContent value="code" className="mt-0">
          <div className="relative overflow-hidden rounded-b-xl bg-[#1e1e2e]">
             <div className="p-4 overflow-x-auto max-h-150 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
               <CodeBlock 
                language="tsx" 
                
                code={sourceCode || "// Loading..."}
               />
             </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
