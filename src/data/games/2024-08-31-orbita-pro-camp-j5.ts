import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";

export const announcement_2024_08_31_orbita_pro_camp_5: Announcement = AnnouncementSchema.parse({
  id: "S45-orbita-pro-camp-j5",
  type: "announcement",
  season: "2024-25",
  date: "2024-08-31T00:00:00Z",

  title: "Campamento: Órbita Pro Camp - Jornada 5",
  announcementType: "camp",
  category: "U14M",

  description: [
    "Finaliza el Campus",
  ],

  references: [
    {
      type: "article",
      label: "La FBCLM escribe sobre cómo ha ido el campamento Órbita Pro Camp",
      url: "https://fbclm.net/campusprocamp-albacete-tercera-edicion-de-un-campus-que-crecio-en-intensidad-conocimiento-y-trabajo-diario-en-nuevos-conceptos/",
    },
    {
      type: "photo",
      label: "Revívelo con todas las fotos del Campus Órbita Pro Camp",
      url: "https://www.flickr.com/photos/fbclm/sets/72177720319881180/",
    },
  ],
});

