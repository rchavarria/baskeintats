import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_2026_06_29_basketlife_camp: Announcement = AnnouncementSchema.parse({
  id: "S56-basketlife-camp",
  type: "announcement",
  season: "2025-26",
  date: "2025-06-29T00:00:00Z",

  title: "Campus BasketLife",
  announcementType: "camp",
  category: "U15M",

  venue: venues["ontinyent"],

  description: [
    "Campus Basket Life, en Ontinyent",
    "Va con unos cuantos amigos de Alcobendas",
    "Asistirán entrenadores de la talla de Saúl Blanco y Fernando Sendino",
  ],

  schedule: [
    {
      label: "Inicio del campamento, viaje a Ontinyent",
      date: "2026-06-29T00:00:00Z",
    },
    {
      label: "🎆 Visita al parque de atracciones Acuópolis",
      date: "2026-07-02T00:00:00Z",
    },
    {
      label: "Campeonato 3x3 nocturno",
      date: "2026-07-03T00:00:00Z",
    },
    {
      label: "Final del campamento",
      date: "2026-07-04T00:00:00Z",
    },
  ],

  references: [
    {
      type: "social-media",
      label: "Cuenta oficial del campamento",
      url: "https://www.instagram.com/campusbasketlife/",
    },
    {
      type: "social-media",
      label: "Fotógrafo",
      url: "https://www.instagram.com/marccmasiaa_/",
    },
    {
      type: "photo",
      label: "Sessión mañanera",
      url: "https://www.instagram.com/p/DaSZwcdCvYn/?img_index=12",
    },
    {
      type: "photo",
      label: "Los mayores en juego",
      url: "https://www.instagram.com/p/DaU2yFtCtZ5/?img_index=16",
    },
    {
      type: "photo",
      label: "MUCHA AURA ✨",
      url: "https://www.instagram.com/p/DaVRxe8igi7/?img_index=1",
    },
    {
      type: "photo",
      label: "Grupete de mayores",
      url: "https://www.instagram.com/p/DaYAWarikeo/?img_index=3",
    },
    {
      type: "photo",
      label: "Finales de concurso de triples",
      url: "https://www.instagram.com/p/DaYA4aBituB/?img_index=9",
    },
    {
      type: "video",
      label: "Recapitulación del campamento",
      url: "https://www.instagram.com/p/DabCrY3IRI8/",
    },
  ],
});
