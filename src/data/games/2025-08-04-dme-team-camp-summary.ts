import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_2025_08_04_dme_team_camp_summary: Announcement = AnnouncementSchema.parse({
  id: "S45-dme-team-camp-summary",
  type: "announcement",
  season: "2024-25",
  date: "2025-08-04T00:00:00Z",

  title: "DME Team Camp - Summary",
  announcementType: "camp",
  category: "U14M",

  venue: venues["dme"],

  description: [
    "Todo lo bueno se acaba, y este campamento también 😭",
    "⛹️ Con el final de este campamento, cerramos temporada y damos paso a la siguiente",
  ],

  schedule: [],

  references: [
    {
      type: "social-media",
      label: "Cierre del campamento, acompañado de algunas imágenes",
      url: "https://www.instagram.com/p/DM5ajl2suAz/?img_index=4",
    },
  ],
});
