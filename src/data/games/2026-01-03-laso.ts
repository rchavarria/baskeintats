import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2026_01_03_laso: Game = GameSchema.parse({
  id: "S56-torneo-reyes-semis",
  season: "2025-26",
  date: "2026-01-03T19:30:00Z",
  status: "played",

  competition: {
    name: "I Torneo de Reyes",
    category: "U15M",
    phase: "Semis",
    round: "Semis",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [27, 26, 24, 22],
  },

  away: {
    club: teams["laso"],
    category: "U15M",
    scores: [23, 17, 11, 14],
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
    official: "https://youtu.be/lBHIC2PWlI0",
    others: [
      {
        label: "en FFoFF",
        url: "https://youtu.be/giQDdFOyRps",
      },
    ],
  },

  recap: {
    title: "¡Descafeinado!",
    lines: [
      "Ya está la academia haciendo cosas raras, bueno, las ha estado haciendo todo el torneo, no es novedad contra nosotros",
      "Laso ha venido al torneo con un equipo que es de chiste, casi ninguno de los oficiales ha venido, y ha traído a 3 infantiles",
      "Así le ha ido, solo han ganado un partido, y contra un equipo que ha resultado ser bastante flojo",
      "Pues nada, un paseíto por la cancha, y a un puntito de tener Manolitos",
    ],
  },

  references: [
    {
      icon: "📱",
      label: "Y después de estas eliminatorias, nos vamos a las finales",
      url: "https://www.instagram.com/p/DTELPY0jZaa",
    },
  ],
});

