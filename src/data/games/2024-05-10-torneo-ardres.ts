import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {teams} from "../teams.ts";
import {venues} from "../venues.ts";

export const announcement_2024_05_10_ardres: Announcement = AnnouncementSchema.parse({
  id: "S34-torneo-ardres",
  type: "announcement",
  season: "2023-24",
  date: "2024-03-26T00:00:00Z",

  title: "Torneo de Ardres (Francia)",
  announcementType: "tournament",
  category: "U14M",

  venue: venues["ardres"],

  description: [
    "Torneo internacional que la Federación de Madrid nos convoca. No sabíamos nada acerca del torneo, pero es una oportunidad increíble, tanto de participar en un torneo de este tipo como de ir con la selección madrileña",
    "A los pocos días de terminar el torneo de Salou, todavía con el tobillo dolorido, nos llega este notición, la convocatoria para jugar este torneo. ¡Hay que darlo todo!",
  ],

  schedule: [
    {
      label: "Grupos - J1",
      date: "2024-05-18T14:20:00Z",
      opponent: teams["krvavec"].name,
    },
    {
      label: "Grupos - J2",
      date: "2024-05-18T18:00:00Z",
      opponent: teams["ban-e-lot"].name,
    },
    {
      label: "Grupos - J3",
      date: "2024-05-19T07:50:00Z",
      opponent: teams["pesaro"].name,
    },
    {
      label: "Grupos - J4",
      date: "2024-05-19T09:30:00Z",
      opponent: teams["guyane"].name,
    },
    {
      label: "Semis",
      date: "2024-05-19T13:40:00Z",
      opponent: teams["mexico"].name,
    },
    {
      label: "Final",
      date: "2024-05-20T13:30:00Z",
      opponent: teams["certified-athletes"].name,
    },
  ],

  references: [
    {
      type: "web",
      label: "Página oficial del torneo",
      url: "https://bcardres.org/tihs2024",
    },
    {
      type: "social-media",
      label: "Redes sociales del organizador, Club de Baloncesto de Ardres",
      url: "https://www.facebook.com/bcardres",
    },
    {
      type: "article",
      label: "Lista de convocados por la Federación de Baloncesto de Madrid",
      url: "https://fbm.es/noticia-123-11859/convocados-para-el-torneo-de-ardres",
    },
    {
      type: "video",
      label: "Canal de YouTube, TIHS Ardres",
      url: "https://www.youtube.com/@TIHS_ARDRES",
    },
  ],
});

