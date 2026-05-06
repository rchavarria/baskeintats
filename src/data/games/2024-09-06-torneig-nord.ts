import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {teams} from "../teams.ts";
import {venues} from "../venues.ts";

export const announcement_2024_09_06_torneig_nord: Announcement = AnnouncementSchema.parse({
  id: "S45-torneig-nord",
  type: "announcement",
  season: "2024-25",
  date: "2024-09-06T00:00:00Z",

  title: "Torneig Nord",
  announcementType: "tournament",
  category: "U14M",

  venue: venues["roser-llop"],

  description: [
    "Torneo de pretemporada muy importante para el equipo, ya que participarán equipos ACB como el Barça, Bàsquet Manresa, Juventut Badalona o Valencia Basket",
    "Es una experiencia excepcional que nos permitirá competir al máximo nivel",
    "Se celebrará en Figueres, Girona, y alrededores. Nos alojaremos en Empuria Brava",
  ],

  schedule: [
    {
      label: "Grupos - J1",
      date: "2024-09-06T09:45:00Z",
      opponent: teams["sabadell"].name,
    },
    {
      label: "Grupos - J2",
      date: "2024-09-07T09:45:00Z",
      opponent: teams["joventut"].name,
    },
    {
      label: "Semis",
      date: "2024-09-07T17:15:00Z",
    },
    {
      label: "Final",
      date: "2024-09-08T08:45:00Z",
    },
  ],

  references: [
    {
      type: "photo",
      label: "Instagram del torneo",
      url: "https://www.instagram.com/torneignord",
    },
    {
      type: "social-media",
      label: "Anuncio de los 12 equipos que competirán en el torneo",
      url: "https://x.com/TorneigNord/status/1825856171338526732",
    },
  ],
});

