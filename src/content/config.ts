import { z, defineCollection } from "astro:content";

const post = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    devLink: z.string().url().optional()
  }),
});

export const collections = {
  post: post,
};
