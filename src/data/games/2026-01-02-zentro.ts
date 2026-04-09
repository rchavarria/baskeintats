import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2026_01_02_zentro: Game = GameSchema.parse({
  id: "S56-torneo-reyes-j2",
  season: "2025-26",
  date: "2026-01-02T15:30:00Z",
  status: "played",

  competition: {
    name: "I Torneo de Reyes",
    category: "U15M",
    phase: "Grupos",
    round: "J2",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [18, 18, 18, 27],
  },

  away: {
    club: teams["zentro"],
    category: "U15M",
    scores: [15, 15, 14, 20],
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
    official: "https://youtu.be/o8c1NzabIKA",
    others: [],
  },

  recap: {
    title: "¡Ni con negros ganan!",
    lines: [
      "Se las prometían muy felices, y el partido fue bastante igualado, ninguno de los dos equipos conseguía romper el partido, aunque poco a poco nos íbamos distanciando",
      "Al final, no pudieron hacer nada, ni con negros han sido capaces de ganarnos",
      "Partido duro, y feo, con muchos golpes, donde alguno casi se queda sin ojos de un manotazo, o sale con un esguince",
    ],
  },

  references: [
    {
      icon: "📸",
      label: "Algunas fotos durante la fase de grupos",
      url: "https://www.instagram.com/p/DTEKeIYDSr9",
    },
    {
      icon: "📱",
      label: "Así quedan los cruces después de la fase de grupos",
      url: "https://www.instagram.com/p/DTDN-zajHgV",
    },
  ],
});

