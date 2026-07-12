// File: mdx-components.tsx
import React from "react";
import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/ui/callout";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Pre({ className, children, ...props }: React.ComponentProps<"pre">) {
  return (
    <div className="relative overflow-x-auto rounded-lg border border-border bg-muted/50 my-6">
      <pre
        className={cn(
          "overflow-x-auto p-4 text-[13px] leading-6 font-mono",
          className,
        )}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
}

function MdxTabs({ children, items }: { children: React.ReactNode; items?: { label?: string; value?: string }[] }) {
  const arr = React.Children.toArray(children).filter(Boolean) as React.ReactElement[];
  const parsed = items?.length
    ? items
    : arr.map((child, i) => ({
        label: (child.props as { label?: string })?.label || `Tab ${i + 1}`,
        value: (child.props as { value?: string })?.value || `tab-${i}`,
      }));

  return (
    <Tabs defaultValue={parsed?.[0]?.value ?? "tab-0"} className="my-6">
      <TabsList>
        {parsed.map((tab) => (
          <TabsTrigger key={tab.value ?? tab.label ?? ''} value={tab.value ?? tab.label ?? ''}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {arr.map((child, i) => (
        <TabsContent key={i} value={parsed?.[i]?.value ?? `tab-${i}`} className="mt-2">
          {child}
        </TabsContent>
      ))}
    </Tabs>
  );
}

function MdxTab({ children, ...props }: { children: React.ReactNode; label?: string; value?: string }) {
  return <div {...props}>{children}</div>;
}

function Steps({ children }: { children: React.ReactNode }) {
  return (
    <div className="ml-4 border-l-2 border-border pl-6 space-y-8 my-6">
      {children}
    </div>
  );
}

function Step({ children, ...props }: { children: React.ReactNode; label?: string }) {
  return (
    <div {...props}>
      {children}
    </div>
  );
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    h1: ({ className, ...props }) => (
      <h1 className={cn("scroll-m-20 text-3xl font-bold tracking-tight", className)} {...props} />
    ),
    h2: ({ className, ...props }) => (
      <h2 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight mt-10 mb-4", className)} {...props} />
    ),
    h3: ({ className, ...props }) => (
      <h3 className={cn("scroll-m-20 text-xl font-semibold tracking-tight mt-8 mb-3", className)} {...props} />
    ),
    h4: ({ className, ...props }) => (
      <h4 className={cn("scroll-m-20 text-lg font-medium tracking-tight mt-6 mb-2", className)} {...props} />
    ),
    p: ({ className, ...props }) => (
      <p className={cn("leading-7 text-muted-foreground [&:not(:first-child)]:mt-4", className)} {...props} />
    ),
    a: ({ className, ...props }) => (
      <a className={cn("text-primary underline underline-offset-2 hover:opacity-80", className)} {...props} />
    ),
    ul: ({ className, ...props }) => (
      <ul className={cn("my-4 ml-6 list-disc text-muted-foreground [&>li]:mt-2", className)} {...props} />
    ),
    ol: ({ className, ...props }) => (
      <ol className={cn("my-4 ml-6 list-decimal text-muted-foreground [&>li]:mt-2", className)} {...props} />
    ),
    li: ({ className, ...props }) => (
      <li className={cn("", className)} {...props} />
    ),
    blockquote: ({ className, ...props }) => (
      <blockquote className={cn("mt-4 border-l-3 border-border pl-4 italic text-muted-foreground", className)} {...props} />
    ),
    pre: Pre,
    code: ({ className, ...props }) => (
      <code className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm", className)} {...props} />
    ),
    table: ({ className, ...props }) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className={cn("w-full border-collapse text-sm [&_td]:border-b [&_td]:border-border [&_th]:border-b [&_th]:border-border [&_th]:font-semibold [&_th]:text-left [&_td]:p-3 [&_th]:p-3", className)} {...props} />
      </div>
    ),
    tr: ({ className, ...props }) => <tr className={cn("", className)} {...props} />,
    th: ({ className, ...props }) => <th className={cn("", className)} {...props} />,
    td: ({ className, ...props }) => <td className={cn("", className)} {...props} />,
    hr: ({ className, ...props }) => <hr className={cn("my-6 border-border", className)} {...props} />,
    img: ({ className, ...props }) => (
      <img className={cn("my-6 rounded-lg border border-border max-w-full h-auto", className)} {...props} />
    ),
    Tabs: MdxTabs,
    Tab: MdxTab,
    Steps,
    Step,
    Callout,
    ...components,
  };
}
