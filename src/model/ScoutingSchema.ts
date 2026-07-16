import {z} from "zod";

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
  favourite: z.boolean().optional().default(false),
  category: z.enum(["U13M", "U14M", "U15M", "U16M", "U17M", "U18M"]),

  title: z.string(),
  description: z.array(z.string()),
  video: z.url(),
  clips: z.array(ClipSchema),
});

export type Scouting = z.infer<typeof ScoutingSchema>;
