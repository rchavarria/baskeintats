import {z} from "zod";

export const ReferenceSchema = z.object({
  type: z.enum([
    "social-media", // 📱
    "article",      // 📰
    "document",     // 💼
    "photo",        // 📸
    "video",        // 🎥
  ]),
  label: z.string(),
  url: z.url(),
});

export type Reference = z.infer<typeof ReferenceSchema>;
