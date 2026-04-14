import {z} from "zod";
import {VenueSchema} from "./VenueSchema.ts";
import {ReferenceSchema} from "./ReferenceSchema.ts";

export const ScheduleEntrySchema = z.object({
  label: z.string().optional(),
  date: z.iso.datetime(),
  opponent: z.string().optional(),
});

export type ScheduleEntry = z.infer<typeof ScheduleEntrySchema>;

export const AnnouncementSchema = z.object({
  id: z.string(),
  type: z.literal("announcement"),
  season: z.string(),
  date: z.iso.datetime(),

  title: z.string(),
  announcementType: z.enum([
    "tournament",    // 🏆
    "friendly-game", // 🫂
    "call-up",       // 📢
    "milestone",     // 🚀
  ]),
  category: z.enum(["U13M", "U14M", "U15M", "U16M", "U17M", "U18M"]),

  venue: VenueSchema.optional(),

  description: z.array(z.string()),

  schedule: z.array(ScheduleEntrySchema).optional(),

  references: z.array(ReferenceSchema),
});

export type Announcement = z.infer<typeof AnnouncementSchema>;
