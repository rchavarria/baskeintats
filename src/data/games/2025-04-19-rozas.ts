import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_04_19_rozas: Game = GameSchema.parse({
  id: "S45-mhl-zaragoza-semis",
  season: "2024-25",
  date: "2025-04-19T13:30:00Z",
  type: "game",

  competition: {
    name: "MHL Zaragoza",
    category: "U15M",
    phase: "Eliminatorias",
    round: "Semis",
  },

  venue: venues["alberto-maestro"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [18, 13, 17, 10],
  },

  away: {
    club: teams["rozas"],
    category: "U15M",
    opponent: true,
    scores: [19, 10, 10, 23],
  },

  playerStats: {
    time: 37 * 60 + 10,
    fieldGoals: 1,
    threePointers: 0,
    freeThrows: {
      made: 1,
      attempted: 4,
    },
    faults: 3,
    plusMinus: 3,
    efficiency: -3,
  },

  videos: {
    official: "https://youtu.be/6azmY_4yizs",
    others: [],
  },

  recap: {
    title: "¡Otra vez por muy poco!",
    lines: [
      "Qué rabia, por muy poco",
      "En un momento del partido llevábamos una ventaja muy amplia, les estábamos pasando por encima, pero nos relajamos, o no supimos reaccionar a su cambio de juego",
      "Y terminaron llevándose el partido ellos",
    ],
  },

  references: [],
});

