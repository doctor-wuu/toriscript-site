import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import rehypeSlug from "rehype-slug";
import externalLinks from "remark-external-links";

export default defineConfig({
  base: '/',
  site: 'https://toriscript.com',
  integrations: [
    mdx(),
    tailwind(),
    sitemap(),
  ],
  markdown: {
    rehypePlugins: [rehypeSlug],
    remarkPlugins: [
      [externalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
    ],
  },
  content: {
    collections: {
      articles: {
        type: 'content',
        schema: ({ z }) =>
          z.object({
            title: z.string(),
            pubDate: z.string(),
            category: z.string(),
            categoryLabel: z.string().optional(),
            description: z.string().optional(),
            intro: z.string().optional(),
            introImage: z.string().optional()
          }),
      },
    },
  },
});