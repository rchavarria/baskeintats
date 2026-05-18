import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_2025_07_27_dme_team_camp_eoss_summary: Announcement = AnnouncementSchema.parse({
  id: "S56-dme-team-camp-eoss-summary",
  type: "announcement",
  season: "2024-25",
  date: "2025-07-27T00:00:00Z",

  title: "End of Summer Slam - Summary",
  announcementType: "tournament",
  category: "U14M",

  venue: venues["orange"],

  description: [
    "🤩 Vencedores del evento (en su categoría)",
  ],

  schedule: [],

  references: [
    {
      type: "photo",
      label: "DME Academy publica el triunfo",
      url: "https://www.instagram.com/p/DMvAhRGuqt3/?img_index=1",
    },
    {
      type: "video",
      label: "Algunas imágenes de los partidos",
      url: "https://www.instagram.com/p/DMp2dsTxa6_/",
    },
    {
      type: "web",
      label: "Lista de partidos (enlaces a BallerTV)",
      url: "https://basketball.exposureevents.com/225428/end-of-summer-slam/teams/dme-international-spain?divisionteamid=4647707",
    },
    {
      type: "social-media",
      label: "Anuncio del torneo EOSS",
      url: "https://www.instagram.com/p/DMdLc2gMmZ9",
    },
  ],
});
