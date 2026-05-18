import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2023_11_19_rozas: Game = GameSchema.parse({
  id: "S34-liga-bronce-f1-j7",
  type: "game",
  season: "2023-24",
  date: "2023-11-19T12:00:00Z",
  favourite: true,

  competition: {
    name: "Liga Ahorramás - Bronce",
    category: "U13M",
    phase: "Fase 1",
    round: "J7",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U13M",
    scores: [23, 18, 14, 14],
  },

  away: {
    club: teams["rozas"],
    category: "U13M",
    opponent: true,
    scores: [6, 10, 13, 14],
  },

  playerStats: {
    time: 20 * 60 + 47,
    fieldGoals: 4,
    threePointers: 0,
    freeThrows: { made: 0, attempted: 0 },
    faults: 2,
    plusMinus: 15,
    efficiency: 6,
  },

  videos: {
    official: "https://youtu.be/DOyGCN7S5c0",
    others: [],
  },

  recap: {
    title: "Partido muy cómodo, duró un cuarto, el resto, un paseo por la pista",
    lines: [],
  },

  references: [],
});

