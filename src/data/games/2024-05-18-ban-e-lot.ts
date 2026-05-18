import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";
import {EmptyPlayerStats} from "../../model/PlayerSchema.ts";

export const game_2024_05_18_ban_e_lot: Game = GameSchema.parse({
  id: "S34-torneo-ardres-j2",
  type: "game",
  season: "2023-24",
  date: "2024-05-18T18:00:00Z",

  competition: {
    name: "Torneo Internacional TIHS (Ardres, Francia)",
    category: "U13M",
    phase: "Grupos",
    round: "J2",
  },

  venue: venues["ardres"],

  home: {
    club: teams["seleccion-madrid"],
    category: "U13M",
    scores: [53],
  },

  away: {
    club: teams["ban-e-lot"],
    category: "U13M",
    opponent: true,
    scores: [2],
  },

  playerStats: EmptyPlayerStats,

  videos: {
    official: "https://youtu.be/AJA19NLBupE",
    others: [],
  },

  recap: {
    title: "Parece que ha sido demasiado fácil",
    lines: [],
  },

  references: [],

});
