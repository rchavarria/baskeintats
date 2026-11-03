import type { FriendlyGame } from "../../model/GameSchema.ts";
import { FriendlyGameSchema } from "../../model/GameSchema.ts";
import { EmptyPlayerStats } from "../../model/PlayerSchema.ts";
import { teams } from "../teams.ts";
import { venues } from "../venues.ts";

export const game_2026_11_01: FriendlyGame = FriendlyGameSchema.parse({
  id: "S67-amistoso-seleccion",
  type: "friendly-game",
  season: "2026-27",
  date: "2026-11-01T12:00:00Z",

  competition: {
    name: "Amistoso",
    category: "U16M",
    phase: "CESA 2027",
    round: "Preselecciones",
  },

  venue: venues["caja-magica"],

  home: {
    club: teams["seleccion-madrid"],
    category: "U16M",
    opponent: true,
    scores: [0, 0, 0, 0],
  },

  away: {
    club: teams["seleccion-madrid"],
    category: "U18M",
    scores: [0, 0, 0, 0],
  },

  playerStats: EmptyPlayerStats,

  videos: {
    official: "https://youtu.be/-",
    others: [],
  },

  recap: {
    title: "Blancos contra Rojos",
    lines: ["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  },

  references: [],
});
