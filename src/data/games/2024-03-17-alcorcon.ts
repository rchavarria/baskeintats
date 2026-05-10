import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_03_17_alcorcon: Game = GameSchema.parse({
  id: "S34-liga-oro-f2-j10",
  type: "game",
  season: "2023-24",
  date: "2024-03-17T10:00:00Z",
  favourite: true,

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U14M",
    phase: "Fase 2",
    round: "J10",
  },

  venue: venues["canaleja"],

  home: {
    club: teams["alcorcon"],
    category: "U14M",
    opponent: true,
    scores: [8, 21, 26, 10],
  },

  away: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [15, 15, 22, 24],
  },

  playerStats: {
    time: 2 * 60 + 43,
    fieldGoals: 0,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 1,
    plusMinus: -11,
    efficiency: -1,
  },

  videos: {
    official: "https://youtu.be/3kh6hJXmdHo",
    others: [],
  },

  recap: {
    title: "Lo han vuelto a hacer, han jugado fenomenal, superando sus propios miedos, remontando un partido dificilísimo.",
    lines: [
      "Esta victoria les da el cuarto puesto y el acceso directo a los playoffs 💪",
    ],
  },

  references: [],
});

