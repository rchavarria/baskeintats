import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_2026_06_02_fbm_3x3: Announcement = AnnouncementSchema.parse({
  id: "S56-fbm-3x3-j2",
  type: "announcement",
  season: "2025-26",
  date: "2026-06-02T00:00:00Z",

  title: "2ª Concentración preselecciones 3x3: U13 y U15",
  announcementType: "call-up",
  category: "U15M",

  venue: venues["caja-magica"],

  description: [
    "Segunda convocatoria para una nueva jornada de trabajo de preparación del Campeonato de España de Selecciones Autonómicas 3x3",
    "Algunos compañeros se han quedado por el camino",
    "Y otros que no vinieron ha vuelto a ser convocados",
    "Jugadores grandes como posible competencia: Fuzik, Orte, Bucero, Toni, Góngora, Siguero...",
  ],

  schedule: [
    {
      label: "Entrenamiento",
      date: "2026-06-07T11:45:00Z",
    },
  ],

  references: [
    {
      type: "social-media",
      label: "Anuncio de la segunda convocatoria",
      url: "https://x.com/FBMadrid/status/2061742523542819091",
    },
    {
      type: "article",
      label: "Lista de convocados",
      url: "https://www.fbm.es/noticia-88-13374/concentraci%C3%B3n-de-las-preselecciones-3x3-u13-y-u15-07062026",
    },
    {
      type: "social-media",
      label: "El club anuncia los (y las) convocado/as",
      url: "https://www.instagram.com/p/DZILYVljZU_/?img_index=2",
    },
    {
      type: "article",
      label: "Convocados para Castilla-la Mancha, incluyendo algunos amigos: Marcos, Bruno, Iñaki...",
      url: "https://fbclm.net/seleccionesfbclm-concentracion-preselecciones-regionales-3x3-u13-y-u15albacete-6-y-7-junio/",
    },
    {
      type: "document",
      label: "Calendario Campeonato de España 3x3 U15",
      url: "https://www.feb.es/Documentos/Archivo/upload/CALENDARIO%20CESA%203x3%20U15%20-%20Melilla%202026.pdf",
    },
  ],

});
