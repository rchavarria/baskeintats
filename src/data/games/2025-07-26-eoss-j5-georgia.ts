import type {Game} from "../../model/GameSchema.ts";
import {GameSchema} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";
import {EmptyPlayerStats} from "../../model/PlayerSchema.ts";

export const game_2025_07_26_eoss_georgia: Game = GameSchema.parse({
  id: "S45-eoss-j5",
  type: "game",
  season: "2024-25",
  date: "2025-07-26T17:00:00Z",

  competition: {
    name: "DME Team Camp",
    category: "U16M",
    phase: "End of Summer Slam - 9th - D3 - Eliminatorias",
    round: "Final",
  },

  venue: venues["orange"],

  home: {
    club: teams["dme-spain"],
    category: "U14M",
    scores: [ 50 ],
  },

  away: {
    club: teams["usa-georgia"],
    category: "U14M",
    opponent: true,
    scores: [ 44 ],
  },

  playerStats: EmptyPlayerStats,

  videos: {
    official: "https://youtu.be/Frc1C8O4AY0",
    others: [],
  },

  recap: {
    title: "¡¡Final!!",
    lines: [
      "Y se llevan el campeonato, ¡¡toma ya!!",
    ],
  },

  references: [],

});
