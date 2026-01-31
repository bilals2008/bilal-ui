// source.config.ts
import { defineDocs, defineConfig, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";
import { visit } from "unist-util-visit";
var forceLineNumbers = () => (tree) => {
  visit(tree, "element", (node) => {
    if (node.tagName === "pre" && node.children[0]?.tagName === "code") {
      const codeNode = node.children[0];
      codeNode.data = codeNode.data || {};
      codeNode.data.meta = (codeNode.data.meta || "") + " showLineNumbers";
    }
  });
};
var docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: frontmatterSchema.extend({
      icon: z.string().optional(),
      badge: z.string().optional()
    })
  }
});
var source_config_default = defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      inline: "tailing-curly-colon",
      themes: {
        light: "github-light",
        dark: "tokyo-night"
      }
    },
    rehypePlugins: [forceLineNumbers]
  }
});
export {
  source_config_default as default,
  docs
};
