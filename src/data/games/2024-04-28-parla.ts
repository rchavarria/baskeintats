import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_04_28_parla: Game = GameSchema.parse({
  id: "S34-liga-bronce-f3-j3",
  type: "game",
  season: "2023-24",
  date: "2024-04-28T11:30:00Z",
  favourite: true,

  competition: {
    name: "Liga Ahorramás - Bronce",
    category: "U13M",
    phase: "Fase 3",
    round: "J3",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U13M",
    scores: [17, 17, 26, 11],
  },

  away: {
    club: teams["parla"],
    category: "U14M",
    opponent: true,
    scores: [9, 15, 10, 19],
  },

  playerStats: {
    time: 22 * 60 + 10,
    fieldGoals: 6,
    threePointers: 0,
    freeThrows: {
      made: 5,
      attempted: 6,
    },
    faults: 2,
    plusMinus: 17,
    efficiency: 14,
  },

  videos: {
    official: "https://youtu.be/6Mo5EAhZPRs",
    others: [],
  },

  recap: {
    title: "Otro paseo, otra victoria a la saca",
    lines: [],
  },

  references: [],
});

