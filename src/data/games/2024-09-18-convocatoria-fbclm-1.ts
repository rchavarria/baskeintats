import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_2024_09_18_convocatoria_fbclm_1: Announcement = AnnouncementSchema.parse({
  id: "S45-convocatoria-fbclm-1",
  type: "announcement",
  season: "2024-25",
  date: "2024-09-18T00:00:00Z",

  title: "Federación de Baloncesto de Castilla-la Mancha - Convocatoria 1",
  announcementType: "call-up",
  category: "U14M",

  venue: venues["criptana"],

  description: [
    "🏀 La FBCLM nos convoca para asistir a las concentraciones de la preselección infantil",
  ],

  schedule: [
    {
      label: "Un primer entreno",
      date: "2024-09-22T09:30:00Z",
    },
  ],

  references: [
    {
      type: "article",
      label: "Nota de prensa de la convocatoria",
      url: "https://fbclm.net/seleccionesfbclm-nota-de-prensa-preselecciones-regionales-de-clm-infantil-y-cadete/",
    },
  ],
});

