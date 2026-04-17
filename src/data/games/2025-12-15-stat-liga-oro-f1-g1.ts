import type {Stats} from "../../model/StatsSchema.ts";
import {StatsSchema} from "../../model/StatsSchema.ts";
import {game_2025_09_20_real_madrid} from "./2025-09-20-real-madrid.ts";
import {game_2025_09_28_rozas} from "./2025-09-28-rozas.ts";
import {game_2025_10_05_patrocinio} from "./2025-10-05-patrocinio.ts";
import {game_2025_10_18_estudiantes} from "./2025-10-18-estudiantes.ts";
import {game_2025_10_26_fuenlabrada} from "./2025-10-26-fuenlabrada.ts";
import {game_2025_11_09_real_madrid} from "./2025-11-09-real-madrid.ts";
import {game_2025_11_16_rozas} from "./2025-11-16-rozas.ts";
import {game_2025_11_30_estudiantes} from "./2025-11-30-estudiantes.ts";
import {game_2025_12_13_patrocinio} from "./2025-12-13-patrocinio.ts";
import {game_2025_12_14_fuenlabrada} from "./2025-12-14-fuenlabrada.ts";

export const stat_2025_12_15_liga_oro_f1_g1: Stats = StatsSchema.parse({
  id: "S56-stat-liga-oro-f1-g1",
  type: "stats",
  season: "2025-26",
  date: "2025-12-15T00:00:00Z",

  title: "Liga Ahorramás - Oro - Estadísticas",
  category: "U16M",

  games: [
    game_2025_09_20_real_madrid,
    game_2025_09_28_rozas,
    game_2025_10_05_patrocinio,
    game_2025_10_18_estudiantes,
    game_2025_10_26_fuenlabrada,
    game_2025_11_09_real_madrid,
    game_2025_11_16_rozas,
    game_2025_11_30_estudiantes,
    game_2025_12_13_patrocinio,
    game_2025_12_14_fuenlabrada,
  ],

  description: [
    "Estadísticas de los 10 partidos de la Liga Ahorramás, Oro, Fase 1, Groupo 1",
    "😭 No pudo ser",
    "Era muy difícil mantener la plaza de Oro, y no ha podido ser",
    "Para la segunda fase, compartiremos categoría con 2011",
  ],

  references: [],
});

