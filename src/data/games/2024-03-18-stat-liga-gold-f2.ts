import type {Stats} from "../../model/StatsSchema.ts";
import {StatsSchema} from "../../model/StatsSchema.ts";
import {game_2024_03_17_alcorcon} from "./2024-03-17-alcorcon.ts";
import {game_2024_03_10_fuenlabrada} from "./2024-03-10-fuenlabrada.ts";
import {game_2024_03_03_real_madrid} from "./2024-03-03-real-madrid.ts";
import {game_2024_02_25_estudiantes} from "./2024-02-25-estudiantes.ts";
import {game_2024_02_18_estudio} from "./2024-02-18-estudio.ts";
import {game_2024_02_11_alcorcon} from "./2024-02-11-alcorcon.ts";
import {game_2024_02_04_fuenlabrada} from "./2024-02-04-fuenlabrada.ts";
import {game_2024_01_28_real_madrid} from "./2024-01-28-real-madrid.ts";
import {game_2024_01_21_estudiantes} from "./2024-01-21-estudiantes.ts";
import {game_2024_01_14_estudio} from "./2024-01-14-estudio.ts";

export const stat_2024_03_18_liga_gold_f2: Stats = StatsSchema.parse({
  id: "S34-stat-liga-gold-f2",
  type: "stats",
  season: "2023-24",
  date: "2024-03-18T00:00:00Z",

  title: "Liga Ahorramás - Oro - Fase 2 - Estadísticas",
  category: "U14M",

  games: [
    game_2024_01_14_estudio,
    game_2024_01_21_estudiantes,
    game_2024_01_28_real_madrid,
    game_2024_02_04_fuenlabrada,
    game_2024_02_11_alcorcon,
    game_2024_02_18_estudio,
    game_2024_02_25_estudiantes,
    game_2024_03_03_real_madrid,
    game_2024_03_10_fuenlabrada,
    game_2024_03_17_alcorcon,
  ],

  description: [
    "Estadísticas de los partidos jugados con los mayores de la Liga Ahorramás, Oro, Fase 2",
  ],

  references: [],
});

