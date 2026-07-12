// File: app/docs/[[...slug]]/page.tsx
import { source } from "@/lib/source";
import { notFound } from "next/navigation";
import { getMDXComponents } from "@/mdx-components";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const lastModified = page.data.lastModified;
  const formattedLastModified = lastModified
    ? new Date(lastModified).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <article className="typeset typeset-docs">
      <h1 className="text-4xl font-bold tracking-tight text-foreground mb-3">
        {page.data.title}
      </h1>
      {page.data.description && (
        <p className="text-lg text-muted-foreground mb-4">
          {page.data.description}
        </p>
      )}
      {formattedLastModified && (
        <p className="mb-6 text-xs text-muted-foreground">
          Last updated: {formattedLastModified}
        </p>
      )}
      <MDX components={getMDXComponents()} />
    </article>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
