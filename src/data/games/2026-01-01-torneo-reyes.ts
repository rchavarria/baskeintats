import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_2026_01_01_torneo_reyes: Announcement = AnnouncementSchema.parse({
  id: "S56-torneo-reyes",
  type: "announcement",
  season: "2025-26",
  date: "2026-01-01T00:00:00Z",

  title: "I Torneo de Reyes",
  emoji: "🏆",

  category: "U15M",

  venue: venues["antela"],

  dateRange: "Del 2 al 4 de enero de 2026",

  description: [
    "Torneo cadete de primer año organizado por el club donde han invitado a equipos U15 de muy alto nivel, sobre todo de Madrid",
    "El torneo se disputará entre 6 equipos, divididos en 2 grupos: Laso, Rozas y Mataró por un lado; Alcobendas, Fuenlabrada y Zentro por otro",
  ],

  schedule: [
    {
      date: "Viernes, 2 de enero de 2026",
      time: "10:30",
    },
    {
      date: "Viernes, 2 de enero de 2026",
      time: "18:30",
    },
    {
      date: "Sábado, 3 de enero de 2026",
      time: "18:00 | 20:30",
    },
    {
      date: "Domingo, 4 de enero de 2026",
      time: "10:30 | 12:30",
    },
  ],

  references: [
    {
      icon: "🎥",
      label: "Todos los partidos se retransmitirán por el canal de CB Alcobendas",
      url: "https://www.youtube.com/@ClubBaloncestoAlcobendas",
    },
    {
      icon: "📱",
      label: "Anuncio en del torneo",
      url: "https://www.instagram.com/p/DS2YdVzjAoo",
    },
  ],
});
