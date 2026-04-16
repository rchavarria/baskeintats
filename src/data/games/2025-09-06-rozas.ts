import {FriendlyGameSchema} from "../../model/GameSchema.ts";
import type {FriendlyGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2025_09_06_rozas: FriendlyGame = FriendlyGameSchema.parse({
  id: "S56-amistoso-rozas",
  type: "friendly-game",
  season: "2025-26",
  date: "2025-09-06T10:00:00Z",

  competition: {
    name: "Amistoso de pretemporada",
    category: "U15M",
    phase: "",
    round: "",
  },

  venue: venues["espiniella"],

  home: {
    club: teams["rozas"],
    category: "U15M",
    opponent: true,
    scores: [13, 15, 10, 12],
  },

  away: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [14, 30, 6, 16],
  },

  playerStats: {
    time: 0,
    fieldGoals: 0,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 0,
    plusMinus: 0,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/7JiUqmv74BU",
    others: [],
  },

  recap: {
    title: "Esperábamos un gran nivel, pero se desinfló",
    lines: [
      "Ya en el calentamiento... había solo 7 oponentes calentando",
      "Luego mejoró, pero faltaban 3 buenos jugadores del año anterior",
      "Al final, resultó ser un partido facilón, pero que nos sirve para ir poniéndonos a tono",
    ],
  },

  references: [],

});

