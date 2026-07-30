import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_2026_07_21_season_summary: Announcement = AnnouncementSchema.parse({
  id: "S56-season-summary",
  type: "announcement",
  season: "2025-26",
  date: "2026-07-21T00:00:00Z",

  title: "Resumen de la temporada 2025-26",
  announcementType: "milestone",
  category: "U15M",

  venue: venues["caja-magica"],

  description: [
    "Tercera convocatoria de preparación del Campeonato de España de Selecciones Autonómicas 3x3",
    "En ésta ya no estamos convocados",
    "Lo más doloroso, es que van 3 del Madrid, cuando todo el mundo pensaba que el club vetaba estos campeonatos",
    "Y el cuarto convocado... pues tampoco es de nuestro agrado",
    "Pero bueno, no tenemos poder de decisión, lo que hay que hacer es seguir trabajando, mejorando y dándolo todo. Es lo que está en nuestra mano",
  ],

  schedule: [
    {
      label: "Damos por concluida la temporada",
      date: "2026-07-21T00:00:00Z",
    },
  ],

  references: [
    {
      type: "article",
      label: "Resumen de la temporada 2025-26",
      url: "https://www.fbm.es/noticia-73-13472/resumen-de-la-temporada-202526",
    },
    {
      type: "document",
      label: "Resumen",
      url: "https://www.fbm.es/descargar?seccion=documentos&id=1182&delegacion=1",
    },
    {
      type: "article",
      label: "Temporadas anteriores",
      url: "https://fbm.es/documentos-119/Actualidad/Revistas-Resumen-temporada",
    },
  ],

});
