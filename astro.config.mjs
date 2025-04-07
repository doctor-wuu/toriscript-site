import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import rehypeSlug from "rehype-slug";

export default defineConfig({
  base: '/toriscript-site/', // ← ⭐ここ追加！（リポジトリ名と一致）
  integrations: [tailwind()],
  markdown: {
    rehypePlugins: [rehypeSlug],
  },
  content: {
    collections: {
      articles: {
        type: 'content',
        schema: ({ z }) =>
          z.object({
            title: z.string(),
            date: z.date(),
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
