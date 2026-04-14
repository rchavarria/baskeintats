import {z} from "zod";
import {VenueSchema} from "./VenueSchema.ts";

export const ScheduleEntrySchema = z.object({
  label: z.string().optional(),
  date: z.string(),
  time: z.string(),
  opponent: z.string().optional(),
});

export type ScheduleEntry = z.infer<typeof ScheduleEntrySchema>;

export const AnnouncementSchema = z.object({
  id: z.string(),
  type: z.literal("announcement"),
  season: z.string(),
  date: z.iso.datetime(),

  title: z.string(),
  emoji: z.string(),

  category: z.enum(["U13M", "U14M", "U15M", "U16M", "U17M", "U18M"]).optional(),

  venue: VenueSchema.optional(),

  dateRange: z.string().optional(),

  description: z.array(z.string()),

  schedule: z.array(ScheduleEntrySchema).optional(),

  references: z.array(z.object({
    icon: z.string().max(2),
    label: z.string(),
    url: z.url(),
  })),
});

export type Announcement = z.infer<typeof AnnouncementSchema>;
