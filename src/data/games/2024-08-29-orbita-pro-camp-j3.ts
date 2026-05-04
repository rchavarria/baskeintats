import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";

export const announcement_2024_08_29_orbita_pro_camp_3: Announcement = AnnouncementSchema.parse({
  id: "S45-orbita-pro-camp-j3",
  type: "announcement",
  season: "2024-25",
  date: "2024-08-29T00:00:00Z",

  title: "Campamento: Órbita Pro Camp - Jornada 3",
  announcementType: "camp",
  category: "U14M",

  description: [
    "El tercer día estará focalizado en recuperaciones en defensa y normas de Spacing junto con charla sobre scouting con el segundo entrenador del Albacete, Rubén Córcoles",
  ],

  references: [
    {
      type: "social-media",
      label: "Anuncio de la FBCLM",
      url: "https://x.com/fbclm/status/1829089120297062856",
    },
  ],
});

