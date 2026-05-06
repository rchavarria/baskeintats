import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_2024_10_02_convocatoria_fbclm_2: Announcement = AnnouncementSchema.parse({
  id: "S45-convocatoria-fbclm-2",
  type: "announcement",
  season: "2024-25",
  date: "2024-10-02T00:00:00Z",

  title: "Federación de Baloncesto de Castilla-la Mancha - Convocatoria 2",
  announcementType: "call-up",
  category: "U14M",

  venue: venues["herencia"],

  description: [
    "🏀 La FBCLM nos convoca para asistir a las concentraciones de la preselección infantil",
    "A esta convocatoria ya no podemos asistir, por calendario de la Liga Ahorramás",
    "Así que nuestro viaje con ellos termina aquí"
  ],

  schedule: [
    {
      label: "Segundo entreno",
      date: "2024-10-06T09:30:00Z",
    },
  ],

  references: [
    {
      type: "article",
      label: "Nota de prensa de la segunda convocatoria",
      url: "https://fbclm.net/seleccionesfbclm-segunda-concentracion-de-preselecciones-regionales-informacion-importante/",
    },
  ],
});

