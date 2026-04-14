import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_2026_01_01_torneo_reyes: Announcement = AnnouncementSchema.parse({
  id: "S56-torneo-reyes",
  type: "announcement",
  season: "2025-26",
  date: "2026-01-01T00:00:00Z",

  title: "I Torneo de Reyes",
  announcementType: "tournament",

  category: "U15M",

  venue: venues["antela"],

  description: [
    "Torneo cadete de primer año organizado por el club donde han invitado a equipos U15 de muy alto nivel, sobre todo de Madrid",
    "El torneo se disputará entre 6 equipos, divididos en 2 grupos: Laso, Rozas y Mataró por un lado; Alcobendas, Fuenlabrada y Zentro por otro",
  ],

  schedule: [
    {
      label: "Fase de grupos - J1",
      date: "2026-01-02T10:30:00Z",
      opponent: "Fuenlabrada",
    },
    {
      label: "Fase de grupos - J2",
      date: "2026-01-02T18:30:00Z",
      opponent: "Zentro",
    },
    {
      label: "Semifinal #1",
      date: "2026-01-03T18:00:00Z",
    },
    {
      label: "Semifinal #2",
      date: "2026-01-03T20:30:00Z",
    },
    {
      label: "3º-4º Puesto",
      date: "2026-01-04T10:30:00Z",
    },
    {
      label: "Final",
      date: "2026-01-04T12:30:00Z",
    },
  ],

  references: [
    {
      type: "video",
      label: "Todos los partidos se retransmitirán por el canal de CB Alcobendas",
      url: "https://www.youtube.com/@ClubBaloncestoAlcobendas",
    },
    {
      type: "social-media",
      label: "Anuncio en del torneo",
      url: "https://www.instagram.com/p/DS2YdVzjAoo",
    },
  ],
});
