import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2023_09_24_leganes: Game = GameSchema.parse({
  id: "S34-liga-bronce-f1-j1",
  type: "game",
  season: "2023-24",
  date: "2023-09-24T13:00:00Z",
  favourite: true,

  competition: {
    name: "Liga Ahorramás - Bronce",
    category: "U14M",
    phase: "Fase 1",
    round: "J1",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [14, 21, 16, 28],
  },

  away: {
    club: teams["leganes"],
    category: "U14M",
    opponent: true,
    scores: [20, 1, 28, 13],
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
    official: "https://youtu.be/npaoAe9Hbt0",
    others: [],
  },

  recap: {
    title: "Impresionante primer partido, ganando por la mínima",
    lines: [],
  },

  references: [],
});

