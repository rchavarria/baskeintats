import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";

export const announcement_2025_08_26_comienzo_temporada: Announcement = AnnouncementSchema.parse({
  id: "S56-comienzo-temporada",
  type: "announcement",
  season: "2025-26",
  date: "2025-08-26T00:00:00Z",

  title: "Arranca la Temporada",
  announcementType: "milestone",
  category: "U15M",

  description: [
    "Primer entrenamiento del equipo, casi todos los jugadores se reúnen con el entrenador",
    "Estos primeros entrenamientos lo hacen jugadores del 2010 y del 2011, hasta que vayan viniendo el resto de compañeros",
  ],

  references: [
    {
      type: "article",
      label: "Noticia sobre el arranque de la temporada",
      url: "https://www.fbm.es/noticia-104-12825/liga-ahorramas-arranca-un-nuevo-curso",
    },
  ],
});

