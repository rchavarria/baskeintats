import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";

export const game_2026_01_01_torneo_reyes: Announcement = AnnouncementSchema.parse({
  id: "S56-torneo-reyes",
  type: "announcement",
  season: "2025-26",
});
