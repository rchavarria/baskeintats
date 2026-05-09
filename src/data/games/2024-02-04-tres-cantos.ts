import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2024_02_04_tres_cantos: Game = GameSchema.parse({
  id: "S34-liga-plata-f2-j4",
  type: "game",
  season: "2023-24",
  date: "2024-02-04T17:00:00Z",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U13M",
    phase: "Fase 2",
    round: "J4",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U13M",
    scores: [6, 13, 15, 20],
  },

  away: {
    club: teams["tres-cantos"],
    category: "U14M",
    opponent: true,
    scores: [18, 23, 17, 13],
  },

  playerStats: {
    time: 25 * 60 + 53,
    fieldGoals: 6,
    threePointers: 0,
    freeThrows: { made: 2, attempted: 5 },
    faults: 2,
    plusMinus: -8,
    efficiency: 9,
  },

  videos: {
    official: "https://youtu.be/ECA-jOmDUfc",
    others: [],
  },

  recap: {
    title: "Otra que se nos escapa, está siendo muy dura esta fase para los chicos",
    lines: [],
  },

  references: [],
});

