import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_2025_12_17_convocatoria_fbm_1: Announcement = AnnouncementSchema.parse({
  id: "S56-convocatoria-fbm-1",
  type: "announcement",
  season: "2025-26",
  date: "2025-12-17T00:00:00Z",

  title: "Convocatoria",
  announcementType: "call-up",

  venue: venues["norte"],

  description: [
    "La convocatoria consta de varios entrenos, todos en el mismo lugar",
    "Para rematar con unos amistosos en Salamanca",
  ],

  schedule: [
    {
      date: "2025-12-22T18:45:00Z",
    },
    {
      date: "2025-12-23T18:45:00Z",
    },
    {
      date: "2025-12-26T18:45:00Z",
    },
    {
      label: "¡Selección de Canarias!",
      date: "2025-12-27T16:30:00Z",
    },
    {
      label: "¡Castilla y León!",
      date: "2025-12-28T00:00:00Z",
    },
  ],

  references: [
    {
      type: "article",
      label: "Nota de prensa de la convocatoria",
      url: "https://www.fbm.es/noticia-87-12994/concentraciones-cadete-e-infantil-de-primer-a%C3%B1o#CM",
    },
    {
      type: "article",
      label: "La federación de Castilla y León anuncia el torneo",
      url: "https://www.fbcyl.es/noticias/2136/Salamanca-acoge-el-Torneo-de-Selecciones-Auton%C3%B3micas-infantil-y-cadete-masculinas",
    },
    {
      type: "article",
      label: "El club recompensa el esfuerzo",
      url: "https://x.com/cbalcobendas/status/2001980957205918111",
    },
  ],
});

