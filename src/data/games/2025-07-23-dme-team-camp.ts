import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_2025_07_23_dme_team_camp: Announcement = AnnouncementSchema.parse({
  id: "S45-dme-team-camp",
  type: "announcement",
  season: "2024-25",
  date: "2025-07-23T00:00:00Z",

  title: "DME Team Camp",
  announcementType: "camp",
  category: "U14M",

  venue: venues["dme"],

  description: [
    "Comienza el campamento en EEUU en la academia DME",
    "⛹️ Van dos grupos desde España, uno de Mallorca y otro de Madrid",
  ],

  schedule: [
    {
      label: "Inicio del campamento",
      date: "2025-07-23T00:00:00Z",
    },
    {
      label: "End of Summer Slam",
      date: "2025-07-26T00:00:00Z",
    },
    {
      label: "🎆 Visita al parque de atracciones de Universal Studios",
      date: "2025-07-28T00:00:00Z",
    },
    {
      label: "⚾ Visita a los Daytona Tortugas",
      date: "2025-07-29T00:00:00Z",
    },
    {
      label: "Final del campamento",
      date: "2025-08-04T00:00:00Z",
    },
  ],

  references: [
    {
      type: "social-media",
      label: "Mensaje de bienvenida de la academia",
      url: "https://www.instagram.com/p/DMiIml-yrCW",
    },
    {
      type: "web",
      label: "Daytona Tortugas",
      url: "https://en.wikipedia.org/wiki/Daytona_Tortugas",
    },
  ],
});
