import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tags: z.array(z.string()),
      date: z.coerce.date(),
      excerpt: z.string(),
      image: z.ostring(),
      client: z.ostring(),
      agency: z.ostring(),
    }),
});

const postsCollection = defineCollection({
  type: "content",

  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tags: z.array(z.string()),
      date: z.coerce.date(),
      excerpt: z.string(),
      image: z.ostring(),
    }),
});

export const collections = {
  projects: projectsCollection,
  posts: postsCollection,
};
