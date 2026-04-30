import type {Stats} from "../../model/StatsSchema.ts";
import {StatsSchema} from "../../model/StatsSchema.ts";
import {game_2024_09_25_real_madrid} from "./2024-09-25-real-madrid.ts";
import {game_2024_09_29_alcorcon} from "./2024-09-29-alcorcon.ts";
import {game_2024_10_06_sba} from "./2024-10-06-sba.ts";
import {game_2024_10_20_canoe} from "./2024-10-20-canoe.ts";
import {game_2024_10_27_rozas} from "./2024-10-27-rozas.ts";
import {game_2024_11_10_real_madrid} from "./2024-11-10-real-madrid.ts";
import {game_2024_11_17_alcorcon} from "./2024-11-17-alcorcon.ts";
import {game_2024_11_27_sba} from "./2024-11-27-sba.ts";
import {game_2024_12_01_canoe} from "./2024-12-01-canoe.ts";

export const stat_2024_12_16_league_gold_f1: Stats = StatsSchema.parse({
  id: "S45-stat-league-gold-phase1",
  type: "stats",
  season: "2024-25",
  date: "2024-12-16T00:00:00Z",

  title: "Liga Ahorramás - Oro - Fase 1",
  category: "U14M",

  games: [
    game_2024_09_25_real_madrid,
    game_2024_09_29_alcorcon,
    game_2024_10_06_sba,
    game_2024_10_20_canoe,
    game_2024_10_27_rozas,
    game_2024_11_10_real_madrid,
    game_2024_11_17_alcorcon,
    game_2024_11_27_sba,
    game_2024_12_01_canoe,
  ],

  description: [
    "Estadísticas de los partidos del torneo",
  ],

  references: [],
});

