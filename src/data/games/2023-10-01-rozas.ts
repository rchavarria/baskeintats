import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2023_10_01_rozas: Game = GameSchema.parse({
  id: "S34-liga-bronce-f1-j2",
  type: "game",
  season: "2023-24",
  date: "2023-10-01T15:30:00Z",
  favourite: true,

  competition: {
    name: "Liga Ahorramás - Bronce",
    category: "U13M",
    phase: "Fase 1",
    round: "J2",
  },

  venue: venues["espiniella"],

  home: {
    club: teams["rozas"],
    category: "U13M",
    opponent: true,
    scores: [9, 9, 12, 8],
  },

  away: {
    club: teams["alcobendas"],
    category: "U13M",
    scores: [20, 11, 18, 12],
  },

  playerStats: {
    time: 25 * 60 + 50,
    fieldGoals: 4,
    threePointers: 0,
    freeThrows: { made: 0, attempted: 0 },
    faults: 2,
    plusMinus: 23,
    efficiency: 6,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "¡Paliza!",
    lines: [],
  },

  references: [],
});

