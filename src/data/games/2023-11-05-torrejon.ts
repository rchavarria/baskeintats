import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2023_11_05_torrejon: Game = GameSchema.parse({
  id: "S34-liga-bronce-f1-j5",
  type: "game",
  season: "2023-24",
  date: "2023-11-05T15:15:00Z",
  favourite: true,

  competition: {
    name: "Liga Ahorramás - Bronce",
    category: "U13M",
    phase: "Fase 1",
    round: "J5",
  },

  venue: venues["limones"],

  home: {
    club: teams["torrejon"],
    category: "U14M",
    opponent: true,
    scores: [9, 11, 12, 3],
  },

  away: {
    club: teams["alcobendas"],
    category: "U13M",
    scores: [23, 26, 30, 6],
  },

  playerStats: {
    time: 19 * 60 + 4,
    fieldGoals: 4,
    threePointers: 0,
    freeThrows: { made: 0, attempted: 1 },
    faults: 2,
    plusMinus: 24,
    efficiency: 5,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "Fácil, fácil, esperábamos algo más de un equipo de mayores",
    lines: [],
  },

  references: [],
});

