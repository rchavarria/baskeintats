import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";

export const announcement_2024_12_23_convocatoria_fbm_final: Announcement = AnnouncementSchema.parse({
  id: "S45-convocatoria-fbm-final",
  type: "announcement",
  season: "2024-25",
  date: "2024-12-23T00:00:00Z",

  title: "Federación de Baloncesto de Madrid - Convocatoria final",
  announcementType: "call-up",
  category: "U14M",

  description: [
    "🏀 Publicación de la selección",
    "Publicación de los integrantes de la Selección Infantil masculina 2025 que participarán en el Campeonato de España de Selecciones Autonómicas, CESA 2025",
  ],

  references: [
    {
      type: "article",
      label: "Selección Infantil masculina 2025",
      url: "https://fbm.es/noticia-123-12286/selecci%C3%B3n-infantil-masculina-2025",
    },
    {
      type: "photo",
      label: "Presentación de las selecciones infantiles",
      url: "https://www.flickr.com/photos/fbmadrid/54222270964/in/album-72177720322740795",
    },
  ],
});

