import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_2026_06_09_fbm_3x3: Announcement = AnnouncementSchema.parse({
  id: "S56-fbm-3x3-j3",
  type: "announcement",
  season: "2025-26",
  date: "2026-06-09T00:00:00Z",

  title: "3ª Concentración preselecciones 3x3: U13 y U15",
  announcementType: "call-up",
  category: "U15M",

  venue: venues["caja-magica"],

  description: [
    "Tercera convocatoria de preparación del Campeonato de España de Selecciones Autonómicas 3x3",
    "En ésta ya no estamos convocados",
    "Lo más doloroso, es que van 3 del Madrid, cuando todo el mundo pensaba que el club vetaba estos campeonatos",
    "Y el cuarto convocado... pues tampoco es de nuestro agrado",
    "Pero bueno, no tenemos poder de decisión, lo que hay que hacer es seguir trabajando, mejorando y dándolo todo. Es lo que está en nuestra mano",
  ],

  schedule: [
    {
      label: "Varios entrenamientos",
      date: "2026-06-11T16:15:00Z",
    },
    {
      label: "Torneo amistoso 3x3 (viene Castilla-la Mancha)",
      date: "2026-06-14T08:30:00Z",
    },
    {
      label: "Varios entrenamientos durante la semana",
      date: "2026-06-16T16:00:00Z",
    },
    {
      label: "Inicio del Campeonato de España 3x3",
      date: "2026-06-20T07:00:00Z",
    },
  ],

  references: [
    {
      type: "social-media",
      label: "Anuncio de la tercera convocatoria",
      url: "https://x.com/FBMadrid/status/2064274186403479870",
    },
    {
      type: "article",
      label: "Lista de convocados",
      url: "https://www.fbm.es/noticia-88-13400/selecciones-3x3-u13-y-u15-para-el-campeonato-de-espa%C3%B1a",
    },
    {
      type: "document",
      label: "Calendario Campeonato de España 3x3 U15",
      url: "https://www.feb.es/Documentos/Archivo/upload/CALENDARIO%20CESA%203x3%20U15%20-%20Melilla%202026.pdf",
    },
  ],

});
