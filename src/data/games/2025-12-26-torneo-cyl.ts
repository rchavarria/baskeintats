import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_2025_12_26_torneo_cyl: Announcement = AnnouncementSchema.parse({
  id: "S56-torneo-cyl",
  type: "announcement",
  season: "2025-26",
  date: "2025-12-26T00:00:00Z",

  title: "Torneo amistoso Selecciones Castilla y León",
  announcementType: "friendly-game",

  category: "U16M",

  venue: venues["wurzburg"],

  description: [
    "Torneo cadete de segundo año, con las selecciones cadete de Castilla y León y Canarias para su preparación para el CESA 2026",
    "Nosotros somos un año menos, pero seguro que les vamos a dar guerra",
  ],

  schedule: [
    {
      label: "Es un torneo en formato copa (semis y final)",
      date: "2025-12-27T18:45:00Z",
      opponent: "Canarias",
    },
    {
      date: "2025-12-28T10:00:00Z",
      opponent: "Castilla y León / Oporto",
    },
    {
      date: "2025-12-28T12:00:00Z",
      opponent: "Castilla y León / Oporto",
    },
  ],

  references: [
    {
      type: "social-media",
      label: "Anuncio general del Torneo de selecciones CyL",
      url: "https://x.com/FBCyL/status/2004529249236189619",
    },
    {
      type: "social-media",
      label: "Horarios",
      url: "https://x.com/FBCyL/status/2004842187142615441",
    },
    {
      type: "social-media",
      label: "La FBM también se hace eco del torneo",
      url: "https://x.com/FBMadrid/status/2004903875791520175",
    },
    {
      type: "social-media",
      label: "Roster de la selección de Castilla y León",
      url: "https://www.instagram.com/p/DS5rKeNiL6e/",
    },
    {
      type: "document",
      label: "Roster de la selección de Castilla y León",
      url: "https://www.instagram.com/p/DS5rKeNiL6e/",
    },
    {
      type: "document",
      label: "Artículo con la convocatoria madrileña",
      url: "https://www.fbm.es/noticia-87-12994/concentraciones-cadete-e-infantil-de-primer-a%C3%B1o#CM",
    },
  ],
});

