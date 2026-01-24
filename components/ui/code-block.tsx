// File: components/ui/code-block.tsx
"use client";

import * as React from "react";
import { Highlight, themes, type Language } from "prism-react-renderer";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  return (
    <Highlight
      theme={themes.vsDark}
      code={code}
      language={language as Language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre 
          className={className} 
          style={{ 
            ...style, 
            background: "transparent", 
            padding: 0,
            margin: 0,
            fontFamily: "var(--font-mono)",
            fontSize: "15px",
            lineHeight: "1.6"
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })} className="table-row">
              <span className="table-cell select-none opacity-30 text-right pr-4 text-xs w-8">
                {i + 1}
              </span>
              <span className="table-cell">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
