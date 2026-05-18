import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_05_26_zentro: Game = GameSchema.parse({
  id: "S34-liga-oro-f3-j1",
  type: "game",
  season: "2023-24",
  date: "2024-05-26T16:00:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U14M",
    phase: "Fase 3",
    round: "J1",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [28, 18, 23, 18],
  },

  away: {
    club: teams["zentro"],
    category: "U14M",
    opponent: true,
    scores: [15, 12, 11, 7],
  },

  playerStats: {
    time: 8 * 60 + 56,
    fieldGoals: 5,
    threePointers: 0,
    freeThrows: { made: 0, attempted: 5 },
    faults: 0,
    plusMinus: 13,
    efficiency: 5,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "Fácil después de todo",
    lines: [
      "Había un poco de miedo, por lo que nos podíamos encontrar, pero el partido ha sido flojo en todos los sentidos, y aún así hemos ganado con facilidad",
      "Esperaba más del rival, sobre todo, porque parece que todo el mundo quiere jugar allí la temporada que viene. ¿Por qué? Porque no debe ser a que tengan un equipazo",
      "Cuesta abajo y sin frenos",
    ],
  },

  references: [],
});
