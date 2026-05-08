import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2024_03_10_tres_cantos: Game = GameSchema.parse({
  id: "S34-liga-plata-f2-j9",
  type: "game",
  season: "2023-24",
  date: "2024-03-10T10:45:00Z",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U14M",
    phase: "Fase 2",
    round: "J9",
  },

  venue: venues["luz"],

  home: {
    club: teams["tres-cantos"],
    category: "U14M",
    opponent: true,
    scores: [18, 16, 13, 21],
  },

  away: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [9, 17, 19, 17],
  },

  playerStats: {
    time: 0,
    fieldGoals: 0,
    threePointers: 0,
    freeThrows: { made: 0, attempted: 0 },
    faults: 0,
    plusMinus: 0,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/3BLWsg2Ypp8",
    others: [],
  },

  recap: {
    title: "¡Ay! Otro que se nos escapa por muy poquito.",
    lines: [
      "Ha habido un momento, llegando al final, que nos hemos despistado y nos han metido dos triples, arruinando la poquita ventaja que habíamos conseguido obtener. Simplemente con ese despiste, se nos ha ido el ¡partidazo! que han hecho. Una lástima, porque otro que casi casi...",
    ],
  },

  references: [],
});

