import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import type { AdvancedGame } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_12_19_torrent: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-torneo-teruel-j2",
  type: "advanced-game",
  season: "2025-26",
  date: "2025-12-19T16:00:00Z",

  competition: {
    name: "XVII Torneo Tocando las Estrellas",
    category: "U15M",
    phase: "Grupos",
    round: "J2",
  },

  venue: venues["manzanera"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [31, 29, 20, 22],
  },

  away: {
    club: teams["torrent"],
    category: "U15M",
    opponent: true,
    scores: [17, 7, 22, 13],
  },

  playerStats: {
    time: 22 * 60 + 55,
    fieldGoals: {
      made: 4,
      attempted: 8,
    },
    threePointers: {
      made: 0,
      attempted: 2,
    },
    freeThrows: {
      made: 3,
      attempted: 5,
    },
    rebounds: {
      offensive: 2,
      defensive: 6,
    },
    assists: 3,
    steals: 4,
    turnovers: 1,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 5,
      received: 0,
    },
    plusMinus: 36,
    efficiency: 15,
  },

  videos: {
    official: "https://youtu.be/dhaKCVSxmi0",
    others: [
      {
        label: "en FFoFF",
        url: "https://youtu.be/9caUhu8NNYs",
      },
    ],
  },

  recap: {
    title: "¡Vamos!",
    lines: [
      "Parece que este era el partido más fácil del grupo",
      "Y los cachorros se han resarcido del de esta mañana, menuda paliza",
      "Y debería haber sido de mucho más, pero han aflojado muchísimo el ritmo, tanto, que yo les hubiera dado un toque. La segunda parte ha sido muy floja",
    ],
  },

  references: [],
});

