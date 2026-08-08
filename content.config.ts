import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        date: z.date(),
        category: z.enum(['sucesos', 'deportes', 'espectaculos']),
        image: z.string().optional(),
        author: z.object({
          name: z.string(),
          bio: z.string(),
          image: z.string()
        })
      })
    })
  }
})
