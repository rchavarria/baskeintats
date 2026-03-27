import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_03_12_distrito: Game = GameSchema.parse({
  id: "S5/6-league-play-in-j1",
  season: "2025-26",
  date: "2026-03-12T17:00:00Z",
  status: "played",

  competition: {
    name: "Liga Provincial",
    category: "U16M",
    phase: "Regular",
    round: "21",
  },

  venue: venues["antela"],

  home: {
    club: teams["distrito"],
    category: "U16M",
    scores: [ 18, 19, 24, 15 ],
  },

  away: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [ 22, 14, 20, 18 ],
  },
});
