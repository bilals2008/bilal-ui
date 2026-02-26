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
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    async function highlight() {
      setLoading(true);
      setHasError(false);
      try {
        const result = await codeToTokens(code, {
          lang: language as any,
          theme: theme as any,
        });
        setTokens(result.tokens);
      } catch (error) {
        console.error("Shiki highlight error:", error);
        setHasError(true);
      } finally {
        setLoading(false);
      }
    }
    highlight();
  }, [code, language, theme]);

  if (loading) {
    return (
      <div className="flex flex-col gap-2 p-5">
        <div className="h-4 w-3/4 animate-pulse rounded bg-zinc-700/60" />
        <div className="h-4 w-1/2 animate-pulse rounded bg-zinc-700/60" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-zinc-700/60" />
      </div>
    );
  }

  if (hasError || tokens.length === 0) {
    return (
      <pre className="p-5 font-mono text-[13px] leading-6 text-zinc-100">
        <code>{code}</code>
      </pre>
    );
  }

  return (
    <div className="relative overflow-x-auto">
      <pre className="p-5 font-mono text-[13px] leading-6 antialiased">
        {tokens.map((line, lineIndex) => (
          <div key={lineIndex} className="grid grid-cols-[2.5rem_1fr] items-start">
            <span className="select-none pr-3 text-right text-[11px] text-zinc-500 tabular-nums">
              {lineIndex + 1}
            </span>
            <span className="whitespace-pre">
              {line.length > 0 ? (
                line.map((token, tokenIndex) => (
                  <span key={tokenIndex} style={{ color: token.color }}>
                    {token.content}
                  </span>
                ))
              ) : (
                <span>{"\n"}</span>
              )}
            </span>
          </div>
        ))}
      </pre>
    </div>
  );
}
