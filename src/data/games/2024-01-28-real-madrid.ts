import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_01_28_real_madrid: Game = GameSchema.parse({
  id: "S34-liga-oro-f2-j3",
  type: "game",
  season: "2023-24",
  date: "2024-01-28T18:00:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U14M",
    phase: "Fase 2",
    round: "J3",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [23, 15, 14, 17],
  },

  away: {
    club: teams["real-madrid"],
    category: "U14M",
    opponent: true,
    scores: [23, 34, 18, 23],
  },

  playerStats: {
    time: 3 * 60 + 14,
    fieldGoals: 0,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 0,
    plusMinus: -10,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "Hemos perdido, pero ¡qué gran partido!",
    lines: [
      "Animando muchísimo, hubo momentos donde incluso creíamos que teníamos alguna posibilidad. Pero eran ilusiones nuestras nada más",
    ],
  },

  references: [],
});

