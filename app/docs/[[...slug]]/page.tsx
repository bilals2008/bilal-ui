// File: app/docs/[[...slug]]/page.tsx
import { source } from "@/lib/source";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import { notFound } from "next/navigation";
import { getMDXComponents } from "@/mdx-components";
import type { Metadata } from "next";
import { createRelativeLink } from "fumadocs-ui/mdx";
import * as Icons from "lucide-react";

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage 
      toc={page.data.toc} 
      full={page.data.full}
      tableOfContent={{
        style: 'clerk',
        footer: (
          <div className="flex flex-col gap-4 text-sm text-muted-foreground mt-4 pt-4 border-t border-dashed border-border/70">
            <div className="flex flex-col gap-2">
              <span className="font-medium text-foreground flex items-center gap-2">
                <Icons.LifeBuoy className="w-4 h-4 text-primary" />
                Common Issues
              </span>
              <a 
                href="https://github.com/bilals2008/bilal-ui/issues?q=is%3Aissue+Component+not+found" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-foreground transition-colors group"
              >
                <div className="flex items-center justify-center w-5 h-5 rounded-md bg-red-500/10 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all">
                  <Icons.CircleAlert className="w-3 h-3" />
                </div>
                <span>Component not found?</span>
              </a>
              <a 
                href="https://github.com/bilals2008/bilal-ui/issues?q=is%3Aissue+Styles+not+applying" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-foreground transition-colors group"
              >
                <div className="flex items-center justify-center w-5 h-5 rounded-md bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Icons.Palette className="w-3 h-3" />
                </div>
                <span>Styles not applying?</span>
              </a>
               <a 
                href="https://github.com/bilals2008/bilal-ui/issues?q=is%3Aissue+TypeScript+errors" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-foreground transition-colors group"
              >
                <div className="flex items-center justify-center w-5 h-5 rounded-md bg-yellow-500/10 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white transition-all">
                  <Icons.FileJson className="w-3 h-3" />
                </div>
                <span>TypeScript errors?</span>
              </a>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="font-medium text-foreground flex items-center gap-2">
                <Icons.MessageCircleQuestion className="w-4 h-4 text-primary" />
                Need Help?
              </span>
              <a 
                href={`https://github.com/bilals2008/bilal-ui/blob/main/content/docs/${(params.slug || []).join("/")}.mdx`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-foreground transition-colors group mb-2"
              >
                 <div className="flex items-center justify-center w-5 h-5 rounded-md bg-stone-500/10 text-stone-500 group-hover:bg-stone-500 group-hover:text-white transition-all">
                  <Icons.Github className="w-3 h-3" />
                </div>
                <span className="group-hover:underline">Edit on GitHub</span>
              </a>

              <a 
                href="https://github.com/bilals2008/bilal-ui/issues/new" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-foreground transition-colors group"
              >
                 <div className="flex items-center justify-center w-5 h-5 rounded-md bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <Icons.Bug className="w-3 h-3" />
                </div>
                <span className="group-hover:underline">Open an Issue</span>
              </a>
            </div>
          </div>
        )
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/docs/[[...slug]]">
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
