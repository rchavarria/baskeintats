import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2024_12_15_rozas: Game = GameSchema.parse({
  id: "S45-liga-oro-f1-j10",
  season: "2024-25",
  date: "2024-12-15T10:15:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U14M",
    phase: "Fase 1",
    round: "J10",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [21, 13, 16, 20],
  },

  away: {
    club: teams["rozas"],
    category: "U14M",
    opponent: true,
    scores: [23, 19, 18, 23],
  },

  // no jugó, estaba con la madrileña
  playerStats: {
    time: 0,
    fieldGoals: 0,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 0,
    plusMinus: 0,
    efficiency: 0,
  },

  videos: {
    official: "https://www.youtube.com/@FF-of-FF", // video no disponible
    others: [],
  },

  recap: {
    title: "¡Muy reñido!",
    lines: [
      "Partido muy reñido, pero que no pudimos superarles",
      "Comenzamos muy fuertes, pero no pudimos aguantar esa ventaja",
    ],
  },

  references: [
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=11858&informe=resultados-clasificacion-proxima&ultima_jornada=74724&proxima_jornada=74725",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-123-12272/liga-ahorramas-suspense-hasta-el-final",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-123-12282/la-liga-ahorramas-completa-la-primera-fase",
    },
  ],
});

