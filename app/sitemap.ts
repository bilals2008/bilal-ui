// File: app/sitemap.ts
import { url } from "@/lib/source";
import type { MetadataRoute } from "next";

export const revalidate = false;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return url();
}
