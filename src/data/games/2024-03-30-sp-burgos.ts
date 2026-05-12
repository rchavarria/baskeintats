import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_03_30_sp_burgos: Game = GameSchema.parse({
  id: "S34-torneo-zaragoza-p5-8",
  type: "game",
  season: "2023-24",
  date: "2024-03-30T16:00:00Z",

  competition: {
    name: "Torneo Zaragoza",
    category: "U14M",
    phase: "Eliminatorias",
    round: "Puestos 5-8",
  },

  venue: venues["lanuza"],

  home: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [16, 22, 16, 15],
  },

  away: {
    club: teams["sp-burgos"],
    category: "U14M",
    opponent: true,
    scores: [12, 11, 8, 5],
  },

  playerStats: {
    time: 18 * 60 + 17,
    fieldGoals: 3,
    threePointers: 0,
    freeThrows: { made: 0, attempted: 0 },
    faults: 4,
    plusMinus: 16,
    efficiency: 2,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "Otra vez contra San Pablo Burgos",
    lines: [
      "Esta vez con los de 2010",
      "La anécdota del partido ha sido que el entrenador del Burgos se ha negado a saludar a uno de nuestros jugadores, han entrado en la disputa los padres del chico, luego los padres del Burgos, y han llegado a las manos",
      "Un espectáculo lamentable...",
    ],
  },

  references: [],
});

