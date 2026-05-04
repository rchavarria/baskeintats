import type {Stats} from "../../model/StatsSchema.ts";
import {StatsSchema} from "../../model/StatsSchema.ts";
import {game_2025_01_12_estudiantes} from "./2025-01-12-estudiantes.ts";
import {game_2025_01_19_rozas} from "./2025-01-19-rozas.ts";
import {game_2025_01_29_real_madrid} from "./2025-01-29-real-madrid.ts";
import {game_2025_02_02_uros} from "./2025-02-02-uros.ts";
import {game_2025_02_09_tres_cantos} from "./2025-02-09-tres-cantos.ts";
import {game_2025_02_16_estudiantes} from "./2025-02-16-estudiantes.ts";
import {game_2025_02_23_rozas} from "./2025-02-23-rozas.ts";
import {game_2025_03_02_real_madrid} from "./2025-03-02-real-madrid.ts";
import {game_2025_03_09_uros} from "./2025-03-09-uros.ts";
import {game_2025_03_16_tres_cantos} from "./2025-03-16-tres-cantos.ts";

export const stat_2025_03_17_league_gold_f2: Stats = StatsSchema.parse({
  id: "S45-stat-league-gold-phase2",
  type: "stats",
  season: "2024-25",
  date: "2025-03-17T00:00:00Z",

  title: "Liga Ahorramás - Oro - Fase 2",
  category: "U14M",

  games: [
    game_2025_01_12_estudiantes,
    game_2025_01_19_rozas,
    game_2025_01_29_real_madrid,
    game_2025_02_02_uros,
    game_2025_02_09_tres_cantos,
    game_2025_02_16_estudiantes,
    game_2025_02_23_rozas,
    game_2025_03_02_real_madrid,
    game_2025_03_09_uros,
    game_2025_03_16_tres_cantos,
  ],

  description: [
    "Estadísticas de los partidos de la fase",
  ],

  references: [],
});
