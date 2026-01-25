"use client";

import { motion } from "motion/react";
import {
  ScanFace,
  Palette,
  Settings2,
  Heart,
  Sparkles,
  Code2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <ScanFace className="w-8 h-8" />,
    title: "Beautiful Reusable React Components",
    description:
      "Versatile collection of pre-designed React and Next.js components based on JSX. Bilal UI offers modular, reusable building blocks to accelerate your workflow.",
    className:
      "col-span-1 md:col-span-1 lg:col-span-1 bg-orange-500/5 dark:bg-orange-500/10 border-orange-200 dark:border-orange-900/50 text-orange-900 dark:text-orange-100",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Highly-Customizable with Tailwind CSS",
    description:
      "Effortlessly style and theme your UI with Tailwind CSS. Leverage utility-first classes and flexible configurations to create pixel-perfect, brand-aligned designs.",
    className:
      "col-span-1 md:col-span-2 lg:col-span-2 bg-purple-500/5 dark:bg-purple-500/10 border-purple-200 dark:border-purple-900/50 text-purple-900 dark:text-purple-100",
  },
  {
    icon: <Settings2 className="w-8 h-8" />,
    title: "200+ Unique UI Components",
    description:
      "Access a diverse set of customizable UI components. Seamlessly integrated and scalable, these elements enhance your application's visual appeal and functionality.",
    className:
      "col-span-1 md:col-span-2 lg:col-span-2 bg-emerald-500/5 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-900/50 text-emerald-900 dark:text-emerald-100",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Multi-framework Support with JSX",
    description:
      "Bilal UI supports multiple frameworks based on JSX, including React and Next.js, offering flexible integration for diverse projects.",
    className:
      "col-span-1 md:col-span-1 lg:col-span-1 bg-pink-500/5 dark:bg-pink-500/10 border-pink-200 dark:border-pink-900/50 text-pink-900 dark:text-pink-100",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Engaging Animations Powered by Framer Motion",
    description:
      "Captivate users with fluid animations and transitions using Framer Motion. Bilal UI delivers seamless micro-interactions.",
    className:
      "col-span-1 md:col-span-1 lg:col-span-1 bg-blue-500/5 dark:bg-blue-500/10 border-blue-200 dark:border-blue-900/50 text-blue-900 dark:text-blue-100",
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Developer-Centric Design for Scalability",
    description:
      "Built for developers, Bilal UI emphasizes clean, modular, and extensible code. From startup MVPs to enterprise applications, scaling is effortless.",
    className:
      "col-span-1 md:col-span-2 lg:col-span-2 bg-zinc-500/5 dark:bg-zinc-500/10 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100",
  },
];

export function KeyFeatures() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400">
              Key Features
            </span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Everything you need to build modern, scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={cn(
                "p-8 rounded-3xl border transition-all duration-300 hover:shadow-lg flex flex-col justify-between h-full min-h-[280px]",
                feature.className,
              )}
            >
              <div className="space-y-6">
                <div className="p-3 bg-white/50 dark:bg-white/10 w-fit rounded-xl backdrop-blur-sm">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm opacity-80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
