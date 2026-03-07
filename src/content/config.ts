import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).optional(),
    heroImage: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

export const collections = {
  blog,
};

