import type {Stats} from "../../model/StatsSchema.ts";
import {StatsSchema} from "../../model/StatsSchema.ts";
import {game_2025_09_20_alcorcon} from "./2025-09-20-alcorcon.ts";
import {game_2025_09_28_zentro} from "./2025-09-28-zentro.ts";
import {game_2025_10_04_coslada} from "./2025-10-04-coslada.ts";
import {game_2025_10_19_valcude} from "./2025-10-19-valcude.ts";
import {game_2025_10_25_san_jorge} from "./2025-10-25-san-jorge.ts";
import {game_2025_11_09_alcorcon} from "./2025-11-09-alcorcon.ts";
import {game_2025_11_15_zentro} from "./2025-11-15-zentro.ts";
import {game_2025_11_27_coslada} from "./2025-11-27-coslada.ts";
import {game_2025_11_30_valcude} from "./2025-11-30-valcude.ts";
import {game_2025_12_13_san_jorge} from "./2025-12-13-san-jorge.ts";

export const stat_2025_12_15_liga_plata_f1_g4: Stats = StatsSchema.parse({
  id: "S56-stat-liga-plata-f1-g4",
  type: "stats",
  season: "2025-26",
  date: "2025-12-15T00:00:00Z",

  title: "Liga Ahorramás - Plata - Estadísticas",
  category: "U15M",

  games: [
    game_2025_09_20_alcorcon,
    game_2025_09_28_zentro,
    game_2025_10_04_coslada,
    game_2025_10_19_valcude,
    game_2025_10_25_san_jorge,
    game_2025_11_09_alcorcon,
    game_2025_11_15_zentro,
    game_2025_11_27_coslada,
    game_2025_11_30_valcude,
    game_2025_12_13_san_jorge,
  ],

  description: [
    "Estadísticas de los 10 partidos de la Liga Ahorramás, Plata, Fase 1, Groupo 4",
  ],

  references: [],
});

