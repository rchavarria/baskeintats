import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2025_03_03_valcude: Game = GameSchema.parse({
  id: "S45-liga-ahorramas-cadete-f2-j8",
  type: "game",
  season: "2024-25",
  date: "2025-03-03T17:30:00Z",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U16M",
    phase: "Fase 2",
    round: "J8",
  },

  venue: venues["valcude"],

  home: {
    club: teams["valcude"],
    category: "U16M",
    opponent: true,
    scores: [24, 10, 18, 18],
  },

  away: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [22, 21, 15, 21],
  },

  playerStats: {
    time: 7 * 60 + 2,
    fieldGoals: 1,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 2,
    plusMinus: 6,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/RBSUMMwuqgo",
    others: [],
  },

  recap: {
    title: "¡Primer partido con los cadetes!",
    lines: [
      "Y no con los de 1 año más, no. 2 años más, y dando el cayo",
      "Se nota el físico, el ritmo, diferentes formas de atacar y defender. Y que no se entiende bien con el equipo. Pero es el inicio nada más.",
    ],
  },

  references: [],
});

