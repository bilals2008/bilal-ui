// File: data/changelog.ts
import pkg from "@/package.json";

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
    version: pkg.version,
    date: "March 1, 2026",
    title: "Alpha Progress Update",
    description:
      "Expanded component coverage, polished previews, and improved MDX action bar utilities.",
    changes: [
      {
        type: "feature",
        content:
          "Added more components to the docs and library catalog, with additional entries marked as coming soon.",
      },
      {
        type: "improvement",
        content:
          "Polished the component-preview experience for cleaner presentation and better usability.",
      },
      {
        type: "improvement",
        content:
          "Improved MDX action bar with Open with LLM support and a markdown copy feature.",
      },
    ],
  },
  {
    version: "0.1.0-alpha",
    date: "January 26, 2026",
    title: "Public Alpha Baseline",
    description: "Initial public alpha release of Bilal UI.",
    changes: [
      {
        type: "feature",
        content: "Launched docs with Fumadocs and custom sidebar navigation.",
      },
      {
        type: "feature",
        content:
          "Published core components: Button, Alert, Badge, Card, Dialog, Drawer, Tabs, and Toast.",
      },
      {
        type: "improvement",
        content: "Added source/registry install command flow for previews.",
      },
      {
        type: "internal",
        content: "Aligned stack to Next.js 16, React 19, and Tailwind CSS 4.",
      },
    ],
  },
];
