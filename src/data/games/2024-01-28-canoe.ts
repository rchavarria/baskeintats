import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2024_01_28_canoe: Game = GameSchema.parse({
  id: "S34-liga-plata-f2-j3",
  type: "game",
  season: "2023-24",
  date: "2024-01-28T13:15:00Z",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U14M",
    phase: "Fase 2",
    round: "J3",
  },

  venue: venues["agustiniano"],

  home: {
    club: teams["canoe"],
    category: "U14M",
    opponent: true,
    scores: [15, 23, 32, 17],
  },

  away: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [15, 14, 16, 13],
  },

  playerStats: {
    time: 0,
    fieldGoals: 0,
    threePointers: 0,
    freeThrows: { made: 0, attempted: 0 },
    faults: 0,
    plusMinus: 0,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/aUNTlpKaRVI",
    others: [],
  },

  recap: {
    title: "Esto empieza a doler ya, no pueden con los mayores, la diferencia física se nota muchísimo",
    lines: [
      "Hoy un padre ha perdido un poco los nervios ya, porque nuestros jugadores se llevan unos golpes y unos empujones que no es normal",
    ],
  },

  references: [],
});

