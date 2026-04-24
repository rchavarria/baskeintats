import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_04_20_laso: Game = GameSchema.parse({
  id: "S45-mhl-zaragoza-final-consolacion",
  season: "2024-25",
  date: "2025-04-20T07:00:00Z",
  type: "game",

  competition: {
    name: "MHL Zaragoza",
    category: "U15M",
    phase: "Eliminatorias",
    round: "3º-4º",
  },

  venue: venues["alberto-maestro"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [16, 19, 14, 13],
  },

  away: {
    club: teams["laso"],
    category: "U15M",
    opponent: true,
    scores: [14, 9, 18, 10],
  },

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
    official: "https://youtu.be/aFXi44tGqDQ",
    others: [],
  },

  recap: {
    title: "¡Partido raro, raro!",
    lines: [
      "Raro porque podría haber sido uno de los partidos del torneo, pero Laso no quiso jugar con \"los becados\", a nosotros nos faltaron varios jugadores porque no se encontraban bien...",
      "En resumen, no se puede sacar ninguna conclusión",
      "Todo el partido a medio gas, sin intensidad...",
      "También es verdad que es el último día, y los chicos deberían de estar reventados",
    ],
  },

  references: [],
});

