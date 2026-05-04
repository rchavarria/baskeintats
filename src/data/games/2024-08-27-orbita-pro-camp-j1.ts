import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";

export const announcement_2024_08_27_orbita_pro_camp_j1: Announcement = AnnouncementSchema.parse({
  id: "S45-orbita-pro-camp-j1",
  type: "announcement",
  season: "2024-25",
  date: "2024-08-27T00:00:00Z",

  title: "Campamento: Órbita Pro Camp - Jornada 1",
  announcementType: "camp",
  category: "U14M",

  description: [
    "Campamento de baloncesto para preparar la temporada con los compañeros de la selección de Castilla la Mancha",
    "Hasta el sábado 31 Einar estará interno en residencia de estudiantes Benjamín Palencia, en Albacete",
  ],

  references: [
    {
      type: "web",
      label: "Órbita Pro Camp 2024",
      url: "https://fbclm.net/campusprocamp-2024-jota-cuspinera-dirigira-la-parcela-deportiva-del-campus-que-se-celebrara-en-albacete/",
    },
  ],
});

