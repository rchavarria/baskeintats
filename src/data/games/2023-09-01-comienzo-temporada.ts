import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";

export const announcement_2023_09_01_comienzo_temporada: Announcement = AnnouncementSchema.parse({
  id: "S34-comienzo-temporada",
  type: "announcement",
  season: "2023-24",
  date: "2023-09-01T00:00:00Z",

  title: "Arranca la Temporada",
  announcementType: "milestone",
  category: "U13M",

  description: [
    "Comenzamos la temporada 2023/24 en un nuevo equipo, el Club de Baloncesto Alcobendas",
    "Y con una nueva entrenadora, claro, Tamara Morgado",
  ],

  references: [],
});

