import {z} from "zod";

export const ReferenceSchema = z.object({
  type: z.enum([
    "article",      // 📰
    "document",     // 💼
    "photo",        // 📸
    "stats",        // 📈
    "social-media", // 📱
    "video",        // 🎥
  ]),
  label: z.string(),
  url: z.url(),
});

export type Reference = z.infer<typeof ReferenceSchema>;
