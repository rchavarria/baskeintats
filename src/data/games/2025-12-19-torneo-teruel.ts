import {AnnouncementSchema} from "../../model/AnnouncementSchema.ts";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {venues} from "../venues.ts";

export const announcement_2025_12_19_torneo_teruel: Announcement = AnnouncementSchema.parse({
  id: "S56-torneo-teruel",
  type: "announcement",
  season: "2025-26",
  date: "2025-12-19T00:00:00Z",

  title: "XVII Torneo Tocando las Estrellas",
  announcementType: "tournament",

  category: "U15M",

  venue: venues["mora"],

  description: [
    "Torneo cadete de primer año, celebrado en la provincia de Teruel, en la comarca de Gúdar-Javalambre",
    "Nos han invitado a última hora, no sabíamos nada hasta casi llegada la fecha del torneo, pero es una oferta que no podíamos rechazar",
    "Van muchos equipos de cantera ACB, se juega seguro 5 partidos, 16 equipos repartidos en 4 grupos. Muchos partidos en pocos días, pero puede haber partidos muy competidos",
    "Y a partir de aquí, distintos enlaces que se han ido publicando",
  ],

  schedule: [
    {
      label: "Fase de grupos - J1",
      date: "2025-12-19T10:00:00Z",
    },
    {
      label: "Fase de grupos - J2",
      date: "2025-12-19T17:00:00Z",
    },
    {
      label: "Fase de grupos - J3",
      date: "2025-12-20T10:00:00Z",
    },
    {
      label: "Cuartos",
      date: "2025-12-21T00:00:00Z",
    },
    {
      label: "Final",
      date: "2025-12-22T00:00:00Z",
    },
  ],

  references: [
    {
      type: "social-media",
      label: "Instagram de la organización",
      url: "https://www.instagram.com/deportes_gudarjavalambre/",
    },
    {
      type: "video",
      label: "Todos los partidos se retransmitirán por el canal de YouTube de InGame Productions",
      url: "https://www.youtube.com/@ingameproducciones2327",
    },
    {
      type: "social-media",
      label: "Anuncio en del torneo",
      url: "https://www.instagram.com/p/DSGNLZBDoKq/",
    },
    {
      type: "social-media",
      label: "Cuadro de grupos",
      url: "https://www.instagram.com/p/DSIlZNxjueT/?img_index=4",
    },
    {
      type: "document",
      label: "Rosters de los equipos masculinos",
      url: "https://www.instagram.com/p/DSYU7aLjepw/?img_index=1",
    },
    {
      type: "article",
      label: "La prensa local, el Diario de Teruel, publica Lo mejor del basket juvenil en España se volverá a ver en Gúdar Javalambre",
      url: "https://www.diariodeteruel.es/deportes/lo-mejor-del-basket-juvenil-en-espana-se-volvera-a-ver-en-gudar-javalambre",
    },
  ],
});
