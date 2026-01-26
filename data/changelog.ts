// File: data/changelog.ts

export interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  description: string;
  changes: {
    type: "feature" | "improvement" | "fix" | "internal";
    content: string;
  }[];
}

export const changelogData: ChangelogEntry[] = [
  {
    version: "0.1.0",
    date: "January 26, 2026",
    title: "Initial Alpha Release",
    description: "The very first public alpha version of Bilal UI. Focusing on core components and layout systems.",
    changes: [
      { type: "feature", content: "Initial release of core components (Button, Badge, Card, etc.)." },
      { type: "feature", content: "Advanced layout system with flexible grid patterns." },
      { type: "improvement", content: "Enhanced dark mode support across all components." },
      { type: "fix", content: "Resolved flickering issues during theme transitions." },
    ],
  },
  {
    version: "0.0.5",
    date: "January 15, 2026",
    title: "Component Refinement",
    description: "Polishing existing components and adding new utility hooks.",
    changes: [
      { type: "feature", content: "Added new Hero and CTA sections for landing pages." },
      { type: "improvement", content: "Improved accessibility for navigation components." },
      { type: "fix", content: "Fixed responsive layout bugs in the documentation template." },
    ],
  },
  {
    version: "0.0.2",
    date: "January 05, 2026",
    title: "Foundation Work",
    description: "Setting up the project structure and design system foundations.",
    changes: [
      { type: "feature", content: "Project scaffolding with Next.js and Tailwind CSS." },
      { type: "internal", content: "Integrated Framer Motion for premium animations." },
      { type: "internal", content: "Setup documentation system using Fumadocs." },
    ],
  },
];
