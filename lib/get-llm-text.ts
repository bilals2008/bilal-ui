// File: lib/get-llm-text.ts
import { source } from './source';

type Page = ReturnType<typeof source.getPage>;

export async function getLLMText(page: NonNullable<Page>) {
  const fallback = await page.data.load().then(d => d.body); 
  
  let content = "";
  try {
    content = await page.data.getText('processed');
  } catch {
    content = "Content rendering failed or not available in processed mode.";
  }

  const owner = "bilals2008";
  const repo = "bilal-ui";
  const path = `content/docs/${page.file.path}`;

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "";
  const fullUrl = page.url.startsWith("http") ? page.url : `${baseUrl}${page.url}`;

  return `# ${page.data.title}
URL: ${fullUrl}
Source: https://raw.githubusercontent.com/${owner}/${repo}/refs/heads/main/${path}

${page.data.description ?? ''}
        
${content || fallback}`;
}
