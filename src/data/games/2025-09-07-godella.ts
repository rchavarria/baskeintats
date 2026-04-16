import {FriendlyGameSchema} from "../../model/GameSchema.ts";
import type {FriendlyGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2025_09_07_godella: FriendlyGame = FriendlyGameSchema.parse({
  id: "S56-amistoso-godella",
  type: "friendly-game",
  season: "2025-26",
  date: "2025-09-07T09:15:00Z",

  competition: {
    name: "Amistoso de pretemporada",
    category: "U16M",
    phase: "",
    round: "",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [21, 19, 14, 27],
  },

  away: {
    club: teams["godella"],
    category: "U16M",
    opponent: true,
    scores: [18, 23, 12, 8],
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
    official: "https://youtu.be/6Fx9dTeq1qQ",
    others: [],
  },

  recap: {
    title: "Amistoso contra un buen equipo valenciano",
    lines: [
      "Partido igualado hasta falta de 5 minutos, luego ya, entraron un par de triples seguidos y Godella no pudo hacer nada",
      "El entrenador salió contento, diciendo que las jugadas iban saliendo según las iba marcando",
    ],
  },

  references: [],

});

