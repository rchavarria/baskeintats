import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2023_10_22_alcorcon: Game = GameSchema.parse({
  id: "S34-liga-oro-f1-j4",
  type: "game",
  season: "2023-24",
  date: "2023-10-22T09:15:00Z",
  favourite: true,

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U14M",
    phase: "Fase 1",
    round: "J4",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U14M",
    scores: [8, 26, 19, 26],
  },

  away: {
    club: teams["alcorcon"],
    category: "U14M",
    opponent: true,
    scores: [19, 9, 28, 15],
  },

  playerStats: {
    time: 4 * 60 + 53,
    fieldGoals: 0,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 1,
    plusMinus: 1,
    efficiency: -1,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "Primer partido con el equipo de un año más. Tomando contacto con ellos",
    lines: [],
  },

  references: [
    {
      type: "photo",
      label: "El fotógrafo de la federación estaba por allí para tomar esta foto con el cachorro al fondo",
      url: "https://flic.kr/p/2pb3dkj",
    },
  ],
});

