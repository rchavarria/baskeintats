import type {Stats} from "../../model/StatsSchema.ts";
import {StatsSchema} from "../../model/StatsSchema.ts";
import {game_2024_04_28_alcorcon} from "./2024-04-28-alcorcon.ts";
import {game_2024_06_09_estudio} from "./2024-06-09-estudio.ts";
import {game_2024_06_02_rozas} from "./2024-06-02-rozas.ts";
import {game_2024_05_26_zentro} from "./2024-05-26-zentro.ts";

export const stat_2024_06_09_liga_gold_f3: Stats = StatsSchema.parse({
  id: "S34-stat-liga-gold-f3",
  type: "stats",
  season: "2023-24",
  date: "2024-06-09T00:00:00Z",

  title: "Liga Ahorramás - Oro - Playoffs y Fase 3 - Estadísticas",
  category: "U14M",

  games: [
    game_2024_04_28_alcorcon,
    game_2024_05_26_zentro,
    game_2024_06_02_rozas,
    game_2024_06_09_estudio,
  ],

  description: [
    "Estadísticas de los partidos jugados con los mayores de la Liga Ahorramás, Oro, Fase 3",
    "🏀 Fin de la liga",
  ],

  references: [],
});

