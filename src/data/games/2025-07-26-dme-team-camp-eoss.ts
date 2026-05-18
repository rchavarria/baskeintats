import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_2025_07_26_dme_team_camp_eoss: Announcement = AnnouncementSchema.parse({
  id: "S56-dme-team-camp-eoss",
  type: "announcement",
  season: "2024-25",
  date: "2025-07-26T00:00:00Z",

  title: "End of Summer Slam",
  announcementType: "tournament",
  category: "U14M",

  venue: venues["orange"],

  description: [
    "Torneo enorme que se celebra en el Orange County Convention Center",
    "Un lugar espectacular con 21 pistas",
    "⛹️ Compiten en la categoría 9th Grade, Division III (echar un vistazo a la lista de partidos)",
  ],

  schedule: [],

  references: [
    {
      type: "web",
      label: "Lista de partidos (con enlaces a BallerTV, plataforma de pago para ver los partidos)",
      url: "https://basketball.exposureevents.com/225428/end-of-summer-slam/teams/dme-international-spain?divisionteamid=4647707",
    },
    {
      type: "social-media",
      label: "Anuncio del torneo EOSS",
      url: "https://www.instagram.com/p/DMdLc2gMmZ9",
    },
    {
      type: "video",
      label: "Coach Joan nos lo presenta",
      url: "https://www.instagram.com/p/DMm23Wjuz5q/",
    },
  ],
});
