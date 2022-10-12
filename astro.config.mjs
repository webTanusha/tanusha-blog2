import youtubeEmbed from "./src/plugins/youtubeEmbed.mjs";
import responsiveImages from "./src/plugins/responsiveImages.mjs";
import codeHighlightPre from "./src/plugins/codeHighlightPre.mjs";

import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  /** @type {import('astro').AstroUserConfig} */
  integrations: [preact(), mdx(), sitemap()],
  site: "https://leafofkindness.netlify.app/",
  markdown: {
    // TODO: Maybe use shiki and see if it is better and has line highlighting.
    syntaxHighlight: false,
    remarkPlugins: [
      "remark-gfm",
      codeHighlightPre,
      [
        "remark-prism",
        {
          plugins: ["prismLineHighlightModified.js"],
        },
      ],
      youtubeEmbed,
      responsiveImages,
    ],
  },
});
