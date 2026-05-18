import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_05_05_rozas: Game = GameSchema.parse({
  id: "S34-torneo-salou-j3",
  type: "game",
  season: "2023-24",
  date: "2024-05-05T10:00:00Z",

  competition: {
    name: "Torneo Salou",
    category: "U14M",
    phase: "Grupos",
    round: "J3",
  },

  venue: venues["jaume-i"],

  home: {
    club: teams["alcobendas"],
    category: "U13M",
    scores: [18, 8, 12, 4],
  },

  away: {
    club: teams["rozas"],
    category: "U14M",
    opponent: true,
    scores: [4, 7, 10, 1],
  },

  playerStats: {
    time: 10 * 60 + 6,
    fieldGoals: 4,
    threePointers: 0,
    freeThrows: { made: 0, attempted: 0 },
    faults: 1,
    plusMinus: 4,
    efficiency: 7,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "¡Se acabó la pesadilla!",
    lines: [
      "No sé qué equipo de Las Rozas es éste, pero no ha servido de nada",
      "Además, han jugado en la calle, con el peligro de caerse y hacerse más daño, y ya nos vamos con uno con un esguince",
    ],
  },

  references: [],
});
