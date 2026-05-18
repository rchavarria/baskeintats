import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_09_07_barca: Game = GameSchema.parse({
  id: "S45-torneig-nord-j3",
  type: "game",
  season: "2024-25",
  date: "2024-09-07T17:15:00Z",

  competition: {
    name: "Torneig Nord",
    category: "U14M",
    phase: "Eliminatorias",
    round: "Semis",
  },

  venue: venues["peralada"],

  home: {
    club: teams["barca"],
    category: "U14M",
    opponent: true,
    scores: [25, 23, 33, 21],
  },

  away: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [10, 10, 7, 3],
  },

  playerStats: {
    time: 21 * 60 + 56,
    fieldGoals: 1,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 1,
    plusMinus: -25,
    efficiency: 1,
  },

  videos: {
    official: "https://youtu.be/avAsi4Zb63E",
    others: [
      {
        label: "canal CBA",
        url: "https://youtu.be/ru_tEEDFiXI",
      },
    ],
  },

  recap: {
    title: "¡Bofetón de realidad!",
    lines: [
      "Justo como se esperaba, el Barça nos gana de forma clara. Los dos primeros cuartos pudimos aguantar el tipo, pero después del descanso nos vinimos abajo, nos pudo el cansacio o nos pudo la presión, pero nos quedamos sin ideas para hacerle frente",
      "💪 No queda otra nada más que seguir trabajando, sabemos a qué nivel pueden jugar los chicos de nuestra edad. ¡A por ellos!",
    ],
  },

  references: [],
});

