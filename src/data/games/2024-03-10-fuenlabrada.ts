import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_03_10_fuenlabrada: Game = GameSchema.parse({
  id: "S34-liga-oro-f2-j9",
  type: "game",
  season: "2023-24",
  date: "2024-03-10T12:00:00Z",
  favourite: true,

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U14M",
    phase: "Fase 2",
    round: "J9",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [14, 17, 19, 25, 9],
  },

  away: {
    club: teams["fuenlabrada"],
    category: "U14M",
    opponent: true,
    scores: [16, 22, 19, 18, 7],
  },

  playerStats: {
    time: 2 * 60 + 52,
    fieldGoals: 0,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 0,
    plusMinus: -4,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "¡WoW! Menudo último cuarto, remontando a tope, llegando a la prórroga, y rematando",
    lines: [
      "Increíble, si es que cuando se ponen, se ponen",
    ],
  },

  references: [],
});

