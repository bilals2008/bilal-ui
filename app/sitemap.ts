// File: app/sitemap.ts
import { getPages } from "@/lib/source";
import type { MetadataRoute } from "next";

export const revalidate = false;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://bilal-ui.com"; // Replace with actual domain if known
  return getPages().map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  }));
}
