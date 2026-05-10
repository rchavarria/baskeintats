import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_02_04_fuenlabrada: Game = GameSchema.parse({
  id: "S34-liga-oro-f2-j4",
  type: "game",
  season: "2023-24",
  date: "2024-02-04T12:30:00Z",
  favourite: true,

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U14M",
    phase: "Fase 2",
    round: "J4",
  },

  venue: venues["arroyo"],

  home: {
    club: teams["fuenlabrada"],
    category: "U14M",
    opponent: true,
    scores: [14, 11, 17, 21],
  },

  away: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [15, 12, 33, 13],
  },

  playerStats: {
    time: 3 * 60 + 11,
    fieldGoals: 0,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 0,
    plusMinus: -6,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "Venimos de hacer un partidazo contra el Madrid, y en éste los chavales se vuelven a salir",
    lines: [],
  },

  references: [],
});

