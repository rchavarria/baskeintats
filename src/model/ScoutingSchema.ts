import {z} from "zod";
import {CategorySchema} from "./CategorySchema.ts";

// "m:ss", "mm:ss" or "h:mm:ss"
const timestampRegex = /^(\d+:)?[0-5]?\d:[0-5]\d$/;

export const ClipSchema = z.object({
  start: z.string().regex(timestampRegex, {
    message: 'start must be in format "m:ss", "mm:ss" or "h:mm:ss"',
  }),
  description: z.string(),
  type: z.enum(["good-play", "bad-play"]),
});

export type Clip = z.infer<typeof ClipSchema>;

export const ScoutingSchema = z.object({
  id: z.string(),
  type: z.literal("scouting"),
  season: z.string(),
  date: z.iso.datetime(),

  title: z.string(),
  category: CategorySchema,

  description: z.array(z.string()),

  video: z.url(),

  clips: z.array(ClipSchema),
});

export type Scouting = z.infer<typeof ScoutingSchema>;
