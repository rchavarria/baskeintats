import type { FriendlyGame } from "../../model/GameSchema.ts";
import { FriendlyGameSchema } from "../../model/GameSchema.ts";
import { EmptyPlayerStats } from "../../model/PlayerSchema.ts";
import { teams } from "../teams.ts";
import { venues } from "../venues.ts";

export const game_2026_09_17_coslada: FriendlyGame = FriendlyGameSchema.parse({
  id: "S67-amistoso-coslada",
  type: "friendly-game",
  season: "2026-27",
  date: "2026-09-17T19:00:00Z",

  competition: {
    name: "Amistoso",
    category: "U16M",
    phase: "Pretemporada",
    round: "",
  },

  venue: venues.ferrandiz,

  home: {
    club: teams.alcobendas,
    category: "U16M",
    scores: [4, 19, 11, 13],
  },

  away: {
    club: teams.coslada,
    category: "U18M",
    opponent: true,
    scores: [27, 13, 14, 11],
  },

  playerStats: EmptyPlayerStats,

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "Primer partido... con muchos nervios",
    lines: ["..."],
  },

  references: [],
});
