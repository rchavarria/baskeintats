import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_04_28_alcorcon: Game = GameSchema.parse({
  id: "S34-liga-oro-playoffs-j1",
  type: "game",
  season: "2023-24",
  date: "2024-04-28T09:30:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U14M",
    phase: "Playoffs",
    round: "J1",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [32, 26, 21, 15],
  },

  away: {
    club: teams["alcorcon"],
    category: "U14M",
    opponent: true,
    scores: [13, 14, 14, 23],
  },

  playerStats: {
    time: 13 * 60 + 30,
    fieldGoals: 1,
    threePointers: 0,
    freeThrows: { made: 0, attempted: 0 },
    faults: 1,
    plusMinus: -2,
    efficiency: 1,
  },

  videos: {
    official: "https://youtu.be/RrI--caf0KQ",
    others: [],
  },

  recap: {
    title: "Precioso",
    lines: [
      "Menudo partidazo se han marcado, y después de un parón un poquito largo. Hemos pasado por encima del rival",
      "Esta victoria pone la eliminatoria muy de cara para nosotros",
    ],
  },

  references: [],
});
