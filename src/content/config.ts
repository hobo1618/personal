import { defineCollection, reference, z } from 'astro:content';

const notes = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
        draft: z.boolean().default(true),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const thisSite = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
        draft: z.boolean().default(true),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const tags = defineCollection({
    // Type-check frontmatter using a schema
    schema: z.array(z.string()),
});

const fizzles = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
        draft: z.boolean().default(true),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { fizzles, notes, tags, thisSite };
