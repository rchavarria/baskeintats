import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2024_01_21_alcala: Game = GameSchema.parse({
  id: "S34-liga-plata-f2-j2",
  type: "game",
  season: "2023-24",
  date: "2024-01-21T13:15:00Z",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U14M",
    phase: "Fase 2",
    round: "J2",
  },

  venue: venues["espartales"],

  home: {
    club: teams["alcala"],
    category: "U14M",
    opponent: true,
    scores: [12, 22, 18, 21],
  },

  away: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [17, 15, 24, 9],
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
    official: "https://youtu.be/Vrj8ahp7eA8",
    others: [],
  },

  recap: {
    title: "Otra vez lo mismo, nos han ganado por la fuerza bruta. Jugamos mejor que ellos, pero hay mucha diferencia física, y la usan",
    lines: [],
  },

  references: [],
});

