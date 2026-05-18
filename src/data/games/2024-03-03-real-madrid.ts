import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_03_03_real_madrid: Game = GameSchema.parse({
  id: "S34-liga-oro-f2-j8",
  type: "game",
  season: "2023-24",
  date: "2024-03-03T17:00:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U14M",
    phase: "Fase 2",
    round: "J8",
  },

  venue: venues["valdebebas"],

  home: {
    club: teams["real-madrid"],
    category: "U14M",
    opponent: true,
    scores: [27, 22, 17, 20],
  },

  away: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [12, 24, 10, 11],
  },

  playerStats: {
    time: 13 * 60 + 26,
    fieldGoals: 2,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 0,
    plusMinus: -8,
    efficiency: 4,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "Resultado esperado, pero lo importante es que sigan jugando bien, como saben hacerlo, compartiendo el balón, siendo generosos",
    lines: [],
  },

  references: [],
});

