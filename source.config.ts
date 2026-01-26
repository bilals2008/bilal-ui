// File: source.config.ts
import { defineDocs, defineConfig, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";
import { visit } from "unist-util-visit";

const forceLineNumbers = () => (tree: any) => {
  visit(tree, "element", (node: any) => {
    if (node.tagName === "pre" && node.children[0]?.tagName === "code") {
      const codeNode = node.children[0];
      codeNode.data = codeNode.data || {};
      codeNode.data.meta = (codeNode.data.meta || "") + " showLineNumbers";
    }
  });
};

export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: frontmatterSchema.extend({
      icon: z.string().optional(),
      badge: z.string().optional(),
    }),
  },
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      inline: 'tailing-curly-colon',
      themes: {
        light: "github-light",
        dark: "tokyo-night",
      },
    },
    rehypePlugins: [forceLineNumbers],
  },
});
