// File: lib/get-llm-text.ts
import { source } from './source';

type Page = ReturnType<typeof source.getPage>;

export async function getLLMText(page: NonNullable<Page>) {
  let content = '';
  try {
    content = await page.data.getText('processed');
  } catch {
    content = '';
  }

  const owner = 'bilals2008';
  const repo = 'bilal-ui';
  const docPath = page.path.endsWith('.mdx') ? page.path : `${page.path}.mdx`;
  const path = `content/docs/${docPath}`;

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || '';
  const fullUrl = page.url.startsWith('http') ? page.url : `${baseUrl}${page.url}`;

  return `# ${page.data.title}
URL: ${fullUrl}
Source: https://raw.githubusercontent.com/${owner}/${repo}/refs/heads/main/${path}

${page.data.description ?? ''}
        
${content}`;
}
