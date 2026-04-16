import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import type { AdvancedGame } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_12_19_unicaja_malaga: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-torneo-teruel-j1",
  type: "advanced-game",
  season: "2025-26",
  date: "2025-12-19T10:00:00Z",

  competition: {
    name: "XVII Torneo Tocando las Estrellas",
    category: "U15M",
    phase: "Grupos",
    round: "J1",
  },

  venue: venues["rubielos"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [17, 11, 15, 11],
  },

  away: {
    club: teams["malaga"],
    category: "U15M",
    opponent: true,
    scores: [13, 14, 16, 15],
  },

  playerStats: {
    time: 34 * 60 + 51,
    fieldGoals: {
      made: 8,
      attempted: 13,
    },
    threePointers: {
      made: 0,
      attempted: 1,
    },
    freeThrows: {
      made: 0,
      attempted: 4,
    },
    rebounds: {
      offensive: 4,
      defensive: 0,
    },
    assists: 0,
    steals: 4,
    turnovers: 5,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 3,
      received: 0,
    },
    plusMinus: -3,
    efficiency: 9,
  },

  videos: {
    official: "https://youtu.be/BO3cO8X15s4",
    others: [
      {
        label: "en FFoFF",
        url: "https://youtu.be/woi6CHLAPZ4",
      },
    ],
  },

  recap: {
    title: "¡Partidazo igualadísimo!",
    lines: [
      "Éste era el partido del torneo, aquí nos lo jugábamos todo, pero no pudo ser",
      "Los cachorros han estado muy bien, intensos todo el partido, no había momento de descanso",
      "Pero hemos fallado muchísimo (aunque Málaga tampoco ha estado muy acertado), y al final nos han ganado por muy poquito",
      "A aprender de este partido contra un cantera ACB",
    ],
  },

  references: [],
});

