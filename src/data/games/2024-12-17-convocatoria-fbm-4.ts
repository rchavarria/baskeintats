import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_2024_12_17_convocatoria_fbm_4: Announcement = AnnouncementSchema.parse({
  id: "S45-convocatoria-fbm-4",
  type: "announcement",
  season: "2024-25",
  date: "2024-12-17T00:00:00Z",

  title: "Federación de Baloncesto de Madrid - Convocatoria 4",
  announcementType: "call-up",
  category: "U14M",

  venue: venues["caja-magica"],

  description: [
    "🏀 4ª convocatoria de la Federación de Baloncesto de Madrid",
    " 🤩 Estamos entre los 12 🤩 ",
    "Finalmente, publican la lista de los 12 seleccionados por la federación para participar en el Campeonato de España de Selecciones Autonómicas",
    "¡¡Y estamos entre los 12!!",
  ],

  schedule: [
    {
      label: "Comienzo de los entrenos, probablemente para toda la semana",
      date: "2024-12-17T18:15:00Z",
    },
  ],

  references: [
    {
      type: "article",
      label: "Actualización de la convocatoria",
      url: "https://www.fbm.es/noticia-88-12249/selecciones-infantiles-y-cadetes-para-los-campeonatos-de-espa%C3%B1a",
    },
    {
      type: "article",
      label: "La Federación Española de Baloncesto ha publicado el calendario del campeonato, del 3 al 7 de enero, en Huelva",
      url: "https://www.feb.es/2024/12/3/baloncesto/publicado-calendario-del-campeonato-espana-infantil-cadete-2025/100856.aspx",
    },
    {
      type: "photo",
      label: "Presentación de las selecciones infantiles",
      url: "https://www.flickr.com/photos/fbmadrid/54222270964/in/album-72177720322740795",
    },
  ],
});

