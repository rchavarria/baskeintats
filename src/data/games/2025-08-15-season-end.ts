import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";

export const announcement_2025_08_15_season_end: Announcement = AnnouncementSchema.parse({
  id: "S45-season-end",
  type: "announcement",
  season: "2024-25",
  date: "2025-08-15T00:00:00Z",

  title: "Fin de la temporada",
  announcementType: "call-up",
  category: "U14M",

  description: [
    "Ha sido un año brutal, deseando de comenzar de nuevo",
  ],

  references: [],
});

