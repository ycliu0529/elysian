import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // z.coerce.date() 能解析 ISO 字串 (如 2025-12-21T00:00:00Z) [cite: 2025-12-21]
    pub_date: z.coerce.date(), 
    // z.array(z.string()) 才能讀取 Decap 的 - english 列表格式 [cite: 2025-12-21]
    tags: z.array(z.string()).default([]), 
    author: z.string().optional().default("Kate"),
    description: z.string().optional(),
  }),
});

export const collections = { blog };