import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_03_28_moncayo: Game = GameSchema.parse({
  id: "S34-torneo-zaragoza-j1",
  type: "game",
  season: "2023-24",
  date: "2024-03-28T14:30:00Z",

  competition: {
    name: "Torneo Zaragoza",
    category: "U14M",
    phase: "Grupos",
    round: "J1",
  },

  venue: venues["fuentes"],

  home: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [23, 20, 19, 21],
  },

  away: {
    club: teams["moncayo"],
    category: "U14M",
    opponent: true,
    scores: [22, 9, 8, 9],
  },

  playerStats: {
    time: 12 * 60 + 29,
    fieldGoals: 2,
    threePointers: 0,
    freeThrows: { made: 0, attempted: 0 },
    faults: 1,
    plusMinus: 17,
    efficiency: 3,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "Buen comienzo de torneo",
    lines: [],
  },

  references: [],
});

