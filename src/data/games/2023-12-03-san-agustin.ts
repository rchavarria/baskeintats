import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2023_12_03_san_agustin: Game = GameSchema.parse({
  id: "S34-liga-bronce-f1-j9",
  type: "game",
  season: "2023-24",
  date: "2023-12-03T10:45:00Z",
  favourite: true,

  competition: {
    name: "Liga Ahorramás - Bronce",
    category: "U14M",
    phase: "Fase 1",
    round: "J9",
  },

  venue: venues["agustin"],

  home: {
    club: teams["agustin"],
    category: "U14M",
    opponent: true,
    scores: [20, 20, 16, 16],
  },

  away: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [31, 19, 19, 24],
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
    title: "Victoria mucho más comoda que el partido de ida con ellos, se nota que el equipo va madurando y aprendiendo",
    lines: [],
  },

  references: [],
});

