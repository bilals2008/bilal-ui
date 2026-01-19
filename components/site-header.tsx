// File: components/site-header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Search, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-8 flex items-center gap-2">
          
          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 flex flex-col">
               <SheetHeader className="px-1 border-b pb-4 mb-4">
                 <SheetTitle className="text-left font-bold flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-bold leading-none">
                      B
                    </div>
                   Bilal UI
                 </SheetTitle>
               </SheetHeader>
               
              <div className="flex-1 overflow-auto py-2">
                <nav className="grid gap-1 px-2 text-sm font-medium">
                  <Link
                    href="/docs"
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted/50",
                      pathname?.startsWith("/docs") && !pathname?.startsWith("/docs/components") && !pathname?.startsWith("/docs/blocks") && "bg-muted text-primary"
                    )}
                  >
                    Docs
                  </Link>
                  <Link
                    href="/docs/components"
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted/50",
                      pathname?.startsWith("/docs/components") && "bg-muted text-primary"
                    )}
                  >
                    <span>Components</span>
                    <Badge variant="secondary" className="ml-auto text-[10px] h-5 px-1.5 min-w-5 justify-center">1</Badge>
                  </Link>
                  <Link
                    href="/docs/blocks"
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted/50",
                      pathname?.startsWith("/docs/blocks") && "bg-muted text-primary"
                    )}
                  >
                    <span>Blocks</span>
                    <Badge variant="secondary" className="ml-auto text-[10px] h-5 px-1.5 min-w-5 justify-center">0</Badge>
                  </Link>
                </nav>
              </div>

              <div className="mt-auto border-t p-4">
                 <div className="flex items-center gap-2 mb-4">
                    <Button variant="outline" className="w-full justify-start text-muted-foreground h-9" asChild>
                      <Link href="/search">
                         <Search className="mr-2 h-4 w-4" />
                         Search documentation...
                      </Link>
                    </Button>
                 </div>
                 <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-md border" asChild>
                       <Link href="https://github.com/bilal-ui" target="_blank" rel="noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                            <path d="M9 18c-4.51 2-5-2-7-2"/>
                          </svg>
                       </Link>
                    </Button>
                 </div>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
             <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-bold leading-none">
              B
            </div>
            <span>Bilal UI</span>
          </Link>
        </div>

        <nav className="flex items-center space-x-6 text-sm font-medium hidden md:flex">
        
          <Link
            href="/docs/components"
            className={cn(
              "transition-colors hover:text-foreground/80 flex items-center gap-2",
              pathname?.startsWith("/docs/components") ? "text-foreground" : "text-foreground/60"
            )}
          >
            Components <Badge variant="secondary" className="h-5 px-1.5 text-[10px] pointer-events-none">1</Badge>
          </Link>
           <Link
            href="/docs/blocks"
            className={cn(
              "transition-colors hover:text-foreground/80 flex items-center gap-2",
              pathname?.startsWith("/docs/blocks") ? "text-foreground" : "text-foreground/60"
            )}
          >
            Blocks <Badge variant="secondary" className="h-5 px-1.5 text-[10px] pointer-events-none">0</Badge>
          </Link>
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
           <Button variant="outline" className="h-8 w-full max-w-[200px] px-4 text-muted-foreground bg-muted/50 text-xs justify-start shadow-none hidden md:flex">
             <Search className="mr-2 h-3.5 w-3.5" />
             Search...
             <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
           </Button>
           <Button variant="ghost" size="icon" className="h-8 w-8 px-0" asChild>
             <Link href="https://github.com/bilal-ui" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
                <span className="sr-only">GitHub</span>
             </Link>
           </Button>
        </div>
      </div>
    </header>
  );
}
