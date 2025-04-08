import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import rehypeSlug from "rehype-slug";
import externalLinks from "remark-external-links"; // ✅ 追加

export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    rehypePlugins: [rehypeSlug],
    remarkPlugins: [
      [externalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }] // ✅ 外部リンクに対応
    ],
  },
  content: {
    collections: {
      articles: {
        type: 'content',
        schema: ({ z }) =>
          z.object({
            title: z.string(),
            pubDate: z.date(),
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
