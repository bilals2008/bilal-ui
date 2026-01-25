// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"components/button.mdx": () => import("../content/docs/components/button.mdx?collection=docs"), "getting-started/changelog.mdx": () => import("../content/docs/getting-started/changelog.mdx?collection=docs"), "getting-started/installation.mdx": () => import("../content/docs/getting-started/installation.mdx?collection=docs"), "getting-started/introduction.mdx": () => import("../content/docs/getting-started/introduction.mdx?collection=docs"), "getting-started/theming.mdx": () => import("../content/docs/getting-started/theming.mdx?collection=docs"), "getting-started/troubleshooting.mdx": () => import("../content/docs/getting-started/troubleshooting.mdx?collection=docs"), }),
};
export default browserCollections;