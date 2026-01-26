// File: components/ui/code-block.tsx
import * as React from "react";
import { codeToTokens, type ThemedToken } from "shiki";

interface CodeBlockProps {
  code: string;
  language?: string;
  theme?: string;
}

export function CodeBlock({
  code,
  language = "tsx",
  theme = "tokyo-night",
}: CodeBlockProps) {
  const [tokens, setTokens] = React.useState<ThemedToken[][]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function highlight() {
      setLoading(true);
      try {
        const result = await codeToTokens(code, {
          lang: language as any,
          theme: theme as any,
        });
        setTokens(result.tokens);
      } catch (error) {
        console.error("Shiki highlight error:", error);
      } finally {
        setLoading(false);
      }
    }
    highlight();
  }, [code, language, theme]);

  if (loading) {
    return (
      <div className="flex flex-col gap-2 p-4 bg-black">
        <div className="h-4 w-3/4 animate-pulse rounded bg-zinc-800" />
        <div className="h-4 w-1/2 animate-pulse rounded bg-zinc-800" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-zinc-800" />
      </div>
    );
  }

  return (
    <div className="relative overflow-x-auto bg-black">
      <pre className="font-mono text-[15px] font-medium leading-6 p-4">
        {tokens.map((line, lineIndex) => (
          <div key={lineIndex} className="table-row">
            <span className="table-cell w-10 min-w-10 select-none text-right pr-4 text-zinc-600 text-[13px] align-top">
              {lineIndex + 1}
            </span>
            <span className="table-cell align-top whitespace-pre">
              {line.length > 0 ? (
                line.map((token, tokenIndex) => (
                  <span key={tokenIndex} style={{ color: token.color }}>
                    {token.content}
                  </span>
                ))
              ) : (
                // Render empty line to maintain height
                <span>{"\n"}</span>
              )}
            </span>
          </div>
        ))}
      </pre>
    </div>
  );
}
