import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import rehypeSlug from "rehype-slug";


export default defineConfig({
  integrations: [tailwind(), ], // ← ✅ 1つにまとめる！
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
            categoryLabel: z.string().optional(), // 👈 これがないと undefined 扱いされる
            description: z.string().optional(),
            intro: z.string().optional(),
            introImage: z.string().optional()
          }),
      },
    },
  },
});

