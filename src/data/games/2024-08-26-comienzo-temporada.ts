import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";

export const announcement_2024_08_26_comienzo_temporada: Announcement = AnnouncementSchema.parse({
  id: "S45-comienzo-temporada",
  type: "announcement",
  season: "2024-25",
  date: "2024-08-26T00:00:00Z",

  title: "Arranca la Temporada",
  announcementType: "milestone",
  category: "U14M",

  description: [
    "Primer entrenamiento del equipo, casi todos los jugadores se reúnen con el entrenador",
    "Estas dos semanas prepararán un torneo de pretemporada en Figueres, el Torneig Nord!",
  ],

  references: [],
});

