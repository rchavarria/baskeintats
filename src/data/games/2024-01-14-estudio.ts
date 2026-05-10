import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_01_14_estudio: Game = GameSchema.parse({
  id: "S34-liga-oro-f2-j1",
  type: "game",
  season: "2023-24",
  date: "2024-01-14T10:15:00Z",
  favourite: true,

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U14M",
    phase: "Fase 2",
    round: "J1",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [23, 22, 20, 18],
  },

  away: {
    club: teams["estudio"],
    category: "U14M",
    opponent: true,
    scores: [13, 6, 13, 13],
  },

  playerStats: {
    time: 1 * 60 + 27,
    fieldGoals: 0,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 1,
    plusMinus: -2,
    efficiency: -1,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "Estos de 2010 vuelven fuertes después de Navidades, han jugado muy muy bien",
    lines: [],
  },

  references: [],
});

