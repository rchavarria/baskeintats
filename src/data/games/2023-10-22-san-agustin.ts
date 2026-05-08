import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2023_10_22_san_agustin: Game = GameSchema.parse({
  id: "S34-liga-bronce-f1-j4",
  type: "game",
  season: "2023-24",
  date: "2023-10-22T17:00:00Z",
  favourite: true,

  competition: {
    name: "Liga Ahorramás - Bronce",
    category: "U14M",
    phase: "Fase 1",
    round: "J4",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [16, 14, 23, 33],
  },

  away: {
    club: teams["agustin"],
    category: "U14M",
    opponent: true,
    scores: [22, 21, 22, 20],
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
    title: "¡Partidazo contra unos mayores! Ganamos por la mínima, sufriendo mucho, pero menuda garra le han echado los chicos, impresionante",
    lines: [],
  },

  references: [],
});

