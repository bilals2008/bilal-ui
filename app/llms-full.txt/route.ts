// File: app/llms-full.txt/route.ts
import { getLLMText } from '@/lib/get-llm-text';
import { source } from '@/lib/source';

export const revalidate = false;

export async function GET() {
  const scanned = await Promise.all(
    source
      .getPages()
      .filter((page) => page.path.split('/')[0] !== 'api-reference')
      .map(getLLMText),
  );

  return new Response(scanned.join('\n\n'), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
