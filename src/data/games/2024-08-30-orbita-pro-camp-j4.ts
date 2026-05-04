import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";

export const announcement_2024_08_30_orbita_pro_camp_4: Announcement = AnnouncementSchema.parse({
  id: "S45-orbita-pro-camp-j4",
  type: "announcement",
  season: "2024-25",
  date: "2024-08-30T00:00:00Z",

  title: "Campamento: Órbita Pro Camp - Jornada 4",
  announcementType: "camp",
  category: "U14M",

  description: [
    "Pasamos el Spacing trabajado toda la semana al 3x3 y 4x4",
    "🏫 Acabamos el día con paseo por la ciudad de Albacete",
  ],

  references: [
    {
      type: "social-media",
      label: "Anuncio de la FBCLM",
      url: "https://x.com/fbclm/status/1829445641430249604",
    },
  ],
});

