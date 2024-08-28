import { z, defineCollection } from "astro:content";

const post = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string()
  }),
});

export const collections = {
  post: post,
};
