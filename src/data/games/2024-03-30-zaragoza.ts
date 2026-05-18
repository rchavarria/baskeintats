import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_03_30_zaragoza: Game = GameSchema.parse({
  id: "S34-torneo-zaragoza-j3",
  type: "game",
  season: "2023-24",
  date: "2024-03-30T10:00:00Z",

  competition: {
    name: "Torneo Zaragoza",
    category: "U14M",
    phase: "Grupos",
    round: "J3",
  },

  venue: venues["lanuza"],

  home: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [14, 19, 4, 12],
  },

  away: {
    club: teams["zaragoza"],
    category: "U14M",
    opponent: true,
    scores: [10, 33, 25, 6],
  },

  playerStats: {
    time: 10 * 60 + 13,
    fieldGoals: 0,
    threePointers: 0,
    freeThrows: { made: 0, attempted: 0 },
    faults: 1,
    plusMinus: -13,
    efficiency: -1,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "No se pudo hacer nada contra ellos",
    lines: [
      "Los equipos de cantera ACB son todavía demasiado para nosotros, y más si nos rendimos ante la primera piedra que nos pongan",
    ],
  },

  references: [],
});

