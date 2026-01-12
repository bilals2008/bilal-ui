// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "blocks/ai-card-generation.mdx": () => import("../content/docs/blocks/ai-card-generation.mdx?collection=docs"), "blocks/ai-chat.mdx": () => import("../content/docs/blocks/ai-chat.mdx?collection=docs"), "components/action-search-bar.mdx": () => import("../content/docs/components/action-search-bar.mdx?collection=docs"), "components/alert.mdx": () => import("../content/docs/components/alert.mdx?collection=docs"), "components/avatar-picker.mdx": () => import("../content/docs/components/avatar-picker.mdx?collection=docs"), "components/beams-background.mdx": () => import("../content/docs/components/beams-background.mdx?collection=docs"), "components/button.mdx": () => import("../content/docs/components/button.mdx?collection=docs"), "components/card.mdx": () => import("../content/docs/components/card.mdx?collection=docs"), }),
};
export default browserCollections;