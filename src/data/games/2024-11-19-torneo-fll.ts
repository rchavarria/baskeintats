import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const announcement_2024_11_19_torneo_fll: Announcement = AnnouncementSchema.parse({
  id: "S45-torneo-fll",
  type: "announcement",
  season: "2024-25",
  date: "2024-11-19T00:00:00Z",

  title: "XV Torneo Fundación Leucemia y Linfoma",
  announcementType: "tournament",
  category: "U15M",

  venue: venues["triangulo-oro"],

  description: [
    "Torneo cadete de primer año, donde participa la selección infantil, y que le sirve como preparación para el campeonato nacional",
    "No hay muchas esperanzas, porque los equipos cadetes que participan son lo mejor de lo mejor, pero el torneo tiene una pinta estupenda",
  ],

  schedule: [
    {
      label: "Grupos - J1",
      date: "2024-11-22T17:00:00Z",
      opponent: teams["estudiantes"].name,
    },
    {
      label: "Grupos - J2",
      date: "2024-11-23T08:00:00Z",
      opponent: teams["barca"].name,
    },
  ],

  references: [
    {
      type: "social-media",
      label: "Calendario del XV Torneo FLL",
      url: "https://fbm.es/noticia-96-12213/calendario-del-xv-torneo-fll",
    },
    {
      type: "photo",
      label: "Galería de fotos",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720322130779",
    },
    {
      type: "document",
      label: "Dossier con las plantillas",
      url: "https://www.fbm.es/descargar?seccion=noticia&id=5073&delegacion=1",
    },
    {
      type: "article",
      label: "Torneo FLL: 15 años de talento y solidaridad",
      url: "https://www.fbm.es/noticia-96-12216/torneo-fll-15-a%C3%B1os-de-talento-y-solidaridad",
    },
    {
      type: "article",
      label: "¡Todos al Triángulo de Oro!",
      url: "https://www.fbm.es/noticia-96-12229/todos-al-tri%C3%A1ngulo-de-oro",
    },
  ],
});

