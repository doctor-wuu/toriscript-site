import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    intro: z.string().optional(),
    introImage: z.string().optional(),
    category: z.number(), // ← これが既存
    categoryLabel: z.string().optional(), // ← これを追加！
    author: z.number(),
    tags: z.array(z.string()).optional(),
  }),
})

export const collections = { articles };


