import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_2026_07_06_pindown_camp: Announcement = AnnouncementSchema.parse({
  id: "S56-pindown-camp",
  type: "announcement",
  season: "2025-26",
  date: "2025-07-06T00:00:00Z",

  title: "Campus Pindown",
  announcementType: "camp",
  category: "U15M",

  venue: venues["ideo"],

  description: [
    "Campus Élite Pindown",
    "Es como un campamento para externos, de gran nivel, pero lo completan con chavales de la zona",
    "Sobre todo, son chavales de 2010, pero hay hasta de canasta pequeña",
    "Va con otros amigos de Alcobendas",
    "Y luego también van otros de la liga: Rubianes...",
    "Y por sorpresa aparecieron más compañeros/rivales: Rupérez, Vidal...",
    "Pindown se porta muy bien, y nos deja hacer algunas actividades por la tarde con ellos",
  ],

  schedule: [
    {
      label: "Inicio del campamento",
      date: "2026-07-06T00:00:00Z",
    },
    {
      label: "Primer día, comida, y entreno por la tarde",
      date: "2026-07-06T00:00:00Z",
    },
    {
      label: "Comida con amigo y piscina",
      date: "2026-07-07T00:00:00Z",
    },
    {
      label: "Solo por la mañana",
      date: "2026-07-08T00:00:00Z",
    },
    {
      label: "Competiciones por la tarde",
      date: "2026-07-09T00:00:00Z",
    },
    {
      label: "Fin del campamento",
      date: "2026-07-10T00:00:00Z",
    },
  ],

  references: [
    {
      type: "social-media",
      label: "Cuenta oficial de Pindown",
      url: "https://www.instagram.com/pindownsports/",
    },
  ],
});
