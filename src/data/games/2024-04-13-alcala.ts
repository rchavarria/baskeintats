import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_04_13_alcala: Game = GameSchema.parse({
  id: "S34-liga-bronce-f3-j2",
  type: "game",
  season: "2023-24",
  date: "2024-04-13T16:00:00Z",

  competition: {
    name: "Liga Ahorramás - Bronce",
    category: "U13M",
    phase: "Fase 3",
    round: "J2",
  },

  venue: venues["gredos"],

  home: {
    club: teams["alcala"],
    category: "U14M",
    opponent: true,
    scores: [13, 20, 15, 19],
  },

  away: {
    club: teams["alcobendas"],
    category: "U13M",
    scores: [26, 14, 8, 17],
  },

  playerStats: {
    time: 28 * 60 + 50,
    fieldGoals: 8,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 1,
    },
    faults: 0,
    plusMinus: 7,
    efficiency: 15,
  },

  videos: {
    official: "https://youtu.be/Moc3KLRPgc4",
    others: [],
  },

  recap: {
    title: "¡Por qué poquito!",
    lines: [
      "Una lástima que se nos escapara este partido. Le teníamos muchas, pero muchas ganas. Pero no ha podido ser por muy poquito",
      "La sensación es que nos ganan, sí, pero a base de golpes",
      "Si hubiéramos ganado hubiera sido perfecto, porque el equipo celebró un cumple al terminar el partido, y hubiera estado muy bien celebrar también una victoria",
    ],
  },

  references: [],
});

