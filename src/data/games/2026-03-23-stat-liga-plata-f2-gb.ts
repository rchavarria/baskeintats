import type {Stats} from "../../model/StatsSchema.ts";
import {StatsSchema} from "../../model/StatsSchema.ts";
import {game_2026_01_10_getafe} from "./2026-01-10-getafe.ts";
import {game_2026_01_18_rozas} from "./2026-01-18-rozas.ts";
import {game_2026_01_24_real_madrid} from "./2026-01-24-real-madrid.ts";
import {game_2026_02_01_fuenlabrada} from "./2026-02-01-fuenlabrada.ts";
import {game_2026_02_08_canoe} from "./2026-02-08-canoe.ts";
import {game_2026_02_15_getafe} from "./2026-02-15-getafe.ts";
import {game_2026_02_21_rozas} from "./2026-02-21-rozas.ts";
import {game_2026_03_07_real_madrid} from "./2026-03-07-real-madrid.ts";
import {game_2026_03_15_fuenlabrada} from "./2026-03-15-fuenlabrada.ts";
import {game_2026_03_22_canoe} from "./2026-03-22-canoe.ts";

export const stat_2026_03_23_liga_plata_f2_gb: Stats = StatsSchema.parse({
  id: "S56-stat-liga-plata-f2-gb",
  type: "stats",
  season: "2025-26",
  date: "2026-03-23T00:00:00Z",

  title: "Liga Ahorramás - Plata - Estadísticas",
  category: "U15M",

  games: [
    game_2026_01_10_getafe,
    game_2026_01_18_rozas,
    game_2026_01_24_real_madrid,
    game_2026_02_01_fuenlabrada,
    game_2026_02_08_canoe,
    game_2026_02_15_getafe,
    game_2026_02_21_rozas,
    game_2026_03_07_real_madrid,
    game_2026_03_15_fuenlabrada,
    game_2026_03_22_canoe,
  ],

  description: [
    "Estadísticas de los 10 partidos de la Liga Ahorramás, Plata, Fase 2, Groupo B",
  ],

  references: [],
});

