import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const announcement_2024_12_05_copa_ahorramas: Announcement = AnnouncementSchema.parse({
  id: "S45-copa-ahorramas",
  type: "announcement",
  season: "2024-25",
  date: "2024-12-05T00:00:00Z",

  title: "III Copa Ahorramás",
  announcementType: "tournament",
  category: "U14M",

  venue: venues["paraiso"],

  description: [
    "Torneo de seis categorías: 3 masculinas, 3 femeninas; junior, cadete e infantil",
    "Nos centraremos en la infantil",
    "Modalidad de copa (2 semifinales + 1 final). Participan los 4 mejores equipos de cada categoría",
  ],

  schedule: [
    {
      label: "Semis",
      date: "2024-12-07T15:00:00Z",
      opponent: teams["estudiantes"].name,
    },
    {
      label: "Final",
      date: "2024-12-08T11:00:00Z",
    },
  ],

  references: [
    {
      type: "social-media",
      label: "Calendario de la Copa (toda la información se puede encontrar aquí)",
      url: "https://www.fbm.es/noticia-104-12248/calendario-de-la-copa-ahorramas",
    },
    {
      type: "photo",
      label: "Galería de fotos",
      url: "https://www.flickr.com/photos/fbmadrid/54192026217/in/album-72177720322469243",
    },
    {
      type: "article",
      label: "Torrejón se viste de fiesta",
      url: "https://www.fbm.es/noticia-104-12255/torrej%C3%B3n-se-viste-de-fiesta-llega-la-copa-ahorramas",
    },
  ],
});

