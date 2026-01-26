// File: mdx-components.tsx
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { ComponentPreview } from "@/components/bilalUi/component-preview";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Callout } from "@/components/ui/callout";
import { cn } from "@/lib/utils";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    pre: ({ className, children, ...props }: React.ComponentProps<"pre">) => (
      <div className="relative overflow-x-auto dark:bg-black py-4 rounded-lg border border-white/10 my-6">
        <defaultMdxComponents.pre
          className={cn(
            "bg-transparent! border-none! shadow-none! p-0! m-0! font-mono text-[14px] leading-6",
            className,
          )}
          {...props}
        >
          {children}
        </defaultMdxComponents.pre>
      </div>
    ),
    ComponentPreview,
    Tab,
    Tabs,
    Step,
    Steps,
    Callout,
    ...components,
  };
}
