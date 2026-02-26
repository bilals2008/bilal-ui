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
    version: "0.1.0-alpha",
    date: "February 26, 2026",
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
