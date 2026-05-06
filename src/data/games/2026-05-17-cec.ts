import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_2026_05_17_cec: Announcement = AnnouncementSchema.parse({
  id: "S56-cec",
  type: "announcement",
  season: "2025-26",
  date: "2026-05-17T00:00:00Z",

  title: "Campeonato de España de Clubes",
  announcementType: "tournament",
  category: "U16M",

  venue: venues["linea"],

  description: [
    "Campeonato cadete masculino",
    "De acuerdo, no vamos nosotros, pero es un evento en toda la regla para este año y el siguiente",
    "Para el año que viene es un objetivo claro, complicado, pero objetivo a perseguir",
  ],

  schedule: [
    {
      label: "Inicio fase de grupos",
      date: "2026-05-17T08:30:00Z",
    },
    {
      label: "Inicio eliminatorias",
      date: "2026-05-20T08:30:00Z",
    },
    {
      label: "Final",
      date: "2026-05-23T11:30:00Z",
    },
  ],

  references: [
    {
      type: "social-media",
      label: "Anuncio del sorteo de grupos",
      url: "https://x.com/BaloncestoESP/status/2051647739260235784",
    },
    {
      type: "web",
      label: "El CEC Cadete 2026 ya tiene calendario",
      url: "https://www.feb.es/2026/5/5/baloncesto/cadete-2026-tiene-grupos-calendario/104784.aspx",
    },
    {
      type: "document",
      label: "Sorteo cadete masculino",
      url: "https://www.feb.es/Documentos/Archivo/upload/SorteoClubesCadeteMasculino26.pdf",
    },
  ],
});
