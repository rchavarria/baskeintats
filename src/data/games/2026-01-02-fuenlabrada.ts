import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2026_01_02_fuenlabrada: Game = GameSchema.parse({
  id: "S56-torneo-reyes-j1",
  season: "2025-26",
  date: "2026-01-02T09:30:00Z",
  status: "played",

  competition: {
    name: "I Torneo de Reyes",
    category: "U15M",
    phase: "Grupos",
    round: "J1",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [18, 32, 26, 21],
  },

  away: {
    club: teams["fuenlabrada"],
    category: "U15M",
    scores: [13, 21, 17, 13],
  },

  playerStats: {
    time: 0,
    fieldGoals: 0,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 0,
    plusMinus: 0,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/YhmyPUaVlt0",
    others: [],
  },

  recap: {
    title: "¡Relativamente fácil!",
    lines: [
      "El partido comenzó más o menos igualado",
      "Pero pronto se decantó hacia nosotros",
      "El resultado dice que fue fácil, pero lo que creo es que los cachorros jugaron muy muy bien, en equipo, y con mucha intensidad",
      "El rival tenía muy buenos fundamentos y algunos jugadores demostraban tener una técnica individual muy depurada",
    ],
  },

  references: [],
});

