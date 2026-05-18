import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2024_09_25_real_madrid: Game = GameSchema.parse({
  id: "S45-liga-oro-f1-j1",
  season: "2024-25",
  date: "2024-09-25T17:00:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U14M",
    phase: "Fase 1",
    round: "J1",
  },

  venue: venues["valdebebas"],

  home: {
    club: teams["real-madrid"],
    category: "U14M",
    opponent: true,
    scores: [29, 20, 17, 17],
  },

  away: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [20, 11, 22, 8],
  },

  playerStats: {
    time: 31 * 60 + 25,
    fieldGoals: 6,
    threePointers: 0,
    freeThrows: {
      made: 1,
      attempted: 2,
    },
    faults: 1,
    plusMinus: -11,
    efficiency: 10,
  },

  videos: {
    official: "https://www.youtube.com/@FF-of-FF", // video no disponible
    others: [],
  },

  recap: {
    title: "¡Qué manera de empezar la liga!",
    lines: [
      "No pudo ser, no pudimos ganar, pero fue un partido muy luchado. Es precisamente lo que buscábamos, luchar, jugar, competir... No darnos por vencidos. Y así fue.",
      "Pero se nos escapó",
      "A seguir trabajando y a seguir creciendo",
    ],
  },

  references: [
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=11858&informe=resultados-clasificacion-proxima&ultima_jornada=74715&proxima_jornada=74716",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-12114/liga-ahorramas-comienza-el-nuevo-curso",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-104-12126/esto-ya-no-hay-quien-lo-pare!",
    },
  ],
});

