import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2023_12_17_torrejon: Game = GameSchema.parse({
  id: "S34-liga-bronce-f1-j10",
  type: "game",
  season: "2023-24",
  date: "2023-12-17T10:15:00Z",
  favourite: true,

  competition: {
    name: "Liga Ahorramás - Bronce",
    category: "U13M",
    phase: "Fase 1",
    round: "J10",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U13M",
    scores: [25, 25, 7, 0],
  },

  away: {
    club: teams["torrejon"],
    category: "U14M",
    opponent: true,
    scores: [3, 4, 0, 0],
  },

  playerStats: {
    time: 12 * 60 + 10,
    fieldGoals: 1,
    threePointers: 0,
    freeThrows: { made: 0, attempted: 0 },
    faults: 0,
    plusMinus: 18,
    efficiency: 2,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "¡Humillación! La peor derrota que he visto, y encima, a un equipo un año mayor que ellos, impresionante",
    lines: [
      "Y con este partido finalizamos la primera fase. La siguiente fase, subimos a plata 😍",
    ],
  },

  references: [],
});

