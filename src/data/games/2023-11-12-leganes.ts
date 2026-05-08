import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2023_11_12_leganes: Game = GameSchema.parse({
  id: "S34-liga-bronce-f1-j6",
  type: "game",
  season: "2023-24",
  date: "2023-11-12T16:45:00Z",

  competition: {
    name: "Liga Ahorramás - Bronce",
    category: "U14M",
    phase: "Fase 1",
    round: "J6",
  },

  venue: venues["leganes"],

  home: {
    club: teams["leganes"],
    category: "U14M",
    opponent: true,
    scores: [17, 18, 30, 20],
  },

  away: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [19, 20, 20, 13],
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
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "Esta vez no pudo ser, han echo valer su físico y nos terminan ganando",
    lines: [],
  },

  references: [],
});

