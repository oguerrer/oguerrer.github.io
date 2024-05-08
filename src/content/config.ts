import { defineCollection, reference, z } from "astro:content";

const categories = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    explanation: z.string(),
    description: z.string(),
    research: z.array(reference('research')),
    cover: z.string().optional(),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleShort: z.string(),
    description: z.string(),
    publicationLink: z.string().optional(),
    outlet: z.string().optional(),
    ossLink: z.string().optional(),
    category: z.string().optional(),
    pubDate: z.string(),

  }),
});

export const collections = { research, categories };
