import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";

export const announcement_2025_07_22_fbm_final_temporada: Announcement = AnnouncementSchema.parse({
  id: "S45-fbm-final-temporada",
  type: "announcement",
  season: "2024-25",
  date: "2025-07-22T00:00:00Z",

  title: "Liga Ahorramás - Resumen del año",
  announcementType: "milestone",
  category: "U14M",

  description: [
    "La Federación de Baloncesto de Madrid ha publicado el resumen de la temporada 2024/25",
  ],

  references: [
    {
      type: "article",
      label: "Resumen de la temporada 2024/25",
      url: "https://fbm.es/noticia-123-12774/resumen-de-la-temporada-202425",
    },
    {
      type: "document",
      label: "Informe del resumen",
      url: "https://www.fbm.es/descargar?seccion=noticia&id=5162&delegacion=1",
    },
    {
      type: "video",
      label: "La temporada en vídeo",
      url: "https://www.youtube.com/watch?v=4FLbQf_LC9M",
    },
  ],
});

