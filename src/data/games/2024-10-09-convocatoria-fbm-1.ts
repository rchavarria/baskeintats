import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_2024_10_09_convocatoria_fbm_1: Announcement = AnnouncementSchema.parse({
  id: "S45-convocatoria-fbm-1",
  type: "announcement",
  season: "2024-25",
  date: "2024-10-09T00:00:00Z",

  title: "Federación de Baloncesto de Madrid - Convocatoria 1",
  announcementType: "call-up",
  category: "U14M",

  venue: venues["caja-magica"],

  description: [
    "🏀 La Federación de Baloncesto de Madrid nos convoca para asistir a las concentraciones de la preselección infantil",
    "La convocatoria consta de varios entrenos, todos en el mismo lugar",
  ],

  schedule: [
    {
      label: "Primer entreno",
      date: "2024-10-09T15:45:00Z",
    },
    {
      label: "Segundo entreno",
      date: "2024-10-10T17:45:00Z",
    },
    {
      label: "Y tercer entreno",
      date: "2024-10-11T13:45:00Z",
    },
    {
      label: "🏀 ¡Partido!",
      date: "2024-10-13T15:45:00Z",
    },
  ],

  references: [
    {
      type: "article",
      label: "Nota de prensa de la convocatoria",
      url: "https://fbm.es/noticia-123-12157/concentraci%C3%B3n-de-las-preselecciones-madrile%C3%B1as#IM",
    },
    {
      type: "article",
      label: "Las selecciones se ponen en marcha",
      url: "https://www.fbm.es/noticia-88-12160/las-selecciones-se-ponen-en-marcha",
    },
  ],
});

