import type { FriendlyGame } from "../../model/GameSchema.ts";
import { FriendlyGameSchema } from "../../model/GameSchema.ts";
import { EmptyPlayerStats } from "../../model/PlayerSchema.ts";
import { teams } from "../teams.ts";
import { venues } from "../venues.ts";

export const game_2026_09_18_alcobendas_u22: FriendlyGame = FriendlyGameSchema.parse({
  id: "S67-amistoso-alcobendas-u22",
  type: "friendly-game",
  season: "2026-27",
  date: "2026-09-18T21:00:00Z",

  competition: {
    name: "Amistoso",
    category: "U22M",
    phase: "Pretemporada",
    round: "",
  },

  venue: venues.antela,

  home: {
    club: teams.alcobendas,
    category: "U18M",
    scores: [14, 28, 8, 13],
  },

  away: {
    club: teams.alcobendas,
    category: "U22M",
    opponent: true,
    scores: [14, 15, 12, 18],
  },

  playerStats: EmptyPlayerStats,

  videos: {
    official: "https://youtu.be/zNDdmsNhZF4",
    others: [],
  },

  recap: {
    title: "Todo queda en casa",
    lines: [
      "Un amistoso como debe ser, no hizo falta ni siquiera árbitro",
      "Cada equipo sabía exactamente donde debía estar",
      "Partido intenso, con mucho ritmo, pero respetando a los compañeros de club",
      "Al final nos lo llevamos nosotros, pero por muy poco. A los U22 les faltaban 3 de los mejores",
    ],
  },

  references: [],
});
