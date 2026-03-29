import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {teams} from "../teams.ts";
import {venues} from "../venues.ts";

export const game_2026_03_17_canoe: Game = GameSchema.parse({
  id: "S56-league-f2-j10",
  season: "2025-26",
  date: "2026-03-17T13:30:00Z",
  status: "played",

  competition: {
    name: "Liga Ahorramás",
    category: "U15M",
    phase: "F2",
    round: "J10",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [ 30, 19, 24, 15 ],
  },

  away: {
    club: teams["canoe"],
    category: "U16M",
    scores: [ 15, 14, 20, 18 ],
  },

  playerStats: {
    time: 15 * 60 + 32,
    fieldGoals: 8,
    threePointers: 2,
    freeThrows: {
      made: 4,
      attempted: 6,
    },
    faults: 3,
    plusMinus: -5,
    efficiency: 12,
  },
});
