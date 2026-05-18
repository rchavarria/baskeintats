import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";
import {EmptyPlayerStats} from "../../model/PlayerSchema.ts";

export const game_2024_05_18_krvavec: Game = GameSchema.parse({
  id: "S34-torneo-ardres-j1",
  type: "game",
  season: "2023-24",
  date: "2024-05-18T14:20:00Z",

  competition: {
    name: "Torneo Internacional TIHS (Ardres, Francia)",
    category: "U13M",
    phase: "Grupos",
    round: "J1",
  },

  venue: venues["ardres"],

  home: {
    club: teams["seleccion-madrid"],
    category: "U13M",
    scores: [46],
  },

  away: {
    club: teams["krvavec"],
    category: "U13M",
    opponent: true,
    scores: [18],
  },

  playerStats: EmptyPlayerStats,

  videos: {
    official: "https://youtu.be/tBVY6O_EZyk",
    others: [],
  },

  recap: {
    title: "¡Buen comienzo!",
    lines: [],
  },

  references: [],

});
