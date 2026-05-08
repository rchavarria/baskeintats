import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2024_02_04_tres_cantos: Game = GameSchema.parse({
  id: "S34-liga-plata-f2-j4",
  type: "game",
  season: "2023-24",
  date: "2024-02-04T18:00:00Z",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U14M",
    phase: "Fase 2",
    round: "J4",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [6, 13, 15, 20],
  },

  away: {
    club: teams["tres-cantos"],
    category: "U14M",
    opponent: true,
    scores: [18, 23, 17, 13],
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
    official: "https://youtu.be/ECA-jOmDUfc",
    others: [],
  },

  recap: {
    title: "Otra que se nos escapa, está siendo muy dura esta fase para los chicos",
    lines: [],
  },

  references: [],
});

