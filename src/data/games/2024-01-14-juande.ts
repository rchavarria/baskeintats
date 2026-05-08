import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2024_01_14_juande: Game = GameSchema.parse({
  id: "S34-liga-plata-f2-j1",
  type: "game",
  season: "2023-24",
  date: "2024-01-14T13:00:00Z",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U14M",
    phase: "Fase 2",
    round: "J1",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [7, 15, 15, 16],
  },

  away: {
    club: teams["juande"],
    category: "U14M",
    opponent: true,
    scores: [14, 15, 19, 18],
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
    official: "https://youtu.be/WutYZTePWDU",
    others: [],
  },

  recap: {
    title: "No pudo ser, han jugado muy bien, pero acusamos mucho el físico. Son un año mayores y lo han hecho valer",
    lines: [],
  },

  references: [],
});

