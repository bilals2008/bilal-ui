// @ts-nocheck
import * as __fd_glob_15 from "../content/docs/getting-started/troubleshooting.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/getting-started/theming.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/getting-started/roadmap.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/getting-started/introduction.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/getting-started/installation.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/getting-started/changelog.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/components/checkbox.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/components/card.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/components/button.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/components/badge.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/components/avatar.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/components/alert.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/components/alert-dialog.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/components/accordion.mdx?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/getting-started/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "getting-started/meta.json": __fd_glob_1, }, {"components/accordion.mdx": __fd_glob_2, "components/alert-dialog.mdx": __fd_glob_3, "components/alert.mdx": __fd_glob_4, "components/avatar.mdx": __fd_glob_5, "components/badge.mdx": __fd_glob_6, "components/button.mdx": __fd_glob_7, "components/card.mdx": __fd_glob_8, "components/checkbox.mdx": __fd_glob_9, "getting-started/changelog.mdx": __fd_glob_10, "getting-started/installation.mdx": __fd_glob_11, "getting-started/introduction.mdx": __fd_glob_12, "getting-started/roadmap.mdx": __fd_glob_13, "getting-started/theming.mdx": __fd_glob_14, "getting-started/troubleshooting.mdx": __fd_glob_15, });