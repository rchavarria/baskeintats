import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2026_01_04_zentro: Game = GameSchema.parse({
  id: "S56-torneo-reyes-final",
  season: "2025-26",
  date: "2026-01-04T11:30:00Z",
  status: "played",

  competition: {
    name: "I Torneo de Reyes",
    category: "U15M",
    phase: "Final",
    round: "Final",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [13, 25, 19, 18],
  },

  away: {
    club: teams["zentro"],
    category: "U15M",
    scores: [27, 12, 15, 17],
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
    official: "https://youtu.be/X4X4D-rjXWw",
    others: [
      {
        label: "en FFoFF",
        url: "https://youtu.be/tKL-qWptzXo",
      },
    ],
  },

  recap: {
    title: "¡El día de la marmota!",
    lines: [
      "Nada, y que siguen sin poder con nosotros",
      "Este partido ya sí que les ha hecho daño de verdad",
      "Comenzaron ganando, y bien. Pero poco a poco, canasta a canasta, fuimos reduciendo la distancia, los cogimos, los adelantamos por muy poquito, y de ahí ya no nos bajamos",
      "Pero fue una final, finalísima, muy, muy igualada",
    ],
  },

  references: [
    {
      icon: "📸",
      label: "Galería fotográfica",
      url: "https://www.instagram.com/p/DTGIjnBjH2O/?img_index=12",
    },
  ],
});

