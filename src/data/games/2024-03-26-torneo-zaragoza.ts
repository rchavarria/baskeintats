import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {teams} from "../teams.ts";
import {venues} from "../venues.ts";

export const announcement_2024_03_26_torneo_zaragoza: Announcement = AnnouncementSchema.parse({
  id: "S34-torneo-zaragoza",
  type: "announcement",
  season: "2023-24",
  date: "2024-03-26T00:00:00Z",

  title: "Torneo Zaragoza",
  announcementType: "tournament",
  category: "U14M",

  venue: venues["fuentes"],

  description: [
    "Torneo acompañando al equipo infantil de 2010 (un año mayores) en Zaragoza",
  ],

  schedule: [
    {
      label: "Grupos - J1",
      date: "2024-03-28T14:30:00Z",
      opponent: teams["moncayo"].name,
    },
    {
      label: "Grupos - J2",
      date: "2024-03-29T19:00:00Z",
      opponent: teams["sp-burgos"].name,
    },
    {
      label: "Grupos - J3",
      date: "2024-03-30T10:00:00Z",
      opponent: teams["zaragoza"].name,
    },
    {
      label: "Semis",
      date: "2024-03-30T16:00:00Z",
    },
    {
      label: "Final",
      date: "2024-03-31T11:00:00Z",
    },
  ],

  references: [
    {
      type: "social-media",
      label: "Redes sociales del organizador, MHL Sports",
      url: "https://x.com/mhlsports",
    },
    {
      type: "article",
      label: "Anuncio del torneo de mano de la Federación Aragonesa de Baloncesto",
      url: "https://fabasket.com/torneos-semana-santa-2/",
    },
  ],
});

