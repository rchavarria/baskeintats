import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_05_04_salvador: Game = GameSchema.parse({
  id: "S34-torneo-salou-j2",
  type: "game",
  season: "2023-24",
  date: "2024-05-04T08:00:00Z",

  competition: {
    name: "Torneo Salou",
    category: "U14M",
    phase: "Grupos",
    round: "J2",
  },

  venue: venues["salou"],

  home: {
    club: teams["alcobendas"],
    category: "U13M",
    scores: [20, 13, 13, 10],
  },

  away: {
    club: teams["salvador"],
    category: "U14M",
    opponent: true,
    scores: [8, 4, 3, 10],
  },

  playerStats: {
    time: 8 * 60 + 56,
    fieldGoals: 4,
    threePointers: 0,
    freeThrows: { made: 1, attempted: 2 },
    faults: 2,
    plusMinus: 14,
    efficiency: 6,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "¡Ni pena ni gloria!",
    lines: [
      "Ganamos hasta jugando lesionados",
      "Al perder el primer partido, ya vamos a jugar contra rivales que no tienen el nivel, así que se nos va a quedar un torneo muy flojucho",
    ],
  },

  references: [],
});
