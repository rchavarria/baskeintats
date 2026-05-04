import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";

export const announcement_2024_08_28_orbita_pro_camp_2: Announcement = AnnouncementSchema.parse({
  id: "S45-orbita-pro-camp-j2",
  type: "announcement",
  season: "2024-25",
  date: "2024-08-28T00:00:00Z",

  title: "Campamento: Órbita Pro Camp - Jornada 2",
  announcementType: "camp",
  category: "U14M",

  description: [
    "Segundo día de entrenamientos dirigido por Jota Cuspinera con trabajo defensivo en el 1x1 y ataque y contraataque con normas de spacing",
  ],

  references: [
    {
      type: "web",
      label: "Jota Cuspinera",
      url: "https://www.basketballinsights.com/",
    },
    {
      type: "social-media",
      label: "Anuncio de la FBCLM",
      url: "https://x.com/fbclm/status/1828718079083258099",
    },
    {
      type: "photo",
      label: "Alguna que otra foto",
      url: "https://www.instagram.com/p/C_N8_7OK247/?img_index=3",
    },
  ],
});

