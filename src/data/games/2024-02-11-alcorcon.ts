import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_02_11_alcorcon: Game = GameSchema.parse({
  id: "S34-liga-oro-f2-j5",
  type: "game",
  season: "2023-24",
  date: "2024-02-11T12:00:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U14M",
    phase: "Fase 2",
    round: "J5",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [11, 14, 3, 21],
  },

  away: {
    club: teams["alcorcon"],
    category: "U14M",
    opponent: true,
    scores: [21, 24, 20, 12],
  },

  playerStats: {
    time: 5 * 60 + 9,
    fieldGoals: 1,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 0,
    plusMinus: 0,
    efficiency: 2,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "¡Sorpresa de las malas!",
    lines: [
      "Después de venir de hacer dos partidazos, nadie entiende qué ha pasado en este. Simplemente, nos han barrido",
    ],
  },

  references: [],
});

