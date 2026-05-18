import type {Game} from "../../model/GameSchema.ts";
import {GameSchema} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";
import {EmptyPlayerStats} from "../../model/PlayerSchema.ts";

export const game_2025_07_26_eoss_bogans: Game = GameSchema.parse({
  id: "S45-eoss-j4",
  type: "game",
  season: "2024-25",
  date: "2025-07-26T15:00:00Z",

  competition: {
    name: "End of Summer Slam - 9th - D3",
    category: "U16M",
    phase: "Eliminatorias",
    round: "Semis",
  },

  venue: venues["orange"],

  home: {
    club: teams["dme-spain"],
    category: "U14M",
    scores: [ 61 ],
  },

  away: {
    club: teams["usa-bogans"],
    category: "U14M",
    opponent: true,
    scores: [ 58 ],
  },

  playerStats: EmptyPlayerStats,

  videos: {
    official: "https://youtu.be/IyMW6v5cOc8",
    others: [],
  },

  recap: {
    title: "Eliminatoria de semis, superada",
    lines: [
      "Esta ya ha estado más ajustada, podría haber pasado cualquier cosa en este partido",
      "Lo ganan por la última canasta en los últimos momentos, pillamos rebote... sacamos fuera... y de 3",
    ],
  },

  references: [],

});
