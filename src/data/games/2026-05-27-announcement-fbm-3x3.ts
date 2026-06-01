import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_2026_05_27_fbm_3x3: Announcement = AnnouncementSchema.parse({
  id: "S56-fbm-3x3",
  type: "announcement",
  season: "2025-26",
  date: "2026-05-27T00:00:00Z",

  title: "Concentración preselecciones 3x3: U13 y U15",
  announcementType: "call-up",
  category: "U15M",

  venue: venues["caja-magica"],

  description: [
    "Primera convocatoria con el objetivo de formar los combinados que representarán a la Comunidad de Madrid en el Campeonato de España de Selecciones Autonómicas 3x3 U13 y U15",
    "Hay compañeros muy diversos",
    "Muchos del Alcobendas: Lucas, Diego, Álvaro(s), Íker...",
    "Otros de Zentro: Szmit, Darío, Tejo... (que no acuden porque juegan contra el Real Madrid, que tampoco acuden)",
    "Y otros inesperados: Chino bueno, chino malo, Andy, desconocido... (la mitad no acuden por lo que sea)",
    "Orte y Fuzic dan bastante buena impresión",
    "Entrenan un poco 3x3, bastante 5x5, esta semana anunciarán quién sigue adelante",
  ],

  schedule: [
    {
      label: "Entrenamiento",
      date: "2026-05-31T15:15:00Z",
    },
  ],

  references: [
    {
      type: "social-media",
      label: "Anuncio del calendario del Campeonato en Melilla",
      url: "https://x.com/BaloncestoESP/status/2059243400743031148",
    },
    {
      type: "document",
      label: "Calendario Campeonato de España 3x3 U15",
      url: "https://www.feb.es/Documentos/Archivo/upload/CALENDARIO%20CESA%203x3%20U15%20-%20Melilla%202026.pdf",
    },
    {
      type: "social-media",
      label: "Anuncio de la convocatoria",
      url: "https://x.com/FBMadrid/status/2059584540595703966",
    },
    {
      type: "article",
      label: "Anuncio de la convocatoria y lista de jugadores",
      url: "https://www.fbm.es/noticia-88-13355/concentraci%C3%B3n-de-las-preselecciones-3x3-u13-y-u15#CM/104784.aspx",
    },
  ],

});
