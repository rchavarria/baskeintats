import type {Game} from "../../model/GameSchema.ts";
import {GameSchema} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";
import {EmptyPlayerStats} from "../../model/PlayerSchema.ts";

export const game_2025_07_26_eoss_spartans: Game = GameSchema.parse({
  id: "S45-eoss-j1",
  type: "game",
  season: "2024-25",
  date: "2025-07-26T09:00:00Z",

  competition: {
    name: "End of Summer Slam - 9th - D3",
    category: "U16M",
    phase: "Grupos",
    round: "J1",
  },

  venue: venues["orange"],

  home: {
    club: teams["dme-spain"],
    category: "U14M",
    scores: [ 68 ],
  },

  away: {
    club: teams["usa-spartans"],
    category: "U14M",
    opponent: true,
    scores: [ 20 ],
  },

  playerStats: EmptyPlayerStats,

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "Primer partido, de grupos, a la saca",
    lines: [],
  },

  references: [],

});
