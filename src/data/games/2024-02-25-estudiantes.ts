import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_02_25_estudiantes: Game = GameSchema.parse({
  id: "S34-liga-oro-f2-j7",
  type: "game",
  season: "2023-24",
  date: "2024-02-25T12:00:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U14M",
    phase: "Fase 2",
    round: "J7",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [15, 15, 20, 24],
  },

  away: {
    club: teams["estudiantes"],
    category: "U14M",
    opponent: true,
    scores: [22, 17, 23, 19],
  },

  playerStats: {
    time: 6 * 60 + 46,
    fieldGoals: 1,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 1,
    plusMinus: -8,
    efficiency: 1,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "Parece que se van entonando otra vez. Si es que lo sabemos, estos chicos pueden jugar realmente bien",
    lines: [],
  },

  references: [],
});

