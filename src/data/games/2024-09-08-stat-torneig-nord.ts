import type {Stats} from "../../model/StatsSchema.ts";
import {StatsSchema} from "../../model/StatsSchema.ts";
import {game_2024_09_06_sabadell} from "./2024-09-06-sabadell.ts";
import {game_2024_09_07_joventut} from "./2024-09-07-joventut.ts";
import {game_2024_09_07_barca} from "./2024-09-07-barca.ts";
import {game_2024_09_08_mataro} from "./2024-09-08-mataro.ts";

export const stat_2024_09_08_torneig_nord: Stats = StatsSchema.parse({
  id: "S45-stat-torneig-nord",
  type: "stats",
  season: "2024-25",
  date: "2024-09-08T00:00:00Z",

  title: "Torneig Nord",
  category: "U14M",

  games: [
    game_2024_09_06_sabadell,
    game_2024_09_07_joventut,
    game_2024_09_07_barca,
    game_2024_09_08_mataro,
  ],

  description: [
    "Estadísticas de los partidos del torneo",
  ],

  references: [
    {
      type: "social-media",
      label: "IG oficial",
      url: "https://www.instagram.com/torneignord",
    },
  ],
});

