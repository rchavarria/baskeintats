import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_09_06_sabadell: Game = GameSchema.parse({
  id: "S45-torneig-nord-j1",
  type: "game",
  season: "2024-25",
  date: "2024-09-06T09:45:00Z",

  competition: {
    name: "Torneig Nord",
    category: "U15M",
    phase: "Fase grupos",
    round: "Jornada 1",
  },

  venue: venues["peralada"],

  home: {
    club: teams["sabadell"],
    category: "U15M",
    opponent: true,
    scores: [7, 17, 7, 14],
  },

  away: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [17, 17, 13, 8],
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
    official: "https://youtu.be/DIbQ0Eu33A4",
    others: [
      {
        label: "canal CBA",
        url: "https://youtu.be/fATAtNJF8z4",
      },
    ],
  },

  recap: {
    title: "Aunque ganamos el partido, el equipo no jugó bien. Era su primer partido como equipo, y se notó.",
    lines: [],
  },

  references: [
    {
      type: "photo",
      label: "Taponaco",
      url: "https://www.instagram.com/p/C_nke3pI__K/?img_index=13",
    },
  ],
});

