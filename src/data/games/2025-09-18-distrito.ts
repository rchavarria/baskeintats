import {FriendlyGameSchema} from "../../model/GameSchema.ts";
import type {FriendlyGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2025_09_18_distrito: FriendlyGame = FriendlyGameSchema.parse({
  id: "S56-amistoso-distrito",
  type: "friendly-game",
  season: "2025-26",
  date: "2025-09-18T18:00:00Z",

  competition: {
    name: "Amistoso de pretemporada",
    category: "U15M",
    phase: "",
    round: "",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [24, 17, 23, 24],
  },

  away: {
    club: teams["distrito"],
    category: "U15M",
    opponent: true,
    scores: [5, 11, 17, 17],
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
    official: "https://youtu.be/6Qb2DJG99Bw",
    others: [],
  },

  recap: {
    title: "Victoria cómoda",
    lines: [
      "Pensábamos que vendrían los de 2010, pero ha sido un partido contra los de nuestra generación, y no han tenido nada que hacer",
    ],
  },

  references: [],

});

