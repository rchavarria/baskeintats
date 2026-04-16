import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import type { AdvancedGame } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_12_20_caja_87_sevilla: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-torneo-teruel-j4",
  type: "advanced-game",
  season: "2025-26",
  date: "2025-12-20T18:30:00Z",

  competition: {
    name: "XVII Torneo Tocando las Estrellas",
    category: "U15M",
    phase: "Semis",
    round: "5º",
  },

  venue: venues["alcala-selva"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [14, 15, 10, 22],
  },

  away: {
    club: teams["sevilla"],
    category: "U15M",
    scores: [5, 19, 15, 18],
  },

  playerStats: {
    time: 16 * 60 + 40,
    fieldGoals: {
      made: 1,
      attempted: 3,
    },
    threePointers: {
      made: 0,
      attempted: 1,
    },
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    rebounds: {
      offensive: 1,
      defensive: 4,
    },
    assists: 0,
    steals: 2,
    turnovers: 0,
    blocks: {
      made: 1,
      received: 0,
    },
    faults: {
      made: 2,
      received: 0,
    },
    plusMinus: 3,
    efficiency: 6,
  },

  videos: {
    official: "https://youtu.be/GocKXmsrtjk",
    others: [
      {
        label: "en FFoFF",
        url: "https://youtu.be/y02mfmaqqpY",
      },
    ],
  },

  recap: {
    title: "¡Punto de inflexión!",
    lines: [
      "El partido comenzó con muy pocos puntos, pero luego conseguimos despegarnos, sacando una ventaja considerable, que parecía insalvable",
      "Pero no lo fue, los sevillanos redoblaron sus esfuerzos y, no solo consiguieron remontar, sino que llegaron a ponerse por delante",
      "Y ahí apareció la garra del equipo",
      "No se amedrentaron, siguieron luchando y consiguieron darle la vuelta",
      "El final fue apoteósico, un final de auténtica competición. Pocos puntos por delante, ellos haciendo faltas rápidas y jugándose triples",
      "Pero no pudieron contra nosotros. Incluso en la última jugada, con 4 puntos de ventaja y 3 o 4 segundos restantes, ni siquiera defendimos al tirador, dejándole un tiro cómodo que falló",
    ],
  },

  references: [],
});
