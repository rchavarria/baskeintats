import type {Game} from "../../model/GameSchema.ts";
import {GameSchema} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";
import {EmptyPlayerStats} from "../../model/PlayerSchema.ts";

export const game_2025_07_26_eoss_florida: Game = GameSchema.parse({
  id: "S45-eoss-j2",
  type: "game",
  season: "2024-25",
  date: "2025-07-26T11:00:00Z",

  competition: {
    name: "End of Summer Slam - 9th - D3",
    category: "U16M",
    phase: "Grupos",
    round: "J2",
  },

  venue: venues["orange"],

  home: {
    club: teams["dme-spain"],
    category: "U14M",
    scores: [ 46 ],
  },

  away: {
    club: teams["usa-florida"],
    category: "U14M",
    opponent: true,
    scores: [ 33 ],
  },

  playerStats: EmptyPlayerStats,

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "Segundo partido, también a la saca",
    lines: [],
  },

  references: [],

});
