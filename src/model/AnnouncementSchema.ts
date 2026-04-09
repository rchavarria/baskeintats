import {z} from "zod";

export const AnnouncementSchema = z.object({
  id: z.string(),
  type: z.string(),
  season: z.string(),
});

export type Announcement = z.infer<typeof AnnouncementSchema>;
