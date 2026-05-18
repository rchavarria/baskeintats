import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_06_09_estudio: Game = GameSchema.parse({
  id: "S34-liga-ahorramas-oro-f3-j3",
  type: "game",
  season: "2023-24",
  date: "2024-06-09T16:00:00Z",
  favourite: true,

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U14M",
    phase: "Fase 3",
    round: "J3",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [27, 19, 30, 8],
  },

  away: {
    club: teams["estudio"],
    category: "U14M",
    opponent: true,
    scores: [21, 20, 12, 22],
  },

  playerStats: {
    time: 5 * 60 + 43,
    fieldGoals: 1,
    threePointers: 0,
    freeThrows: { made: 0, attempted: 1 },
    faults: 2,
    plusMinus: 3,
    efficiency: -1,
  },

  videos: {
    official: "https://youtu.be/9LatU4kro-E",
    others: [],
  },

  recap: {
    title: "¡Se acabó!",
    lines: [
      "Último partido, un doloroso adiós",
    ],
  },

  references: [],
});
