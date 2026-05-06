import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_2024_12_10_convocatoria_fbm_3: Announcement = AnnouncementSchema.parse({
  id: "S45-convocatoria-fbm-3",
  type: "announcement",
  season: "2024-25",
  date: "2024-12-10T00:00:00Z",

  title: "Federación de Baloncesto de Madrid - Convocatoria 3",
  announcementType: "call-up",
  category: "U14M",

  venue: venues["caja-magica"],

  description: [
    "🏀 3ª convocatoria de la FBM",
    "Llegamos a la recta final",
    "El Área Técnica ha anunciado los nombres de los jugadores y jugadoras que estarán en la recta final de la preparación para los Campeonatos de España de Selecciones Autonómicas de categorías Infantil y Cadete, previstos del 3 al 7 de enero en la provincia de Huelva",
    "Al final son más días de los previamente anunciados, básicamente toda esta semana",
  ],

  schedule: [
    {
      label: "Comienzo de los entrenamientos",
      date: "2024-12-10T18:15:00Z",
    },
  ],

  references: [
    {
      type: "article",
      label: "Nota de prensa de la convocatoria",
      url: "https://www.fbm.es/noticia-88-12249/selecciones-infantiles-y-cadetes-para-los-campeonatos-de-espa%C3%B1a",
    },
    {
      type: "photo",
      label: "Sesión de fotos oficiales",
      url: "https://x.com/FBMadrid/status/1867888041442034002",
    },
  ],
});

