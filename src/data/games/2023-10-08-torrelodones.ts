import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2023_10_08_torrelodones: Game = GameSchema.parse({
  id: "S34-liga-bronce-f1-j3",
  type: "game",
  season: "2023-24",
  date: "2023-10-08T15:30:00Z",
  favourite: true,

  competition: {
    name: "Liga Ahorramás - Bronce",
    category: "U13M",
    phase: "Fase 1",
    round: "J3",
  },

  venue: venues["torrelodones"],

  home: {
    club: teams["torrelodones"],
    category: "U13M",
    opponent: true,
    scores: [6, 11, 11, 8],
  },

  away: {
    club: teams["alcobendas"],
    category: "U13M",
    scores: [24, 24, 18, 20],
  },

  playerStats: {
    time: 28 * 60 + 33,
    fieldGoals: 10,
    threePointers: 0,
    freeThrows: { made: 0, attempted: 0 },
    faults: 0,
    plusMinus: 40,
    efficiency: 20,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "¡Primer cierre de marcador! Esta temporada promete",
    lines: [],
  },

  references: [],
});

