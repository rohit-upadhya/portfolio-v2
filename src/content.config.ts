import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const linksSchema = z
  .array(
    z.object({
      label: z.string(),
      href: z.string(),
    })
  )
  .optional();

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    links: linksSchema,
    draft: z.boolean().optional().default(false),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    kind: z.string().optional(),
    description: z.string(),
    links: linksSchema,
    order: z.number().default(0),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    links: linksSchema,
    order: z.number().default(0),
  }),
});

export const collections = { blog, research, projects };
