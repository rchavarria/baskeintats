import type {Stats} from "../../model/StatsSchema.ts";
import {StatsSchema} from "../../model/StatsSchema.ts";
import {game_2023_12_17_fuenlabrada} from "./2023-12-17-fuenlabrada.ts";
import {game_2023_10_22_alcorcon} from "./2023-10-22-alcorcon.ts";

export const stat_2023_12_18_liga_gold_f1: Stats = StatsSchema.parse({
  id: "S34-stat-liga-gold-f1",
  type: "stats",
  season: "2023-24",
  date: "2023-12-18T00:00:00Z",

  title: "Liga Ahorramás - Oro - Fase 1 - Estadísticas",
  category: "U14M",

  games: [
    game_2023_10_22_alcorcon,
    game_2023_12_17_fuenlabrada,
  ],

  description: [
    "Estadísticas de los partidos jugados con los mayores de la Liga Ahorramás, Oro, Fase 1",
  ],

  references: [],
});

