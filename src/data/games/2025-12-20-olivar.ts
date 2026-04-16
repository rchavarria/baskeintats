import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import type { AdvancedGame } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_12_20_olivar: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-torneo-teruel-j3",
  type: "advanced-game",
  season: "2025-26",
  date: "2025-12-20T10:00:00Z",

  competition: {
    name: "XVII Torneo Tocando las Estrellas",
    category: "U15M",
    phase: "Grupos",
    round: "J3",
  },

  venue: venues["manzanera"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [16, 19, 22, 15],
  },

  away: {
    club: teams["olivar"],
    category: "U15M",
    opponent: true,
    scores: [14, 14, 16, 10],
  },

  playerStats: {
    time: 29 * 60 + 46,
    fieldGoals: {
      made: 3,
      attempted: 11,
    },
    threePointers: {
      made: 0,
      attempted: 0,
    },
    freeThrows: {
      made: 4,
      attempted: 6,
    },
    rebounds: {
      offensive: 5,
      defensive: 6,
    },
    assists: 0,
    steals: 0,
    turnovers: 4,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 2,
      received: 0,
    },
    plusMinus: 2,
    efficiency: 8,
  },

  videos: {
    official: "https://youtu.be/fHdKojFegtw",
    others: [
      {
        label: "en FFoFF",
        url: "https://youtu.be/_r30DhjQJng",
      },
    ],
  },

  recap: {
    title: "¡Salvada!",
    lines: [
      "Muy mal partido del cachorro",
      "Hay días buenos y días malos. Esta noche ha descansado muy mal, y eso se ha notado en el partido de la mañana",
      "Pero no hay que bajar los brazos, hay que seguir y apoyarse en los compañeros que han hecho un trabajo excepcional",
      "Y con este partido, termina la fase de grupos",
      "Pasamos segundos y lucharemos por el 5º puesto del campeonato",
    ],
  },

  references: [],
});

