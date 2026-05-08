import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2023_10_01_rozas: Game = GameSchema.parse({
  id: "S34-liga-bronce-f1-j2",
  type: "game",
  season: "2023-24",
  date: "2023-10-01T17:30:00Z",
  favourite: true,

  competition: {
    name: "Liga Ahorramás - Bronce",
    category: "U14M",
    phase: "Fase 1",
    round: "J2",
  },

  venue: venues["espiniella"],

  home: {
    club: teams["rozas"],
    category: "U14M",
    opponent: true,
    scores: [9, 9, 12, 8],
  },

  away: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [20, 11, 18, 12],
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
    title: "¡Paliza!",
    lines: [],
  },

  references: [],
});

