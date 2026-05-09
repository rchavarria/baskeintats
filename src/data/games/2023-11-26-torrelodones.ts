import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2023_11_26_torrelodones: Game = GameSchema.parse({
  id: "S34-liga-bronce-f1-j8",
  type: "game",
  season: "2023-24",
  date: "2023-11-26T12:00:00Z",
  favourite: true,

  competition: {
    name: "Liga Ahorramás - Bronce",
    category: "U13M",
    phase: "Fase 1",
    round: "J8",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U13M",
    scores: [24, 24, 22, 2],
  },

  away: {
    club: teams["torrelodones"],
    category: "U13M",
    opponent: true,
    scores: [7, 8, 7, 0],
  },

  playerStats: {
    time: 20 * 60 + 45,
    fieldGoals: 4,
    threePointers: 0,
    freeThrows: { made: 0, attempted: 0 },
    faults: 0,
    plusMinus: 16,
    efficiency: 8,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "Partido más cómodo todavía que el anterior, cerrando marcador con mucha, mucha ventaja",
    lines: [],
  },

  references: [],
});

