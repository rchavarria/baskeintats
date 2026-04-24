import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_04_17_torrelodones: Game = GameSchema.parse({
  id: "S45-mhl-zaragoza-j1",
  season: "2024-25",
  date: "2025-04-17T15:45:00Z",
  type: "game",

  competition: {
    name: "MHL Zaragoza",
    category: "U15M",
    phase: "Grupos",
    round: "J1",
  },

  venue: venues["san-agustin"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [23, 23, 15, 12],
  },

  away: {
    club: teams["torrelodones"],
    category: "U15M",
    opponent: true,
    scores: [14, 11, 8, 14],
  },

  playerStats: {
    time: 17 * 60 + 53,
    fieldGoals: 6,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 1,
    plusMinus: 26,
    efficiency: 11,
  },

  videos: {
    official: "https://youtu.be/Ut0Q8yWn8Do",
    others: [],
  },

  recap: {
    title: "¡Justo lo esperado!",
    lines: [
      "Resultado esperado contra un equipo de Madrid, conocido, aunque no habíamos jugado contra ellos todavía",
      "Cuentan con un pívot bastante alto, pero lo hemos podido contrarrestar bien",
      "Victoria relativamente fácil sin forzar la máquina",
    ],
  },

  references: [],
});

