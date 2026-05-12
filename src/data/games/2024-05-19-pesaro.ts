import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";
import {EmptyPlayerStats} from "../../model/PlayerSchema.ts";

export const game_2024_05_19_pesaro: Game = GameSchema.parse({
  id: "S34-torneo-ardres-j3",
  type: "game",
  season: "2023-24",
  date: "2024-05-19T07:50:00Z",

  competition: {
    name: "Torneo Internacional TIHS (Ardres, Francia)",
    category: "U13M",
    phase: "Grupos",
    round: "J3",
  },

  venue: venues["ardres"],

  home: {
    club: teams["seleccion-madrid"],
    category: "U13M",
    scores: [35],
  },

  away: {
    club: teams["pesaro"],
    category: "U13M",
    opponent: true,
    scores: [14],
  },

  playerStats: EmptyPlayerStats,

  videos: {
    official: "https://youtu.be/KDZ4BxRQEMc",
    others: [],
  },

  recap: {
    title: "Otra victoria más, a por el último",
    lines: [],
  },

  references: [],

});
