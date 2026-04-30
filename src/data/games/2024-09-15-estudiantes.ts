import {FriendlyGameSchema} from "../../model/GameSchema.ts";
import type {FriendlyGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_09_15_estudiantes: FriendlyGame = FriendlyGameSchema.parse({
  id: "S45-amistoso-pretemporada-estudiantes",
  type: "friendly-game",
  season: "2024-25",
  date: "2024-09-15T11:30:00Z",

  competition: {
    name: "Amistoso de pretemporada",
    category: "U14M",
    phase: "",
    round: "",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [0, 0, 0, 65],
  },

  away: {
    club: teams["estudiantes"],
    category: "U14M",
    opponent: true,
    scores: [0, 0, 0, 57],
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
    official: "https://youtu.be/fgC1TllhLkg",
    others: [],
  },

  recap: {
    title: "Amistoso de gran nivel, si todo va como es debido, Estudiantes será un duro rival a final de temporada",
    lines: [],
  },

  references: [],
});

