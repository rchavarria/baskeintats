import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_02_18_estudio: Game = GameSchema.parse({
  id: "S34-liga-oro-f2-j6",
  type: "game",
  season: "2023-24",
  date: "2024-02-18T15:30:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U14M",
    phase: "Fase 2",
    round: "J6",
  },

  venue: venues["paco-hernandez"],

  home: {
    club: teams["estudio"],
    category: "U14M",
    opponent: true,
    scores: [25, 10, 18, 19],
  },

  away: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [9, 16, 17, 14],
  },

  playerStats: {
    time: 1 * 60 + 12,
    fieldGoals: 0,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 0,
    plusMinus: 1,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "Seguimos con la mala racha, confirmando un bajón de rendimiento",
    lines: [
      "Estos chicos saben jugar mucho, muchísimo mejor, no sé qué es lo que no está funcionando",
    ],
  },

  references: [],
});

