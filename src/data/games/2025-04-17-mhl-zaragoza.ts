import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const announcement_2025_04_17_mhl_zaragoza: Announcement = AnnouncementSchema.parse({
  id: "S45-mhl-zaragoza",
  type: "announcement",
  season: "2024-25",
  date: "2025-04-17T00:00:00Z",

  title: "MHL Zaragoza",
  announcementType: "tournament",
  category: "U14M",

  venue: venues["alberto-maestro"],

  description: [
    "Torneo celebrado en Zaragoza durante la Semana Santa, reúne a cadetes e infantiles, tanto masculino como femenino",
    "Nos centraremos en la categoría infantil masculina, donde participarán 16 clubes",
    "Hay 4 grupos de 4 equipos. Después de la fase de grupos, comienzan los cuartos de final, donde el primero de un grupo se cruza con el segundo de otro grupo",
  ],

  schedule: [
    {
      label: "Grupos - J1",
      date: "2025-04-17T15:45:00Z",
      opponent: teams["torrelodones"].name,
    },
    {
      label: "Grupos - J2",
      date: "2025-04-18T10:45:00Z",
      opponent: teams["alicante"].name,
    },
    {
      label: "Grupos - J3",
      date: "2025-04-18T17:00:00Z",
      opponent: teams["tarragona"].name,
    },
    {
      label: "Cuartos",
      date: "2025-04-19T07:00:00Z",
    },
    {
      label: "Semis",
      date: "2025-04-19T17:00:00Z",
    },
    {
      label: "Final",
      date: "2025-04-20T09:00:00Z",
    },
  ],

  references: [
    {
      type: "web",
      label: "Toda la documentación del torneo",
      url: "https://semanasanta.mhlsports.com/es/section/el-torneo?utm_source=pocket_saves",
    },
    {
      type: "document",
      label: "Calendario (pdf)",
      url: "https://cdn.leverade.com/files/CYaAo8iVvm.pdf",
    },
    {
      type: "photo",
      label: "Galería de fotos",
      url: "https://www.flickr.com/photos/mhlsports/albums/72177720325171969/with/54464374646",
    },
  ],
});

