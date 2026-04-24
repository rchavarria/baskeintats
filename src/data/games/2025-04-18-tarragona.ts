import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_04_18_tarragona: Game = GameSchema.parse({
  id: "S45-mhl-zaragoza-j3",
  season: "2024-25",
  date: "2025-04-18T17:00:00Z",
  type: "game",

  competition: {
    name: "MHL Zaragoza",
    category: "U15M",
    phase: "Grupos",
    round: "J3",
  },

  venue: venues["alberto-maestro"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [27, 26, 12, 9],
  },

  away: {
    club: teams["tarragona"],
    category: "U15M",
    opponent: true,
    scores: [14, 14, 11, 10],
  },

  playerStats: {
    time: 23 * 60 + 47,
    fieldGoals: 5,
    threePointers: 0,
    freeThrows: {
      made: 1,
      attempted: 7,
    },
    faults: 1,
    plusMinus: 25,
    efficiency: 3,
  },

  videos: {
    official: "https://youtu.be/cWGdAE6Q8fQ",
    others: [],
  },

  recap: {
    title: "¡Una grata sorpresa!",
    lines: [
      "Por los partidos anteriores, este partido pintaba a que iba a ser muy igualado",
      "Y así lo creían ellos también, porque se pusieron muy, pero muy, nerviosos cuando vieron que no, que en realidad éramos superiores y no tenían ninguna opción contra nosotros",
    ],
  },

  references: [],
});

