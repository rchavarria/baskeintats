import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2024_10_20_canoe: Game = GameSchema.parse({
  id: "S45-liga-oro-f1-j4",
  season: "2024-25",
  date: "2024-10-20T09:30:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U14M",
    phase: "Fase 1",
    round: "J4",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [21, 23, 19, 19],
  },

  away: {
    club: teams["canoe"],
    category: "U14M",
    opponent: true,
    scores: [14, 14, 16, 25],
  },

  playerStats: {
    time: 29 * 60 + 56,
    fieldGoals: 7,
    threePointers: 0,
    freeThrows: {
      made: 4,
      attempted: 5,
    },
    faults: 2,
    plusMinus: 16,
    efficiency: 11,
  },

  videos: {
    official: "https://www.youtube.com/@FF-of-FF", // video no disponible
    others: [],
  },

  recap: {
    title: "¡Por los pelos!",
    lines: [
      "Nos las prometíamos muy felices. Supuestamente, el partido más fácil del grupo. Pero lo hemos pasado un poco mal",
      "En el último cuarto nos han metido un buen susto",
      "Afortunadamente se ha quedado en eso nada más",
    ],
  },

  references: [
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=11858&informe=resultados-clasificacion-proxima&ultima_jornada=74718&proxima_jornada=74719",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-123-12164/la-liga-ahorramas-regresa-a-lo-grande",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-104-12176/liga-ahorramas-menos-invictos,-m%C3%A1s-emoci%C3%B3n",
    },
  ],
});

