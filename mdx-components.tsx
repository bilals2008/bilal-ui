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
    pre: ({ className, ...props }: React.ComponentProps<"pre">) => (
      <defaultMdxComponents.pre
        className={cn("text-[13px] font-medium leading-relaxed", className)}
        {...props}
      />
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

