import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_2024_11_07_convocatoria_fbm_2: Announcement = AnnouncementSchema.parse({
  id: "S45-convocatoria-fbm-2",
  type: "announcement",
  season: "2024-25",
  date: "2024-11-07T00:00:00Z",

  title: "Federación de Baloncesto de Madrid - Convocatoria 2",
  announcementType: "call-up",
  category: "U14M",

  venue: venues["caja-magica"],

  description: [
    "🏀 2ª convocatoria de la FBM",
    "Nos llaman para asistir a las concentraciones de la preselección infantil masculina",
    "Consta de varios entrenos, en distintos lugares, y finaliza con la celebración del XV Torneo Fundación Leucemia y Linfoma",
  ],

  schedule: [
    {
      label: "Primer entreno",
      date: "2024-11-18T17:15:00Z",
    },
    {
      label: "Segundo entreno",
      date: "2024-11-20T17:15:00Z",
    },
    {
      label: "Y tercero",
      date: "2024-11-21T16:45:00Z",
    },
    {
      label: "🏆 Torneo FLL",
      date: "2024-11-22T16:00:00Z",
    },
  ],

  references: [
    {
      type: "article",
      label: "Nota de prensa de la convocatoria",
      url: "https://www.fbm.es/noticia-88-12200/selecciones-infantiles-para-el-torneo-fll",
    },
    {
      type: "web",
      label: "XV Torneo Fundación Leucemia y Linfoma",
      url: "https://fbm.es/noticias-96/En-Juego/Cadete-FLL",
    },
  ],
});

