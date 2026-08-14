import {z} from "zod";
import {CategorySchema} from "./CategorySchema.ts";
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
    "call-up",       // 📢
    "camp",          // 🏕️
    "friendly-game", // 🫂
    "milestone",     // 🚀
    "tournament",    // 🏆
  ]),
  category: CategorySchema,

  venue: VenueSchema.optional(),

  description: z.array(z.string()),

  schedule: z.array(ScheduleEntrySchema).optional(),

  references: z.array(ReferenceSchema),
});

export type Announcement = z.infer<typeof AnnouncementSchema>;
