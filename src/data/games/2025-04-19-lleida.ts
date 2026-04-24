import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_04_19_lleida: Game = GameSchema.parse({
  id: "S45-mhl-zaragoza-cuartos",
  season: "2024-25",
  date: "2025-04-19T07:30:00Z",
  type: "game",

  competition: {
    name: "MHL Zaragoza",
    category: "U15M",
    phase: "Eliminatorias",
    round: "Cuartos",
  },

  venue: venues["alberto-maestro"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [22, 19, 17, 4],
  },

  away: {
    club: teams["lleida"],
    category: "U15M",
    opponent: true,
    scores: [12, 8, 8, 11],
  },

  playerStats: {
    time: 19 * 60 + 27,
    fieldGoals: 4,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 2,
    plusMinus: 21,
    efficiency: 6,
  },

  videos: {
    official: "https://youtu.be/cuelRNI9j4s",
    others: [],
  },

  recap: {
    title: "¡Victoria importante!",
    lines: [
      "Más incertidumbre, pero está genial, porque son partidos con equipos nuevos, desconocidos, rivales inesperados que nos dan partidazos muy disfrutones",
    ],
  },

  references: [],
});

