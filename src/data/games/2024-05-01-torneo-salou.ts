import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {teams} from "../teams.ts";
import {venues} from "../venues.ts";

export const announcement_2024_05_01_salou: Announcement = AnnouncementSchema.parse({
  id: "S34-torneo-salou",
  type: "announcement",
  season: "2023-24",
  date: "2024-03-26T00:00:00Z",

  title: "Torneo Salou",
  announcementType: "tournament",
  category: "U14M",

  venue: venues["salou"],

  description: [
    "Torneo con nuestro equipo de 2011, pero que jugará contra equipos de 2010, buscando rivales de nuestro nivel",
    "Los partidos tienen 4 cuartos, pero de menos tiempo, y a tiempo corrido. Los partidos son muy cortos",
  ],

  schedule: [
    {
      label: "Eliminatorias - J1",
      date: "2024-05-03T09:00:00Z",
      opponent: teams["humanitas"].name,
    },
    {
      label: "Eliminatorias - J2",
      date: "2024-05-04T08:00:00Z",
      opponent: teams["salvador"].name,
    },
    {
      label: "Eliminatorias - J3",
      date: "2024-05-05T10:00:00Z",
      opponent: teams["rozas"].name,
    },
  ],

  references: [
    {
      type: "social-media",
      label: "Redes sociales del organizador, MHL Sports",
      url: "https://x.com/mhlsports",
    },
  ],
});

