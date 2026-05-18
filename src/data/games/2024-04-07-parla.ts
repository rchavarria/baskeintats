import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_04_07_parla: Game = GameSchema.parse({
  id: "S34-liga-bronce-f3-j1",
  type: "game",
  season: "2023-24",
  date: "2024-04-07T09:15:00Z",
  favourite: true,

  competition: {
    name: "Liga Ahorramás - Bronce",
    category: "U13M",
    phase: "Fase 3",
    round: "J1",
  },

  venue: venues["miguel-delibes"],

  home: {
    club: teams["parla"],
    category: "U14M",
    opponent: true,
    scores: [11, 14, 15, 7],
  },

  away: {
    club: teams["alcobendas"],
    category: "U13M",
    scores: [24, 18, 15, 12],
  },

  playerStats: {
    time: 23 * 60 + 3,
    fieldGoals: 6,
    threePointers: 0,
    freeThrows: {
      made: 1,
      attempted: 2,
    },
    faults: 1,
    plusMinus: 16,
    efficiency: 11,
  },

  videos: {
    official: "https://youtu.be/Y4yWuMmxuMs",
    others: [],
  },

  recap: {
    title: "Fácil",
    lines: [
      "Viniendo de los partidos que vienen, éste ha sido un paseo",
    ],
  },

  references: [],
});

