// File: app/llms.txt/route.ts
import { source } from '@/lib/source';

export const revalidate = false;

export function GET() {
  const lines: string[] = ['# Docs'];
  const groups = new Map<string, string[]>();

  for (const page of source.getPages()) {
    const section = page.path.split('/')[0] || 'docs';
    const sectionLines = groups.get(section) ?? [];
    sectionLines.push(
      `- [${page.data.title}](${page.url}): ${page.data.description ?? ''}`,
    );
    groups.set(section, sectionLines);
  }

  for (const [section, sectionLines] of groups) {
    lines.push(`## ${section}`);
    lines.push(sectionLines.join('\n'));
  }

  return new Response(lines.join('\n\n'), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
