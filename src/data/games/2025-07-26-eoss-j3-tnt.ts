import type {Game} from "../../model/GameSchema.ts";
import {GameSchema} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";
import {EmptyPlayerStats} from "../../model/PlayerSchema.ts";

export const game_2025_07_26_eoss_tnt: Game = GameSchema.parse({
  id: "S45-eoss-j3",
  type: "game",
  season: "2024-25",
  date: "2025-07-26T13:00:00Z",

  competition: {
    name: "DME Team Camp",
    category: "U16M",
    phase: "End of Summer Slam - 9th - D3 - Eliminatorias",
    round: "Cuartos",
  },

  venue: venues["orange"],

  home: {
    club: teams["dme-spain"],
    category: "U14M",
    scores: [ 52 ],
  },

  away: {
    club: teams["usa-tnt"],
    category: "U14M",
    opponent: true,
    scores: [ 17 ],
  },

  playerStats: EmptyPlayerStats,

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "Eliminatoria de cuartos, superada",
    lines: [],
  },

  references: [],

});
