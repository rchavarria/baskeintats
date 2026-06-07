import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2025_03_22_torrejon: Game = GameSchema.parse({
  id: "S45-liga-ahorramas-play-in",
  type: "game",
  season: "2024-25",
  date: "2025-03-22T17:30:00Z",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U16M",
    phase: "Play-in",
    round: "J1",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [22, 13, 20, 19],
  },

  away: {
    club: teams["torrejon"],
    category: "U16M",
    opponent: true,
    scores: [15, 17, 19, 19],
  },

  playerStats: {
    time: 9 * 60 + 34,
    fieldGoals: 1,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 2,
    plusMinus: 1,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "¡Subidón!",
    lines: [
      "Partidazo lleno de tensión",
      "Ambos equipos se jugaban nada más y nada menos que una plaza en Oro para el año que viene",
      "¡Y es para Alcobendas!",
      "Aportamos lo que pudimos, son dos años mayores, pero muy agradecidos con la confianza que nos han dado desde el club",
    ],
  },

  references: [],
});

