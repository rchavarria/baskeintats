import type { FriendlyGame } from "../../model/GameSchema.ts";
import { FriendlyGameSchema } from "../../model/GameSchema.ts";
import { EmptyPlayerStats } from "../../model/PlayerSchema.ts";
import { teams } from "../teams.ts";
import { venues } from "../venues.ts";

export const game_2026_09_23_alcobendas_2010: FriendlyGame = FriendlyGameSchema.parse({
  id: "S67-amistoso-alcobendas-2010",
  type: "friendly-game",
  season: "2026-27",
  date: "2026-09-23T18:00:00Z",

  competition: {
    name: "Amistoso",
    category: "U17M",
    phase: "Pretemporada",
    round: "",
  },

  venue: venues.ideo,

  home: {
    club: teams.alcobendas,
    category: "U16M",
    scores: [26, 30, 6, 11],
  },

  away: {
    club: teams.alcobendas,
    category: "U17M",
    opponent: true,
    scores: [31, 21, 13, 11],
  },

  playerStats: EmptyPlayerStats,

  videos: {
    official: "https://youtu.be/60LpdYMcLd0",
    others: [
      {
        label: "Canal CBA",
        url: "https://youtu.be/b8TqLUu9CmY",
      },
    ],
  },

  recap: {
    title: "Otro amistoso con los compañeros",
    lines: [
      "Nos hacía falta jugar partidos amistosos, tenemos que ir cogiendo ritmo",
      "Lo ideal sería poder jugar otro, pero ya no hay tiempo",
      "Este amistoso ha estado algo mejor, pero todavía tenemos unos cuantos agujeros que nos pueden pasar factura",
      "No estamos muy atentos a los rebotes, y tampoco rápidos en el balance, y muy flojos en defensa. Hay que meter más hostias",
    ],
  },

  references: [],
});
