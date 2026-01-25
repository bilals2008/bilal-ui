// File: components/landing/templates-showcase.tsx
"use client";

import { motion } from "motion/react";
import {
  ExternalLink,
  ArrowRight,
  Layout,
  LayoutDashboard,
  User,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const templates = [
  {
    title: "SaaS Landing Page",
    description:
      "Modern landing page with hero, features, and pricing sections.",
    category: "Landing",
    icon: Layout,
    color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    tag: "Soon",
  },
  {
    title: "Admin Dashboard",
    description:
      "Full-featured dashboard with charts, tables, and sidebar navigation.",
    category: "Dashboard",
    icon: LayoutDashboard,
    color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    tag: "Soon",
  },
  {
    title: "Portfolio Template",
    description: "Clean and minimal portfolio for developers and designers.",
    category: "Portfolio",
    icon: User,
    color: "text-rose-500 bg-rose-500/10 border-rose-500/20",
    tag: "Soon",
  },
];

export function TemplatesShowcaseSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Built with{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-rose-500">
                Bilal UI
              </span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl text-sm md:text-base mx-auto">
              Discover high-quality templates and interfaces built using our
              components.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group">
            View all templates
            <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col p-5 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/10 border-2 border-dashed border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all overflow-hidden"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <Badge
                  variant="secondary"
                  appearance="light"
                  size="sm"
                  className={`px-2.5 py-1 gap-1.5 border ${template.color}`}
                >
                  <template.icon className="size-3.5" />
                  {template.category}
                </Badge>
                <Badge
                  variant="soon"
                  appearance="outline"
                  size="xs"
                  className="font-bold border-orange-500/20 text-orange-500 bg-orange-500/5"
                >
                  {template.tag}
                </Badge>
              </div>

              {/* Placeholder "Image" Area */}
              <div className="relative aspect-video rounded-xl bg-zinc-200/50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 mb-4 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-rose-500/5" />
                <div className="grid grid-cols-3 gap-2 w-full px-4 text-zinc-400 dark:text-zinc-600">
                  <div className="h-2 rounded-full bg-current opacity-20 w-full animate-pulse" />
                  <div className="h-2 rounded-full bg-current opacity-20 w-2/3 animate-pulse" />
                  <div className="h-2 rounded-full bg-current opacity-20 w-full animate-pulse" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-10 rounded-full bg-white dark:bg-zinc-900 shadow-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 border border-zinc-200 dark:border-zinc-800">
                  <ExternalLink className="size-4.5 text-zinc-900 dark:text-zinc-100" />
                </div>
              </div>

              <div className="space-y-2 mt-2">
                <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 group-hover:text-purple-500 transition-colors">
                  {template.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
                  {template.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
