import type { Announcement } from "../../model/AnnouncementSchema.ts";
import { AnnouncementSchema } from "../../model/AnnouncementSchema.ts";
import { venues } from "../venues.ts";

export const announcement_2026_08_24_season_start: Announcement = AnnouncementSchema.parse({
  id: "S67-season-start",
  type: "announcement",
  season: "2026-27",
  date: "2026-08-24T00:00:00Z",

  title: "Comienzo de la temporada 2026-27",
  announcementType: "milestone",
  category: "U16M",

  venue: venues["antela"],

  description: [
    "Comenzamos nueva temporada, hoy, primer entrenamiento",
    "No podemos asistir al entreno, pero hoy comienza todo",
    "Debería ser una pedazo de temporada, muy ilusionante, con muchas ganas de competir",
    "Pero el equipo se ha quedado hecho mierda, se han ido muchos, y vamos a sufrir bastante",
    "Veremos cómo se va desarrollando, pero la primera fase huele a mucho dolor, y si va bien, la segunda va a ser incluso peor",
    "La única ilusión de esta temporada es el CESA, con la madrileña, pero está complicadísimo ser seleccionado",
  ],

  schedule: [
    {
      label: "Arrnca la nueva temporada",
      date: "2026-08-24T00:00:00Z",
    },
  ],

  references: [
    {
      type: "article",
      label: "Temporadas anteriores",
      url: "https://fbm.es/documentos-119/Actualidad/Revistas-Resumen-temporada",
    },
  ],
});
