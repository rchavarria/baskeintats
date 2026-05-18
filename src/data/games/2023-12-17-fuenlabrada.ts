import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2023_12_17_fuenlabrada: Game = GameSchema.parse({
  id: "S34-liga-oro-f1-j10",
  type: "game",
  season: "2023-24",
  date: "2023-12-17T12:00:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U14M",
    phase: "Fase 1",
    round: "J10",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [23, 27, 15, 14, 12],
  },

  away: {
    club: teams["fuenlabrada"],
    category: "U14M",
    opponent: true,
    scores: [16, 22, 30, 11, 19],
  },

  playerStats: {
    time: 8 * 60 + 46,
    fieldGoals: 0,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 0,
    plusMinus: 12,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "Otro partido más con los 2010, pero no pudo ser, victoria para el Fuenlabrada",
    lines: [],
  },

  references: [],
});

