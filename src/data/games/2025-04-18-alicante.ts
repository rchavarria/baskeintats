import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_04_18_alicante: Game = GameSchema.parse({
  id: "S45-mhl-zaragoza-j2",
  season: "2024-25",
  date: "2025-04-18T10:45:00Z",
  type: "game",

  competition: {
    name: "MHL Zaragoza",
    category: "U15M",
    phase: "Grupos",
    round: "J2",
  },

  venue: venues["san-agustin"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [20, 18, 22, 6],
  },

  away: {
    club: teams["alicante"],
    category: "U15M",
    opponent: true,
    scores: [12, 13, 6, 2],
  },

  playerStats: {
    time: 15 * 60 + 13,
    fieldGoals: 3,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 0,
    plusMinus: 22,
    efficiency: 6,
  },

  videos: {
    official: "https://youtu.be/7QBwLFPF0oY",
    others: [],
  },

  recap: {
    title: "¡Apisonadoraaa!",
    lines: [
      "No teníamos muchas referencias, y Alicante empezó muy fuerte, pero no pudieron aguantar la intensidad",
    ],
  },

  references: [],
});

