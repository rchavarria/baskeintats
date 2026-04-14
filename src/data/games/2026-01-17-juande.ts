import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2026_01_17_juande: Game = GameSchema.parse({
  id: "S56-liga-plata-f2-gd-j2",
  season: "2025-26",
  date: "2026-01-17T17:30:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U16M",
    phase: "Fase 2 - Grupo D",
    round: "J2",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [25, 17, 9, 22],
  },

  away: {
    club: teams["juande"],
    category: "U16M",
    scores: [11, 16, 22, 19],
  },

  playerStats: {
    time: 22 * 60 + 36,
    fieldGoals: 1,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 3,
    plusMinus: -18,
    efficiency: -1,
  },

  videos: {
    official: "https://youtu.be/h38lvX4jB3M",
    others: [],
  },

  recap: {
    title: "¡Por los pelos!",
    lines: [
      "Ganamos, pero por los pelos. Y menos mal, porque este era un partido que no había que perder por nada del mundo",
      "Fuimos por delante todo el partido, pero hubo varios momentos donde peligró la victoria",
      "Partido malo, malo, que teníamos que haber ganado de calle, pero sufrimos mucho",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de enero",
      url: "https://www.flickr.com/photos/fbmadrid/sets/72177720331399343/",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15328&informe=resultados-clasificacion-proxima&ultima_jornada=103528&proxima_jornada=103529",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://fbm.es/noticia-123-13028/la-liga-ahorramas-se-llena-de-partidazos",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-13038/la-liga-ahorramas,-a-pleno-rendimiento",
    },
  ],
});

