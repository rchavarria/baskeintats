import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";
import {EmptyPlayerStats} from "../../model/PlayerSchema.ts";

export const game_2024_05_19_guyane: Game = GameSchema.parse({
  id: "S34-torneo-ardres-j4",
  type: "game",
  season: "2023-24",
  date: "2024-05-19T09:30:00Z",

  competition: {
    name: "Torneo Internacional TIHS (Ardres, Francia)",
    category: "U13M",
    phase: "Grupos",
    round: "J4",
  },

  venue: venues["ardres"],

  home: {
    club: teams["seleccion-madrid"],
    category: "U13M",
    scores: [42],
  },

  away: {
    club: teams["guyane"],
    category: "U13M",
    opponent: true,
    scores: [14],
  },

  playerStats: EmptyPlayerStats,

  videos: {
    official: "https://youtu.be/bvGThfein8E",
    others: [],
  },

  recap: {
    title: "Invictos en la fase de grupos",
    lines: [],
  },

  references: [],

});
