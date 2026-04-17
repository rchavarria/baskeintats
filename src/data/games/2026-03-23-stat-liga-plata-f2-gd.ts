import type {Stats} from "../../model/StatsSchema.ts";
import {StatsSchema} from "../../model/StatsSchema.ts";
import {game_2026_01_11_alcorcon} from "./2026-01-11-alcorcon.ts";
import {game_2026_01_17_juande} from "./2026-01-17-juande.ts";
import {game_2026_01_25_tres_cantos} from "./2026-01-25-tres-cantos.ts";
import {game_2026_01_31_distrito} from "./2026-01-31-distrito.ts";
import {game_2026_02_07_getafe} from "./2026-02-07-getafe.ts";
import {game_2026_02_15_alcorcon} from "./2026-02-15-alcorcon.ts";
import {game_2026_03_04_juande} from "./2026-03-04-juande.ts";
import {game_2026_03_07_tres_cantos} from "./2026-03-07-tres-cantos.ts";
import {game_2026_03_17_distrito} from "./2026-03-17-distrito.ts";
import {game_2026_03_22_getafe} from "./2026-03-22-getafe.ts";

export const stat_2026_03_23_liga_plata_f2_gd: Stats = StatsSchema.parse({
  id: "S56-stat-liga-plata-f2-gd",
  type: "stats",
  season: "2025-26",
  date: "2026-03-23T00:00:00Z",

  title: "Liga Ahorramás - Plata - Estadísticas",
  category: "U16M",

  games: [
    game_2026_01_11_alcorcon,
    game_2026_01_17_juande,
    game_2026_01_25_tres_cantos,
    game_2026_01_31_distrito,
    game_2026_02_07_getafe,
    game_2026_02_15_alcorcon,
    game_2026_03_04_juande,
    game_2026_03_07_tres_cantos,
    game_2026_03_17_distrito,
    game_2026_03_22_getafe,
  ],

  description: [
    "Estadísticas de los 10 partidos de la Liga Ahorramás, Plata, Fase 2, Groupo D",
  ],

  references: [],
});

