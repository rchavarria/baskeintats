import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2024_02_25_alcala: Game = GameSchema.parse({
  id: "S34-liga-plata-f2-j7",
  type: "game",
  season: "2023-24",
  date: "2024-02-25T18:00:00Z",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U13M",
    phase: "Fase 2",
    round: "J7",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U13M",
    scores: [22, 22, 19, 23],
  },

  away: {
    club: teams["alcala"],
    category: "U14M",
    opponent: true,
    scores: [16, 24, 33, 17],
  },

  playerStats: {
    time: 22 * 60 + 42,
    fieldGoals: 9,
    threePointers: 0,
    freeThrows: { made: 1, attempted: 2 },
    faults: 3,
    plusMinus: -1,
    efficiency: 15,
  },

  videos: {
    official: "https://youtu.be/ctTAvXKoso0",
    others: [],
  },

  recap: {
    title: "¡Arggg! ¡Por qué poco! Este partido hemos estado a puntito, esta vez han visto las orejas al lobo",
    lines: [],
  },

  references: [],
});

